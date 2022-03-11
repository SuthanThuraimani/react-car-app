import axios from "axios";
import Configuration from "./configuration";

async function getCars(){
  return []
}
async function getCarColors(){
   return await AxiosGetCall('https://auto1-mock-server.herokuapp.com/api/colors')
}
async function getCarManufacturers(){
    return await AxiosGetCall('https://auto1-mock-server.herokuapp.com/api/manufacturers');
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