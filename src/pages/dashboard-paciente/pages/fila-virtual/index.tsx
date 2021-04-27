import React, {useEffect} from 'react';
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function FilaVirtual() {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDu0ROCcPCliXIkgRCeoGfMPf_bUDL8s-g"
    });

    const [map, setMap] = React.useState(null);

    /*const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, []);*/

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);


    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            //onLoad={onLoad}
            //onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
        </GoogleMap>
    )
}

export default FilaVirtual;