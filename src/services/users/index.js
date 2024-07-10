import { api } from "../api"

export default {
    create: (data)=> {
        return api.post("/user", data)
    },
    login: (data)=> {
        console.log(data)
        return api.post("/login", data)
    }
}