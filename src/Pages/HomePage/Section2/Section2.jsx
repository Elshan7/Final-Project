import  { useEffect, useRef } from "react";
import "./section2.css";
import { useDispatch, useSelector } from "react-redux";
import { getService } from "../../../Redux/feature/service/serviceSlice";

const Section2 = () => {
  const containerRef = useRef(null);
  let isDragging = false;
  let startY;
  let scrollTop;

  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(getService());
  }, [dispatch]);

  const handleMouseDown = (event) => {
    isDragging = true;
    startY = event.clientY;
    scrollTop = containerRef.current.scrollTop;
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const deltaY = event.clientY - startY;
    containerRef.current.scrollTop = scrollTop - deltaY;
  };

  const handleMouseUp = () => {
    isDragging = false;
  };

  return (
    <section id="sct2" data-aos-duration="3000" data-aos="zoom-in" className="sct2 w-full h-[665px] flex justify-center items-end">
      <div className="sct2-container w-[80%] h-[545px]  flex justify-end ">
        <div className="sct2-rightcontainer w-[50%] h-[545px] ">
          <h2 className=' text-[#151515] font-bold  font-["Montserrat"] mb-3 ml-5'>
            WHY CHOOSE US
          </h2>

          <div
            className="boxes-container w-[570px] h-[440px]  overflow-y-scroll overflow-x-hidden "
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >

            {
              value && value.map((item) =>  <div key={item.id}  className="sct2-box w-[522px] h-[164px]  bg-[#FFFFFF] flex justify-center items-center rounded-md mb-5">
              <div className="sct2-subbox w-[482px] h-[104px] flex justify-center items-center">
                <div  className="left-icon w-[90px] h-[84px] ">
                  <img className="w-[85px] h-[85px]" src={item.image} alt="" />

                </div>
                <div className="right-subtext w-[352px] h-[84px]  flex flex-col justify-between items-center ">
                  <h4 className='text-[20px] text-[#151515] font-["Montserrat"] uppercase font-[700]'>
                    {item.title}
                  </h4>
                  <p className='text-[15px] font-[400] w-[323px] leading-normal text-[#777777] font-["Lato"] text-center tracking-wide'>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
              )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
