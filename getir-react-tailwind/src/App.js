import {useWindowWidth} from "@react-hook/window-size";
import Header from "./components/Header";
import Campaigns from "./components/Campaigns";
import HeroSection from "./components/HeroSection";
import Categories from "./components/Categories";
import Favorites from "./components/Favorites";
import MobileApp from "./components/MobileApp";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {

  const width = useWindowWidth()

  return (
    <>
      <Header/>
      {width < 640 && <Campaigns/>}
      <HeroSection/>
      <Categories/>
      <div className="grid gap-y-6 pb-14 container mx-auto">
        {width > 640 && <Campaigns/>}
        <Favorites/>
        <MobileApp/>
        <Cards/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
