import React from 'react';
import { Link } from "react-router-dom";

const HowTo = () => {
  return (
    <div className="terms-container container mx-auto p-6 flex flex-col items-center justify-center h-screen">
      {/* Home Button with Left Arrow Only */}
      <div className="mb-6 flex items-center">
          <Link to="/" className="inline-flex items-center px-4 py-2 text-white rounded transition duration-200">
              <svg
              width="30px"
              height="30px"
              viewBox="0 0 512 512"
              data-name="Layer 1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              >
                  <path
                    d="M34,256,210,80l21.21,21.2L91.4,241H478v30H91.4L231.25,410.84,210,432Z"
                  />
              </svg>
          </Link>
      </div>    
      <div>How To</div>
      <div>Coming Soon!</div>
    </div>


  );
};

export default HowTo;
