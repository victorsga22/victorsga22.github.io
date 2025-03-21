import Calculator from "../../components/button/calculator.js";
import InputReader from "../../components/input/InputReader.js";
import DataTable from "../../components/table/dataTable.js";
import TextResult from "../../components/text/textResult.js";
import "../../App.css";
import { compareNumbers,processTextInput } from "../../utils/util.js";

import React, { useState } from "react";

const Stars = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]); // Estado de la lista procesada
  const [result, setResult] = useState([]); // Estado de la lista procesada

  const processText = () => {
    setData(processTextInput(text));
  };

  const calculateStars = () => {
    setResult(compareNumbers(data));
  };

  return (
    <div>
      Estrellas
      <div class="divtable">
        <InputReader
          text={text}
          onChange={(e) => setText(e)}
          onClick={processText}
        />
        <DataTable data={data} tittle={"Estrellas"} />
        <Calculator onClick={calculateStars} tittle={"Estrellas"} />
        <div class="horizontal">
          {result.map((numberResult) => (
            <TextResult
              result={numberResult.numbers}
              tittle={numberResult.resultNumber}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stars;
