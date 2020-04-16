import React from "react";

const btnWIcon = (props) => {
    if (props.small) {
        return (
            <button
                type="button"
                className={`btn btn-${
                    props.color ? props.color : "primary"
                } btn-sm text-light d-flex align-items-center ${
                    props.className
                }`}
            >
                <i className={`icon-${props.iconClass} h5 ml-1`}></i>
                {props.children}
            </button>
        );
    }

    if (props.large) {
        return (
            <button
                type="button"
                className={`btn btn-${
                    props.color ? props.color : "primary"
                } btn-lg text-light align-items-center justify-content-center ${
                    props.overClass ? 0 : "d-flex"
                }  ${props.className}`}
            >
                <i className={`icon-${props.iconClass} h5 ml-2`}></i>
                {props.children}
            </button>
        );
    }
};

export default btnWIcon;
