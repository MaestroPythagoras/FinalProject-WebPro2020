import React, { useEffect,useState } from "react";
import Box from "../Component/Box/box_provinsi.js";
import "../Component/Box/tabel_provinsi.css";
import axios from 'axios';

const Provinsi = () => {
        const [dataprovinsi,setdataprovinsi] = useState([]);
    
        useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
            .then((response) => setdataprovinsi(response.data.data));
        }, []);
    
        return(
            <>
            <div>
    <h3>[ 3 ] ✎ Halaman untuk Update Data Kasus Covid-19 di • PROVINSI ✔️</h3>
        <table>
    <tr bgcolor ="yellow">
        <th>Provinsi</th>
        <th>Positif</th>
        <th>Sembuh</th>
        <th>Meninggal</th>
    </tr>
    </table>
        </div>
            {dataprovinsi.map((item) => {
                return(
                    <Box 
                    provinsi={item.provinsi} 
                    kasusPosi={item.kasusPosi} 
                    kasusSemb={item.kasusSemb} 
                    kasusMeni={item.kasusMeni}
                 />
                );
            })}
        </>
        );
    };
export default Provinsi;
