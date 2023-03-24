import axios from "axios";

const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

export const getTeamMembers = async (page) => {
    const URL = await `${BASE_URL}users?page=${page}&count=6`;
    return axios.get(URL).then(response => response.data);
};

export const getPositions = async () => {
    const URL = `${BASE_URL}positions`;
    return axios.get(URL).then(response => response.data);
  };
  
  export const getToken = async () => {
    const URL = `${BASE_URL}token`;
    return axios.get(URL).then(response => response.data);
  }

/*
useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token') 
    .then(response => response.json()) 
    .then(token =>  setTokenInfo(token))
    .catch(error => console.log(error))
  }, []);

*/