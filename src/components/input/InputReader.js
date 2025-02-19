import React from "react";

const InputReader = ({text,onChange,onClick}) => {


    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <input
                type="text"
                value={text}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Escribe algo..."
                style={{
                    padding: "10px",
                    marginRight: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}
            />
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
                Procesar Datos
            </button>
        </div>
    );
};

export default InputReader;