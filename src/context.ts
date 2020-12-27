import React from "react";
import { ContextProps } from "./types";

const Context = React.createContext<ContextProps>({
  className: "",
  prefix: "",
  style: "",
  stylePlaceholder: "",
  styleImg: "",
});

export default Context;
