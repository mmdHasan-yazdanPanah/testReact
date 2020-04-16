import React, { useState } from "react";

const LoadImgPrime = (props) => {
    const [img, setImg] = useState(0);

    const getImg = () => {
        const file = document.getElementById(props.id).files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            setImg(reader.result);
        });

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <React.Fragment>
            <label
                htmlFor={props.id}
                className={`upload--lg ${
                    img ? "upload--lg-imaged" : null
                } d-flex align-items-center justify-content-center flex-column w-100 rounded bg-secondary`}
            >
                <a className="d-flex align-items-center justify-content-center flex-column">
                    <i
                        className={`icon-plus-2 display-2 ${
                            img ? "text-light" : null
                        }`}
                    ></i>
                    <span
                        className={`mt-3 h4 text-center ${
                            img ? "text-light" : null
                        }`}
                    >
                        {img ? "تغییر" : "افزودن"} عکس اصلی
                    </span>
                </a>
                {img ? <img src={img} id="img" alt="uploadImg" /> : null}
            </label>
            <input
                type="file"
                id={props.id}
                className="d-none"
                onChange={getImg}
            />
        </React.Fragment>
    );
};

export default LoadImgPrime;
