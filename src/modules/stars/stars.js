import Calculator from '../../components/button/calculator.js';
import InputReader from '../../components/input/InputReader.js';
import DataTable from '../../components/table/dataTable.js';
import TextResult from '../../components/text/textResult.js';
import "../../App.css"

import React, { useState } from "react";

const Stars = () => {

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
               total: values[1],
               lastYear: values[2],
               actualYear: values[3],
            };
        });
        setData(formattedData);
    };

    const calculateStars = () =>{
      let result=data.filter(a => Number.parseInt(a.lastYear)===0);
      if(result.length>2){
        // Ordenar primero por la tercera columna (descendente) y luego por la segunda columna (descendente)
        result=result.sort((a, b) => a.lastYear - b.lastYear || a.pastYear - b.pastYear);
      }
      if(result.length<2){
        // Ordenar primero por la tercera columna (descendente) y luego por la segunda columna (descendente)
        const dataOrder=data.sort((a, b) => a.lastYear - b.lastYear || a.pastYear - b.pastYear);
        dataOrder.forEach(element => {
          result.push(element)
        });
      }
      //3 números impares y 2 pares o 3 pares y 2 impares
      setResult(result.map(a=>a.key))
    }
  return (
    <div >
      Estrellas
      <div class="divtable">
        <InputReader text={text} onChange={(e) => setText(e)} onClick={processText}/>
        <DataTable data={data} tittle= {"Estrellas"}/>
        <Calculator onClick={calculateStars} tittle={"Estrellas"}/>
        <TextResult result={result}/>
      </div>
    </div>
  );
}

export default Stars;
