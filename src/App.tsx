import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/views/pages/Home";
import RouteCollection from "./app/RouteCollection";

function App() {
  return (
    <BrowserRouter>
      <RouteCollection />
    </BrowserRouter>
  );
}

export default App;
