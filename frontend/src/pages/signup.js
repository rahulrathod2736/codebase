import { Button, DatePicker, Form, Input, message, Select } from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";
import { apiList } from "../axios/apis";

const { Option } = Select;

export const SignUp = () => {
  const navigate = useNavigate();
  const handleSignIn = async (data) => {
    const values = {...data, dob: moment(data.dob).format()}
    try {
      const resp = await axiosInstance.post(apiList.register, values);
      if(resp.data.success) {
        message.success(resp.data.message);
        setTimeout(() => {navigate("/signin");}, 1000)
      } else {
        message.error(
          resp.data.message || "Something went Wrong, Please Try again"
        );
      }
    } catch (err) {
      message.error(err.response.data.message || "Something went Wrong, Please Try again");
    }
  };

  const navigateToSignin = () => {
    navigate("/signin");
  };
  return (
    <>
      <div className="h-screen grid place-items-center">
        <Form layout="vertical" onFinish={handleSignIn}>
          <Form.Item
            label="First Name"
            name={"firstName"}
            rules={[{ required: true, message: "First Name is Required" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name={"lastName"}
            rules={[{ required: true, message: "Last Name is Required" }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item
            label="Email Address"
            name={"email"}
            rules={[{ required: true, message: "Email Address is Required" }]}
          >
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[{ required: true, message: "Date of Birth is Required" }]}
          >
            <DatePicker
              className="w-full"
              disabledDate={(current) =>
                current && current > moment().endOf("day")
              }
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Password is Required" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item label="Role" name="role">
            <Select placeholder="Role">
              <Option key={"admin"}>Admin</Option>
              <Option key={"user"}>User</Option>
            </Select>
          </Form.Item>
          <Button htmlType="submit" type="primary" block>
            Register an Account
          </Button>
          <div className="text-xs text-right mt-4">
            <Button type="link" onClick={navigateToSignin}>
              Already have an account ?? SignIn
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};
