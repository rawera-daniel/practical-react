import { BrowserRouter } from "react-router-dom";

import RouteCollection from "./app/RouteCollection";
import NavigationBar from "./app/components/NavigationBar";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <RouteCollection />
    </BrowserRouter>
  );
}

export default App;
