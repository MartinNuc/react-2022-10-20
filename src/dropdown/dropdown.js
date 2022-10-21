import { Button } from "./button"
import { Content } from "./content"
import { useState } from 'react';

export const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  function handleToggleDropdown() {
    setIsDropdownVisible(!isDropdownVisible);
  }

  return <>
    <Button onToggle={() => handleToggleDropdown()}>
      {isDropdownVisible ? 'Close' : 'Open'}
    </Button>
    {isDropdownVisible && <Content />}
  </>
}