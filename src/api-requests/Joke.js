import { useJoke } from './use-joke';
import React from 'react';

export const Joke = React.memo(() => {

  const { joke, refetch, isPending } = useJoke();

  return <p>
    {isPending && <span>[LOADING...]</span>} {joke}
    <button onClick={() => refetch()}>Load next joke</button>
  </p>
});