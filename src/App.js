import { Grid } from '@mui/material';
import { useState } from 'react';
import './App.css';
import CarDetail from './component/CarList';
import FilterPanel from './component/FilterPanel';
import Configuration from './utils/configuration';
import Box from "@mui/material/Box";

function App() {
  const [filterOptions, setFilterOptions] = useState({color:'',manufacturer:''})
  const applyFilter = (color, manufacturer) => {
       console.log(color, manufacturer);
       setFilterOptions({color, manufacturer})
  }
  return (
    <div className="App">
       <div className='header' style={{ width: "100%" }}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)"
        }}
      >
        <img src={Configuration.LOGO} alt="logo" />
          <Grid container  pr={5} justifyContent="flex-end" alignItems="center" spacing={3}>
            <Grid item >
              <>Purchase</>
            </Grid>
            <Grid item>
              <>My Orders</>
            </Grid>
            <Grid item>
              <>Sell</>
            </Grid>
          </Grid>
      </Box>
    </div>
       <div className='content'>
         <div className='leftside'><FilterPanel filtercb={applyFilter}></FilterPanel></div>
         <div className='rightside'><CarDetail params={filterOptions}></CarDetail></div></div>
       <div className='footer'>© AUTO1 Group 2018</div>
    </div>
  );
}

export default App;
