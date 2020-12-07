import React from 'react';
import "./tabel_indonesia.css";
import NumberFormat from 'react-number-format';

const box_indonesia = ({jumlahKasus, sembuh, meninggal}) => {
    return (
        <>
        <p>{jumlahKasus}</p>
        <p>{sembuh}</p>
        <p>{meninggal}</p>
        </>
    );
};

export default box_indonesia;