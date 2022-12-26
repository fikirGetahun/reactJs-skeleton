import React, { useEffect } from "react";
import TextField from '@mui/joy/TextField';
import { useState } from "react";
import '../../css/helperComponent.css';

const TextFieldComp=( props )=>{

    const [value, setValue] = useState('');

    const handleChange =(e)=>{
        setValue(e.target.value)
        // here, the onchange prop is given from the parrent component and when the child component is clicked it will triger the 
        // the onchange event in the child then the onchange handler will pass the value, props.dbname
       
    }

    useEffect(()=>{
        props.onChange(value, props.dbName)

    },value)

    return(
        <div className="textField p-2">
            <label className="textFieldLabel d-flex justify-content-start   pb-1 ">{ props.label }</label>
            <TextField className="" type={props.type}    id="standard-basic" placeholder={props.placeholder}  value={value} onChange={(e)=>handleChange(e)} name={props.dbName} />
            
            <label>{props.error}</label>
        </div>
    )

}

export default TextFieldComp;