import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, instance, setToken } from "../instance";
import { toast } from "react-toastify";

export const registration = createAsyncThunk(
  "user/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const data = await instance.post("/user/register", credentials);
      setToken(data.token);
      toast.success("Successful operation");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Email or password invalid");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 409:
          toast.error("Such email already exists");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return;
      }
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/user/login", credentials);
      setToken(data.token);
      toast.success("Successful operation");
      return data;
    } catch (error) {
      switch (error.response?.status) {
        case 400:
          toast.error("Bad request (invalid request body)");
          break;
        case 401:
          toast.error("Email or password invalid");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return;
      }
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/user/logout");
      toast.success("Successful operation");
      clearToken();
      return;
    } catch (error) {
      switch (error.response?.status) {
        case 401:
          toast.error("Unauthorized");
          break;
        case 404:
          toast.error("Service not found");
          break;
        case 500:
          toast.error("Server error");
          break;
        default:
          return rejectWithValue(error);
      }
    }
  }
);

export const getUserInfo = createAsyncThunk(
  "user/userInfo",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    setToken(token);
    try {
      if (!token) {
        throw new Error("Token is missing");
      }
      const { data } = await instance.get("/user/user-info");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
