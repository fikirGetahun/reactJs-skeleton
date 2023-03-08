import React, { useEffect, useState } from "react";
 
import TextField from '@mui/joy/TextField';
import { Box } from "@mui/joy";

import '../css/allCss.css';
import { Outlet, useNavigate, Link } from "react-router-dom";

import search2 from '../file/img/search.png'
import GetHandler from "../service/apiHandler/getHandler";
import FoodLister from "../components/foodLister";
 
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
        <div   className="container p-0  mainBG "     >
            <div className='v-stackz'>
       
                 <div    className="headerBackground"  >
        <img     className="headerBackground" src={require('../file/img/akko bg.png')} alt={"test"} />
                 </div>

            <div className="innerBackground"  >
            <div      className=" scrollHolder   "    >
            <h2 className="d-flex justify-content-start  "  style={{  marginLeft:"5%",
}} >Akko Menu</h2>

            <div className="vstack scrollHolder " style={{backgroundColor:'white'}} >
               
                <div className="row" style={{ marginLeft:"4.6%", maxWidth:'35%'
}}>
                     
                    <div onClick={backToHome} className="col mainMenu text-nowrap d-flex align-items-center d-flex justify-content-center menu"    >
                        Main Menu
                    </div >
               
                    
                    <div className="col"></div>

                </div>
                <div className="hstack  P-0" style={{width:"100%", marginBottom:15, marginLeft:0}}>
            <TextField  

                onChange ={(e)=>setSearchData(e.target.value)}
              placeholder="Type in here…"
                size="sm"

                color="primary"
               
                endDecorator={
                    <Box>
                    <img  src={require('../file/img/search.png')} style={{aspectRatio:1, height:"3vh"}} />
                    
                    </Box>
                }
              style={{
                borderRadius: 10,
              width:"80%",
              marginLeft:"5%",
              marginRight:"2%",
              background:"#F3F7FA",
              boarder:0,
                
              }}
               />
              
               <img  onClick={handleSearch}  className="m-0 p-1 border" src={require('../file/img/search copy.png')} style={{ borderRadius:5, borderColor:"black", height:"5vh"}} />

              {/* <Link to={"search/"+searchData}>
              <img     className="m-0 p-1 border" src={require('../file/img/search copy.png')} style={{ borderRadius:5, borderColor:"black", height:"5vh"}} />

              </Link> */}
          
            
            </div>
            </div>


            <div className="categoryHome"   >
              
              {/* <CategoryLister/> */}
                 {/* <FoodLister /> */}
                
                     
                    <Outlet />
                 
            
            </div>
            </div>

            </div> 
            </div>
        </div>
     
        
    );
     
   
}