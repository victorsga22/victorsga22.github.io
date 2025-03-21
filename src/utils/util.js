export function compareNumbers(numbers) {
  const arrayResult = [];
  for (let index = 0; index <= 50; index++) {
    arrayResult.push(filterByNumber(numbers, index));
  }
  /*if(result.length<5){
      // Ordenar primero por la tercera columna (descendente) y luego por la segunda columna (descendente)
      const dataOrder=data.sort((a, b) => a.lastYear - b.lastYear  a.pastYear - b.pastYear);
      result.add(dataOrder)
    }*/
  //3 números impares y 2 pares o 3 pares y 2 impares
  return arrayResult;
}

export function filterByNumber(numbers, num) {
  let result = numbers.filter((a) => Number.parseInt(a.actualYear) === num);
  // Ordenar primero por la tercera columna (descendente) y luego por la segunda columna (descendente)
  result = result.sort((a, b) => b.lastYear - a.lastYear);
  return { resultNumber: num, numbers: result.map((a) => a.key) };
}

export function formatNumbers(numbers) {
  return numbers.map((num) => {
    return {
      key: num[0], // Primer valor como clave
      total: num[1],
      lastYear: num[2],
      actualYear: num[3],
    };
  });
}

export function processTextInput(textInput) {
  const rows = textInput.trim().split(" ");
  const formattedData = rows.map((row) => {
    const values = row.split(/\s+/); // Divide por espacios o tabulaciones
    return {
      key: values[0], // Primer valor como clave
      total: values[1],
      lastYear: values[2],
      actualYear: values[3],
    };
  });
  return formattedData;
}
