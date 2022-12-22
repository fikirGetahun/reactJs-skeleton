import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home';
import AdminHome from './admin/adminPages/adminHome';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCategory from './components/adminComponent/addCategory';
import FoodLister from './components/foodLister';
import InnerDashboard from './components/adminComponent/innerDashboard';
import AddFood from './components/adminComponent/addFood';
import CategoryLister from './components/categoryLister';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <HomePage /> */}

      {/* <AdminHome /> */}
      <BrowserRouter>
        <Routes>
      
          <Route path='/admin' element={<AdminHome />}>
              <Route index element={<InnerDashboard />} />
              <Route path='dashboard' element={<InnerDashboard />}/>

              <Route path='addCategory' element={<AddCategory />} />
              <Route path='addFood' element={<AddFood />}/> 
          </Route>

          <Route path='/'  element={<HomePage/>} > 
          <Route index element={ <CategoryLister />} />
              <Route path="food" element={<FoodLister/>} />
          </Route>
      
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
