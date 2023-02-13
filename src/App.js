import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import {ThemeProvider} from 'next-themes'



function App() {
  return (
    <>
    <ThemeProvider>

    <div className="max-w-6xl mx-auto p-5 space-y-24">

<Router >
     <Header />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Projects />} />
     </Routes>
    
</Router>

</div>
<Footer />

    </ThemeProvider>
    
   </>
  );
}

export default App;
