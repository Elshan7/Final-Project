import { useState } from "react";
import Card from "./Card/Card";
import "./section4.css";

const Section4 = () => {
  const [active, setActive] = useState("allProducts");

  const handleButtonClick = (section) => {
    setActive(section);
  };

  return (
    <section className="sct4 w-full h-[1480px] bg-[#F2F2F2] flex justify-center items-center">
      <div className="sct4-content w-[90%] h-[1215px] bg-slate-400 flex flex-col justify-between items-center">
        <div className="sct4-title w-full  bg-amber-600">
          <h2 className="sct4-h2">POPULAR PRODUCTS</h2>
        </div>

        <div className="sct4-container w-full h-[1130px] bg-amber-200 flex flex-col justify-between">
          <div className="sct4-headings w-full h-[45px] bg-red-300 flex justify-center items-center gap-5">
            <button onClick={() => handleButtonClick("allProducts")}>
              All Products
            </button>
            <button onClick={() => handleButtonClick("carLights")}>
              Car Lights
            </button>
            <button onClick={() => handleButtonClick("wheels")}>Wheels</button>
            <button onClick={() => handleButtonClick("otherParts")}>
              Other parts
            </button>
          </div>

          <div className="sct4-cards w-full h-[1056px] bg-red-300 flex flex-wrap justify-around items-center">
            {active === "allProducts" && (
              <>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </>
            )}

            {active === "carLights" && (
              <>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </>
            )}

            {active === "wheels" && (
              <>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </>
            )}

            {active === "otherParts" && (
              <>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
