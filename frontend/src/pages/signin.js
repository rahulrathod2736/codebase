import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const handleSignIn = (data) => {
    navigate("/dashboard");
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
