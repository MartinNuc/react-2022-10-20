import { useState, useEffect } from 'react';
import axios from 'axios';

export function useJoke(category) {

  const [joke, setJoke] = useState('');
  const [isPending, setIsPending] = useState(false);

  async function getJoke() {
    setIsPending(true);
    const url = 'https://api.chucknorris.io/jokes/random' + (category ? `?category=${category}` : '');
    const response = await axios.get(url);
    setJoke(response.data.value);
    setIsPending(false);
  }

  useEffect(() => {
    getJoke();
  }, []);

  return {
    joke,
    refetch: getJoke,
    isPending
  };
}