import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { clientRoute } from "./Routes/ClientRoute";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { useEffect } from "react";
function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout/>}>
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
    </Routes>
  ); 
}

export default App;
