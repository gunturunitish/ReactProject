import React from "react";
import ReactDOM from "react-dom";

// Creating the h1 element in the HTML.
// {} is the place, which is used to give the attributes to the class like id="heading"
const heading = React.createElement(
    "div",
    {id:"heading"},
    [
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am the h1 tag"),
                React.createElement("h2",{},"I am the h2 tag")
            ]
        ),

        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"I am the h1 tag"),
                React.createElement("h2",{},"I am the h2 tag")
            ]
        )
    ]
);

// Creating the root element, where React will render the components in the application.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the heading element in the html using React.
root.render(heading);