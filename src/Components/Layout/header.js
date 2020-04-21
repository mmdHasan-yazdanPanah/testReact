import React, { useState } from "react";
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from "reactstrap";

const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const modalMenu = () => {
        const pageWidth = window.innerWidth;

        if (pageWidth < 768) {
            document
                .getElementById("open_menu_button")
                .setAttribute("data-toggle", "modal");
        } else {
            document
                .getElementById("open_menu_button")
                .removeAttribute("data-toggle");
        }
    };

    return (
        <div className="sticky-top">
            <div
                className="bg-primary header d-flex align-items-center mb-3
        flex-row-reverse pr-1 pl-2 text-light w-100 shadow-sm justify-content-between"
            >
                <div className="d-flex justify-content-center align-items-center w-100">
                    <button
                        className="d-flex text-light justify-content-center align-items-center ml-auto"
                        onClick={modalMenu}
                        id="open_menu_button"
                        data-target="#sidebar-2"
                    >
                        <div className="hamburgerSvg-parent cross d-none d-md-flex align-items-center">
                            <svg viewBox="0 0 800 600" className="hamburgerSvg">
                                <path
                                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                    id="top"
                                ></path>
                                <path d="M300,320 L540,320" id="middle"></path>
                                <path
                                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                    id="bottom"
                                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                                ></path>
                            </svg>
                            <span
                                className=" h5 text-light ml-1"
                                style={{
                                    marginRight: "-6px",
                                    marginBottom: "1px",
                                }}
                            >
                                منو
                            </span>
                        </div>
                        <div className="hamburgerSvg-parent2 d-flex d-md-none align-items-center">
                            <svg viewBox="0 0 800 600" className="hamburgerSvg">
                                <path
                                    d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
                                    id="top"
                                ></path>
                                <path d="M300,320 L540,320" id="middle"></path>
                                <path
                                    d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
                                    id="bottom"
                                    transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
                                ></path>
                            </svg>
                            <span
                                className=" h5 text-light ml-1"
                                style={{
                                    marginRight: "-6px",
                                    marginBottom: "1px",
                                }}
                            >
                                منو
                            </span>
                        </div>
                    </button>

                    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle
                            caret
                            color="primary"
                            className="position-relative header__notifications-button"
                        >
                            <i className="icon-packard-bell h4 text-light"></i>
                            <span
                                className="icon__noti-num rounded-sm d-block
                    text-light bg-warning position-absolute"
                            >
                                {props.notificationNum}
                            </span>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <button className="btn mr-2 d-flex align-items-center text-light">
                        <span className="h6 ml-1 mb-0">{props.userName}</span>
                        <i
                            className="icon-user-2 h4"
                            style={{ transform: "translateY(-2px)" }}
                        ></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
