
import React from "react";
import v2 from "../../assets/videos/v2.mp4";
import ContactForm from "../../components/contact/index"; // Corrected the import

const Home = () => {
  return (
    <div className="Mainhome">
      <div className="">
        <div className="">
          <div className="">
            <div className="Homeanner">
              <video
                autoPlay
                loop
                muted
                className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
              >
                <source src={v2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

