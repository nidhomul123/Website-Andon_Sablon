
import NavbarAndon from "./components/NavbarAndon";

import HeroAndon from "./components/HeroAndon";

import CategoryAndon from "./components/CategoryAndon";
// eslint-disable-next-line
import ServisAndon from "./components/ServisAndon";
// eslint-disable-next-line
import FaqAndon from "./components/FaqAndon";
// eslint-disable-next-line
import FooterAndon from "./components/FooterAndon";




function App() {
  return (
    <div>
    
         <NavbarAndon />
      {/*Containt*/}
      <HeroAndon />
      <br/>
       <CategoryAndon />
      <ServisAndon />
      <FaqAndon /> 
      {/*Containt*/}
      <FooterAndon />
    </div>
  );
}

export default App;
