import React from "react";

const Calculator = ({tittle,onClick}) => {


    return (
        <div >
            <button data-testid="custom-button"
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
                Calcular {tittle} 
            </button>
        </div>
    );
};

export default Calculator;
