import React, { useEffect, useState } from "react";
import GetHandler from "../../service/apiHandler/getHandler";



const ListUser = ()=>{

    const [users, setUsers] = useState([])
    const getAllUsers = async ()=>{
        let data = new GetHandler()
        let users = await data.getAllUsers().then(res=>{
            if(res.status == 200){
                setUsers(res.data)
            }else{
                alert('users are not there')
            }
        })
    }

    useEffect(()=>{
        getAllUsers()
    },[])

    return (
        <div>
                 <hr></hr>
            <div className="d-flex justify-content-center">
       

                <h4>All Users</h4>
        
           
            </div>
            <hr></hr>
            <div>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
     </tr>
  </thead>
  <tbody>
        {
            users.map((sel, i)=>{
                return (
                    <tr>
                    <th scope="row">{i}</th>
                    <td>{sel.name} </td>
                    <td>{sel.email} </td>
                   </tr>
                )
            })
        }
    
  </tbody>
</table>
            </div>
        </div>
    )
}


export default ListUser;