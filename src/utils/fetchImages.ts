import axios from 'axios';

export const  fetchImages = async (count = 18) => {
  const apiRoot = "https://api.unsplash.com";
  const accessKey = 'FSGH0Ay-umP5SL3DW-gO5JS118eOrqBOaBjNlbZi4kk';
  
  const result = await axios.get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
  const { data } = await result;
  return data;
}
