import React from "react";

const inputCrossedOrdered = (props) => {
    return (
        <React.Fragment>
            {props.placeholders.map((placeholder, index) => {
                return (
                    <div className="d-flex align-items-center mt-2" key={index}>
                        <span className="icon__number rounded bg-primary d-flex justify-content-center align-items-center text-light">
                            <span>{index + 1}</span>
                        </span>
                        <input
                            type="text"
                            className="form-control d-block pr-3 pl-2"
                            placeholder={placeholder}
                        />
                        <span className="icon-cross text-warning mr-1"></span>
                    </div>
                );
            })}
        </React.Fragment>
    );
};

export default inputCrossedOrdered;
