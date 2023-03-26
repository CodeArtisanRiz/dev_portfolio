import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, FloatingHero, StarsCanvas} from './components';

const App = () => {
  return (
    <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero pattern bg-cover bg-no-repeat bg-center">
        <Navbar/>
        <Hero />
      </div>
      <div id='about'>
        <About/>
      </div>
      <Experience />
      <Tech />
      <div id='work'>
        <Works />
      </div>
      <Feedbacks />
      <div id="contact" className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      
      {/* <div className="relative z-0"><FloatingHero /></div> */}
      </div>
    </BrowserRouter>
  )
}

export default App
