import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Calculator from "./calculator.js";


test("renders button with correct label", () => {
    render(<Calculator tittle="Numeros" />);
    const buttonElement = screen.getByTestId("custom-button");
    expect(buttonElement).toBeInTheDocument();
  });

export default Calculator;
