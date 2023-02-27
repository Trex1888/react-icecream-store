import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

// it("should render out row 1", async () => {
//   render(<App />);
//   const getRow1 = await screen.findByRole("row", {
//     name: /oreos 7 10/i,
//   });
//   expect(getRow1).toBeVisible();
// });

// it("should subtract 1 from quality and sellin", async () => {
//   render(<App />);
//   const subClick = await screen.findByRole("button", {
//     name: "Sub",
//   });
//   userEvent.click(subClick);

//   const newRow = await screen.findByRole("row", {
//     name: "Oreos 6 9",
//   });
//   expect(newRow).toBeInTheDocument();
// });

// it("should subtract 2 from quality if sellin = 0", async () => {
//   render(<App />);
//   const subClick = await screen.findByRole("button", {
//     name: "Sub",
//   });
//   userEvent.click(subClick);
//   userEvent.click(subClick);
//   userEvent.click(subClick);
//   userEvent.click(subClick);
//   userEvent.click(subClick);
//   userEvent.click(subClick);

//   const newRow = await screen.findByRole("row", {
//     name: "Corn -4 0",
//   });
//   expect(newRow).toBeInTheDocument();
// });

it("should add 1 to cart and $5 to total", async () => {
  render(<App />);
  const addClick = await screen.findByRole("button", {
    name: "Add",
  });
  userEvent.click(addClick);

  const newtotal = await screen.findByText("Shopping Cart: 1 total items");
  const newTotal = await screen.findByText("Total: 5.00");
  expect(newtotal).toBeInTheDocument();
  expect(newTotal).toBeTruthy();
});
