import React, { useEffect, useState } from "react";
import $ from "jquery";
import useScript from "../Auxilary/useScript";
import axios from "axios";

import Header from "../Components/Layout/header";
import Sidebar from "../Components/Layout/sidebar";
import HeadIcon from "../Components/headings/HeadIcon";
import Textarea from "../Components/forms/textarea";
import InputOrderedCrossed from "../Components/forms/inputWithCrossAndOrederByNum";
import BtnWIcon from "../Components/buttons/withIcon/btnWIcon";
import LoadImgPrime from "../Components/forms/loadImgPrime";
import LoadImgOptional from "../Components/forms/loadImgOptional";

import "../css/components/_chip.css";
import "../css/layout/_profile-nav.css";
import "../scss/style.scss";
import "../css/icomoon.css";
import userImg from "../images/moremar190600016@2x.png";

function App() {
    const [userName, setUserName] = useState("alireza");
    const [notificationNum, setNotificationNum] = useState("5");

    useEffect(() => {
        let isMenuOpen = true,
            openMenuButton,
            closeMenuButton,
            sidebarMenu,
            contentColumn;

        $(document).ready(function () {
            openMenuButton = $("#open_menu_button");
            closeMenuButton = $("#close_menu_button");
            sidebarMenu = $("#sidebar");
            contentColumn = $("#content");

            openMenuButton.click(() => toggleMenu());
            closeMenuButton.click(() => closeMenu());

            $("#sidebar-2").on("hidden.bs.modal", function () {
                $(".hamburgerSvg-parent2").toggleClass("cross");
            });
        });

        function toggleMenu() {
            const pageWidth = window.innerWidth;

            if (pageWidth < 768) {
                return;
            }

            if (isMenuOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        }

        const openMenu = function () {
            sidebarMenu.css({
                "margin-left": 0,
                transform: "translateX(0)",
            });

            contentColumn.addClass("mr-lg-2 mr-md-2").removeClass("mr-lg-0");

            isMenuOpen = true;
        };

        const closeMenu = function () {
            sidebarMenu.css({
                "margin-left": "-25%",
                transform: "translateX(110%)",
            });

            contentColumn.removeClass("mr-lg-2  mr-md-2").addClass("mr-lg-0");

            isMenuOpen = false;
        };

        // if (window.innerWidth < 768) {
        //     hamberParent = document.querySelector(".hamburgerSvg-parent");
        //     if (hamberParent.classList.contains("cross")) {
        //         hamberParent.classList.remove("cross");
        //     }
        // }

        ////// hamburger
        let windowWidth;
        window.addEventListener(
            "resize",
            () => (windowWidth = window.innerWidth)
        );
        function hamburger() {
            var i, resize;

            // i = setInterval(function() {
            //     return $(".hamburgerSvg-parent").toggleClass("cross");
            // }, 1500);

            $(".hamburgerSvg-parent2").click(function () {
                if (window.innerWidth < 768) {
                    console.log("click");
                    $(".hamburgerSvg-parent2").toggleClass("cross");
                    clearInterval(i);
                }
            });

            $("#close_menu_button").click(function () {
                if (window.innerWidth < 768) {
                    clearInterval(i);
                    return $(".hamburgerSvg-parent2").toggleClass("cross");
                }
            });

            // if (window.innerWidth < 768) {
            //     // $("#close_menu_button-responsive").click(function() {
            //     //     clearInterval(i);
            //     //     return $(".hamburgerSvg-parent2").toggleClass("cross");
            //     // });
            // }

            $(".hamburgerSvg-parent").click(function () {
                clearInterval(i);
                return $(".hamburgerSvg-parent").toggleClass("cross");
            });

            $("#close_menu_button").click(function () {
                clearInterval(i);
                return $(".hamburgerSvg-parent").toggleClass("cross");
            });

            // $("#close_menu_button-responsive").click(function() {
            //     clearInterval(i);
            //     return $(".hamburgerSvg-parent").toggleClass("cross");
            // });

            // resize = function() {
            //     return $("body").css({
            //         "margin-top": ~~((window.innerHeight - 150) / 2) + "px"
            //     });
            // };
        }

        hamburger();

        /////////////////////////////////////////

        // $("#sidebar-2").on("hidden.bs.modal", function() {
        //     // do something…
        //     console.log("hide");
        // });

        // $("#exampleModal").on("hidden.bs.modal", function() {
        // });

        //////////////////////////////////////////////
        let width;
        const nowrapWidths = document.querySelectorAll(".nowrap-width");
        const nowrapTexts = document.querySelectorAll(".nowrap-body");

        const nowrap = () => {
            nowrapWidths.forEach((value, index) => {
                nowrapTexts[index].classList.remove("d-block");
                nowrapTexts[index].classList.add("d-none");
                width = value.offsetWidth;
                nowrapTexts[index].style.textOverflow = "ellipsis";
                nowrapTexts[index].style.width = `${width}px`;
                nowrapTexts[index].classList.remove("d-none");
                nowrapTexts[index].classList.add("text-nowrap");
                nowrapTexts[index].classList.add("d-block");
            });
        };

        nowrap();

        window.addEventListener("resize", nowrap);

        //////////////////// clock for page Khadrie Eshterak ////////////////////
        function startTime() {
            console.log("tiking");
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();
            m = checkTime(m);
            s = checkTime(s);
            document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
            var t = setTimeout(startTime, 500);
        }
        function checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        //////////////////////////////////////////////////////////// dashBoard carousel////////////////////
        const checkCarousel = () => {
            const btnNext = document.querySelectorAll(".carousel__btn-next");
            const btnPrev = document.querySelectorAll(".carousel__btn-prev");
            btnNext.forEach((value) => {
                if (
                    value.parentElement.parentElement.parentNode
                        .querySelector(".carousel-item--last")
                        .classList.contains("active")
                ) {
                    value.classList.add("carousel__btn--disable");
                } else {
                    value.classList.remove("carousel__btn--disable");
                }
            });
            btnPrev.forEach((value) => {
                if (
                    value.parentElement.parentElement.parentNode
                        .querySelector(".carousel-item--first")
                        .classList.contains("active")
                ) {
                    value.classList.add("carousel__btn--disable");
                } else {
                    value.classList.remove("carousel__btn--disable");
                }
            });
        };

        checkCarousel();

        $("body").on("slid.bs.carousel", function () {
            checkCarousel();
        });
    });

    useEffect(() => {
        axios.get("jsons/user.json/persons").then((response) => {
            console.log(response);
        });
    }, []);

    return (
        <div style={{ direction: "rtl", overflow: "hidden" }}>
            <Header userName="Alireza" notificationNum="5" />
            <div className="row no-gutters px-2">
                <Sidebar img={userImg} />

                <main
                    className="col bg-light position-relative rounded-lg mr-md-2 mr-lg-2 mt-lg-0"
                    id="content"
                >
                    <form>
                        <div className="row no-gutters">
                            <section className="col-xl-8 col-lg-12 px-3 px-sm-5 py-4 position-relative">
                                <HeadIcon iconClass="comment-2">
                                    توضیحات پروژه شما
                                </HeadIcon>

                                <Textarea placeholder="توضیحات پروژه خود را بنویسید..." />

                                <HeadIcon
                                    iconClass="comment-2"
                                    className="mt-5"
                                    bg="warning"
                                >
                                    توضیحات پروژه شما
                                </HeadIcon>

                                <InputOrderedCrossed
                                    placeholders={[
                                        "توضیحات پروژه خود را بنویسید...",
                                        "توضیحات پروژه خود را بنویسید...",
                                        "توضیحات پروژه خود را بنویسید...",
                                    ]}
                                />

                                <BtnWIcon
                                    key="btn1"
                                    small
                                    className="mt-3 float-left"
                                    iconClass={"contract"}
                                    color={"warning"}
                                >
                                    افزودن ویژگی جدید
                                </BtnWIcon>

                                <BtnWIcon
                                    key="btn2"
                                    large
                                    overClass
                                    className="position-absolute main__button--1 d-md-flex d-none"
                                    iconClass={"check"}
                                >
                                    ثبت
                                </BtnWIcon>
                            </section>

                            <article className="col-xl-4 col-lg-12 col-md-12">
                                <section className="py-md-5 pl-md-4 py-0 pl-0 px-md-0 px-2">
                                    <HeadIcon iconClass="comment-2">
                                        عکس های نمونه کار
                                    </HeadIcon>

                                    <LoadImgPrime id="send-1" />

                                    <LoadImgOptional id="send-2" />
                                </section>
                            </article>
                        </div>
                    </form>
                </main>
            </div>

            {useScript("https://code.jquery.com/jquery-3.4.1.slim.min.js")}

            {
                (useScript(
                    "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
                ),
                useScript(
                    "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
                ),
                useScript("../js/app"))
            }
        </div>
    );
}

export default App;
