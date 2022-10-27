import { authHost, host } from './index'

export const registration = async (values) => {
  const data = await host.post('api/auth/registration', values);
  return data;
};

export const authorization = async (emailAddress, password) => {
  const { data } = await host.post('api/auth/authorization', {
    emailAddress,
    password,
  });
  localStorage.setItem('token', data.token);
  return data.user;
};

export const myProfile = async (userId) => {
  const { data } = await authHost.get(`api/user/${userId}`);
  return data;
};

export const updateProfile = async (
  user
) => {
  const { data } = await authHost.patch(`api/user/updateProfile/${user._id}`, {
    ...user
  });
  return data;
};

export const deletePhoto = async (avatar) => {
  const data = await authHost.delete(`api/user/image/`, avatar);
  return data;
  ;
};






