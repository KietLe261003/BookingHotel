import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { clientRoute } from "./Routes/ClientRoute";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { useEffect } from "react";
import { adminRoute } from "./Routes/AdminRoute";
import AdminLayout from "./Layout/AdminLayout/AdminLayout";
import PrivateRoute from "./Routes/PrivateRoute";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {clientRoute.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.element></route.element>}
            />
          );
        })}
      </Route>
      <Route path="/admin" element={<PrivateRoute><AdminLayout/></PrivateRoute>}>
        {adminRoute.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.element></route.element>}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
