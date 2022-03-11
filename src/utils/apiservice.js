import axios from "axios";
import Configuration from "./configuration";

async function getCars(params){
    console.log(params);
    return await AxiosGetCall(Configuration.API_URL, {params})
}
async function getCarColors(){
   return await AxiosGetCall(Configuration.COLOR_API_URL)
}
async function getCarManufacturers(){
    return await AxiosGetCall(Configuration.MFT_API_URL);
}

const AxiosGetCall = async (url, params) => {
    let resp = '';
    if(params) {
        resp = await axios.get(url, params)
    } else {
        resp = await axios.get(url)
    }
     
   if(resp.status === 200){
       return resp.data;
   } else {
       // error handling
   }
};

export {getCars, getCarColors, getCarManufacturers}