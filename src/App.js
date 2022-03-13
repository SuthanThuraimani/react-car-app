
import './App.css';
import Box from "@mui/material/Box";
import NotFound from './pages/404page';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Footer from './component/Footer';
import Home from './pages/home';
import Header from './component/Header';

function App() {

  return (
    <Router>
    <div>
      <Box
        sx={{          
          width: "100%",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
        "left main main main"
        "footer footer footer footer"`
        }}
      >
      <Header />        
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/*" element={<NotFound />} />
        </Routes> 
        <Footer/>
      </Box>     
    </div>
    </Router>
  );
}

export default App;
