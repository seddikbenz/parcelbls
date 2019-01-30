import React from 'react'
import { render } from "react-dom";
import App from './src/App'
let reactDIV = document.createElement("div");
document.body.appendChild(reactDIV);
render(<App />, reactDIV);
