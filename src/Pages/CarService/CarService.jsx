import { useState } from "react";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";

const videos = [
  {
    id: 1,
    title: "How to Fix Rust on Your Car",
    info: "Learn how to repair rust on your car with this easy step-by-step guide.",
    url: "https://www.youtube.com/embed/ju0JrrTI6Do",
    thumbnail: "https://i.ytimg.com/vi/VTDB3mKx7jM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCRZv72dfP8UhDtvh_uCSTE8Yg6-A",
  },
  {
    id: 2,
    title: "10 Easy Car Mechanic Tips You Need to Know",
    info: "Simple car repair tips for beginners and experienced DIYers.",
    url: "https://www.youtube.com/embed/RctKYh4dRjg",
    thumbnail: "https://i.ytimg.com/vi/GcQmLGR4hW0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD9makZZdXZoAYQy5JRgkx1EE0GDA",
  },
  {
    id: 3,
    title: "How to Fix Your Car Yourself",
    info: "Fix your car with these easy-to-follow DIY repair tutorials.",
    url: "https://www.youtube.com/embed/6FxAgZ9rn8E",
    thumbnail: "https://i.ytimg.com/vi/VFbNWGF2Cmo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsGzyd-U6xNPpg_mTZEa47T27oyw",
  },
];

const VideoPage = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleClose = () => {
    setActiveVideo(null);
  };

  const handleThumbnailClick = (video) => {
    setActiveVideo(video);
  };

  return (
    <>
      {/* Render Header only if no video is active */}
      {!activeVideo && <Header />}

      <div className="min-h-screen flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-8">Car Repair Video Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full rounded-md cursor-pointer"
                  onClick={() => handleThumbnailClick(video)} // This will set the video to be active when clicked
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => handleThumbnailClick(video)} // Same as clicking on the image
                    className="bg-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-play-circle text-gray-800"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </button>
                </div>
              </div>
              <h2 className="text-lg font-semibold mt-4">{video.title}</h2>
              <p className="text-gray-600 text-sm mt-2">{video.info}</p>
            </div>
          ))}
        </div>

        {activeVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-3xl relative">
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={handleClose}
              >
                ✖
              </button>
              <iframe
                width="100%"
                height="500"
                src={activeVideo.url}
                title={activeVideo.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>

      {/* Render Footer only if no video is active */}
      {!activeVideo && <Footer />}
    </>
  );
};

export default VideoPage;
