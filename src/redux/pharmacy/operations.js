import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance, setToken } from "../instance";
import { toast } from "react-toastify";

export const getNearestStores = createAsyncThunk(
  "pharmacy/nearestStores",
  async (body, { rejectWithValue }) => {
    try {
      const { limit = 6 } = body;
      const { data } = await instance.get(`/stores/nearest?limit=${limit}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getReviews = createAsyncThunk(
  "pharmacy/reviews",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/customer-reviews");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAllStores = createAsyncThunk(
  "pharmacy/stores",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/stores");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "pharmacy/products",
  async (body, { rejectWithValue }) => {
    try {
      const { category = "", name = "", page = "", limit = "" } = body;
      const { data } = await instance.get(
        `/products?category=${category}&name=${name}&page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  "pharmacy/productById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(`/products/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCart = createAsyncThunk(
  "pharmacy/cartAdd",
  async (body, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.patch("/cart/add", body);
      toast.success("Product added to cart");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCartItems = createAsyncThunk(
  "pharmacy/cartItems",
  async (_, { rejectWithValue, getState }) => {
    const token = getState().auth.token;
    setToken(token);
    try {
      if (!token) {
        throw new Error("Token is missing");
      }
      const { data } = await instance.get("/cart");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCart = createAsyncThunk(
  "pharmacy/cartUpdate",
  async (body, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.put("/cart/update", body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const cartCheckout = createAsyncThunk(
  "pharmacy/cartCheckout",
  async (body, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.post("/cart/checkout", body);
      toast.success("The order is successful.");
      return data;
    } catch (error) {
      toast.error("Something went wrong, please try again.");
      return rejectWithValue(error.message);
    }
  }
);

export const deleteCart = createAsyncThunk(
  "pharmacy/cartRemove",
  async (id, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.delete(`/cart/remove/${id}`);
      toast.success("Product removed from cart");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const decreaseQuantity = createAsyncThunk(
  "pharmacy/cartDecrease",
  async (body, { rejectWithValue, getState }) => {
    try {
      setToken(getState().auth.token);
      const { data } = await instance.patch("/cart/decrease", body);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
