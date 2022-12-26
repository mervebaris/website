import "bootstrap/dist/css/bootstrap.min.css";

import Menu from "./components/Menu";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Banner3 from "./components/Banner3";
import Banner4 from "./components/Banner4";
import Footer from "./components/Footer";
import './App.css';







function App() {
  return (
 <>
    <div className="App">
      <Menu />
    </div>
    <div className="App">
      <Header />
    </div>
    <div className="App">
      <Banner />
    </div>
    <div className="App">
      <Banner2 />
    </div>
    <div className="App">
      <Banner3 />
    </div>
    <div className="App">
      <Banner4 />
    </div>
    <div className="App">
      <Footer />
    </div>
 </>
  );

}

export default App;
