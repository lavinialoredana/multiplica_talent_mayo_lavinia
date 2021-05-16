import React from "react";

const Button = ({ btnText, isDisabled, changePage, totalPage }) => {
    return (
        <button onClick={changePage} className={`btn btn-info ${isDisabled}`}>
            {" "}
            {btnText}{" "}
        </button>
    );
};
export default Button;
