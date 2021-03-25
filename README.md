## Overview

The task is to make a request to the open street map API using some location with React.

## Task

This is an app create a web app containing a single page to get "GeoJSON features" of a location given with the coordinates.

### What can a user do?

-   choose a location

## Built with

-   CSS
-   React
-   Leaflet
-   OSM
-   Webpack

## My Data flow

1. User is asked to enter a location

2. User enters "Berlin"

3. That makes a request to the server, and the server then makes a request to the API

4. The API sends back OSM, that we then convert into GeoJSON using osmtogeojson

5. The server then sends the GeoJSON back to the component

6. The component stores the data in its state

7. The component renders data

### Issues encountered

-   I had difficulties understanding how to use the api

-   I can use any other api: they server-client can talk to each other. it does not happen when I use the api given in the task

-   not sure how to use the parameter bbox

-   the api was blocked by CORS policy

### What to know ?

I used the boiler plate from one of my previous project during my 3-month bootcamp at SPICED Academy.

### What would I have done differently ?

This project is really interesting and I have acquired lots of knowledge in a short amount of time. Since I was not familiar with OSM. I would have spent more time reading the documentation. I would also

## Getting Started

```Console
npm install
```
