import { Button } from "./button"
import { Content } from "./content"
import { useCallback, useState } from 'react';

export const Dropdown = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // function handleToggleDropdown() {
  //   setIsDropdownVisible(isDropdownVisible => !isDropdownVisible)
  // }
  const handleToggleDropdown = useCallback(() =>
    setIsDropdownVisible(isDropdownVisible => !isDropdownVisible)
    // setIsDropdownVisible(!isDropdownVisible)
    , []);

  return <>
    <Button onToggle={handleToggleDropdown}></Button>
    {isDropdownVisible && <Content />}
  </>
}