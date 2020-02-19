import * as React from "react";
import * as ReactDOM from "react-dom";
import { Photospheres } from "./components/photospheres";

const root = document.getElementById("react-root");

(async (): Promise<void> => {
  const response = await fetch("example-data/cluster-data.json");
  const data = await response.json();
  ReactDOM.render(<Photospheres data={data} height={720} width={1280} />, root);
})();
