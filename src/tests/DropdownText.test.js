import "@testing-library/jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import DropDownText from "../components/DropdownText";

describe("DropdownText", () => {
  test("Render component", () => {
    const div = document.createElement("div");
    const label = "Minha label";
    let value = "Cliente";
    const selectValue = (v) => {
      value = v;
    };
    const listValues = [{ name: "Luke" }, { name: "Leia" }, { name: "Darth" }];

    let { getByLabelText } = render(
      <DropDownText
        label={label}
        value={value}
        selectValue={selectValue}
        listValues={listValues}
      />
    );
    const input = getByLabelText(/minha label/i);
    expect(input).toHaveAttribute("aria-hidden", "true");
  });
});
