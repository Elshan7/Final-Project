import { useState, useEffect } from "react";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const [activeImage, setActiveImage] = useState(
    "https://files.gandi.ws/ea/ba/eaba1c98-9fed-440a-a08d-75f3f4c697ed.jpg"
  );

  const imageUrls = [
    "https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg",
    "https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg",
    "https://files.gandi.ws/ea/ba/eaba1c98-9fed-440a-a08d-75f3f4c697ed.jpg",
    "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_car-service-checklist.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const tabContent = {
    about:
      "AutoPoint is a full-service auto and truck preventive maintenance and auto repair center in the city area. We specialize in all kinds of vehicle maintenance services.",
    mission:
      "Our mission is to generate excitement through implementing new ideas, problem solving & beyond our customers’ expectations while providing car repair services.",
    vision:
      "Our vision is to become a trusted partner for all vehicle owners, recognized for excellence and innovation in car repair services.",
  };

  useEffect(() => {
    setActiveImage(imageUrls[currentIndex]);

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, imageUrls]);

  return (
    <>
      <Header />

      <div className="max-w-7xl my-5 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-between">
          <h4 className="text-2xl tracking-widest text-gray-500 uppercase">
            A Few Words About Us
          </h4>
          <h2 className="leading-6 tracking-wider uppercase md:text-5xl font-bold mt-2">
            Car Repairs <br /> Since 1999
          </h2>

          <div className="flex border-b-2 border-gray-300 pb-2 space-x-6">
            {["about", "mission", "vision"].map((tab) => (
              <button
                key={tab}
                className={`text-sm md:text-base font-semibold ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          <p className="text-gray-700 mt-4">{tabContent[activeTab]}</p>

          <div className="btn-about">
            <button className="bg-blue-600 text-white tracking-wider text-xl font-semibold px-11 py-4 mt-6 rounded-lg hover:bg-blue-700">
              Read More
            </button>
          </div>
        </div>

        <div>
          <img
            src={activeImage}
            alt="Selected"
            className="rounded-lg w-full h-64 md:h-80 object-cover"
          />

          <div className="grid grid-cols-4 gap-4 mt-4 object-cover">
            {imageUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Thumbnail ${index}`}
                className={`rounded-lg cursor-pointer border-2 ${
                  activeImage === url ? "border-blue-600" : "border-transparent"
                }`}
                onClick={() => {
                  setActiveImage(url);
                  setCurrentIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;

// import { useState } from "react";
// import Header from "../HomePage/Header/Header";
// import Footer from "../HomePage/Footer/Footer";

// const AboutUs = () => {
//   // Left-side state: active tab
//   const [activeTab, setActiveTab] = useState("about");

//   // Right-side state: active image
//   const [activeImage, setActiveImage] = useState(
//     "https://files.gandi.ws/ea/ba/eaba1c98-9fed-440a-a08d-75f3f4c697ed.jpg"
//   );

//   // Content for tabs
//   const tabContent = {
//     about:
//       "AutoPoint is a full-service auto and truck preventive maintenance and auto repair center in the city area. We specialize in all kinds of vehicle maintenance services.",
//     mission:
//       "Our mission is to generate excitement through implementing new ideas, problem solving &  beyond our customers’ expectations while providing car repair services.",
//     vision:
//       "Our vision is to become a trusted partner for all vehicle owners, recognized for excellence and innovation in car repair services.",
//   };

//   return (
//     <>
//       <Header />

//       <div className="max-w-7xl my-4 mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12">
//         {/* Left Side: Tabs and Content */}
//         <div className="flex flex-col justify-between">
//           <h4 className="text-2xl tracking-widest text-gray-500 uppercase">
//             A Few Words About Us
//           </h4>
//           <h2 className=" leading-6 tracking-wider uppercase md:text-5xl font-bold mt-2">
//             Car Repairs <br /> Since 1999
//           </h2>

//           {/* Tabs */}
//           <div className="flex  border-b-2 border-gray-300 pb-2 space-x-6">
//             {["about", "mission", "vision"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`text-sm md:text-base font-semibold ${
//                   activeTab === tab
//                     ? "text-blue-600 border-b-2 border-blue-600"
//                     : "text-gray-500 "
//                 }`}
//                 onClick={() => setActiveTab(tab)}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1).replace("-", " ")}
//               </button>
//             ))}
//           </div>

//           {/* Content */}
//           <p className="text-gray-700 mt-4">{tabContent[activeTab]}</p>

//           <div className="btn-about ">
//             <button className="bg-blue-600 text-white tracking-wider text-xl font-semibold px-11 py-4 mt-6 rounded-lg hover:bg-blue-700">
//               Read More
//             </button>
//           </div>
//         </div>

//         {/* Right Side: Image Gallery */}
//         <div>
//           {/* Main Image */}
//           <img
//             src={activeImage}
//             alt="Selected"
//             className="rounded-lg w-full h-64 md:h-80 object-cover"
//           />

//           {/* Thumbnails */}
//           <div className="grid grid-cols-4 gap-4 mt-4 object-cover">
//             {[
//               "https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg",
//               "https://thumbs.dreamstime.com/b/worker-uniform-disassembles-vehicle-engine-car-service-station-automobile-checking-inspection-professional-diagnostics-173424972.jpg",
//               "https://files.gandi.ws/ea/ba/eaba1c98-9fed-440a-a08d-75f3f4c697ed.jpg",
//               "https://d1gymyavdvyjgt.cloudfront.net/drive/images/uploads/headers/ws_cropper/1_0x0_790x520_0x520_car-service-checklist.jpg",
//             ].map((url, index) => (
//               <img
//                 key={index}
//                 src={url}
//                 alt={`Thumbnail ${index}`}
//                 className={`rounded-lg cursor-pointer border-2 ${
//                   activeImage === url ? "border-blue-600" : "border-transparent"
//                 }`}
//                 onClick={() => setActiveImage(url)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default AboutUs;
