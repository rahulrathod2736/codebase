import { Divider } from "antd";

import { BsVectorPen } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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

  const handleDeleteBlog = () => {
    
  }

  const handleEditBlog = (id) => {
    navigate(`/blog/edit/${id}`);
  }
  return (
    <>
      <div>
        <div className="p-4">
          <span className="text-lg">Dashboard</span>
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          {dummyData.map((blog) => {
            return (
              <div className="bg-white rounded-2xl p-6 drop-shadow-2xl flex flex-col ">
                <div>{blog.title}</div>
                <div className="truncate my-2">{blog.description}</div>
                <Divider dashed />
                <div className="flex justify-between">
                  <div>24th July, 2022</div>
                  <div>
                    <BsVectorPen
                      className="text-slate-400 inline-block mx-2 text-lg cursor-pointer"
                      onClick={() => {
                        handleEditBlog(blog.id);
                      }}
                    />
                    <MdDelete
                      className="text-slate-400 inline-block mx-2 text-lg cursor-pointer"
                      onClick={() => {
                        handleDeleteBlog(blog.id);
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
