import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "@pages/Products";
import { Home } from "@pages/Home";

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default App;
