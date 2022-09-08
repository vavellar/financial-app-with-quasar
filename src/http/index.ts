import { AxiosHttpClient } from "./AxiosHttpClient";
import axios from "axios";

const instance = axios.create({
    baseURL: 'https://localhost:8000'
})

export const api = new AxiosHttpClient(instance)