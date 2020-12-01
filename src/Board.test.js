import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Board from "./Board";

// smoke test
it("renders without crashing", function() {
  render(<Board />);
});

it("matches snapshot", function() {
    const { asFragment } = render(<Board chanceLightStartsOn={1}/>)
    expect(asFragment()).toMatchSnapshot();
})

it("displays winning text when game over", function() {
    const { getByText } = render(<Board chanceLightStartsOn={1}/>);
    const h1 = getByText('Congratulations. You have won the game!');
    expect(h1).toBeInTheDocument();
})