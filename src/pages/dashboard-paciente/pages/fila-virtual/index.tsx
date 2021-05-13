import React, {useEffect, useRef, useState} from 'react';
import ReactMapGl, {Marker} from 'react-map-gl';
import icon_paciente from '../../../../assets/images/paciente.png';
import icon_hospital from '../../../../assets/images/hospital.png';
import {Grid} from "@material-ui/core";
import '../../style.css';

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

        console.log(lat, lng);
    }, []);

    return (
        <div>

            <div className="toolbar">
                <div className="box-info">
                    <div className="box">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <p className="text-box">
                                    Numero atual do atendimento:
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                         <span className="numero" style={{background: 'black'}}>
                                    32
                                </span>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="box">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <p className="text-box">
                                    Seu numero de atendimento:
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                         <span className="numero" style={{background: 'green'}}>
                                    45
                                </span>
                            </Grid>
                        </Grid>
                    </div>
                    <div className="box">
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <p className="text-box">
                                    Você chegará em:
                                </p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <span>20 minutos</span>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>


            <ReactMapGl
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                mapStyle={"mapbox://styles/mapbox/streets-v11"}
                onViewportChange={(viewport: any) => {
                    setViewport(viewport);
                }}>

                <Marker longitude={lng} latitude={lat}>
                    <img src={icon_paciente} style={{width: 25}}/>
                </Marker>

                <Marker longitude={-60.02062898256938} latitude={-3.1260561436116867}>
                    <img src={icon_hospital} style={{width: 25}}/>
                </Marker>

            </ReactMapGl>
        </div>
    );
}

export default FilaVirtual;