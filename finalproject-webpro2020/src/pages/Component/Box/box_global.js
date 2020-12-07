import React from 'react';
import "./tabel.global.css";
import NumberFormat from 'react-number-format';

const box_global = ({TotalConfirmed, TotalRecovered, TotalDeaths}) => {
    return (
        <>
    <table>
    <tr>
        <td><NumberFormat value={TotalConfirmed} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={TotalRecovered} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={TotalDeaths} displayType={'text'} thousandSeparator={true}/></td>
    </tr>
    </table>
        </>
    );
};

export default box_global;