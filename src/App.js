import { Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';
import CarDetail from './component/CarList';
import FilterPanel from './component/FilterPanel';
import Configuration from './utils/configuration';
import Box from "@mui/material/Box";
import { borderBottom } from '@mui/system';

function App() {
  const [filterOptions, setFilterOptions] = useState({color:'',manufacturer:''})
  const applyFilter = (color, manufacturer) => {
       console.log(color, manufacturer);
       setFilterOptions({color, manufacturer})
  }
  return (
    <div>
      <Box
        sx={{          
          width: "100%",
          height: "960px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
        "left main main main"
        "footer footer footer footer"`
        }}
      >
        <Box sx={{ display: "grid", gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)", gridArea: "header", height: "80px", borderBottom:1 }}>
        <img src={Configuration.LOGO} alt="logo" />
          <Grid container  pr={5} justifyContent="flex-end" alignItems="center" spacing={3}>
            <Grid item >
              Purchase
            </Grid>
            <Grid item>
              My Orders
            </Grid>
            <Grid item>
              Sell
            </Grid>
          </Grid>
      </Box>
        <Box sx={{ gridArea: "left" , mt: 5}}><FilterPanel filtercb={applyFilter}></FilterPanel></Box>
        <Box sx={{ gridArea: "main" , mt: 5}}><CarDetail params={filterOptions}></CarDetail></Box>        
        <Box sx={{ gridArea: "footer",display: "flex",
          justifyContent: "center",alignItems: "center", borderTop:1, height: "80px" }}>
        © AUTO1 Group 2018
        </Box>
      </Box>      
    </div>
  );
}

export default App;
