import "./App.css";
import Header from "./Header";
import ColorCard from "./ColorCard";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

function App() {
    const [colorCards, setColorCards] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);

    useEffect(() => {
        fetch(`https://reqres.in/api/colors?page=${page}`)
            .then((response) => response.json())
            .then((data) => {
                setColorCards(data.data);
                setTotalPage(data.total_pages);
            });
    }, [page]);

    const changePage = (e) => {
        e.target.innerText === "Siguiente" ? setPage(page + 1) : setPage(page - 1);
    };

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
                        colorId={card.id}
                    />
                ))}
            </div>
            <Footer changePage={changePage} totalPage={totalPage} page={page} />
        </div>
    );
}

export default App;
