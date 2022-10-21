import { useContext } from "react"
import { ThemeContext } from "../App"

export const SwitchThemeButton = () => {
  const { toggleDarkMode } = useContext(ThemeContext);
  return <button onClick={() => toggleDarkMode()}>
    Switch colors
  </button>
}