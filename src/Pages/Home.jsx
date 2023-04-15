import React from "react";
import Navigation_Bar from "./Navigation_Bar";

import { Link, useLocation } from "react-router-dom";
import AnimatedPage from "../Animation";

export default function home() {
    const location =useLocation()
    return (
        <h1>Hello {location.state.id}and welcome to the Home </h1>
    )
}

