!function(){function o(o){var n=new mapboxgl.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:o,zoom:15});const a=new mapboxgl.NavigationControl;n.addControl(a);var e=new MapboxDirections({accessToken:mapboxgl.accessToken});n.addControl(e,"top-left")}mapboxgl.accessToken="pk.eyJ1IjoiYWRoaXJhamIxMTA5IiwiYSI6ImNrcGlhY2NjbjAweHEycG5pMWx6ZzVjYzcifQ.6EOBbBKPO21fPCtUfN8msQ",navigator.geolocation.getCurrentPosition((function(n){o([n.coords.longitude,n.coords.latitude])}),(function(){o([0,0])}),{enableHighAccuracy:!0})}();
//# sourceMappingURL=index.21a869f0.js.map