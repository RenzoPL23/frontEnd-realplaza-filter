import axios from "axios";
import { baseURL } from './../Config/baseUrl';

const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

export const ListarProductos = (data: any) => {
    return axios.post(baseURL + "productos/ListarProductos", data, config);
};

export const Total_Productos = (data: any) => {
    return axios.post(baseURL + "productos/Total", data, config);
};