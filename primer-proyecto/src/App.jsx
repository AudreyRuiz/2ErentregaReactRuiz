import "./App.css";
import NavBar from "./components/header/NavBar";
import Banner from "./components/header/Banner";
import ContainerCardItems from "./components/componentsItem/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from "./components/componentsItem/DetailsItem";
import ProviderContextListCart from "./components/componentsItem/ProviderContextListCart";

function App() {
  return (
    <ProviderContextListCart>
      <BrowserRouter>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<ContainerCardItems />} />
          <Route path="/items/:idItem" element={<DetailsItem />} />
          <Route
            path="/category/:idCategory"
            element={<ContainerCardItems />}
          />
        </Routes>
      </BrowserRouter>
    </ProviderContextListCart>
  );
}

export default App;
