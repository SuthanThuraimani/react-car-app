import Box from "@mui/material/Box";
import CarDetail from './../component/CarList';
import FilterPanel from './../component/FilterPanel';
import { useState } from 'react';

export default function Home(){
    const [filterOptions, setFilterOptions] = useState({color:'',manufacturer:''})
    const applyFilter = (color, manufacturer) => {
         console.log(color, manufacturer);
         setFilterOptions({color, manufacturer})
    }
    return <>
    <Box sx={{ gridArea: "left" , mt: 5}}><FilterPanel filtercb={applyFilter}></FilterPanel></Box>
    <Box sx={{ gridArea: "main" , mt: 5}}><CarDetail params={filterOptions}></CarDetail></Box>        
</>
}