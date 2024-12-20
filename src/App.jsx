import { Route, Routes } from "react-router-dom";
import "./App.css";
import { clientRoute } from "./Routes/ClientRoute";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
function App() {
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
