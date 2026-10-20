import { axiosInstance } from "../../../../config/axiosInstance"

export let getAllEmployees = async ()=> {
    try {
        let res = await axiosInstance.get("/employee");
        return res.data.data;
    } catch (error) {
        console.log("error is all employee api", error);
    }
};

getAllEmployees();