import React from 'react';
import "./tabel.global.css";
import NumberFormat from 'react-number-format';

const box_global = ({confirmed, deaths, recovered}) => {
    return (
        <>
    <table>
    <tr>
        <td><NumberFormat value={confirmed} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={deaths} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={recovered} displayType={'text'} thousandSeparator={true}/></td>
    </tr>
    </table>
        </>
    );
};

export default box_global;