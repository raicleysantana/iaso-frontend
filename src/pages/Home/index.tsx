import React, {useEffect} from 'react';
import {AppBar, Toolbar} from '@material-ui/core';
import {Link} from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/logo.png';

function Home() {

    return (<div id={"home"}>

            <nav>
                <a href="#" className={"logo-containter"}><img className={"logo"} src={logo}/></a> <span
                className={"titulo-logo"}>Sistema de Atendimento</span>
                <div className={"menuitem"}>
                    <div style={{float: 'right'}}>
                        <Link to="/login">
                            <button className={"btn"}>Entrar</button>
                        </Link>
                        <Link to="/cadastro-usuario">
                            <button className={"btn"}>
                                Registre-se
                            </button>
                        </Link>
                    </div>
                </div>
            </nav>

            <main className={"conteudo"}>

                <div className={"box"}>
                    <p className={"titulo"}>
                        Sistema de Triagem de pacientes.
                    </p>
                    <br/>
                    <p style={{color: 'var(--color-text-gray)'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book.
                    </p>
                </div>

                <div className={"box"}>
                    <svg style={{width: 150, height: 'auto'}} id="Layer_1" enable-background="new 0 0 511.634 511.634"
                         viewBox="0 0 511.634 511.634" width="512" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <g clip-rule="evenodd" fill-rule="evenodd">
                                <path
                                    d="m85.817 99.788v-40h-1.8-38.2c-11 0-20 8.999-20 20v362c0 11.001 9.002 20 20 20h259.991c-8.734-11.628-14.992-25.222-17.99-40h-222v-322z"
                                    fill="#5cd0b3"/>
                                <path
                                    d="m345.817 99.788v210.322c12.249-5.352 25.778-8.321 40-8.321v-222.002c0-10.998-9-20-20-20l-40 .001v39.999h20z"
                                    fill="#5cd0b3"/>
                                <path d="m65.817 99.788h280v322h-280z" fill="#e3eaef"/>
                                <path
                                    d="m345.817 310.11c-35.318 15.431-60 50.673-60 91.679 0 6.849.689 13.537 2 19.999 3 14.778 9.258 28.372 17.992 40 18.244 24.29 47.291 40.001 80.008 40.001 55.228 0 100-44.772 100-100s-44.772-100-100-100c-14.222 0-27.751 2.969-40 8.321zm-8.516 106.944c-7.809-7.809-7.809-20.472 0-28.281 7.81-7.81 20.472-7.81 28.281 0l8.026 8.026 32.443-32.443c7.809-7.81 20.472-7.81 28.281 0 7.809 7.809 7.809 20.472 0 28.281l-46.583 46.583c-7.809 7.809-20.472 7.809-28.281 0z"
                                    fill="#fff"/>
                                <path
                                    d="m365.582 388.773c-7.81-7.81-20.472-7.81-28.281 0-7.809 7.809-7.809 20.472 0 28.281l22.167 22.167c7.809 7.809 20.472 7.809 28.281 0l46.583-46.583c7.809-7.809 7.809-20.472 0-28.281-7.81-7.81-20.472-7.81-28.281 0l-32.443 32.443z"
                                    fill="#cbe558"/>
                                <circle cx="205.817" cy="244.783" fill="#cbe558" r="50"/>
                                <path
                                    d="m95.817 109.788h220c5.5 0 10-4.5 10-10v-40c0-5.5-4.5-10-10-10h-69.999c0-22.092-17.909-40.001-40.001-40.001s-40.001 17.909-40.001 40.001h-69.999c-5.5 0-10 4.5-10 10v39.999c0 5.501 4.5 10.001 10 10.001z"
                                    fill="#6d91ac"/>
                            </g>
                            <g>
                                <path
                                    d="m205.821 59.788c13.268-.528 13.258-19.477 0-20h-.007c-13.268.53-13.251 19.479.007 20z"/>
                                <path
                                    d="m163.396 174.077-.005-.005c-7.81-7.81-20.471-7.808-28.282.002-14.357 14.637-.302 38.583 19.323 33.466l2.496 2.496c-5.152 7.228-8.743 15.643-10.277 24.746h-8.504c-3.458-5.978-9.921-10-17.324-10h-.007c-11.045 0-19.996 8.954-19.996 20 .203 20.545 27.12 27.461 37.328 10h8.504c1.534 9.104 5.125 17.518 10.277 24.747l-2.496 2.496c-6.998-1.87-14.77.139-19.978 5.868l-.005.005c-7.43 8.173-6.825 20.819 1.348 28.25 8.151 7.414 20.807 6.842 28.255-1.348 4.75-5.225 6.217-12.28 4.522-18.631l2.497-2.497c7.228 5.152 15.643 8.743 24.746 10.277v8.503c-5.978 3.458-10 9.921-10 17.324v.007c0 11.045 8.954 19.996 20 19.996 20.545-.203 27.461-27.12 10-37.328v-8.503c9.104-1.534 17.519-5.125 24.747-10.277l2.497 2.497c-1.696 6.351-.229 13.406 4.522 18.631l.005.005c7.448 8.191 20.1 8.756 28.25 1.342 8.173-7.43 8.772-20.082 1.343-28.255-5.209-5.729-12.981-7.738-19.979-5.868l-2.495-2.495c5.152-7.229 8.744-15.643 10.277-24.747h8.503c3.458 5.978 9.921 10 17.324 10h.008c11.046 0 19.996-8.954 19.996-20-.203-20.545-27.12-27.461-37.328-10h-8.503c-1.534-9.104-5.125-17.518-10.277-24.747l2.496-2.496c6.818 1.794 14.096.015 19.322-5.179l.005-.005c7.81-7.811 7.808-20.471-.003-28.282-7.81-7.811-20.477-7.807-28.287.002-5.235 5.235-6.961 12.649-5.179 19.321l-2.496 2.496c-7.229-5.153-15.643-8.744-24.747-10.277v-8.503c5.978-3.458 10-9.921 10-17.324v-.007c0-11.045-8.954-19.996-20-19.996-20.545.203-27.461 27.12-10 37.328v8.503c-9.104 1.534-17.518 5.125-24.747 10.277l-2.496-2.496c1.78-6.671.054-14.085-5.18-19.319zm42.422 30.706c22.056 0 40 17.944 40 40-2.197 53.066-77.811 53.05-80 0 0-22.056 17.944-40 40-40z"/>
                                <path
                                    d="m441.403 357.285c-11.164-11.638-31.258-11.637-42.424 0l-25.371 25.372-.955-.956c-11.697-11.695-30.729-11.695-42.424 0-11.695 11.696-11.695 30.727 0 42.423l22.167 22.167c11.697 11.695 30.727 11.695 42.424 0l46.583-46.583c11.638-11.164 11.638-31.257 0-42.423zm-14.142 28.281-46.583 46.583c-3.897 3.897-10.241 3.898-14.139 0l-22.167-22.167c-3.897-3.898-3.897-10.241 0-14.139 3.898-3.898 10.241-3.898 14.139 0l8.026 8.026c3.725 3.873 10.418 3.873 14.143 0l32.442-32.442c3.72-3.878 10.419-3.878 14.139 0 3.879 3.722 3.879 10.418 0 14.139z"/>
                                <path
                                    d="m395.816 292.24v-212.453c0-16.542-13.458-30-30-30h-32.684c-3.463-5.973-9.928-10-17.315-10h-61.003c-11.778-53.07-86.238-53.032-97.994 0h-61.003c-7.387 0-13.852 4.026-17.315 10h-32.685c-16.542 0-30 13.458-30 30v362c0 16.542 13.458 30 30 30h255.206c64.93 78.676 194.336 33.259 194.793-70 0-57.282-44.014-104.479-100-109.547zm-20-212.453v212.453c-6.866.622-13.552 1.877-19.999 3.707v-196.16c0-5.523-4.478-10-10-10h-10v-20h29.999c5.514.001 10 4.487 10 10zm-214.995 20.001h-65.004v-40h69.999c5.523 0 10-4.477 10-10 1.649-39.804 58.363-39.786 60.003 0 0 5.523 4.477 10 10 10h69.999v40h-64.996c-13.268.528-13.258 19.477 0 20h64.996c7.388 0 13.853-4.027 17.316-10h2.684v194.035c-26.915 13.793-47.438 38.355-55.842 67.963h-159.16c-13.268.528-13.258 19.477 0 20h155.451c-.6 6.571-.601 13.43 0 20.001h-200.449v-302h2.683c3.463 5.974 9.928 10 17.316 10h65.004c13.268-.527 13.258-19.476 0-19.999zm-115.004 351.999c-5.514 0-10-4.486-10-10v-362c0-5.514 4.486-10 10-10h30v20h-9.999c-5.523 0-10 4.477-10 10v322c0 5.523 4.477 10 10 10h214.156c1.979 6.971 4.629 13.663 7.876 20zm339.999 40.002c-49.626 0-90-40.374-90-90 4.944-119.397 175.074-119.362 180 .001 0 49.625-40.374 89.999-90 89.999z"/>
                                <path
                                    d="m205.825 99.788h-.007c-5.523 0-9.996 4.477-9.996 10 .528 13.263 19.479 13.263 20.003 0 0-5.523-4.477-10-10-10z"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </main>

            <footer>
                <p>
                    Desenvolvido pelos alunos de Ci??ncia da computa????o da UNINORTE 2021/1.
                </p>
            </footer>
        </div>
    );
}

export default Home;
