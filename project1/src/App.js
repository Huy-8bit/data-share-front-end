import React, { useState } from "react";
import * as Components from './components/Components';
import { login } from "./api/login";
import { register } from "./api/register";
import { BrowserRouter, Routes, Router, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
    return (
        <Login/>
    );
}

export default App;