import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './section5.css';
import { FaUserTie } from 'react-icons/fa6';
import { CgShoppingCart } from 'react-icons/cg';
import { FaAward } from 'react-icons/fa';
import { BsShopWindow } from 'react-icons/bs';

const Section5 = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.unobserve(entries[0].target); 
        }
      },
      { threshold: 0.5 } 
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);


  return (
    <section ref={sectionRef} className='sct5 w-full h-[425px] flex justify-center items-center '>
      <div className="sct5-content w-[80%] h-[225px] flex">
        
        <div className="sct5-part w-[25%] h-full flex flex-col justify-around items-center " data-aos="fade-up-left">
          <div className="sct5-icon bg-[#333E4899] w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <FaUserTie className='text-[50px] text-[white]' />
          </div>
          <div className="sct5-info flex flex-col items-center">
            {inView && <CountUp start={0} end={956} duration={2.5} className='block font-[Rajdhani] text-[48px] h-[60px] text-[white] font-bold' />}
            <span className='text-[18px] font-semibold font-[Rajdhani] text-[white]'>HAPPY CLIENTS</span>
          </div>
        </div>

        <div className="sct5-part w-[25%] h-full flex flex-col justify-around items-center">
          <div className="sct5-icon bg-[#333E4899] w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <CgShoppingCart className='text-[50px] text-[white]' />
          </div>
          <div className="sct5-info flex flex-col items-center">
            {inView && <CountUp start={0} end={1320} duration={2.5} className='block font-[Rajdhani] text-[48px] h-[60px] text-[white] font-bold' />}
            <span className='text-[18px] font-semibold font-[Rajdhani] text-[white]'>PRODUCTS IN STOCK</span>
          </div>
        </div>

        <div className="sct5-part w-[25%] h-full flex flex-col justify-around items-center">
          <div className="sct5-icon bg-[#333E4899] w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <FaAward className='text-[50px] text-[white]' />
          </div>
          <div className="sct5-info flex flex-col items-center">
            {inView && <CountUp start={0} end={100} duration={2.5} className='block font-[Rajdhani] text-[48px] h-[60px] text-[white] font-bold' />}
            <span className='text-[18px] font-semibold font-[Rajdhani] text-[white]'>AWARDS</span>
          </div>
        </div>

        <div className="sct5-part w-[25%] h-full flex flex-col justify-around items-center">
          <div className="sct5-icon bg-[#333E4899] w-[100px] h-[100px] rounded-full flex items-center justify-center">
            <BsShopWindow className='text-[50px] text-[white]' />
          </div>
          <div className="sct5-info flex flex-col items-center">
            {inView && <CountUp start={0} end={526} duration={2.5} className='block font-[Rajdhani] text-[48px] h-[60px] text-[white] font-bold' />}
            <span className='text-[18px] font-semibold font-[Rajdhani] text-[white]'>BRANCHES IN THE COUNTRY</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;

