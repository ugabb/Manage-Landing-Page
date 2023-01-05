import Navbar from "./Components/Navbar";
import Main from './Components/Main.jsx'
import Features from "./Components/Features.jsx";
import Testimonials from "./Components/Testimonials";
import BannerGetStarted from "./Components/BannerGetStarted";
import Footer from "./Components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Main />
      <Features />
      <Testimonials />
      <BannerGetStarted />
      <Footer />
    </div>
  );
}

export default App;
