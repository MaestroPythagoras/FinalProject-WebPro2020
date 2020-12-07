import React, { useEffect,useState } from "react";
import Box from "../Component/Box/box_global.js";
import "../Component/Box/tabel.global.css";
import axios from 'axios';

const Global = () => {
        const [dataglobal,setdataglobal] = useState([]);
    
        useEffect(() => {
        axios
            .get("https://api.covid19api.com/world/total")
            .then((response) => setdataglobal(response.data));
        }, []);
    
        return(
            <>
    <div>
    <h3>[ 1 ] ✎ Halaman untuk Update Data Kasus Covid-19 di • GLOBAL</h3>
    </div>
            {dataglobal.map((item) => {
                return(
                    <Box 
                    TotalConfirmed={item.TotalConfirmed} 
                    TotalRecovered={item.TotalRecovered} 
                    TotalDeaths={item.TotalDeaths}
                 />
                );
            })}
        </>
        );
    };
export default Global;
