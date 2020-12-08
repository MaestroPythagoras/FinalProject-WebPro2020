import React from 'react';
import "./tabel_indonesia.css";
// import NumberFormat from 'react-number-format';

const box_indonesia = ({Confirmed, Recovered, Deaths}) => {
    return (
        <>
        <p>{Confirmed}</p>
        <p>{Recovered}</p>
        <p>{Deaths}</p>
        </>
    );
};

export default box_indonesia;