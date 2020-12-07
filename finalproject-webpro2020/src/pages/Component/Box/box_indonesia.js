import React from 'react';
import "./tabel_indonesia.css";
import NumberFormat from 'react-number-format';

const box_indonesia = ({jumlahKasus, meninggal, sembuh}) => {
    return (
        <>
    <table>
    <tr>
        <td><NumberFormat value={jumlahKasus} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={meninggal} displayType={'text'} thousandSeparator={true}/></td>
        <td><NumberFormat value={sembuh} displayType={'text'} thousandSeparator={true}/></td>
    </tr>
    </table>
        </>
    );
};

export default box_indonesia;