 

import React from "react";
import { useState } from "react";

const NoDataPage =(  )=>{

    const [value, setValue] = useState('');

    const handleChange =(e)=>{
        setValue(e.target.value)
        // here, the onchange prop is given from the parrent component and when the child component is clicked it will triger the 
        // the onchange event in the child then the onchange handler will pass the value, props.dbname
        
    }


    // const selectItem = ()=>{
    //     props.selectItems.map((selected)=>{
    //         {
    //             <MenuItem value={10}>Ten</MenuItem>
    //             <MenuItem value={20}>Twenty</MenuItem>
    //             <MenuItem value={30}>Thirty</MenuItem>
    //         }
    //     })
        

    // }

    return(
        <div className="container ">

            <h3>No Data</h3>
        </div>
    )
}

export default NoDataPage