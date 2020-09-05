import axios from "axios";

const instance = axios.create({
  baseURL: "https://workingg.app/api/login/apiComic",
});
const API_KEY = 'd0b35a9a2365fd1eb35a79452c743a9942668183';
const Api = async (path,d={})=>{
    let {data} =  await instance.get('',{
        params:{
            api_key:API_KEY,
            url: "https://comicvine.gamespot.com/api/",
            format:'json',
            path,
            ...d
        }
    })
    console.log('DATA',data);
    return data;
}
export default Api