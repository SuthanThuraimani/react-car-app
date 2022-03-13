import Box from "@mui/material/Box";
import { Grid } from '@mui/material';
import Configuration from './../utils/configuration';
import { Link, useNavigate } from "react-router-dom";

export default function Header(){
    
    const navigate = useNavigate();
    const navigateto = (comp) => navigate(`/${comp}`);

    return <Box sx={{ display: "grid", gap: 1,
            gridTemplateColumns: "repeat(2, 1fr)", gridArea: "header", height: "80px", borderBottom:1 }}>
            <img src={Configuration.LOGO} alt="logo" onClick={()=>navigateto('')} />
                <Grid container  pr={5} justifyContent="flex-end" alignItems="center" spacing={3}>
                <Grid item onClick={()=>navigateto('notfound')}>
                Purchase
                </Grid>
                <Grid item onClick={()=>navigateto('notfound')}>
                    My Orders
                </Grid>
                <Grid item onClick={()=>navigateto('notfound')}>
                    Sell
                </Grid>
                </Grid>
            </Box>;
}
