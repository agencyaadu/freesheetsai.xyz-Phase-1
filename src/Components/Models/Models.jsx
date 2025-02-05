import React from "react";

export default function ModelsTable() {
  const models = {
    "1": {
      "model-id": "gemma2-9b-it",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "google",
      "pro-version": false
    },
    "2": {
      "model-id": "llama-3.3-70b-versatile",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false
    },
    "3": {
      "model-id": "llama-3.1-8b-instant",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false
    },
    "4": {
      "model-id": "llama-guard-3-8b",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false
    },
    "5": {
      "model-id": "llama3-70b-8192",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false
    },
    "6": {
      "model-id": "llama3-8b-8192",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "meta",
      "pro-version": false
    },
    "7": {
      "model-id": "mixtral-8x7b-32768",
      "url": "https://api.groq.com/openai/v1/chat/completions",
      "platform": "groq",
      "developers": "mistral",
      "pro-version": false
    },
    "8": {
      "model-id": "gpt-4o-mini",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "9": {
      "model-id": "gpt-4o-mini-2024-07-18",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "10": {
      "model-id": "gpt-3.5-turbo-1106",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "11": {
      "model-id": "gpt-3.5-turbo-instruct-0914",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "12": {
      "model-id": "gpt-3.5-turbo-0125",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "13": {
      "model-id": "gpt-3.5-turbo",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "14": {
      "model-id": "davinci-002",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "15": {
      "model-id": "babbage-002",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "16": {
      "model-id": "o1-mini-2024-09-12",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "17": {
      "model-id": "o1-preview-2024-09-12",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "18": {
      "model-id": "o1-mini",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    },
    "19": {
      "model-id": "o1-preview",
      "url": "https://api.openai.com/v1/chat/completions",
      "platform": "openai",
      "developers": "openai",
      "pro-version": true
    }
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
