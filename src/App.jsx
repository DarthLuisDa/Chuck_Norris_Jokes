
//Ejercicio Crear una aplicación en React que permita al usuario obtener chistes o frases célebres al azar utilizando una API pública.

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getRandomJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      const data = await response.json();
      setData(data.value);
    } catch (error) {
      setError("There was an error fetching the joke, try again please.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRandomJoke();
  }, []);

  return (
    <div className="App">
      <h1>Dad Jokes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data && <p>{data}</p>}
          {error && <p>{error}</p>}
          <button onClick={getRandomJoke}>Get Joke</button>
        </>
      )}
    </div>
  );
}

export default App;

