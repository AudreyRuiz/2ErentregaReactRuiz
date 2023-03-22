import "./App.css";
import NavBar from "./components/header/NavBar";
import Banner from "./components/header/Banner";
import ContainerCardItems from "./components/componentsItem/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Routes>
        <Route path="/" element={<ContainerCardItems />} />
        <Route path="/items/:id" element={<ContainerCardItems />} />
        <Route path="/category/:idCategory" element={<ContainerCardItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
