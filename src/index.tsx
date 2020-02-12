import * as React from "react";
import * as ReactDOM from "react-dom";
import { Photospheres } from "./components/photospheres";

const root = document.getElementById("react-root");
// @ts-ignore
ReactDOM.render(<Photospheres data={{ size: "string" }} />, root);
