
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
import Pagination from '@mui/material/Pagination';

import {getCars} from './../utils/apiservice'

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
// async function getCars(pageno){
//    const resp = await axios.get(Configuration.API_URL, {params:{page:pageno}})
//    if(resp.status === 200){
//        return resp.data;
//    } else {
//        // error handling
//    }
// }

export default function CarDetail({params}){
  console.log(params);
    const [cars, setcars] = useState([]);
    const [count, setcount] = useState({carsCount:0, pageCount:0});
    const [page, setPage] = useState(1);
    useEffect(() =>  (async () => {
        const val = await getCars({...params,page});
        console.log(val);
        setcars(val.cars);
        setcount({carsCount: val.totalCarsCount, pageCount:val.totalPageCount})
      })(), [page, params]);

      const handleChange = (event, value) => {
        setPage(value);
      };

 return  <><List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>{cars.map(item => 
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
     </ListItem><Divider variant="inset" component="li" />
     </>)  
  }</List>
  <Pagination showFirstButton showLastButton count={10} page={page} onChange={handleChange} />
  </>;
}


