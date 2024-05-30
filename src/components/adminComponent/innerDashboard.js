import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetHandler from "../../service/apiHandler/getHandler";
import { isEmpty } from "lodash";

const InnerDashboard = ()=>{


    const [totalProduct, setTotalProduct]=useState()
    const getTotalProduct = async ()=>{
        const data = new GetHandler()
        await data.getFoodCountTotal().then(res=>{
            if(res.status == 200){
                setTotalProduct(res.data.data)
            }else{
                console.log('server error total product count')
            }
        })
    }

    const [isLoading, setIsLoading]=useState()

    const [totalRating, setTotalRating]=useState()
    const getRatingProduct = async ()=>{
        const data = new GetHandler()
        await data.getRatingCountTotal().then(res=>{
            if(res.status == 200){
                setTotalRating(res.data.data)
            }else{
                console.log('server error total product count')
            }
        })
    }

    const [lessThanRating, setLessThanRating] = useState([])
    const getRatingProductLs = async (lessThan)=>{
        const data = new GetHandler()
        await data.getRatingLs(lessThan,skipLess).then(res=>{
            
            if(res.status == 200){
                console.log(res.data)
                if(res.data.message == 4000){
                     
                }else{
                    setLessThanRating(old=>[...old,res.data])

                }
            } else{
                console.log('server error total product count')
            }
        })
    }


    const [bestRating, setBestRating] = useState([])
    const getRatingProductGte = async (lessThan)=>{
        const data = new GetHandler()
        await data.getRatingGre(lessThan,skipGte).then(res=>{
            if(res.status == 200){
                console.log(res.data)
                if(res.data.message == 4000){
                     
                }else{
                    setBestRating(old=>[...old,res.data])

                }
            } else{
                console.log('server error total product count')
            }
  
        })
    }



    const [skipLess, setSkipLess]=useState(0)
    const [skipGte, setSkipGte]=useState(0)
    useEffect(()=>{
        getTotalProduct()
        getRatingProduct()
        getRatingProductLs(4)
        getRatingProductGte(4)
    },[])

    useEffect(()=>{
        getRatingProductLs(4)
    },[skipLess])

    useEffect(()=>{
        getRatingProductGte(4)
    },[skipGte])

    let x = window.localStorage.getItem('token');

    const handleLessScroll = (e)=>{
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        if(bottom){
             setSkipLess(skipLess+4)
        }
    }

    const handleGteScroll = (e)=>{
        const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
        if(bottom){
             setSkipGte(skipGte+4)
        }
    }

    return(
        

<div>
<div className="container-fluid pt-4 px-4 ">
                 <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="  rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-line fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 text text-dark">Today Product</p>
                                <h6 className="mb-0">{totalProduct} </h6>
                            </div>
                        </div>
                    </div>
                    {/* <i className="fa fa-chart-bar fa-3x text-primary"></i> */}
                    <div className="col-sm-6 col-xl-3">
                        <div className="  rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-bar fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 text text-dark">Total Ratings</p>
                                <h6 className="mb-0 ">{totalRating} </h6>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-area fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Today Revenue</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-pie fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Total Revenue</p>
                                <h6 className="mb-0">$1234</h6>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
           


            
            <div className=" container-fluid pt-4 px-4"  >
                <div className="row g-4" >
                        <div className="col-sm-12 col-xl-6" >
                            <div className="  text-center rounded p-4">
                                <div className="  mb-4">
                                    <h6 className="mb-2 bg bg-info p-1">Bad Rating Foods</h6> 
                                    <div className="table-responsive" onScroll={handleLessScroll} style={{height:'400px', overflowY:'scroll'}}>
                            <table className="table text-start align-middle table-bordered table-hover mb-0">
                                <thead>
                                    <tr className="text-black">
                                        <th scope="col">Image</th>
                                        <th scope="col">Product Name</th>
                                        <th scope="col">Rating</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        !isEmpty(lessThanRating) && lessThanRating.length >0 ? lessThanRating.map(datax=>{
                                            console.log(lessThanRating)
                                            return (
                                              datax.map(data=>{
                                                return (
                                                    <tr>
                                                    <td className="link">     
                                                        <Link to={!isEmpty(data._id.foodId )?'analitic/'+data._id.foodId:'#'} style={{textDecoration:'none'}} >
                                                         <img src={!isEmpty(data.foodName )? data.foodName[0]._id.image: 'none'} style={{width:'70px'}} />
                                                         </Link> 
                                                    </td>
                                                    <td>  <Link to={!isEmpty(data._id.foodId )? 'analitic/'+data._id.foodId: '#'}  style={{textDecoration:'none'}} > {!isEmpty(data.foodName )?data.foodName[0]._id.name:'none'}</Link></td>
                                                    <td> <Link to={!isEmpty(data._id.foodId )? 'analitic/'+data._id.foodId:'#'}  style={{textDecoration:'none'}}  >{!isEmpty(data.foodName )?Math.floor(data.rateAv/data.count*10)/10:'none'}</Link></td>
                                            </tr>
                                                )
                                              })  

                                              
                                            )
                                        }) : <div></div>
                                    }

                                
                                </tbody>
                            </table>
                        </div>
                                </div>
                                <canvas id="worldwide-sales"></canvas>
                            </div>
                        </div>
                        <div className="col-sm-12 col-xl-6">
                        <div className="  text-center rounded p-4">
                            <div className="  mb-4">
                                <h6 className="mb-2 bg bg-info p-1">Best Rating Foods</h6> 
                                <div className="table-responsive"  onScroll={handleGteScroll} style={{height:'400px', overflowY:'scroll'}}>
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-black">
                                    <th scope="col">Image</th>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !isEmpty(bestRating) ? bestRating.map(datax=>{
                                        return (
                                          datax.map(data=>{

                                            return (
                                            <tr>
                                                <td> <img src={!isEmpty(data.foodName )? data.foodName[0]._id.image: 'none'} style={{width:'70px'}} /> </td>
                                                <td>{!isEmpty(data.foodName )? data.foodName[0]._id.name: 'none'}</td>
                                                <td> {!isEmpty(data.foodName )?Math.floor(data.rateAv/data.count*10)/10:'none'}</td>
                                           </tr>
                                            )
                                          })  
                                        )
                                    }) : <div></div>
                                }

                             
                            </tbody>
                        </table>
                    </div>
                            </div>
                            <canvas id="worldwide-sales"></canvas>
                        </div>
                    </div>
                </div>
            </div>
         


 
         


  
 
          


</div>
    )
}

export default InnerDashboard;