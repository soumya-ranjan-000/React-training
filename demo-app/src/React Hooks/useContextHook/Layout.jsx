import {useState} from "react";
import React from "react";
const theme={
  theme1:{
    backgroundContainer:"#676FA3",
    backgroundBody:"#EEF2FF",
    backgroundNavbar:"#CDDEFF",
    fontColor:"#191A19",
    buttonColor:"#000",
    buttonBackground:"#FF5959"
  },
  theme2:{
    backgroundContainer:"#577BC1",
    backgroundBody:"#344CB7",
    backgroundNavbar:"#000957",
    fontColor:"#EBE645",
    buttonColor:"#000957",
    buttonBackground:"#EBE645"
}
};
export const ThemeContext=React.createContext({});
const Layout = (props) => {
  const [toggleBtn,setToggleBtn]=useState(true);
  const toggleTheme=()=>{
    setToggleBtn(!toggleBtn);
  }

  return <section className={"vh-100 container-fluid p-2 px-3"}
  style={toggleBtn?{backgroundColor:theme.theme1.backgroundContainer,
    color:theme.theme1.fontColor}:{backgroundColor:theme.theme2.backgroundContainer,
    color:theme.theme2.fontColor}}
  >
    <ThemeContext.Provider value={toggleBtn ? {theme:theme.theme1,mode:toggleBtn,toggleTheme}:{theme:theme.theme2,toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  </section>
}
export default Layout;