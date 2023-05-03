import axios from "axios";
import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
} from "../constants/product";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get(
      `https://api-test.innoloft.com/product/6781/`
    );
    // if (data) {
    //   console.log("listProducts", data);
    // }
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateProduct =
  (id, title, companyName, investmentOffer, imageUrl) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_UPDATE_REQUEST });

      const { data } = await axios.put(
        `https://api-test.innoloft.com/product/6781/${id}`,
        {
          title: title,
          companyName: companyName,
          investmentOffer: investmentOffer,
          imageUrl: imageUrl,
        },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "http://localhost:5173",
            "Access-Control-Allow-Credentials": true,
          },
        }
      );

      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
        payload: data,
      });

      console.log("update successful", data);
    } catch (error) {
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
