import { server } from "./store";
import axios from "axios"



export const getRegister = (name, email, password, gender, experienced, cities, sendUpdates) => async (dispatch) => {
    try {
        dispatch({ type: "getRegisterRequest" });
        const { data } = await axios.post(`${server}/registeruser`, { name, email, password, gender, experienced, cities, sendUpdates }, {
            headers: {
                "Content-Type": "application/json",

            },
        });
        dispatch({ type: "getRegisterSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "getRegisterFail", payload: error.response.data.message });
    }
}
