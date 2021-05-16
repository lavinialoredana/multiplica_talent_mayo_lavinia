import "./App.css";
import Header from "./Header";
import ColorCard from "./ColorCard";
import Footer from "./Footer";
import React from "react";

function App() {
    return (
        <div className="main-container">
            <Header />
            <div className=" cards-container">
                <ColorCard
                    year="2006"
                    name="cerulean"
                    color="#98B2D1"
                    pantoneValue="15-4020"
                />
                <ColorCard
                    year="2006"
                    name="cerulean"
                    color="#98B2D1"
                    pantoneValue="15-4020"
                />
                <ColorCard
                    year="2006"
                    name="cerulean"
                    color="#98B2D1"
                    pantoneValue="15-4020"
                />
                <ColorCard
                    year="2006"
                    name="cerulean"
                    color="#98B2D1"
                    pantoneValue="15-4020"
                />
                <ColorCard
                    year="2006"
                    name="cerulean"
                    color="#98B2D1"
                    pantoneValue="15-4020"
                />
                <ColorCard
                    year="2006"
                    name="cerulean"
                    color="#98B2D1"
                    pantoneValue="15-4020"
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
