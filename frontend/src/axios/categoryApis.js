import { message } from "antd";
import { axiosInstance } from ".";
import { apiList } from "./apis";

export const getAllCategory = async (onSuccess = () => {}) => {
    try {
      const resp = await axiosInstance.get(apiList.getAllCategory, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (resp.data.success) {
        onSuccess(resp.data.data);
      } else {
        message.error(
          resp.data.message || "Something went Wrong, Please Try again"
        );
      }
    } catch (err) {
      message.error(
        err.response.data.message || "Something went Wrong, Please Try again"
      );
    }
}