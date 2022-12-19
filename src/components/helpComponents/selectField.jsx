import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import React from "react";
import { useState } from "react";

const SelectFieldComp =( props)=>{

    const [value, setValue] = useState('');

    const handleChange =(e)=>{
        setValue(e.target.value)
        // here, the onchange prop is given from the parrent component and when the child component is clicked it will triger the 
        // the onchange event in the child then the onchange handler will pass the value, props.dbname
        props.onChange(value, props.dbName)
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
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">{ props.label }</label>
   

          
            <select     labelId="demo-multiple-chip-label"     input={<OutlinedInput id="select-multiple-chip" label="Chip" />} className="form-control" type={props.type}      placeholder={props.placeholder} size={props.size} onChange={handleChange} name={props.dbName} >
             {
            props.selectItems.map((selected)=>
            {
            
           return(
            <option >{selected}</option>
           )
               
               

            }
            )
            }
                
                </select>
            
            <label>{props.error}</label>
            
        </div>
    )
}

export default SelectFieldComp