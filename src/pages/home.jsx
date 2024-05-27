import React, { useEffect, useState } from "react";
 
import TextField from '@mui/joy/TextField';
import { Box } from "@mui/joy";

import '../css/allCss.css';
import { Outlet, useNavigate, Link } from "react-router-dom";

import search2 from '../file/img/search.png'
import GetHandler from "../service/apiHandler/getHandler";
import FoodLister from "../components/foodLister";
import { Axios } from "axios";
 
export default function HomePage() {
 
    // const test=(name, db)=>{
    //     alert( name +""+db )
    // } 
    const navigate = useNavigate()

    const [searchData, setSearchData] = useState('')
    const [searchActive, setSearchActive] = useState(false)

    const handleSearch = () =>{
       
        if(searchData != ''){
            navigate("/search/"+searchData)
        }
        // console.log(searchData,'this is seartchdata')
        // setSearchActive(!searchActive)

    }
    useEffect(()=>{
        //const ourRequest = Axios.CancelToken.source()
        // const ourRequest = new AbortController()
        // ourRequest.abort()
        handleSearch()
    },[searchData])

    const backToHome = ()=>{
        
        navigate("/")
    }


    const onscroll2 = ()=>{
        // style={{position:'sticky', top:'20vh'}}
      
        document.getElementById('scrollHolder').style.top = '0px'
    }

    return(
        <div className="container p-0 mainBG">
        <div className="v-stack">
            <div className="headerBackground">
                <img
                    className="headerBackground"
                    src={require('../file/img/akko bg.png')}
                    alt="test"
                />
            </div>
            <div className="innerBackground scrollHolder">
                <div className="scrollHolder">
                    <h2
                        className="d-flex justify-content-start"
                        style={{ marginLeft: "5%" }}
                    >
                        Akkoo Menu
                    </h2>
                    <div className="vstack scrollHolder" style={{ backgroundColor: 'white' }}>
                        <div className="row" style={{ marginLeft: "4.6%", maxWidth: '35%' }}>
                            <div
                                onClick={backToHome}
                                className="col mainMenu text-nowrap d-flex align-items-center justify-content-center menu"
                            >
                                Main Menu
                            </div>
                            <div className="col"></div>
                        </div>
                        <div className="hstack p-0" style={{ width: "100%", marginBottom: 15, marginLeft: 0 }}>
                            <TextField
                                onChange={(e) => setSearchData(e.target.value)}
                                placeholder="Type in here…"
                                size="sm"
                                color="primary"
                                endDecorator={
                                    <Box>
                                        <img
                                            src={require('../file/img/search.png')}
                                            style={{ aspectRatio: 1, height: "3vh" }}
                                        />
                                    </Box>
                                }
                                style={{
                                    borderRadius: 10,
                                    width: "100%",
                                    marginLeft: "5%",
                                    marginRight: "5%",
                                    background: "#F3F7FA",
                                    border: 0,
                                }}
                            />
                           
                        </div>
                    </div>
                    <div className="categoryHome">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
     
        
    );
     
   
}