import { useState } from "react";
import { useStateContext } from "../../context/StateContext";

const Pengaturan = () => {
  const [notification, setNotification] = useState(true);
  const [theme, setTheme] = useState("light");

  const toggleNotification = () => {
    setNotification(!notification);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : theme === "dark" ? "pink" : "light";
    setTheme(newTheme);
  };

  const { open } = useStateContext();

  return (
    <section
      className={`font-poppins py-5 px-5 ${
        open ? "md:pl-[261px]" : "w-full md:pl-[82px]"
      } duration-500`}
    >
      <div className={`settings-container-${theme} h-screen`}>
        <h1 className="settings-title">Pengaturan</h1>
        <div className="setting-item">
          <label className="setting-label">Notifikasi</label>
          <div className="toggle">
            <input
              type="checkbox"
              checked={notification}
              onChange={toggleNotification}
              id="toggle-notification"
            />
            <label htmlFor="toggle-notification" className="toggle-slider"></label>
          </div>
        </div>
        <div className="setting-item">
          <label className="setting-label">Mode Tema</label>
          <div className="theme-options">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={toggleTheme}
              id="theme-light"
            />
            <label htmlFor="theme-light" className="theme-label theme-light"></label>

            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={toggleTheme}
              id="theme-dark"
            />
            <label htmlFor="theme-dark" className="theme-label theme-dark"></label>

            <input
              type="radio"
              name="theme"
              value="pink"
              checked={theme === "pink"}
              onChange={toggleTheme}
              id="theme-pink"
            />
            <label htmlFor="theme-pink" className="theme-label theme-pink"></label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pengaturan;
