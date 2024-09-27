import { useRef, useEffect } from "react";
// import Footer from "./Components/Footer/Footer";
import Main from "./Components/main/Main";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/Sidebar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { setShowVideo } from "./Components/utils/Store/stateHandleSlices";

function App() {
  const dispatch = useDispatch();
  const showVideo = useSelector((store) => store.stateHandle.showVideo);
  const videoRef = useRef(null); // Reference for the video container

  const handleShowVideo = (val) => {
    dispatch(setShowVideo(val));
  };

  // Event listener to detect clicks outside the video container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        handleShowVideo(false);
      }
    };

    // Add event listener only when the video is shown
    if (showVideo) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener when video is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showVideo]);

  return (
    <section className="sm:z-50 relative overflow-hidden xl:ml-20 ">
      <Main />
      <section className="z-50 fixed top-0 left-0 w-20 h-screen hidden xl:flex">
        <SideBar />
      </section>

      {showVideo && (
        <section className="z-50 fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex items-center justify-center">
          <div
            className="relative w-full max-w-3xl px-4"
            ref={videoRef} // Reference for the video container
          >
            <video
              autoPlay
              controls
              className="w-full h-auto max-h-[80vh] rounded-lg"
            >
              <source
                src="https://suvidhafoundationedutech.org/img/video/Suvidha_Foundation_Video.mp4?autoplay=1&modestbranding=1&showinfo=0"
                type="video/mp4"
              />
            </video>
          </div>
        </section>
      )}
    </section>
  );
}

export default App;
