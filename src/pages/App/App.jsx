import "./App.css";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";

import NewOrderPage from "../NewOrderPage/newOrderPage";
import RocksListPage from "../RocksListPage/RocksListPage"

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <h1>Rocks-R-Us</h1>
          <Routes>
          <Route path="/rocks" element={<RocksListPage user={user} setUser={setUser} />} />
          <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
          <Route path="/*" element={<Navigate to="/rocks" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
