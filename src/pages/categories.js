import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function CategoriesPage() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get('https://api.chucknorris.io/jokes/categories')
      .then(response => setCategories(response.data))
  }, []);

  if (!categories) {
    return null;
  }

  return <ul>
    {categories.map(category => (
      <li key={category}>
        <Link to={"/categories/" + category}>{category}</Link>
      </li>
    ))}
  </ul>
}