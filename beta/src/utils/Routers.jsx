import React from "react";
import { Routes, Route } from "react-router-dom";
import Chatroom from "../pages/Chatroom";
import Showcases from "../pages/Showcases";

export default function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Showcases />} />
      <Route path="/chats">
        <Route path=":room_id" element={<Chatroom />}/>
        <Route path="" element={<Chatroom />}/>
      </Route>
      <Route path="/profile" element={<Chatroom />} />
      {/**
       * @dev 404 Page
       */}
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}
