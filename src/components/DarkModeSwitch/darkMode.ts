const isLightModeRequested = () =>
  matchMedia("(prefers-color-scheme: light)").matches;
const isDarkModeRequested = () =>
  matchMedia("(prefers-color-scheme: dark)").matches;

const isPersisted = (mode: string) => localStorage.getItem("theme") === mode;
const persist = (mode: string) => localStorage.setItem("theme", mode);
const clearPreferences = () => localStorage.removeItem("theme");

export const darkMode = {
  isEnabled: () => {
    switch (true) {
      case !process.browser:
        return false;

      case isPersisted("dark"):
        return true;
      case isPersisted("light"):
        return false;

      default:
        return isDarkModeRequested();
    }
  },
  persist: (isDarkMode: boolean) => {
    if (isLightModeRequested() && isDarkMode) persist("dark");
    else if (isDarkModeRequested() && !isDarkMode) persist("light");
    else clearPreferences();
  },
};
