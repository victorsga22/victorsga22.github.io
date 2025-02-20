import React from "react";

const Calculator = ({text,onClick}) => {


    return (
        <div >
            <button
                onClick={onClick}
                style={{
                    padding: "10px",
                    backgroundColor: "#007bff",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "5px"
                }}
            >
                Calcular {text} 
            </button>
        </div>
    );
};

export default Calculator;
