import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import { BlogDetail } from "./blogDetail";
import { Dashboard } from "./dashboard";

const { Header, Content } = Layout;

export const Home = () => {
  return (
    <>
      <div className="h-screen">
        <Layout>
          <Header className="bg-white">
            <div>
              Blog App
            </div>
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
