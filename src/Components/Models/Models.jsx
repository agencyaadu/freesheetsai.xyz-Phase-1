import React from "react";

export default function ModelsTable() {
  const models = {
    "1": {
      "model-id": "gemma2-9b-it",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "google",
      "pro-version": true,
    },
    "2": {
      "model-id": "llama-3.3-70b-versatile",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false,
    },
    "3": {
      "model-id": "llama-3.1-8b-instant",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false,
    },
    "4": {
      "model-id": "llama-guard-3-8b",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false,
    },
    "5": {
      "model-id": "llama3-70b-8192",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false,
    },
    "6": {
      "model-id": "llama3-8b-8192",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false,
    },
    "7": {
      "model-id": "mixtral-8x7b-32768",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "mistral",
      "pro-version": false,
    },
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Models</h1>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2 bg-gray-100">ID</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Model ID</th>
            <th className="border border-gray-300 p-2 bg-gray-100">URL</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Platform</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Developers</th>
            <th className="border border-gray-300 p-2 bg-gray-100">Pro Version</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(models).map((key) => (
            <tr key={key}>
              <td className="border border-gray-300 p-2 text-center">{key}</td>
              <td className="border border-gray-300 p-2">{models[key]["model-id"]}</td>
              <td className="border border-gray-300 p-2">
                <a
                  href={models[key]["url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  {models[key]["url"]}
                </a>
              </td>
              <td className="border border-gray-300 p-2">{models[key]["platform"]}</td>
              <td className="border border-gray-300 p-2">{models[key]["developers"]}</td>
              <td className="border border-gray-300 p-2 text-center">
                {models[key]["pro-version"] ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
