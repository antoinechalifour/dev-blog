import React, { useLayoutEffect, useState } from "react";

import { darkMode } from "./darkMode";
import { LabelLayout } from "./styles";

export const DarkModeSwitch: React.FC = () => {
  const [isDarkMode, setDarkMode] = useState(darkMode.isEnabled);

  useLayoutEffect(() => {
    if (isDarkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");

    darkMode.persist(isDarkMode);
  }, [isDarkMode]);

  return (
    <LabelLayout htmlFor="dark-mode">
      <input
        type="checkbox"
        id="dark-mode"
        defaultChecked={isDarkMode}
        onClick={() => setDarkMode(!isDarkMode)}
      />

      <span />

      <span>Theme sombre</span>
    </LabelLayout>
  );
};
