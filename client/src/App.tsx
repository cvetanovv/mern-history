import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
    Box,
    CssBaseline,
    Paper,
    Typography,
    Toolbar,
    AppBar,
    IconButton,
    Button,
} from "@mui/material";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
    const navigate = useNavigate();

    return (
        <>
            <CssBaseline />
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        ></IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <Button
                                color="inherit"
                                onClick={() => navigate("/")}
                            >
                                Bulgarian Medieval History
                            </Button>
                        </Typography>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                        <Button
                            color="inherit"
                            onClick={() => navigate("/register")}
                        >
                            Register
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </>
    );
}

export default App;
