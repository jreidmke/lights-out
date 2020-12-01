import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Cell from "./Cell";

// smoke test
it("renders without crashing", function() {
  render(<Cell />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Cell isLit/>);
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot", function() {
    const { asFragment } = render(<Cell isLit={false}/>);
    expect(asFragment()).toMatchSnapshot();
});

it("flips when clicked on", function() {
    const { getByTestId } = render(<Cell isLit/>);
    const td = getByTestId(1)
    fireEvent.click(td);
    expect(td).toHaveClass('Cell');
})
