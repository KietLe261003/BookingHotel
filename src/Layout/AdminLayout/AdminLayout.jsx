import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";

const AdminLayout = () => {
  return (
    <div>
      <div className="bg-orange-100  min-h-screen">
        <Header />
        <div className="flex flex-row pt-24">
          <Sidebar />
          <div className="w-10/12 h-[90vh] overflow-y-auto">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
