import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  '../../css/allCss.css';
import DeleteHandler from "../../service/apiHandler/deleteHandler";
// import   from '../../service/apiHandler/getHandler.ts';
import GetHandler from "../../service/apiHandler/getHandler";
import AddCategory from "./addCategory";
const ListCategory = ()=>{

    const [categoryData, setCatagoryData] = useState([])
    const [isLoadidng, setIsLoading]=useState()

    const dataFetcher = async ()=>{
        var test;
        let data = new GetHandler()
        setIsLoading(true)

        let response = await data.getCategory()
         .then(res=>{
            setIsLoading(false)

            if(res.status == 200){
 
                test = res.data
                setCatagoryData(test)
            }else{
                alert('error:404 Page not found')
            }
        })
    }


    const deleteHandler = async (id, arrayId)=>{
        let data = new DeleteHandler()
        setIsLoading(true)

         if (window.confirm("Are you sure you want to delete this?") == true) {
            let handler = await data.deleteCategory(id).then(res=>{
                setIsLoading(false)

                if(res.status == 200){
                    let arr = []
                    setCatagoryData([
                        ...categoryData.slice(0, arrayId),
                        ...categoryData.slice(arrayId + 1)
                      ]);
 
                    // console.log('zzzddddd----',arrayId, 'iddd', foodData.splice(arrayId, 1))
                 
                    //  productPrice.splice(arrayId, 1)
                    window.alert("Deleted!")
                }else{
                    alert("error")
                }
            })   
        } else {
            setIsLoading(false)
        //  alert('error not deleted!')
        }

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
                             isLoadidng ?  
                             <div>
                             <img    className="m-0 p-1  " src={require('../../file/img/loading.gif')}  />
                        </div>

                            : <div></div>
                        }
             {
                
                categoryData.map((selected,i)=>{
                    return(
                    <div className="vstack gap-1 col-5 border m-2 p-2" key={selected._id} >
                        <h4 className="d-flex justify-content-start"><span className="d-flex justify-content-start text text-primary" >Title:</span> {selected.name}</h4>
                        <h4 className="d-flex justify-content-start"><span className="d-flex justify-content-start text text-primary">Order:</span><span>{selected.order}</span></h4>
                        <div className="d-flex justify-content-center category" style={{backgroundImage:`url('${selected.image}')`}}>
        
                        </div>
                        <Link to={"/admin/editCategory/"+selected._id}>
                        <button className="btn btn-warning container">Edit</button>
                        </Link>
                        <button onClick={()=>deleteHandler(selected._id,i )} className="btn btn-danger container">Delete</button>
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