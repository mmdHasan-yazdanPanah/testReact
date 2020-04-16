import React, { useState } from "react";

const LoadImgOptional = (props) => {
    const [images, setImages] = useState([]);

    const getImg = () => {
        const file = document.getElementById(props.id).files[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => {
            setImages([...images, reader.result]);
        });

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <ul className="mt-3 d-flex flex-wrap align-items-center row no-gutters">
            {images.map((src, index) => {
                return (
                    <img
                        src={src}
                        style={{ width: "100%" }}
                        className="col-3 mb-1 pl-1 pr-0"
                        key={index}
                    />
                );
            })}
            <article className="col-3 mb-1 pl-1 pr-0">
                <label
                    htmlFor={props.id}
                    className="aspect-ratio-box upload--sm d-flex align-items-center justify-content-center flex-column w-100 rounded bg-secondary"
                >
                    <a className="aspect-ratio-box-inside d-flex align-items-center justify-content-center flex-column">
                        <i className="icon-plus-2"></i>
                        <span className="mt-1 p text-center">عکس فرعی</span>
                    </a>
                </label>
                <input
                    type="file"
                    id={props.id}
                    className="d-none"
                    onChange={getImg}
                />
            </article>
        </ul>
    );
};

export default LoadImgOptional;
