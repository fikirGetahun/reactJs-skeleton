import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetHandler from "../../service/apiHandler/getHandler";

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
                                        lessThanRating ? lessThanRating.map(datax=>{
                                            return (
                                              datax.map(data=>{
                                                return (
                                                    <tr>
                                                    <td className="link"> 
                                                        <Link to={'analitic/'+data._id.foodId} style={{textDecoration:'none'}} >
                                                         <img src={data.foodName[0]._id.image} style={{width:'70px'}} />
                                                         </Link> 
                                                    </td>
                                                    <td>  <Link to={'analitic/'+data._id.foodId}  style={{textDecoration:'none'}} > {data.foodName[0]._id.name}</Link></td>
                                                    <td> <Link to={'analitic/'+data._id.foodId}  style={{textDecoration:'none'}}  >{Math.floor(data.rateAv/data.count*10)/10}</Link></td>
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
                                    bestRating ? bestRating.map(datax=>{
                                        return (
                                          datax.map(data=>{
                                            return (
                                            <tr>
                                                <td> <img src={data.foodName[0]._id.image} style={{width:'70px'}} /> </td>
                                                <td>{data.foodName[0]._id.name}</td>
                                                <td> {Math.floor(data.rateAv/data.count*10)/10}</td>
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
         


 
            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Bad Rating Products</h6>
                        <a href="">Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Invoice</th>
                                    <th scope="col">Customer</th>
                                    <th scope="col">Amount</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox"/></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td>$123</td>
                                    <td>Paid</td>
                                    <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        


  
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0">Messages</h6>
                                <a href="">Show All</a>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                {/* <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"/> */}
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                {/* <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"/> */}
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-3">
                                {/* <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"/> */}
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-3">
                                {/* <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 40px; height: 40px;"/> */}
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 justify-content-between">
                                        <h6 className="mb-0">Jhon Doe</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                    <span>Short message goes here...</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Calender</h6>
                                <a href="">Show All</a>
                            </div>
                            <div id="calender"></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">To Do List</h6>
                                <a href="">Show All</a>
                            </div>
                            <div className="d-flex mb-2">
                                <input className="form-control bg-dark border-0" type="text" placeholder="Enter task"/>
                                <button type="button" className="btn btn-primary ms-2">Add</button>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"  />
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span><del>Short task goes here...</del></span>
                                        <button className="btn btn-sm text-primary"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          


</div>
    )
}

export default InnerDashboard;