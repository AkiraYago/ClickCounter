import React from "react";
import "../style-sheets/Contador.css";

const Contador = ({ numClicks }) => {
    return (
        <div className="contador">
            {numClicks}
        </div>
    )
};
export default Contador;