import logo from './logo.svg';
import './App.css';
import Navbar from './components/Header/Navbar/Navbar';
import PipelineBackground from './components/Background/PipelineBG';

function App() {
  return (
    <div className="relative w-full h-full bg-[#474344]">


      {/* Navbar on top */}
      <Navbar className="fixed top-0 left-0 w-full z-50 bg-black/50" />

      {/* Page sections */}
      <div className="relative z-20">
        {/* Hero Section with pipeline background */}
        <section
          id="home"
          className="relative h-screen overflow-hidden"
        >
          {/* Pipeline background */}
          <PipelineBackground />

          {/* Hero content */}
          <div className="
      flex flex-col items-center justify-center
      md:items-start md:justify-end md:absolute md:bottom-10 md:left-10
      w-full h-full px-4 text-white z-20
      text-center md:text-left
    "
          >
            <h1 className="text-4xl font-bold mb-4">
              Let’s turn your data into <br />
              powerful insights through <br />
              engineered data pipelines.
            </h1>
            <p className="text-xl max-w-lg mb-6">
              I am Jay Dan Baculi, an aspiring Data Engineer.
            </p>
            <a
              href="#portfolio"
              className="bg-[#Cb9531] hover:bg-[#e0b53c] px-6 py-3 rounded-lg text-black font-semibold transition"
            >
              View My Portfolio
            </a>
          </div>
        </section>

        {/* Other sections */}
        <section id="aboutme" className="h-screen flex justify-center items-center text-white">
          About Section
        </section>
        <section id="portfolio" className="h-screen flex justify-center items-center text-white">
          Portfolio Section
        </section>
        <section id="contact" className="h-screen flex justify-center items-center text-white">
          Contact Section
        </section>
      </div>
    </div>
  )
}

export default App;
