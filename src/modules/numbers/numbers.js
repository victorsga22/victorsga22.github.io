import Calculator from "../../components/button/calculator.js";
import InputReader from "../../components/input/InputReader.js";
import DataTable from "../../components/table/dataTable.js";

import React, { useState } from "react";
import TextResult from "../../components/text/textResult.js";
import { compareNumbers, processTextInput } from "../../utils/util.js";

const Numbers = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]); // Estado de la lista procesada
  const [result, setResult] = useState([]); // Estado de la lista procesada

  const processText = () => {
    setData(processTextInput(text));
  };

  const calculateNumbers = () => {
    setResult(compareNumbers(data));
  };

  return (
    <div>
      Números
      <div class="divtable">
        <InputReader
          text={text}
          onChange={(e) => setText(e)}
          onClick={processText}
        />
        <DataTable data={data} />
        <Calculator onClick={calculateNumbers} tittle={"Números"} />
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

export default Numbers;
