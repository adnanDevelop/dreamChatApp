import Cookie from "js-cookie";

export const setCookie = (name, value) => {
  return Cookie.set(name, value, {
    expires: 1,
  });
};

export const getCookie = (name) => {
  return Cookie.get(name);
};


export const removeCookie = (name) => {
  return Cookie.remove(name);
};
