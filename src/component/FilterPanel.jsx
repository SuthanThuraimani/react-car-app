
import React, { useEffect, useMemo, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {ColorButton} from '../utils/uicontrols'
import { getCarColors, getCarManufacturers } from "../utils/apiservice";

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
      <Box sx={{ height: "60vh" }}>
        <div>Color</div>
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
        <div>Manufacturer</div>
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
        <ColorButton variant="contained"  onClick={() => filtercb(color, mfr)}>Filter</ColorButton>
      </Box>
    </Container>
  </React.Fragment>
}