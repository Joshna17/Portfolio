
import About from "./components/About/About"
import Certificates from "./components/Certificates/Certificates"
import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/navbar"
import Projects from "./components/Projects/Projects"


function App() {
  

  return (
      <div className="bg-white  h-auto w-full overflow-hidden">
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Certificates></Certificates>
        <Projects></Projects>
        <Footer></Footer>
    </div>
  )
}

export default App
