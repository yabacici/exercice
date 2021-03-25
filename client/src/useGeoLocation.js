import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function useGeoLocation() {
    const [countries, setCountries] = useState([]);
    // const [data, setData] = useState("");
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: {
            min_lon: "",
            min_lat: "",
            max_lon: "",
            max_lat: "",
        },
    });
    const [error, setError] = useState(false);

    // fetch data
    useEffect(() => {
        axios
            // .get("https://www.openstreetmap.org/api/0.6/map")
            .get("https://freegeoip.app/json/")
            .then((res) => {
                console.log("the data is:", res);
                setCountries(res.data);
            });
    }, []);
    const handleClick = () => {
        axios
            .post("https://freegeoip.app/json/", countries) //dataToSendToServer
            .then((res) => {
                console.log("resp from server: ", res);
                if (res) {
                    console.log("the list :", countries);
                } else {
                    console.log("error");
                    setError({
                        error: true,
                    });
                }
            });
    };
    // const getLocation = () => {
    //     axios
    //         // .get("https://www.openstreetmap.org/api/0.6/map")
    //         // .get("https://official-joke-api.appspot.com/random_joke")
    //         .then((response) => {
    //             console.log(response);
    //             // setData(response.data.setup + "..." + response.data.punchline);
    //             setLocation(response.data.min_lon);
    //         });
    // };
    function handleChange(e) {
        setCountries(e.target.value);
    }

    //GEOLOCATION
    const onSuccess = (location) => {
        setLocation({
            loaded: true,
            coordinates: {
                min_lon: location.coords.min_longitude,
                min_lat: location.coords.min_latitude,
                max_lon: location.coords.max_longitude,
                max_lat: location.coords.max_latitude,
            },
        });
    };

    const onError = (error) => {
        setLocation({
            loaded: true,
            error,
        });
    };

    useEffect(() => {
        if (!("geolocation" in navigator)) {
            // onError({
            //     code: 0,
            //     message: "Geolocation not supported",
            // });
            setLocation((state) => ({
                ...state,
                loaded: true,
                error: {
                    code: 0,
                    message: "Geolocation not supported",
                },
            }));
        }
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);

    // render() {
    return (
        <div className="location-box">
            {/* {countries.map((country) => (
                <div key={country.id}>{country.name}</div>
            ))} */}

            <div className="input-box">
                <h2>Enter the name of a city</h2>
                <input
                    // onChange={handleChange}
                    onChange={(e) => handleChange(e)}
                    type="text"
                    placeholder="country"
                    name="country"
                ></input>
            </div>
            <div className="button-box">
                {/* <button onClick={getLocation}>Submit</button> */}
                <button onClick={handleClick}>Submit</button>
                {/* {data} */}
                {/* {city} */}
            </div>
        </div>
    );
}
// }

export default useGeoLocation;
