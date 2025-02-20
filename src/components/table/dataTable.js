import React from "react";

// Componente de la tabla (solo se renderiza si hay datos)
const DataTable = ({ data }) => {
    if (data.length === 0) return null; // No renderiza nada si data está vacío

    return (
        <div>
        <table
            style={{
                marginTop: "20px",
                width: "80%",
                borderCollapse: "collapse",
                marginLeft: "auto",
                marginRight: "auto",
            }}
            border="1"
        >
            <thead>
                <tr>
                    <th>Número</th>
                    <th>TOTAL</th>
                    <th>2024</th>
                    <th>2025</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.key}>
                        <td>{item.key}</td>
                        <td>{item.total}</td>
                        <td>{item.pastYear}</td>
                        <td>{item.lastYear}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default DataTable;
