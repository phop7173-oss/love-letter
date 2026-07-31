import './App.css'
import Home from "./pages/Home";
import { useState } from "react";
import LoadingScreen from "./features/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <LoadingScreen
        onFinish={() => setLoading(false)}
      />
    );
  }

  return <Home />;
}

export default App