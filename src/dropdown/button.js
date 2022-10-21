import React from 'react';

export const Button = React.memo((props) => {
  return <button onClick={() => props.onToggle()}>
    Open / close
  </button>
})