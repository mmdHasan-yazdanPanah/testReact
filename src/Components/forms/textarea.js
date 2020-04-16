import React from "react";

const textarea = (props) => {
    return (
        <textarea
            rows="6"
            placeholder={props.placeholder}
            className="form-control rounded pt-1"
        ></textarea>
    );
};

export default textarea;
