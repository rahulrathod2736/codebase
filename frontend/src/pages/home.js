import { Layout } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { BlogDetail } from "./blogDetail";
import { Dashboard } from "./dashboard";

const { Header, Content } = Layout;

export const Home = () => {

  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    navigate("/signin");
  };
  return (
    <>
      <div className="h-screen">
        <Layout>
          <Header className="bg-white flex justify-between">
            <div>
              Blog App
            </div>
            <div onClick={handleSignOut} className="cursor-pointer">Log Out</div>
          </Header>
          <Content style={{ minHeight: "calc(100vh - 68px)"}}>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/blog/:action" element={<BlogDetail />}/>
                <Route path="/blog/:action/:id" element={<BlogDetail />}/>
            </Routes>
          </Content>
        </Layout>
      </div>
    </>
  );
};
