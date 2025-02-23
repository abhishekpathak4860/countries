import { useTheme } from "../hooks/useTheme";

export default function Header() {
  // const [mode,setmode]=theme;
  const [mode,setmode] = useTheme();
  // console.log(typeof JSON.parse(localStorage.getItem("isDarkMode")));
  // if(mode){
  //   document.body.classList.add("dark");
  //  }else{
  //   document.body.classList.remove("dark");
  //  }

  const toggle = () => {
    setmode(!mode);
    localStorage.setItem('isDarkMode', !mode);
  }



  return (
    <header className={`${mode ? "dark" : ""}`}>
      <div className="header-content">
        <h2 className="title">Where in the world?</h2>
        <p className="mode-toggle" onClick={toggle}>
          <i className={mode ? "fa-regular fa-sun" : "fa-regular fa-moon"} /> {mode ? "Light Mode" : "Dark Mode"}

        </p>
      </div>
    </header>
  )
}
