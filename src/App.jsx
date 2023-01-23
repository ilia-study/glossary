import './App.css';
import dictionary from './terms.json';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [words, setWords] = useState(dictionary);

  useEffect(() => {
    if (!query) {
      setWords(dictionary);
      return;
    }

    const results = dictionary.filter((term) => {
      return term.title.toLowerCase().includes(query.toLowerCase());
    });
    setWords(results);
  }, [query]);

  return (
    <div className="m-2 mx-auto max-w-lg">
      <input
        type="text"
        id="query"
        name="query"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Search..."
        value={query}
        onInput={(evt) => setQuery(evt.currentTarget.value)}
        autoComplete="off"
      />

      {words.map((term) => (
        <Link key={term.id} to={`${term.id}`}>
          <div className="my-2 rounded-md border-2 p-2 font-bold shadow">{term.title}</div>
        </Link>
      ))}
    </div>
  );
}

export default App;
