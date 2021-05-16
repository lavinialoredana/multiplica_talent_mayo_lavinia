import "./App.css";
import Header from "./Header";
import ColorCard from "./ColorCard";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

function App() {
    const [colorCards, setColorCards] = useState([]);

    useEffect(() => {
        fetch("https://reqres.in/api/colors?page=1")
            .then((response) => response.json())
            .then((data) => setColorCards(data.data));
    }, []);

    return (
        <div className="main-container">
            <Header />
            <div className=" cards-container">
                {colorCards.map((card) => (
                    <ColorCard
                        key={card.id}
                        year={card.year}
                        name={card.name}
                        color={card.color}
                        pantoneValue={card.pantone_value}
                    ></ColorCard>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default App;
