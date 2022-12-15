export const BASE_URL = "https://auth.nomoreparties.co";

// Регистрация
export const register = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};
/* Успешный ответ
  {
    "data": {
        "_id": "5f5204c577488bcaa8b7bdf2",,
        "email": "email@yandex.ru"
    }
} */

// Авторизация в сервисе 
export const authorize = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  })
/*     .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        localStorage.setItem("jwt", data.jwt);
        return data;
      }
    }) */
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
};
/* Успешный ответ
{
    "token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjUxNDhlNWJiODhmZGNhOTIxYjZhYzciLCJpYXQiOjE1OTkyMTExNzN9.Q3DVLh7t0f0BjyG9gh3UlUREYQxl2chdGTGy701lF6I"
} */

// Получение e-mail авторизованного пользователя
export const userEmail = (jwt) => {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        "Content-Type": "application/json",
        "Authorization" : `Bearer ${jwt}`
      }
    })
      .then((res) => {
        res.ok ? 
          res.json() : 
          Promise.reject(`Ошибка: ${res.status}`)
      });
  };
/* Успешный ответ
{
    "_id":"1f525cf06e02630312f3fed7",
    "email":"email@email.ru"
} */

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
}
