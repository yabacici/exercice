import React from "react";
import axios from "axios";
// import MyMap from "./myMap.js";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            city: "",
            latitude: "",
            longitude: "",
            // lat:51.1657,
            // long:10.4515,
            // min_lon: -0.489,
            // min_lat: 51.28,
            // max_lon: 0.236,
            // max_lat: 51.686,
            // coordinates: {
            //     min_lon: "",
            //     min_lat: "",
            //     max_lon: "",
            //     max_lat: "",
            // },
        };
        this.getLocation = this.getLocation.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this);
    }
    componentDidMount() {
        axios
            .get("https://nominatim.openstreetmap.org/search?city=<city>")
            .then((response) => {
                console.log("location response:", response.data);
                // this.setState({ coordinates: response.data });
                // this.setState({ cities: response.data });
            });
    }

    handleClick() {
        axios
            .post("/location", this.state) //dataToSendToServer
            .then((resp) => {
                // console.log("this is the resp I got:", resp.data);
                if (resp.data) {
                    console.log("I am the res.data:", resp.data);
                } else {
                    console.log("error");
                    this.setState({
                        error: true,
                    });
                }
            });
    }

    handleChange(e) {
        console.log("e target name: ", e.target.name);
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            () => console.log("this.state after setState: ", this.state)
        );
    }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoordinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoordinates(position) {
        console.log("these are the positions:", position);
        this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        });
    }

    render() {
        return (
            <div className="location-box">
                {/* {this.cities.map((city) => (
                    <div key={city.id}>{city.title}</div>
                ))} */}
                <div className="input-box">
                    <h2>Enter the name of a city</h2>
                    <input
                        className="input-field"
                        onChange={(e) => this.handleChange(e)}
                        name="city"
                        type="text"
                        placeholder="city"
                    />
                    <button
                        type="submit"
                        className="submit-btn"
                        // onClick={() => this.handleClick()}
                        onClick={() => this.getLocation()}
                    >
                        Submit
                    </button>
                    <p>Latitude: {this.state.latitude}</p>
                    <p>Longitude: {this.state.longitude}</p>
                    {/* {this.state.latitude && this.state.longitude ? (
                        <MyMap />
                    ) : null} */}
                </div>
            </div>
        );
    }
}
