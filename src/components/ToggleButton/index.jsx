import React, { useContext } from "react";
import { darkTheme } from "../../global/theme";
import { themeContext } from "../../context/themeContext";
import { lightTheme } from "../../global/theme";
import light from "../../Images/lighttheme.png";
import dark from "../../Images/darktheme.png";
import { ImgTheme } from "./style";

const ToggleButton = () => {
  const [theme, setTheme] = useContext(themeContext);
  const updateTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  return (
    <div>
      <ImgTheme
        onClick={() =>
          updateTheme(theme.theme === "light" ? darkTheme : lightTheme)
        }
      >
        {theme.theme === "light" ? (
          <img src={light} alt="light" />
        ) : (
          <img src={dark} alt="dark" />
        )}
      </ImgTheme>
    </div>
  );
};

export default ToggleButton;
