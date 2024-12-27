// src/components/TweetForm.tsx
import React, { useState } from "react";

const TweetForm = () => {
  const [tweet, setTweet] = useState("");

  const handleTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(e.target.value);
  };

  const handleTweetSubmit = () => {
    if (tweet.trim()) {
      // Lógica para enviar el tweet
      console.log("Nuevo tweet:", tweet);
      setTweet("");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <textarea
        value={tweet}
        onChange={handleTweetChange}
        placeholder="¿Qué está pasando?"
        className="w-full p-3 border rounded-lg mb-4"
      />
      <button
        onClick={handleTweetSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Twittear
      </button>
    </div>
  );
};

export default TweetForm;
