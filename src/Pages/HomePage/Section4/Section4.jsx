import { useEffect, useState } from "react";
import Card from "./Card/Card";
import "./section4.css";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../Redux/feature/product/productSlice";

const Section4 = () => {
  const [active, setActive] = useState("allProducts");
  const dispatch = useDispatch();
  const { value = [] } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const handleButtonClick = (section) => {
    setActive(section);
  };

  return (
    <section  className=" sct4 w-full h-auto bg-[#F2F2F2] flex justify-center items-center  mt-8">

      <div className="sct4-content w-[90%] h-auto my-4 flex flex-col justify-start items-center overflow-hidden  ">

        <div className="sct4-title w-full my-2">
          <h2 className="sct4-h2">POPULAR PRODUCTS</h2>
        </div>

        <div data-aos="zoom-in" data-aos-duration="1500" className="sct4-container  w-full h-auto  flex flex-col justify-between">
          <div className="sct4-headings w-full h-[45px]  flex justify-center items-center gap-5">
            <button onClick={() => handleButtonClick("allProducts")} className=" duration-700 p-2 rounded-lg hover:opacity-60 ">All Products</button>
            <button onClick={() => handleButtonClick("carLights")}className=" duration-700 p-2 rounded-lg hover:opacity-60">Car Lights</button>
            <button onClick={() => handleButtonClick("wheels")} className=" duration-700 p-2 rounded-lg hover:opacity-60">Wheels</button>
            <button onClick={() => handleButtonClick("otherParts")} className=" duration-700 p-2 rounded-lg hover:opacity-60">Other parts</button>
          </div>

          <div className="my-4 sct4-cards w-full h-auto flex justify-center flex-wrap gap-6 ">
            {active === "allProducts" &&
              value.map((item) => <Card key={item.id} item={item} />)}

            {active === "carLights" &&
              value
                .filter((item) => item.category === "Car lights")
                .map((item) => <Card key={item.id} item={item} />)}

            {active === "wheels" &&
              value
                .filter((item) => item.category === "Wheels")
                .map((item) => <Card key={item.id} item={item} />)}

            {active === "otherParts" &&
              value
                .filter((item) => item.category === "Other parts")
                .map((item) => <Card key={item.id} item={item} />)}
          </div>
        </div>


      </div>

    </section>
  );
};

export default Section4;


