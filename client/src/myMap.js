import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

function myMap() {
    let myMap = L.map("mapid").setView([51.1657, 10.4515], 13);

    L.tileLayer(
        "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
        {
            attribution:
                'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken:
                "pk.eyJ1IjoiY2ljaTI5IiwiYSI6ImNrbW5mM2o4MjBwYTgydmx3MWFiOXI2MGgifQ.La3beJtNXvDes7qBmoasSQ",
        }
    ).addTo(myMap);
    return (
        <>
            <MapContainer
                center={[51.1657, 10.4515]}
                zoom={13}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.1657, 10.4515]}>
                    <Popup>you are here.</Popup>
                </Marker>
                {/* {location.loaded && !location.error && (
                    <Marker
                        position={[
                            location.coords.min_longitude,
                            location.coords.min_latitude,
                            location.coords.max_longitude,
                            location.coords.max_latitude,
                        ]}
                    ></Marker>
                )} */}
            </MapContainer>
        </>
    );
}

export default myMap;
