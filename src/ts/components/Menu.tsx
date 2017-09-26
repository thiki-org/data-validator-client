import * as React from "react";

export interface MenuProps {
    label: string;
    url : string;

}

export interface MenuBlockProps {
    menus: Array<MenuProps>;
}

{/*<h2>Hello 3 from {props.compiler} and {props.framework}!</h2>;*/}

const Menu = (menu: MenuProps) => (
    <li><a href="#">permission</a></li>
);

export const MenuBlock = (props: MenuBlockProps) => (
<div>
    <ul id="menu_test">
        <li><a href="#">permission</a></li>
        <li><a href="#">authorization</a></li>
        <li><a href="#">users</a></li>
    </ul>
</div>

);