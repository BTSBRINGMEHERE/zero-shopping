import { useState, useEffect } from "react";

import styles from "./DarkMode.module.scss";

const DarkMode = () => {
  const [isDarkmode, setIsDarkmode] = useState(false);

  useEffect(() => {
    const darkModeSet = localStorage.getItem("darkmode");
    setIsDarkmode(darkModeSet === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("darkmode", isDarkmode.toString());

    document.body.classList.toggle("dark", isDarkmode);
  }, [isDarkmode]);

  return (
    <button
      className={styles.button}
      onClick={() => setIsDarkmode(!isDarkmode)}
    >
      {isDarkmode ? "💡" : "🌕"}
    </button>
  );
};

export default DarkMode;
