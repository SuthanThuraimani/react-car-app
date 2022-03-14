import Box from "@mui/material/Box";

export default function Footer(){
    return <Box sx={{ gridArea: "footer",display: "flex",
    justifyContent: "center",alignItems: "center", borderTop:1, height: "80px" }}>
  © Car Group 2018
  </Box>
}
