import Calculator from '../../components/button/calculator.js';
import InputReader from '../../components/input/InputReader.js';
import DataTable from '../../components/table/dataTable.js';

import React, { useState } from "react";
import TextResult from '../../components/text/textResult.js';

const Numbers = () => {

  const [text, setText] = useState("");
  const [data, setData] = useState([]); // Estado de la lista procesada
  const [result, setResult] = useState([]); // Estado de la lista procesada

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

    const calculateNumbers = () =>{

      const result= [1,2,3,4,5];

      setResult(result)
    }

  return (
    <div>
      Números
      <header>
        <InputReader text={text} onChange={(e) => setText(e)} onClick={processText}/>
        <DataTable data={data}/>
        <Calculator onClick={calculateNumbers} tittle={"Números"}/>
        <TextResult result={result}/>
      </header>
    </div>
  );
}

export default Numbers;
