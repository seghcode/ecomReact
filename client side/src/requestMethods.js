import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDJhNjRlYjMzMTUzMWM1ZmRlOGFmNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjU2NDc3MiwiZXhwIjoxNjYyODIzOTcyfQ.GiVAdZeA3qYDWje3dcidlsKa2JJu84m2_VWSI00oqhk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
