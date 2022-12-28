import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  '../../css/allCss.css';
// import   from '../../service/apiHandler/getHandler.ts';
import GetHandler from "../../service/apiHandler/getHandler";
const ListCategory = ()=>{

    const [categoryData, setCatagoryData] = useState([])

    const dataFetcher = async ()=>{
        var test;
        let data = new GetHandler()
        let response = await data.getCategory()
         .then(res=>{
            if(res.statusText == 'OK'){
 
                test = res.data
                setCatagoryData(test)
            }else{
                alert('error:404 Page not found')
            }
        })
    }

    useEffect(()=>{
        dataFetcher()
    },[])

    const nav = useNavigate()

    return(
        <div>
            {/* <div className="vstack gap-2" >
                <h4>Title</h4>
                <h4>Order: <span>3</span></h4>
                <div className="d-flex justify-content-center" style={{backgroundImage:''}}>

                </div>
                <button className="btn btn-warning">Edit</button>
            </div> */}
            <h3>Select Category to Edit</h3>
            <hr></hr>
            <div className="row m-5">
             {
                
                categoryData.map(selected=>{
                    return(
                    <div className="vstack gap-1 col-5 border m-2 p-2" key={selected._id} >
                        <h4 className="d-flex justify-content-start"><span className="d-flex justify-content-start text text-primary" >Title:</span> {selected.name}</h4>
                        <h4 className="d-flex justify-content-start"><span className="d-flex justify-content-start text text-primary">Order:</span><span>{selected.order}</span></h4>
                        <div className="d-flex justify-content-center category" style={{backgroundImage:`url('${selected.image}')`}}>
        
                        </div>
                        <Link to={"/admin/editCategory/"+selected._id}>
                        <button className="btn btn-warning container">Edit</button>
                        </Link>
                        <br></br>
                      
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListCategory;