import React, { useEffect, useState } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import  '../../css/allCss.css';
import DeleteHandler from "../../service/apiHandler/deleteHandler";
// import   from '../../service/apiHandler/getHandler.ts';
import GetHandler from "../../service/apiHandler/getHandler";
 const ListProducts = ()=>{

    const [foodData, setFoodData] = useState([])

    const dataFetcher = async (cid)=>{
        var test;
        let data = new GetHandler()
        let response = await data.getProductOnCategory(cid)
         .then(res=>{
            if(res.status == 200){
 
                test = res.data
                setFoodData(test)
            }else{
                // alert('error:404 Page not found')
            }
        })
    }


    const deleteHandler = async (id, arrayId)=>{
        let data = new DeleteHandler()
         if (window.confirm("Are you sure you want to delete this?") == true) {
            let handler = await data.deleteProduct(id).then(res=>{
                if(res.status == 200){
                    let arr = []
                    setFoodData([
                        ...foodData.slice(0, arrayId),
                        ...foodData.slice(arrayId + 1)
                      ]);

                      setProductsPrice([
                        ...productPrice.slice(0, arrayId),
                        ...productPrice.slice(arrayId + 1)
                      ]);
                    // console.log('zzzddddd----',arrayId, 'iddd', foodData.splice(arrayId, 1))
                 
                    //  productPrice.splice(arrayId, 1)
                    window.alert("Deleted!") 
                }else{
                    alert("error")
                }
            })   
        } else {
         alert('error not deleted!')
        }

    }


    const [categorySelected, setCategorySelected] =useState({id:'', name:''})
    const [category, setCategory] = useState([])
    const categoryLister = async ()=>{
        let data = new GetHandler()
        var test;
        let response =  await data.getCategory()
            .then(res=>{
                if(res.status == 200){
                    test = res.data
                    setCategory(test)
                }else{
                    alert('category is not there')
                }
            })
    }

    // to get the selected value from select tag html
    const categoryName = (e)=>{
        let i = e.target.selectedIndex
        let updated = {id:e.target.value, name: e.nativeEvent.target[i].text}
        setCategorySelected(old=>({...old, ...updated}))
    }

    const [productPrice, setProductsPrice] = useState([])
    const priceGetter = async ()=>{
        let data = new GetHandler()
        foodData.forEach(async (food)=>{
            let x = await data.getProductPrice(food._id)
                .then(res=>{
                    if(res.status == 200){
                        setProductsPrice(c=>[...c,res.data])

                    }else{
                        // alert('no price is fetched')
                        
                    }
                })
        })
    }

    useEffect(()=>{
        priceGetter()
    },[foodData])

    useEffect(()=>{
        categoryLister()
    },[])

    
    useEffect(()=>{
        dataFetcher(categorySelected.id)
        console.log(categorySelected.name)

    }, [categorySelected.id])

     

    return(
        <div>
            {/* <div className="vstack gap-2" >
                <h4>Title</h4>
                <h4>Order: <span>3</span></h4>
                <div className="d-flex justify-content-center" style={{backgroundImage:''}}>

                </div>
                <button className="btn btn-warning">Edit</button>
            </div> */}
            {console.log('dddd ', productPrice)}
            <h3>Select Category to List Products</h3>
            <label>Category List</label>
            <select className="form-controle" onChange={e=>categoryName(e) } >
                <option   >Select Category</option>
                {
                    category.map(data=>{
                      return  <option value={data._id}  >{data.name} </option>
                    })
                }
                
            </select>
            <hr></hr>
            <div className="row m-5">
                <h3>{categorySelected.name}</h3>
             {
                
                foodData.map((selected, i)=>{
                    return(
                    <div className="vstack gap-1 col-5 border m-2 p-2" key={selected._id} >
                        <h4 className="d-flex justify-content-start"><span className="d-flex justify-content-start text text-primary" >Title:</span> {selected.name}</h4>
                        <h4 className="d-flex justify-content-start"><span className="d-flex justify-content-start text text-primary">Order:</span><span>{selected.order}</span></h4>
                        <label>Description</label>
                        <p>lorem ipsom</p>
                       <div className="row">
                        <div className="col">
                        <label>Full Price</label>
                        <h5>{ productPrice[i]? productPrice[i].price : null } </h5>
                        </div>
                        <div className="col">
                        {
                            (productPrice[i] ? productPrice[i].halfFull : null)?
                            (
                                <div>
                                    <label>Half Price</label>
                                <h5>{productPrice[i] ? productPrice[i].halfPrice : null} </h5>
                                </div>
                            ) :
                            <div></div>
                        }
                        </div>
                       </div>

                        <div className="d-flex justify-content-center category" style={{backgroundImage:`url('${selected.image}')`}}>
        
                        </div>
                        <Link to={"/admin/editProduct/"+selected._id}>
                        <button className="btn btn-warning container">Edit</button>
                        </Link>
                        <button onClick={()=>deleteHandler(selected._id, i)} className="btn btn-danger">Delete</button>
                        
                        <br></br>
                      
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListProducts;