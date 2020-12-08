import React, { useEffect,useState } from "react";
import Box from "../Component/Box/box_indonesia.js";
import "../Component/Box/tabel_indonesia.css";
import axios from 'axios';

const Indonesia = () => {
        const [dataindonesia,setdataindonesia] = useState([]);
    
        useEffect(() => {
        axios
            .get("https://lintangwisesa.github.io/Indonesia-Covid19-Maps/data/indonesia.json")
            .then((response) => setdataindonesia(response.data.data));
        }, []);
    
        return(
            <>
    <div>
    <h3>[ 2 ] ✎ Halaman untuk Update Data Kasus Covid-19 di • INDONESIA</h3>
    </div>
            {dataindonesia.map((item) => {
                return(
                    <Box 
                    Confirmed={item.Confirmed} 
                    Recovered={item.Recovered} 
                    Deaths={item.Deaths}
                 />
                );
            })}
        </>
        );
    };
export default Indonesia;