import HomePage from "./Pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddToChart from "./Pages/AddToChart/AddToChart";
import Favorite from "./Pages/Favorite/Favorite";
import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import DetailPage from "./Pages/DetailPage/DetailPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
