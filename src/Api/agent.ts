import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = 'http://localhost:5000/api/';
axios.defaults.withCredentials = true;

const sleep =() => new Promise(resolve => setTimeout(resolve, 2000));

const responseBody = (response : AxiosResponse) => response.data;

const requests = {
    get: (url : string) => axios.get(url).then(responseBody),
    post : (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put : (url : string, body: {}) => axios.put(url, body).then(responseBody),
    delete : (url: string) => axios.delete(url).then(responseBody)
}

const BhajanCatalog = {
    list : () => requests.get('Posts'),
    details : (id : number) => requests.get(`Posts/${id}`),
    deleteBhajan : (id: number) => requests.delete(`Posts/${id}`),
    postBhajan : () => requests.post("Posts", {}),
}

axios.interceptors.response.use(async response => {
await sleep();
console.log(sleep());
return response;
});

const agent ={
    BhajanCatalog,
}

export default agent;