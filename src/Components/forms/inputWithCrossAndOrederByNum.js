import React, { useState, useEffect } from "react";

import BtnWIcon from "../../Components/buttons/withIcon/btnWIcon";
import anime from "animejs/lib/anime.es.js";

// import InputWithCross from "./inputWithCross";

const InputCrossedOrdered = (props) => {
    const [indexArr, setIndexArr] = useState([1]);
    const [indexArr2, setIndexArr2] = useState([1]);
    const [closedArr, setclosedArr] = useState([0]);

    useEffect(() => {
        let index = [];
        let i;
        for (i = 1; i <= props.num; i++) {
            index.push(i);
        }
        setIndexArr(index);
        setIndexArr2(index);
    }, []);

    useEffect(() => {
        let closed = [];
        let i;
        for (i = 1; i <= props.num; i++) {
            closed.push(0);
        }
        setclosedArr(closed);
    }, []);

    useEffect(() => {
        console.log(indexArr);
    }, [indexArr]);

    const closeDuration = 300;

    const Close = (index, numberIndex) => {
        var tl = anime.timeline({
            duration: closeDuration,
            easing: "easeInOutCubic",
        });
        const realItemsArr = [...indexArr].filter((number) => {
            if (number == 0) return false;
            return true;
        });
        const realIndex = realItemsArr.indexOf(numberIndex);
        tl.add({
            targets: document.querySelectorAll(".inputBaCross")[realIndex],
            opacity: 0,
            translateX: 250,
        }).add(
            {
                targets: document.querySelectorAll(".inputBaCross")[realIndex],
                height: 0,
                padding: 0,
                margin: 0,
            },
            100
        );

        let newIndexNum = [...indexArr2].map((value, ind, arr) => {
            if (ind > index && value != 0) {
                return value - 1;
            } else if (ind == index) {
                return 0;
            } else {
                return value;
            }
        });
        setIndexArr2(newIndexNum);

        anime({
            complete: function (anim) {
                if (anim.completed) {
                    console.log(anim.completed);
                    setIndexArr(newIndexNum);

                    let newClosedArr = [...closedArr];
                    newClosedArr[index] = 1;
                    setclosedArr(newClosedArr);

                    let itemStyle;
                    if (document.querySelector(".inputBaCross")) {
                        itemStyle = window.getComputedStyle(
                            document.querySelector(".inputBaCross")
                        );
                    }
                    if (itemStyle) {
                        const height =
                            parseInt(itemStyle.height) +
                            parseInt(itemStyle.marginTop);
                        // window.scrollBy(0, -height);
                    }
                }
            },
        });
    };

    const addItem = (e) => {
        let realArr = [...indexArr].filter((number) => {
            if (number == 0) return false;
            return true;
        });
        if (realArr.length == 0) {
            setIndexArr2([...indexArr, 1]);
            setIndexArr([...indexArr, 1]);
        } else {
            setIndexArr2([...indexArr, realArr[realArr.length - 1] + 1]);
            setIndexArr([...indexArr, realArr[realArr.length - 1] + 1]);
        }

        if (document.querySelector(".inputBaCross")) {
            const itemStyle = window.getComputedStyle(
                document.querySelector(".inputBaCross")
            );
            const height =
                parseInt(itemStyle.height) + parseInt(itemStyle.marginTop);
            window.scrollBy(0, height);
        }
    };

    const mt2 = { marginTop: "1rem" };

    let res = indexArr.map((numberIndex, index) => {
        if (numberIndex) {
            return (
                <div
                    style={mt2}
                    className={"d-flex align-items-center inputBaCross"}
                    key={index}
                >
                    <span className=" icon__number rounded bg-primary d-flex justify-content-center align-items-center text-light">
                        <span>
                            {indexArr2[index] ? indexArr2[index] : numberIndex}
                        </span>
                    </span>

                    <input
                        type="text"
                        className="form-control d-block pr-3 pl-2"
                        placeholder={props.placeholder}
                    />

                    <span
                        className="btn icon-cross text-warning mr-1 closeInputWihCross"
                        onClick={() => Close(index, numberIndex)}
                    ></span>
                </div>
            );
        }
    });

    return (
        <React.Fragment>
            {res}
            <BtnWIcon
                small
                className="mt-3 float-left"
                iconClass={"contract"}
                color={"warning"}
                onClick={(e) => addItem(e)}
            >
                افزودن ویژگی جدید
            </BtnWIcon>
        </React.Fragment>
    );
};

export default InputCrossedOrdered;
