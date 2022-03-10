
import { useState, useEffect } from "react";
import axios from "axios";
import Configuration from "../utils/configuration";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  });
async function getCars(){
   const resp = await axios.get(Configuration.API_URL)
   if(resp.status === 200){
       return resp.data;
   } else {
       // error handling
   }
}

export default function CarDetail({classes}){
    const [cars, setcars] = useState([]);
    const [count, setcount] = useState({carsCount:0, pageCount:0});

    useEffect(() =>  (async () => {
        const val = await getCars();
        setcars(val.cars);
        setcount({carsCount: val.totalCarsCount, pageCount:val.totalPageCount})
      })(), []);

 return  <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{cars.map(item => 
    <><ListItem alignItems="flex-start">
         <ListItemAvatar>
             <Avatar alt="Remy Sharp" src={item.pictureUrl} />
         </ListItemAvatar>
         <ListItemText
             primary={item.manufacturerName}
             secondary={<>
                 <Typography sx={{ display: 'inline' }}
                     component="span"
                     variant="body2"
                     color="text.primary">
                     Ali Connors
                 </Typography>
                 {" — I'll be in your neighborhood doing errands this…"}
             </>} />
     </ListItem><Divider variant="inset" component="li" /></>)  
  }</List>;
}

