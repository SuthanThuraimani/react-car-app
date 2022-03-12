
import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {ColorButton} from '../utils/uicontrols'
import { getCarColors, getCarManufacturers } from "../utils/apiservice";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function FilterPanel({filtercb}) {
    const [colorList, setColorList] = useState([]);
    const [mfrList, setManufacturerList] = useState([]);
    const [color, setColor] = useState("");
    const [mfr, setMfr] = useState('');
    useEffect(()=>{
        (async () => {
            const colorResp = await getCarColors();
            const mfrResp = await getCarManufacturers();
            setColorList(colorResp.colors);
            setManufacturerList(mfrResp.manufacturers);
        })();
    }, []);
    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const handleManuFactChange = (event) => {
        setMfr(event.target.value)
    }
    return <React.Fragment>
    <Container fixed>
      <Box sx={{ height: "30vh", border:1, p:3 }}>
        <Typography gutterBottom variant="h6" component="div">Color</Typography>
        <FormControl fullWidth>            
          <InputLabel id="select-color">
            All car colors
          </InputLabel>
          <Select
            labelId="select-color"
            id="color-select"
            value={color}
            label="Color"
            onChange={handleColorChange}
          >
            {colorList.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}            
          </Select>
        </FormControl>
        <Typography gutterBottom variant="h6" component="div">Manufacturer</Typography>
        <FormControl fullWidth>            
          <InputLabel id="select-manu">
            All manufacturers
          </InputLabel>
          <Select
            labelId="select-manu"
            id="manufact-select"
            value={mfr}
            label="Manufacturer"
            onChange={handleManuFactChange}
          >
            {mfrList.map((item, index) => <MenuItem key={index} value={item.name}>{item.name}</MenuItem>)}
          </Select>
        </FormControl>
        <Grid container sx={{alignItems: "flex-end",justifyContent:"flex-end"}}><ColorButton sx={{m:2}} variant="contained"  onClick={() => filtercb(color, mfr)}>Filter</ColorButton></Grid>
      </Box>
    </Container>
  </React.Fragment>
}