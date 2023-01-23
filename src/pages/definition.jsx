import dictionary from '../terms.json';
import { Link, useMatch } from 'react-router-dom';

export default function Definition() {
  const id = useMatch('/:id').params.id;
  const definition = dictionary.find((term) => term.id === id);

  const related = dictionary.filter((term) => definition.related.includes(term.id));

  return (
    <div className="mx-auto mt-4 max-w-lg rounded p-4 shadow">
      <h2 className="font-bold">{definition.title}</h2>

      <p className="mt-4">{definition.description}</p>

      {related.length > 0 && (
        <div className="mt-4">
          <h3 className="">Watch More:</h3>
          <div className="mt-2 flex">
            {related.map((link) => (
              <Link to={`/${link.id}`} key={link.id}>
                <div className="mr-1 max-w-fit  rounded p-2 shadow">{link.title}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
