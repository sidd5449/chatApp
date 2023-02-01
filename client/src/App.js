import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/HomePage/Homepage";
import LoginPage from "scenes/LoginPage/LoginPage";
import ProfilePage from "scenes/ProfilePage/ProfilePage";

function App() {
  
  
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/profile/:userId" element={<ProfilePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
