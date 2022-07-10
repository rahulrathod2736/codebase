import { message } from "antd";
import { axiosInstance } from ".";
import { apiList } from "./apis";

export const createNewBlog = async (data, onSuccess = () => {}) => {
    try {
        const resp = await axiosInstance.post(apiList.createBlog, data, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        if (resp.data.success) {
          message.success(resp.data.message);
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

export const editBlog = async (id, data, onSuccess = () => {}) => {
  try {
    const resp = await axiosInstance.put(
      `${apiList.updateBlogById}${id}`,
      data,
      {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    if (resp.data.success) {
      message.success(resp.data.message);
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
};

export const getBlogById = async (id, onSuccess = () => {}) => {
    try {
      const resp = await axiosInstance.get(`${apiList.getBlogById}${id}`, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      if (resp.data.success) {
        const data = resp.data.data[0];
        onSuccess(data);
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

export const deleteBlogById = async (id, onSuccess = () => {}) => {
  try {
    const resp = await axiosInstance.delete(`${apiList.getBlogById}${id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    });
    if (resp.data.success) {
      message.success(resp.data.message);
      onSuccess();
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
};

