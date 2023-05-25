import "@testing-library/jest-dom";
import { render, fireEvent, screen } from "@testing-library/react";
import Adiciona from "./componentes/Adiciona/index";
import App from "./App";

test("CT01- o valor do contador na inicialização deve ser igual a 0", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />); //permite encontrar elementos dentro do DOM
  //quando consulto o valor do contador
  const valorContador = Number(screen.getByTestId("contador").textContent);
  //entao contador = 0
  expect(valorContador).toEqual(0);
});
test("CT02- o botão deve estar configurado para utilizar o estilo classe button", () => {
  //dado que o contador foi inicializado
  render(<Adiciona />);
  //quando verifico o estilo configurado no botao
  const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
 //entao o estilo button deve estar configurado
  expect(btnIncrementa).toHaveClass("button");
});
test("CT03- deve conter o botao incremento", () => {
  render(<Adiciona />);
  //qualifico o botao a ser pesquisado ou posso usar getAllByRole
  //uso de regex ignora maiuscula
  const btnIncrementa = screen.getByRole("button", { name: /incremento/i });
  expect(btnIncrementa).toBeInTheDocument();
});

test("CT04- o valor do contador deve incrementar de 1 no click do botao", () => {
  render(<Adiciona />);
  const btnIncrementa = screen.getByRole("button", { name: "Incremento" });
  fireEvent.click(btnIncrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(1);
});
test("CT05 - o valor do contador deve decrementar de 1 no click do botao", () => {
  render(<Adiciona />);
  const btnDecrementa = screen.getByText("Decremento");
  fireEvent.click(btnDecrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(-1);
});
test("CT06 - o valor do contador deve incrementar de 1 a cada click do botao", () => {
  render(<Adiciona />);
  const btnIcrementa = screen.getByText("Incremento");
  fireEvent.click(btnIcrementa);
  fireEvent.click(btnIcrementa);
  const valorContador = Number(screen.getByTestId("contador").textContent);
  expect(valorContador).toEqual(2);
});
test("CT07 - na inicialização deve apresentar o titulo da pagina", () => {
  render(<App />);
  const label = screen.getByText("Fatec - CPS");
  expect(label).toBeTruthy();
});
