import { Button, Divider, message } from "antd";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";

import { BsVectorPen } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../axios";
import { apiList } from "../axios/apis";
import { deleteBlogById } from "../axios/blogApis";

const dummyData = [
  {
    id: 1,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 2,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 15,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 85,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 1,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 7,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 19,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 41,
    title: "Blog 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis imperdiet proin fermentum leo vel orci porta non. Consequat nisl vel pretium lectus quam. Egestas egestas fringilla phasellus faucibus scelerisque eleifend. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare.",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 25,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
  {
    id: 16,
    title: "Blog 1",
    description: "Bog Description",
    status: "published",
    category: "educational",
    author: "Test User",
  },
];

export const Dashboard = () => {
  const navigate = useNavigate();

  const [blogs, setBlogs] = useState(null);

  const getBlogs = useCallback(async () => {
    try {
      const resp = await axiosInstance.get(apiList.getAllBlogs, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`
        }
      });
      if (resp.data.success) {
        setBlogs(resp.data.data.data);
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
  }, [setBlogs]);

  useEffect(() => {
    getBlogs();
  }, [getBlogs]);

  const handleDeleteBlog = async (id) => {
    await deleteBlogById(id, () => {
      getBlogs();
    });
  };

  const handleEditBlog = (id) => {
    navigate(`/blog/edit/${id}`);
  };

  const createNewBlog = () => {
    navigate(`/blog/create`);
  }
  return (
    <>
      <div>
        <div className="p-4 flex justify-between">
          <span className="text-lg">Dashboard</span>
          {localStorage.getItem("role") === "user" && <Button type="primary" onClick={createNewBlog}>
            Create New Blog
          </Button>}
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {blogs &&
            blogs.map((blog) => {
              return (
                <div
                  className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col"
                  key={blog._id}
                >
                  <div>{blog.title}</div>
                  <div className="truncate my-2 text-slate-400">{blog.description}</div>
                  <Divider dashed />
                  <div className="flex justify-between">
                    <div>{moment(blog.createdAt).format("DD/MM/YYYY")}</div>
                    <div>
                      <BsVectorPen
                        className="text-slate-400 inline-block mx-2 text-lg cursor-pointer"
                        onClick={() => {
                          handleEditBlog(blog._id);
                        }}
                      />
                      <MdDelete
                        className="text-slate-400 inline-block mx-2 text-lg cursor-pointer"
                        onClick={() => {
                          handleDeleteBlog(blog._id);
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
