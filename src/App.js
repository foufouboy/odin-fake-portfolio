import React from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const App = () => {
    return (
        <>
            <GlobalStyles/>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
};

export default App;
