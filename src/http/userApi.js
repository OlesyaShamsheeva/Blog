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

  return data.user;
};


export const updateProfile= async (
    user
) => {
  const {data} = await authHost.patch(`api/user/updateProfile/${data.userId}`,{
    ...user
  });
  localStorage.setItem("user", JSON.stringify(data.user));
  return data.user;

};

export const deletePhoto = async (avatar) => {
  const data3 = await authHost.delete(`api/user/image/`, avatar);
  return data3;
  ;
};





