import React from "react";
 
import TextField from '@mui/joy/TextField';
import { Box } from "@mui/joy";
import { color } from "@mui/system";
import CategoryLister from "../components/categoryLister";
import FoodLister from "../components/foodLister";
import '../css/allCss.css';
import TextFieldComp from "../components/helpComponents/textField";
import { Outlet } from "react-router-dom";
 
export default function HomePage() {
 
    // const test=(name, db)=>{
    //     alert( name +""+db )
    // } 


    return(
        <div   className="container p-0  mainBG" >
            <div className='v-stack'>
       
                 <div    className="headerBackground" >
        <img     className="headerBackground" src={require('../file/img/akko bg.png')} alt={"test"} />
                 </div>
           
            <div     className="innerBackground">
            <h2 className="d-flex justify-content-start" style={{  marginLeft:"5%",
}} >Akko Menu</h2>

            <div className="vstack ">
               
                <div className="row" style={{ marginLeft:"4.6%",
}}>
                     
                    <div className="col text-nowrap d-flex align-items-center d-flex justify-content-center menu"   >
                        Main Menu
                    </div >
                    <div className="col text-nowrap d-flex align-items-center d-flex justify-content-center menu"  >
                        Main Menu
                    </div >
                    
                    <div  className="col text-nowrap d-flex align-items-center d-flex justify-content-center menu"  >
                    Bar
                    </div>
                    <div className="col"></div>

                </div>
                <div style={{width:"100%", marginBottom:15}}>
            <TextField  
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
              width:"90%",
              marginLeft:"5%",
              marginRight:"5%",
              background:"#F3F7FA",
              boarder:0,
                
              }}
               />

            
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