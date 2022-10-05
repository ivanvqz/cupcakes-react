import Header from './sections/Header'
import Home from './pages/home'
import Cupcakes from './pages/cupcakes'
import AboutUs from './pages/aboutUs'
import Footer from './sections/Footer'
import '../styles/styles.scss'
import {
  BrowserRouter,
  Routes,
  Route
  // Link,
} from "react-router-dom"

function App() {
  return (
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route path="/">
    //       <Home />
    //     </Route>

    //     <Route path="/cupcakes">
    //       <Cupcakes />
    //     </Route>
    //   </Switch> 
    // </Router>
    
    <BrowserRouter>

      <Header />
    
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/cupcakes" element={<Cupcakes title peticion="cupcakes"/>} /> {/*se pasan prpiedades*/}
        <Route path="/aboutUs" element={<AboutUs />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App