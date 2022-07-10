import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";
import { apiList } from "../axios/apis";

export const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = async (data) => {
    try {
      const resp = await axiosInstance.post(apiList.signIn, data);
      if (resp.data.success) {
        message.success(resp.data.message);
        const {token, role} = resp.data.data;
        localStorage.setItem("accessToken", token);
        localStorage.setItem("role", role);
        setTimeout(() => {
          navigate("/dashboard", {replace: true});
        }, 1000);
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

  const navigateToSignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <div className="h-screen grid place-items-center">
        <Form layout="vertical" onFinish={handleSignIn}>
          <Form.Item label="Email Address" name={"email"}>
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button htmlType="submit" type="primary" block>
            Sign In
          </Button>
          <div className="text-xs text-right mt-4">
            <Button type="link" onClick={navigateToSignup}>
              Don't have an account ?? signup
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
