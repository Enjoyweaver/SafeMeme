import "./App.css";
import Home from "./pages/Home";
import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import Treasury from "./pages/Dashboard";
import Dashboard from "./pages/Dashboard";
import Criteria from "./pages/Criteria";
import Prices from "./pages/Prices";
import Holders from "./pages/Holders";
import TokenHolders from "./pages/TokenHolders";

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="treasury" element={<Treasury />} />
        <Route path="criteria" element={<Criteria />} />
        <Route path="prices" element={<Prices />} />
        <Route path="holders" element={<Holders />} />
        <Route path="tokenholders" element={<TokenHolders />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
      <header>
        <nav>
          <h1>SafeMeme</h1>
          <div>
            <NavLink to="/">Home</NavLink>
          </div>
        </nav>
      </header>
    </RouterProvider>
  );
}

export default App;
