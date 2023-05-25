import { useState } from "react";
import "./styles.css";

export default function Adiciona() {
  const valorInicial = 0;

  const [contador, setContador] = useState(valorInicial);
  const increment = () => {
    setContador((prev) => prev + 1);
  };
  const decrement = () => {
    setContador((prev) => prev - 1);
  };
  const restart = () => {
    setContador(0);
  };
  return (
    <div>
      <h3>
        {/* define um rotulo para identificar a variavel que deve ser validada */}
        Contador:{" "}
        <div>
          <h5 data-testid="contador">{contador}</h5>
        </div>
      </h3>
      <div>
        <button className="button" name="incremento" onClick={increment}>
          Incremento
        </button>
        <button className="button" onClick={decrement}>
          {" "}
          Decremento{" "}
        </button>
        <button className="button" onClick={restart}>
          {" "}
          Reset{" "}
        </button>
      </div>
    </div>
  );
}
