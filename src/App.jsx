import React from "react";

import { ThemeProvider } from './contexts/ThemeContext';
import { CalculatorProvider } from "./contexts/CalculateContext";

import { Calculator } from "./components/Calculator";

function App() {
  return (
      <ThemeProvider>
          <CalculatorProvider>
            <div className="App">
              <Calculator />
            </div>
          </CalculatorProvider>
      </ThemeProvider>
  );
}

export default App;
