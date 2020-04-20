import React, { useState, useEffect, useRef } from "react";
import Context from "../../contextApi/inputWithCrossContext";

const InputWithCross = (props) => {
    const [cross, setCross] = useState(false);
    const [indexNum, setindexNum] = useState(0);
    const [chnagning, setChanging] = useState(false);
    const close = () => {
        setCross(true);
    };

    const open = () => {
        setCross(false);
    };

    const test = (e) => {
        console.log(e.currentTarget);
    };

    // const getIndex = () => {
    //     console.log("hey loaded");
    // };

    const inputRef = useRef();

    // if (index) {

    //     console.log([...index].indexOf(inputRef.current));
    // }

    useEffect(() => {
        if (!cross) {
            let indexParent = inputRef.current.closest("form");
            let ind = indexParent.querySelectorAll(".closeInputWihCross");
            setindexNum([...ind].indexOf(inputRef.current) + 1);
        }
    });

    return (
        <div className="d-flex align-items-center mt-2" onClick={test}>
            {!cross ? (
                <React.Fragment>
                    <span className="icon__number rounded bg-primary d-flex justify-content-center align-items-center text-light">
                        {indexNum ? <span>{indexNum}</span> : null}
                    </span>
                    <input
                        type="text"
                        className="form-control d-block pr-3 pl-2"
                        placeholder={props.placeholder}
                    />
                </React.Fragment>
            ) : null}

            {cross ? (
                <span
                    style={{ fontSize: "1.3rem" }}
                    className="btn icon-circled-plus text-primary mr-1 "
                    onClick={open}
                ></span>
            ) : (
                <span
                    className="btn icon-cross text-warning mr-1 closeInputWihCross"
                    onClick={close}
                    ref={inputRef}
                ></span>
            )}
        </div>
    );
};

export default InputWithCross;
