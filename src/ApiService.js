import axios from "axios";
import { API_BASE_URL } from "./app-config";

export function call(api, method, data) {

    const accessToken = sessionStorage.getItem("ACCESS_TOKEN");

    return axios({
        url: API_BASE_URL + api,
        method: method,
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + accessToken
        },
        data: data
        
    }).then((response) => response.data)
    .catch((error) => {
        if(error.response.status === 403) {
            window.location.href = "/login"
        }
    })
}


export function signin(userDTO) {
    return call("/auth/signin", "POST", userDTO)
    .then(response => {
        if(response.token == null) {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            window.location.href="/login";
        }
        sessionStorage.setItem('ACCESS_TOKEN', response.token);
        window.location.href="/";
    })
}

export function signout() {
    sessionStorage.clear();
    window.location.href="/login";
}

export function signup(userDTO) {
    return call("/auth/signup", "POST", userDTO);
}