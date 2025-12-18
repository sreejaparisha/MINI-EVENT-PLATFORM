import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Events from "./pages/Events";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div>
      <h1>Mini Event Platform</h1>

      <Signup />
      <Login />
      <Events />

      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
