// src/components/TweetCard.tsx
import React from "react";

interface TweetCardProps {
  content: string;
}

const TweetCard: React.FC<TweetCardProps> = ({ content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <p>{content}</p>
    </div>
  );
};

export default TweetCard;
