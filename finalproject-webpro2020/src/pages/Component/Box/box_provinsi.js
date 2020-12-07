import React from 'react';
import "./tabel_provinsi.css";
import NumberFormat from 'react-number-format';

const box_provinsi = ({provinsi, kasusPosi, kasusSemb, kasusMeni}) => {
    return (
        <>
    <table>
    <tr>
        <td>{provinsi}</td>
        <td><NumberFormat value={kasusPosi} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={kasusSemb} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={kasusMeni} displayType={'text'} thousandSeparator={true}/></td>
    </tr>
    </table>
        </>
    );
};

export default box_provinsi;