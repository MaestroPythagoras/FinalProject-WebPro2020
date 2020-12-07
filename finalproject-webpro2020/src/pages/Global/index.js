import React, { useEffect,useState } from "react";
import Box from "../Component/Box/box_global.js";
import "../Component/Box/tabel.global.css";
import axios from 'axios';

const Global = () => {
        const [dataglobal,setdataglobal] = useState([]);
    
        useEffect(() => {
        axios
            .get("https://covid19.mathdro.id/api")
            .then((response) => setdataglobal(response.data));
        }, []);

        return(
            <>
            {dataglobal.map((item) => {
                return(
                    <Box 
                    confirmed={item.confirmed} 
                    deaths={item.deaths}
                    recovered={item.recovered} 
                 />
                );
            })}
        </>
        );
    };
export default Global;
