
import { useState, useEffect } from "react";
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import {getCars} from './../utils/apiservice';
import CarDetails from './CarDetails';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CarDetail({params}){
    const [cars, setcars] = useState([]);
    const [count, setcount] = useState({carsCount:0, pageCount:0});
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [selectedStock, setSelectedStock] = useState('');
 
    useEffect(() =>  (async () => {
      const val = await getCars({...params,page});
      setcars(val.cars);
      setcount({carsCount: val.totalCarsCount, pageCount:val.totalPageCount})
    })(), [page, params]);
    useEffect(() => {setPage(1);},[params])
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = (selectedNum) => {
      setSelectedStock(selectedNum);
      setOpen(!open);
    };
    const handleChange = (event, value) => {
      setPage(value);
    };

 return  (cars.length > 0) ? <Stack spacing={2}>
   <Typography variant="h5" gutterBottom>
     Available Cars
   </Typography>
   <Typography variant="h6" gutterBottom>
     Showing {Math.min(parseInt(page) * 10, count.carsCount)} of {count.carsCount} results
   </Typography>
  {cars.map(item => <Paper
      sx={{
        p: 2,
        m: 2,
        border: 1,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="car" src={item.pictureUrl} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="h6" component="div">
                {item.manufacturerName} {item.modelName}
              </Typography>
              <Typography variant="body2" gutterBottom>
              Stock # {item.stockNumber} - {item.mileage.number}{item.mileage.unit} - {item.fuelType} - {item.color}
              </Typography>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                <Link component="button"
                      variant="body2"
                      color="#EA7F28"
                      underline="hover"
                      onClick={() => handleToggle(item.stockNumber)}>
                  View Details
                </Link>
              </Typography>
            </Grid>           
          </Grid>
        </Grid>
      </Grid>
    </Paper>)}
  <Box sx={{p:5}}><Pagination showFirstButton showLastButton count={count.pageCount} page={page} onChange={handleChange} /></Box>
  <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        {open && <CarDetails carId={selectedStock}></CarDetails>}
      </Backdrop>
  </Stack>: <div>No data</div>;
}


