
import { useEffect, useState } from 'react';
import {getCarDetails} from './../utils/apiservice';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ColorButton } from '../utils/uicontrols';

function CarDetails({carId}){
    const [detail, setDetail] = useState({});
    useEffect(()=>{
      (async () => {
        const cardetail = await getCarDetails(carId);
        setDetail(cardetail.car);
      })();
    }, [carId]);
 return <Container maxWidth="false">
        <Box sx={{ bgcolor: 'background.paper', color: '#4A4A4A', height:'90vh' }} >     
            <Grid container spacing={2} direction="row" justifyContent="center" alignItems={"stretch"}>
        <Grid item xs={6}>
            <Typography gutterBottom variant="h6" component="div">
                {detail.manufacturerName} {detail.modelName}
            </Typography>
            <Typography variant="body2" gutterBottom>
               Stock # {detail.stockNumber} - {detail.mileage?.number}{detail.mileage?.unit}  - {detail.fuelType} - {detail.color}
            </Typography>
            <Typography variant="body2" gutterBottom>
              This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.
            </Typography>
        </Grid>
        <Grid item xs={4}>
            <Paper sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          border: 1,
          p: 2,
          minWidth: 300,
        }} square={false} variant="outlined">
            <Typography variant="h6" gutterBottom>If you like this car, click the button and save it in your collection of favourite items.</Typography>
            <Grid container sx={{alignItems: "flex-end",justifyContent:"flex-end"}}><ColorButton sx={{justifyContent:"flex-end"}} variant="contained" onClick={(evt)=>{evt.preventDefault();evt.stopPropagation();return false;}}>Save</ColorButton></Grid></Paper>
        </Grid>
     </Grid>
    </Box>
</Container>;
}

export default CarDetails;