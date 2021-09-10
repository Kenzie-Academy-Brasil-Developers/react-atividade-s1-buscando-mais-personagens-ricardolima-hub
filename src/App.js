import { useState, useEffect} from "react";
import './App.css';
import Characters from "./components/Characters";

function App() {

  const [characterList, setCharacterList] = useState([]);

  const [next, setNext] = useState(1)
  console.log(next)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${next}`)
    .then((response) => response.json())
    .then((response) => setCharacterList(response.results))
    .catch((err) => console.log(err));
  }, [next]);

  const nextPage = () => (next < 34 ? setNext(next + 1) : undefined)

  const previousPage = () => (next > 1 ? setNext(next -1) : undefined)

  return (
    <div className="App">
        <Characters characterList={characterList} />
        <button onClick={nextPage}>Next Page</button>
        <button onClick={previousPage}>Previous Page</button>
    </div>
  );
}

export default App;