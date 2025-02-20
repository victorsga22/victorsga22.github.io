import InputReader from '../../components/input/InputReader.js';
import DataTable from '../../components/table/dataTable.js';

import React, { useState } from "react";

const Stars = () => {

  const [text, setText] = useState("");
  const [data, setData] = useState([]); // Estado de la lista procesada

    // Función para procesar el texto y convertirlo en una lista de objetos
    const processText = () => {
        const rows = text.trim().split(" ");
        const formattedData = rows.map((row) => {
            const values = row.split(/\s+/); // Divide por espacios o tabulaciones
            return {
                key: values[0], // Primer valor como clave
                value1: values[1],
                value2: values[2],
                value3: values[3],
            };
        });
        setData(formattedData);
    };

  return (
    <div>
      Estrellas
        <InputReader text={text} onChange={(e) => setText(e)} onClick={processText}/>
        <DataTable data={data} tittle= {"Estrellas"}/>
    </div>
  );
}

export default Stars;
