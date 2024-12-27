// src/components/Feed.tsx
import TweetForm from "./TweetForm";
import TweetCard from "./TweetCard";

const Feed = () => {
  return (
    <div className="space-y-6">
      {/* Componente para crear un nuevo tweet */}
      <TweetForm />

      {/* Lista de tweets (por ahora, usaremos un ejemplo estático) */}
      <TweetCard content="¡Este es un tweet de ejemplo!" />
      <TweetCard content="Otro tweet interesante en el feed." />
      <TweetCard content="¿Cómo están todos hoy?" />
    </div>
  );
};

export default Feed;
