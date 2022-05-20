import logo from './images/circle.png';
import logo_blue from './images/logo_blue.png';
import Shlang from "./images/shlang.png";
import './Css/style.css';
import Banner from './Components/Banner';
import AboutUS from './Components/AboutUS';

// const title_info = [
//   {info: `Kompyuter savodxonligi`},
//   {info: `Blender`},
//   {info: `3Ds max & Autocad kurslari`},
//   {info: `IT  dasturlash / Mobile dasturlash `},
//   {info: `IT foundation`},
//   {info: `Blogerlik `},
//   {info: `Mexatronika`},
//   {info: `Interyer dizayn`},
//   {info: `Grafik Dizayn / Web dizayn`},
//   {info: `Video montaj  / Moushn grafika `},
//   {info: `Robototexnika kurslari  `},
//   {info: `Lego Mindstorm (bolalar uchun)`},
//   {info: `Aviasport bolalar uchun`},
// ]
function App() {
  return (
    <div className="App">
      <Banner info="Samarqand viloyati yoshlar texnoparki" image2={Shlang}  image={logo_blue} button="zamonaviy  ilm  poydevori !" />
      <AboutUS/>
    </div>
  );
}

export default App;
