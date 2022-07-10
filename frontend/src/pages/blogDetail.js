import { Button, Col, Form, Input, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createNewBlog, editBlog, getBlogById } from "../axios/blogApis";
import { getAllCategory } from "../axios/categoryApis";

const { Option } = Select;

export const BlogDetail = () => {
  const { action, id } = useParams();
  const [form] = useForm();
  const navigate = useNavigate();
  const [category, setCategory] = useState(null);

  const getCategories = useCallback(async () => {
    await getAllCategory((data) => {
      setCategory(data);
    });
  }, [setCategory]);

  const getBlogsById = useCallback(async (id) => {
    await getBlogById(id, (resp) => {
      form.setFieldsValue({ ...resp, category: resp.category._id });
    });
  }, [form]);

  useEffect(() => {
    const validAction = ["create", "edit"];

    if (!validAction.includes(action)) {
      navigate("/not-found");
    }
    if (action === "edit") {
      getBlogsById(id);
    }
  }, [action, navigate, getBlogsById, id]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const handleBlogAction = async (data) => {
    if (action === "create") {
      await createNewBlog(data, (resp) => {
        navigate("/dashboard");
      });
    } else {
      await editBlog(id, data, (resp) => {
        navigate("/dashboard");
      });
    }
  };
  return (
    <>
      <div className="grid place-items-center my-16">
        <Form layout="vertical" onFinish={handleBlogAction} form={form}>
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
                  <Option key={"published"}>Publish</Option>
                  <Option key={"unpublished"}>Unpublish</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Category" name="category">
                <Select placeholder="Category">
                  {category &&
                    category.map((cate) => (
                      <Option key={cate._id}>{cate.title}</Option>
                    ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Description" name="description">
            <Input.TextArea placeholder="Description" rows={3} />
          </Form.Item>

          <Button htmlType="submit" type="primary" block>
            {action === "edit" ? "Update Blog" : "Create New Blog"}
          </Button>
        </Form>
      </div>
    </>
  );
};
