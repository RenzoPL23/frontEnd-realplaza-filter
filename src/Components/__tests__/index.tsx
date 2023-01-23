import React from "react";
import { render } from "@testing-library/react";
import { IProducto } from "./../../Interfaces/Producto";
import { Producto } from "./../product/product";

describe("render", () => {
  test("check producto", () => {
    const producto = {} as IProducto;
    render(<Producto {...producto} />);
  });
});
