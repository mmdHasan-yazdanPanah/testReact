import React from "react";

const headIcon = (props) => {
    return (
        <div className={`d-flex align-items-center mb-3 ${props.className}`}>
            <span
                className={`icon__title bg-${
                    props.bg ? props.bg : "primary"
                } rounded d-flex align-items-center justify-content-center p-1 ml-2`}
            >
                <i className={`icon-${props.iconClass} text-light h5`}></i>
            </span>
            <h4>{props.children}</h4>
        </div>
    );
};

export default headIcon;
