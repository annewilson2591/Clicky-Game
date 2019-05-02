import React, { Component } from "react";

function Wrapper(props) {
    return <div className="wrapper">{props.children}</div>;
}

export default Wrapper;