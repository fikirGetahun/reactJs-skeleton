const { Navigate, Outlet } = require("react-router-dom");


const userAuth = ()=>{
   let user;
    if(window.localStorage.getItem('token') ){
          user = true;
    }else{
          user = false;
    }
    return user;
}


const ProtectedRoutes = ()=>{
 
        const isAuth = userAuth()
        return  isAuth ? <Outlet /> : <Navigate  to='/login' />
}

export default ProtectedRoutes;