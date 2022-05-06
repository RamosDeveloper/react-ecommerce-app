import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Shop from "./pages/Shop"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />}/>
        <Route element={<ProtectedRoutes />}>
          <Route path="/shop" element={<Shop />} />
        </Route>         
      </Routes>
    </div>
  );
}

export default App;
