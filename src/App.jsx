import Canvas from "./canvas";
import { AuthProvider } from "./hooks/useAuth";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "./pages/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
    <div className="px-20">
    </div>
      <main className="app transition-all ease-in">
          <Routes>
          <Route path="/login" element={<LoginPage/>} />
            <Route
              path="/home"
              element={

                  <><Home /><Customizer /><Canvas/></>
                
              }
            />
            <Route path="/canvas" element={<Canvas />} />
            <Route path="/customizer" element={<Customizer />} />
          </Routes>
      </main>
    </>
  );
}

export default App;
