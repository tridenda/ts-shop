import { Route, Routes } from "react-router-dom";

import Dashboard from "./components/dashboard.component";
import SignUp from "./components/sign-up.component";
import SignIn from "./components/sign-in.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/signin" element={<SignIn />}></Route>
    </Routes>
  );
};

export default App;
