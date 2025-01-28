import React from "react";
import Step2 from "../../assets/step-2.png";
function Docs() {
  return (
    <div className="bg-white p-6">
        <h2 className="text-2xl font-bold mb-4">Documentation</h2>
        <section className="bg-white p-6 shadow rounded-lg">
        <h2 className="text-2xl font-bold mb-4">AI</h2>
          <p>
            Here's how you can use the `AI` function in Google Sheets or as an HTTP endpoint.
          </p>
          
          {/* <h3 className="text-xl font-semibold mt-6">Google Sheets</h3> */}
          <div>
          <pre className="bg-gray-100 p-3 rounded mt-2">
            <code>
              {`=AI(prompt, model, api)`}
            </code>
          </pre>
            <p className="mt-6">Parameters:</p>
            <p className="mt-2">&emsp;- prompt</p>
            <p className="mt-2">&emsp;- model ( model id <a className="text-blue-900" href="/models">here</a>)</p>
            <p className="mt-2">&emsp;- api ( display name of the api key )</p>
          </div>
          <div className="mt-6">
            Example:
            <pre className="bg-gray-100 p-3 rounded mt-2">
              <code>
                {`=AI("What is AI?", "1", "myAPIKey")`}
              </code>
            </pre>
            {/* <img src={Step2} alt="Step 2" className="w-96 rounded-lg mt-6" /> */}
          </div>
            
          
          <h3 className="text-xl font-semibold mt-6">Error Handling</h3>
          <ul className="list-disc pl-6 mt-3">
            <li><b>401:</b> Invalid API Key</li>
            <li><b>429:</b> Too many requests - Retry after the suggested time</li>
            <li><b>Pro Models:</b> Requires a license</li>
          </ul>
        </section>
    </div>
  );
}

export default Docs;
