import React from "react";

// Componente de la tabla (solo se renderiza si hay datos)
const TextResult = ({ result, tittle }) => {
    if (result.length === 0) return null; // No renderiza nada si data está vacío

    return (
        <div>
        <h2>{tittle}</h2>
        {result}
        </div>
    );
};

export default TextResult;
