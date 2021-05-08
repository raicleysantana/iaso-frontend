import React from 'react';
import {DataGrid, GridColDef, GridValueFormatterParams} from '@material-ui/data-grid';
import {Button} from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import './style.css';

const rows = [
    {id: 1, dataConsulta: '20-05-2021', firstName: 'Jon', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 2, dataConsulta: '20-05-2021', firstName: 'Cersei', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 3, dataConsulta: '20-05-2021', firstName: 'Jaime', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 4, dataConsulta: '20-05-2021', firstName: 'Arya', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 5, dataConsulta: '20-05-2021', firstName: 'Daenerys', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 6, dataConsulta: '20-05-2021', firstName: null, dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 7, dataConsulta: '20-05-2021', firstName: 'Ferrara', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 8, dataConsulta: '20-05-2021', firstName: 'Rossini', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
    {id: 9, dataConsulta: '20-05-2021', firstName: 'Harvey', dataNascimento: 'dd/mm/yyyy', situacao: 'Compareceu'},
];

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'dataConsulta', headerName: 'Data consulta', width: 150},
    {field: 'firstName', headerName: 'Nome do Paciente', width: 250},
    {field: 'dataNascimento', headerName: 'Data de Nascimento', width: 130},
    {field: 'situacao', headerName: 'Situação', width: 130},
    {
        field: 'teste',
        width: 170,
        headerName: 'Relatórios',
        renderCell: (params: GridValueFormatterParams) => {
            return (<Button className={"btn-visualizar"}><VisibilityIcon style={{ width : 20, marginRight : 5}}/>  Visualizar</Button>);
        }
    },
];

function Relatorios() {
    return (
        <div style={{backgroundColor: '#FFFFFF'}}>
            <div style={{height: 400, width: '100%'}}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    checkboxSelection
                />
            </div>
        </div>
    );
}

export default Relatorios;