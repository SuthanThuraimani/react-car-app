import { Box, Stack, Typography } from '@mui/material';
import Configuration from '../utils/configuration';
import { useNavigate } from "react-router-dom";

export default function NotFound(){
    const navigate = useNavigate();
    const navigatetoHome = () => navigate('/');
    return  <Stack sx={{ gridArea:  "2 / 1 / span 1 / span 4" , mt: 5, textAlign: "center"}}>
    <Typography gutterBottom variant="h5" component="div">
        <img src={Configuration.LOGO} width="250" height="50" alt="Auto1 group" />
    </Typography>
        
    <Typography gutterBottom variant="h5" component="div">
      404 - Not Found
    </Typography>
    <Typography gutterBottom variant="h6" component="div">
        Sorry, the page you are looking for does not exist.
    </Typography>
    <Typography gutterBottom variant="h6" component="div">
        You can always go back to the <Box component="span" color="#EA7F28" typography='h6' onClick={() => navigatetoHome()}>homepage</Box>.
    </Typography>
    </Stack>;
}