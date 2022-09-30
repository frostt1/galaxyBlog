// css
import "./App.css";
// components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// routes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import CreatePost from "./pages/CreatePost/CreatePost";
import Dashboard from "./pages/Dashboard/Dashboard";
import Search from "./pages/Search/Search";
// context
import { AuthProvider } from "./context/AuthContext";
// auth
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

export const App = () => {
    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, [auth]);

    if (loadingUser) {
        return <p>Carregando...</p>;
    }

    return (
        <div>
            <AuthProvider value={{ user }}>
                <BrowserRouter>
                    <Header />
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
                            <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
                            <Route path="/posts/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
                            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
                        </Routes>
                    </div>
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
};

export default App;
