import React from "react";

const inputWithCrossContext = React.createContext({
    changed: [],
    // setChanged: () => {},
});

export default inputWithCrossContext;
