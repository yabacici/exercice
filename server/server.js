const express = require("express");
const axios = require("axios");
const app = express();
const compression = require("compression");
const path = require("path");

app.use(compression());

app.use(express.static(path.join(__dirname, "..", "client", "public")));
app.use(express.json());

app.post("/location", async (req, res) => {
    const city = req.body.city;
    console.log(city);
    try {
        const url = await axios(
            "https://nominatim.openstreetmap.org/search?city=<city>"
        );
        axios.post(url).then((response) => {
            console.log(response);
        });
        //     // const osm = await url.osm;
        //     // const [item] = url.min_lon;
        //     // url.min_lat, url.max_lon, url.max_lat;
        //     // console.log("I am fetching:", url);
        //     // console.log("I am the osm:", osm);
    } catch (err) {
        console.log("err in Post/location", err);
        res.osm({ success: false });
    }
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(process.env.PORT || 3001, function () {
    console.log("I'm listening.");
});
