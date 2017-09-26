import * as React from "react";
export interface HelloProps {
    compiler: string;
    framework: string;

}

export const Hello = (props: HelloProps) => <h2>Hello 3 from {props.compiler} and {props.framework}!</h2>;