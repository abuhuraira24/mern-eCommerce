import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { callApi, getLocalstorage, removeLocalstorage } from "../../../utils";

const initialState = {
  isLoading: false,
  isError: false,
  products: null,
  newOrder: null,
  orders: null,
};

export const createOrder = createAsyncThunk(
  "v2/createneworder",
  async ({ values, navigate }) => {
    try {
      let response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/V2/createorder`,
        values,
        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );

      response.navigate = navigate;

      return response;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);

export const getOrder = createAsyncThunk(
  "v2/getorder",
  async ({ order_id }) => {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/V2/getorder/${order_id}`,

        {
          headers: {
            Authorization: "Bearer " + getLocalstorage("user_info"),
          },
        }
      );

      return response.data;
    } catch (error) {
      return await error.response.data.errors;
    }
  }
);
export const getOrders = createAsyncThunk("v2/getorders", async () => {
  return await callApi({
    pathOne: "v2",
    pathTwo: "getorders",
    method: "get",
  });
});

// async () => {
//   return await callApi({
//     pathOne: "v2",
//     pathTwo: "getorders",
//     method: "get",
//   });
// }

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: (state) => {
      console.log(state);
    },
  },
  extraReducers: {
    [createOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [createOrder.fulfilled]: (state, { payload }) => {
      const { navigate, data } = payload;
      state.isLoading = false;
      state.newOrder = data.order;

      removeLocalstorage("carts");

      if (data.order) {
        navigate(`/order_success/${data.order._id}`);
      }
    },
    [createOrder.rejected]: (state) => {
      state.isLoading = false;
    },

    // Get order
    [getOrder.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrder.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      if (payload.order) {
        state.newOrder = payload.order;
      }
    },
    [getOrder.rejected]: (state) => {
      state.isLoading = false;
    },
    // Get orders
    [getOrders.pending]: (state) => {
      state.isLoading = true;
    },
    [getOrders.fulfilled]: (state, { payload }) => {
      state.isLoading = false;

      if (payload.orders) {
        state.orders = payload.orders;
      }
    },
    [getOrders.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addOrder } = orderSlice.actions;

export default orderSlice.reducer;