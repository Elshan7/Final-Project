import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToChart from "./Pages/AddToChart/AddToChart";
import Favorite from "./Pages/Favorite/Favorite";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Map from "./Pages/Map/Map";
import Search from "./Pages/Search/Search";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/:id" element={<HomePage />} /> 
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/basket" element={<AddToChart />} />
          <Route exact path="/favorite" element={<Favorite />} />
          <Route path="/detail/:id" element={<DetailPage />} /> 
           <Route path="/map" element={<Map/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/admin" element={<AdminPanel/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
