window.onscroll = function() {switchHeader()};

function switchHeader() {
    if(document.body.scrollTop <= 0 || document.documentElement.scrollTop <= 0) {
        document.getElementById("header-1").className = "scroll";
        document.getElementById("onscroll-hdr").className = "initial";
    }
    if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        document.getElementById("header-1").className = "initial";
        document.getElementById("onscroll-hdr").className = "scroll";
    }
}