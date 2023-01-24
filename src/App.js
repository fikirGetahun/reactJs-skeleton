 import './App.css';
import HomePage from './pages/home';
import AdminHome from './admin/adminPages/adminHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategory from './components/adminComponent/addCategory';
import FoodLister from './components/foodLister';
import InnerDashboard from './components/adminComponent/innerDashboard';
import AddFood from './components/adminComponent/addFood';
import CategoryLister from './components/categoryLister';
import LoginPage from './admin/adminPages/loginPage';
import LoginComp from './components/adminComponent/loginComp';
import Register from './components/adminComponent/registerComp';
import EditCategory from './components/adminComponent/editCategory';
import ListCategory from './components/adminComponent/listCategory';
import ListProducts from './components/adminComponent/listProduct';
import EditProduct from './components/adminComponent/editProduct';
import NoDataPage from './components/noData';
import ListUser from './components/adminComponent/listUser';
import EditUser from './components/adminComponent/editUser';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
      
          <Route path='/admin' element={<AdminHome />}>
              <Route index element={<InnerDashboard />} />
              <Route path='dashboard' element={<InnerDashboard />}/>

              <Route path='addCategory' element={<AddCategory />} />
              <Route  path='listCategory' element={<ListCategory />} />  
              <Route  path='listProducts' element={<ListProducts /> } />  
              <Route  path='listUsers' element={ <ListUser /> } />  
              <Route  path='editUser' element={ <EditUser />} />  

              <Route path='editProduct' >
                <Route path=':id' element={<EditProduct />} />
              </Route>
               <Route path='editCategory'>
                <Route path=':id'  element={<EditCategory />} />
               </Route>
               
              <Route path='addFood' element={<AddFood />}/> 
          </Route>

          <Route  path='/'  element={<HomePage/>} > 
              <Route index element={ <CategoryLister />} />
              <Route path="/product/:catId" element={<FoodLister />} />
              <Route   path="/search/:search" element={<FoodLister />} />
              <Route path="/nodata" element={<NoDataPage /> } />

          </Route>
          <Route path='/login' element={<LoginPage />}>
            <Route index element={<LoginComp />}/>
            <Route path='reg' element={<Register />} />
          </Route>
      
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
