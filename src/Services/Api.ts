
import axios from 'axios';

// const customAxios = axios.create({
//     baseURL: 'https://v2.jokeapi.dev/joke', 
//   });
// https://api.themoviedb.org/3/discover/movie?page=1&api_key=3fd67b0a75a2861ff71511c8065512a7

// const apiKey=`3fd67b0a75a2861ff71511c8065512a7`;
const apiKey=`a5320afe4b8da043225cea23c0eb7d80`;
const apiUrl = 'https://api.themoviedb.org/3';
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';

  export const getDetails=async(para:number)=>{
  
    const url = `${apiUrl}/discover/movie?page=${para}&api_key=${apiKey}`;

    // const options = {
    //     method: 'GET',
    //     url: url,
    //     headers: {
    //       'X-RapidAPI-Key': 'fa768dac06msh357dbef4a19289fp178612jsn16ca193dff2d',
    //       'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    //     }
    //   };

      try{
        const res=await axios.get(url);
      console.log(res.data);
        return res.data
      }catch(error){
        console.error('Error fetching data:', error);
        throw error;
      }
    
  }
  


  // extracting each movie data through movie ID


  export const getEachMovie=async(id:string|undefined)=>{
    const url = `${apiUrl}/movie/${id}?api_key=${apiKey}`;

    try{
      const res=await axios.get(url);
   
      return res.data
    }catch(error){
      console.error('Error fetching data:', error);
      throw error;
    }

  
  }



  // fetching recommendation of particular ID
  export const getRecommmendationData=async(id:string|undefined,pageNo:number)=>{


    const url = `${apiUrl}/movie/${id}/recommendations?page=${pageNo}&api_key=${apiKey}`;

    try{
      const res=await axios.get(url);
     
      return res.data;
      
    }catch(error){
      console.error('Error fetching data:', error);
      throw error;
    }

  
  }