const navigate = e => {
    button = e.target;

    if (button.previousElementSibling) {
        buttonSibling = button.previousElementSibling;
    } else if (button.nextElementSibling) {
        buttonSibling = button.nextElementSibling;
    }

    if (!button.classList.contains("btn-primary")) {
        target = document.querySelector(button.getAttribute("data-target"));
        targetSibling = document.querySelector(
            buttonSibling.getAttribute("data-target")
        );

        button.classList.toggle("btn-primary");

        buttonSibling.classList.toggle("btn-primary");

        targetSibling.classList.toggle("blog__navigate--show");
        // targetSibling.classList.toggle("blog__navigate--fade");
        targetSibling.classList.toggle("blog__navigate--active");
        // targetSibling.classList.toggle("blog__navigate--fade");

        // target.classList.toggle("blog__navigate--fade");
        target.classList.toggle("blog__navigate--active");
        // target.classList.toggle("blog__navigate--fade");

        setTimeout(() => {
            target.classList.toggle("blog__navigate--show");
        }, 150);
    }
};

const blogHeader = document.querySelector("#blogHeader");
let searchFocused = false;

const searchFocus = e => {
    if (window.innerWidth < 768) {
        searchFocused = true;
        blogHeader.classList.add("blog__header--dark");
        searchParent = e.parentElement;

        paddingLeft = parseInt($(blogHeader).css("padding-left"));
        paddingRight = parseInt($(blogHeader).css("padding-right"));
        width = parseInt($(blogHeader).css("width"));
        blogHeaderHeight = parseInt($(blogHeader).css("height"));

        blogHeader.style.height = blogHeaderHeight + "px";
        e.style.width = width - paddingLeft - paddingRight + "px";

        searchParent.style.height = $(e).css("height");
        searchParent.style.left = parseInt(paddingLeft) + "px";
        searchParent.classList.add("blog__header-search--absolute");
        // console.log(searchParent);
        // $(blogHeader).css("padding-left");
    }
};
const searchFocusOut = e => {
    searchFocused = false;
    e.style = null;
    e.value = null;
    // searchParent.style.left = null;
    blogHeader.classList.remove("blog__header--dark");
    // searchParent.classList.remove("blog__header-search--absolute");
    // blogHeader.style = null;
};

window.addEventListener("orientationchange", () => {
    if (!searchFocused) {
        searchParent.classList.remove("blog__header-search--absolute");
        blogHeader.style = null;
        searchParent.style.left = null;
    }
});

const toggleClass = e => {
    if (e.classList.contains(e.getAttribute("data-active"))) {
        e.classList.add(e.getAttribute("data-passive"));
    }
    e.classList.toggle(e.getAttribute("data-active"));
};
