import { useParams } from 'react-router-dom';
import { useJoke } from '../api-requests/use-joke';

export function JokePage() {

  const params = useParams();
  const category = params.category;

  const { joke } = useJoke(category);

  return <>
    <h1>Category {category}</h1>
    <p>
      {joke}
    </p>
  </>
}