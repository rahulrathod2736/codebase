import { Button, Col, Form, Input, Row, Select } from "antd";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const { Option } = Select;

export const BlogDetail = () => {
  const { action, id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const validAction = ["create", "edit"];

    if (!validAction.includes(action)) {
      navigate("/not-found");
    }
  }, [action, navigate]);

  const handleBlogAction = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="grid place-items-center my-16">
        <Form layout="vertical" onFinish={handleBlogAction}>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Title" name={"title"}>
                <Input placeholder="Title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Author" name={"author"}>
                <Input placeholder="Author" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
              <Form.Item label="Status" name="status">
                <Select placeholder="Status">
                  <Option key={"publish"}>Publish</Option>
                  <Option key={"unpublish"}>Unpublish</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Category" name="category">
                <Select placeholder="Category">
                  <Option key={"educational"}>Educational</Option>
                  <Option key={"sports"}>Sports</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Description" rows={3}/>
          </Form.Item>

          <Button htmlType="submit" type="primary" block>
            Create a New Blog
          </Button>
        </Form>
      </div>
    </>
  );
};
