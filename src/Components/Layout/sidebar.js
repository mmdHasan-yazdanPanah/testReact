import React from "react";

const sidebar = (props) => {
    return (
        <React.Fragment>
            <div className="side col-3 d-none d-md-block" id="sidebar">
                <div className="d-flex flex-column px-4 pt-3 pb-5 bg-light rounded-lg">
                    <div
                        className="btn side__button-cross position-absolute"
                        id="close_menu_button"
                    >
                        <i className="icon-cross mr-3 text-primary icon__cross h5"></i>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="side__author">
                            <img
                                className="side__author-img"
                                src={props.img}
                                alt="autor"
                            />
                            <span className="side__author--online"></span>
                        </div>
                        <span className="mt-2 display-3">{props.userName}</span>
                    </div>
                    <ul className="d-flex flex-column side__menu text-body">
                        <li className="mt-4 side__sub-par">
                            <a
                                href="#side-sub1"
                                className="d-flex align-items-center text-decoration-none text-body"
                                data-toggle="collapse"
                            >
                                <i className="icon-window text-primary ml-2 h4"></i>
                                ایجاد
                            </a>
                            <ul
                                className="side__sub-list mt-3 mr-3 collapse"
                                id="side-sub1"
                            >
                                <li className="mb-1 d-block">
                                    <a
                                        href="#/"
                                        className="side__sub-item text-decoration-none"
                                    >
                                        <i className="icon-arrow-left-2 text-warning side__icon-sub"></i>
                                        ایجاد پروژه
                                    </a>
                                </li>
                                <li className="mb-1 d-block">
                                    <a
                                        href="#/"
                                        className="side__sub-item text-decoration-none"
                                    >
                                        <i className="icon-arrow-left-2 text-warning side__icon-sub"></i>
                                        ایجاد پست
                                    </a>
                                </li>
                                <li className="mb-1 d-block">
                                    <a
                                        href="#/"
                                        className="side__sub-item text-decoration-none"
                                    >
                                        <i className="icon-arrow-left-2 text-warning side__icon-sub"></i>
                                        ایجاد نمونه کار
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="mt-3">
                            <a
                                href="#/"
                                className="d-flex align-items-center text-decoration-none text-body"
                            >
                                <i className="icon-window text-primary ml-2 h4"></i>
                                داشبود
                            </a>
                        </li>
                        <li className="mt-3">
                            <a
                                href="#/"
                                className="d-flex align-items-center text-decoration-none text-body"
                            >
                                <i className="icon-window text-primary ml-2 h4"></i>
                                ویرایش پروفایل
                            </a>
                        </li>
                        <li className="mt-3">
                            <a
                                href="#/"
                                className="d-flex align-items-center text-decoration-none text-body"
                            >
                                <i className="icon-window text-primary ml-2 h4"></i>
                                تنظیمات حساب کاربری
                            </a>
                        </li>
                        <li className="mt-3">
                            <a
                                href="#/"
                                className="d-flex align-items-center text-decoration-none text-body"
                            >
                                <i className="icon-window text-primary ml-2 h4"></i>
                                حساب
                            </a>
                        </li>
                        <li className="mt-3">
                            <a
                                href="#/"
                                className="d-flex align-items-center text-decoration-none text-body"
                            >
                                <i className="icon-window text-primary ml-2 h4"></i>
                                فهرست
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div
                className="side modal fade"
                id="sidebar-2"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="d-flex flex-column px-4 pt-3 pb-5 bg-light rounded-lg modal-dialog"
                    role="document"
                >
                    <div className="modal-content border-0">
                        <div className="">
                            <div
                                className="btn side__button-cross position-absolute close"
                                data-dismiss="modal"
                                id="close_menu_button-responsive"
                                aria-label="Close"
                            >
                                <i className="icon-cross mr-3 text-primary icon__cross h5"></i>
                            </div>
                            <div className="d-flex flex-column align-items-center">
                                <div className="side__author">
                                    <img
                                        className="side__author-img"
                                        src="images/moremar190600016@2x.png"
                                        alt="autor"
                                    />
                                    <span className="side__author--online"></span>
                                </div>
                                <span className="mt-2 display-3">
                                    {props.userName}
                                </span>
                            </div>
                        </div>
                        <div className="">
                            <ul className="d-flex flex-column side__menu text-body">
                                <li href="#/" className="mt-4 side__sub-par">
                                    <a
                                        href="#side-sub1"
                                        className="d-flex align-items-center text-decoration-none text-body"
                                        data-toggle="collapse"
                                    >
                                        <i className="icon-window text-primary ml-2 h4"></i>
                                        ایجاد
                                    </a>
                                    <ul
                                        className="side__sub-list mt-3 mr-3 collapse"
                                        id="side-sub1"
                                    >
                                        <li className="mb-1 d-block">
                                            <a
                                                href="#/"
                                                className="side__sub-item text-decoration-none"
                                            >
                                                <i className="icon-arrow-left-2 text-warning side__icon-sub"></i>
                                                ایجاد پروژه
                                            </a>
                                        </li>
                                        <li className="mb-1 d-block">
                                            <a
                                                href="#/"
                                                className="side__sub-item text-decoration-none"
                                            >
                                                <i className="icon-arrow-left-2 text-warning side__icon-sub"></i>
                                                ایجاد پست
                                            </a>
                                        </li>
                                        <li className="mb-1 d-block">
                                            <a
                                                href="#/"
                                                className="side__sub-item text-decoration-none"
                                            >
                                                <i className="icon-arrow-left-2 text-warning side__icon-sub"></i>
                                                ایجاد نمونه کار
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li href="#/" className="mt-3">
                                    <a
                                        href="#/"
                                        className="d-flex align-items-center text-decoration-none text-body"
                                    >
                                        <i className="icon-window text-primary ml-2 h4"></i>
                                        داشبود
                                    </a>
                                </li>
                                <li href="#/" className="mt-3">
                                    <a
                                        href="#/"
                                        className="d-flex align-items-center text-decoration-none text-body"
                                    >
                                        <i className="icon-window text-primary ml-2 h4"></i>
                                        ویرایش پروفایل
                                    </a>
                                </li>
                                <li href="#/" className="mt-3">
                                    <a
                                        href="#/"
                                        className="d-flex align-items-center text-decoration-none text-body"
                                    >
                                        <i className="icon-window text-primary ml-2 h4"></i>
                                        تنظیمات حساب کاربری
                                    </a>
                                </li>
                                <li href="#/" className="mt-3">
                                    <a
                                        href="#/"
                                        className="d-flex align-items-center text-decoration-none text-body"
                                    >
                                        <i className="icon-window text-primary ml-2 h4"></i>
                                        حساب
                                    </a>
                                </li>
                                <li href="#/" className="mt-3">
                                    <a
                                        href="#/"
                                        className="d-flex align-items-center text-decoration-none text-body"
                                    >
                                        <i className="icon-window text-primary ml-2 h4"></i>
                                        فهرست
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default sidebar;
