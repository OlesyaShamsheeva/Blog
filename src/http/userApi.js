import {authHost, host} from "./index"
import jwt_decode from "jwt-decode";
//регистрация я получила с компоненты данные и отправляю на сервер
export const registration = async (
    firstName,
    lastName,
    emailAddress,
    password,
) => {
  const data = await host.post("api/auth/registration", {
    firstName,
    lastName,
    emailAddress,
    password,
  });
  return data;
};
//авторизация я получила с компоненты данные и отправляю на сервер
export const authorization = async (emailAddress, password) => {
  const {data} = await host.post("api/auth/authorization", {
    emailAddress,
    password,
  });
  localStorage.setItem("token", data.token);
  console.log(data.token)
  return data.user;
};


export const myProfile = async (userId) => {
  const {data} = await authHost.get(`api/user/${userId}`);
  console.log(data.token)
  return jwt_decode(data.token);
};


export const updateProfile = async (data) => {
  const data3 = await authHost.patch(`api/user/updateProfile/${data.userId}`, data);
  return jwt_decode(data3.token);
  ;
};
export const deletePhoto = async (avatar) => {
  const data3 = await authHost.delete(`api/user/image/`, avatar);
  return jwt_decode(data3.token);
  ;
};





