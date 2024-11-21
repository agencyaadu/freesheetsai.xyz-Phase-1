import React from 'react';
import { Link } from "react-router-dom";
import Step1 from "../../assets/step-1.png";
import Step2 from "../../assets/step-2.png";
import Step3 from "../../assets/step-3.png";

const HowTo = () => {
  return (
    <div className="privacy-policy container mx-auto p-6 bg-white">
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

    <h1 className="text-3xl font-bold mb-6 text-gray-800">What / Who / How / Why | freeSheetsAI</h1>

    <div className="flex flex-col mb-4">
      {/* <h2 className="text-2xl font-semibold mb-4 text-gray-800" >What is it and why use it ?</h2> */}

      <p className="m-2">
        This is a plugin that leverages FREE opensource AI models out there and allows you to directly use them from your personal google sheets , saving TIME and MONEY to millions of people !
      </p>

      <p className="m-2">
        To give immediate feedback , you can reach us at <a href="https://t.me/fredrikparker" className="text-blue-600 hover:underline">https://t.me/fredrikparker</a>
      </p>

      <p className="m-2">
        Built with ❤️ by JV ( <a href="https://blackpome.com" className="text-blue-600 hover:underline">blackPome</a> )
      </p>
    </div>

    <hr/>

    <div className="flex flex-row mt-8 mb-8">
      <div className="flex flex-col">
          <div className='justify-center items-start'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-1:</h2>
          </div>
          <div className="mb-4 text-gray-700">
          Create account and generate API key in <a href='https://console.groq.com/keys' className="text-blue-600 hover:underline">console.groq.com/keys</a>
          </div>
          <img src={Step1} alt="Step 1" className="w-96 rounded-lg" />
      </div>
      <div className="flex flex-col ml-20">
          <div className='justify-center items-start'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-2:</h2>
          </div>
          <div className="mb-4 text-gray-700">
          Set API Key in plugin
          </div>
          <img src={Step2} alt="Step 2" className="w-96 rounded-lg" />
      </div>  
      <div className="flex flex-col ml-20">
          <div className='justify-center items-start'>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Step-3:</h2>
          </div>
          <div className="mb-4 text-gray-700">
          Start using FREE sheets AI !
          </div>
          <img src={Step3} alt="Step 3" className="w-2/4 rounded-lg" />
      </div>  

    </div>

    <hr/>
    
    <h2 className="text-2xl font-semibold mb-4 text-gray-800 mt-8">Contact Us</h2>
    <p className="mb-4 text-gray-700">
        If you have any questions about this privacy policy, please contact us at:
    </p>
    <p className="mb-4 text-gray-700">
        <a href="mailto:hello@aadu.agency" className="text-blue-600 hover:underline">hello@aadu.agency</a>
    </p>
</div>
);
};

export default HowTo;
