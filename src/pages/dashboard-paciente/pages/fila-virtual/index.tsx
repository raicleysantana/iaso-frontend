import React, {useEffect, useRef, useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';
import icon_pin from '../../../../assets/images/map-pin.png';

function FilaVirtual() {
    const [lat, setLat] = useState(0);
    const [lng, setLng] = useState(0);
    const [viewport, setViewport] = useState({
        latitude: -3.1316333,
        longitude: -59.9825041,
        zoom: 11,
        width: '100%',
        height: '90vh'
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((localizacao) => {
                const {latitude, longitude} = localizacao.coords;
                // @ts-ignore
                setLat(latitude);
                // @ts-ignore
                setLng(longitude);
            },
            (error) => {
                alert(error);
            }
        );
    }, []);

    return (
        <div>
            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={"mapbox://styles/mapbox/streets-v11"}
                onViewportChange={(viewport: any) => {
                    setViewport(viewport);
                }}
            >
                {/*<Marker key={1} longitude={-59.942242702627134} latitude={-3.082773561139242}>
                    <p>Minha casa</p>
                </Marker>*/}
                {/*-3.0830804 / -59.9423633 */}
                <Marker longitude={lng} latitude={lat}>
                    <img src={icon_pin} style={{width: 25}}/>
                </Marker>

            </ReactMapGl>
        </div>
    );
}

export default FilaVirtual;