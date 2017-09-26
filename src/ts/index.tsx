import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
import { MenuBlock, MenuProps } from "./components/Menu";

import "../style/layout.css";

ReactDOM.render(
    <Hello compiler="TypeScripts" framework="React"/>,
    document.getElementById("example")
);
let menus1:Array<MenuProps> =
    [
        {
            label: "permission",
            url: ""
        }
    ];

ReactDOM.render(
    <MenuBlock menus = {menus1} />,
    document.getElementById("menu")

);

