import React from 'react';
import "./Box.css";
import NumberFormat from 'react-number-format';

const Box = ({provinsi, kasusPosi, kasusSemb, kasusMeni}) => {
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

export default Box;