import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import Userlist from "./pages/userlist/Userlist";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Userlist/>} path="/users"/>
        <Route element={<User/>} path="/user/:userid"/>
        <Route element={<NewUser/>} path="/newuser"/>
        <Route element={<ProductList/>} path="/products"/>
        <Route element={<Product/>} path="/product/:pid"/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
