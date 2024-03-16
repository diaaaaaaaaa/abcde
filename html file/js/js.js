<script>
    let arr = [];
    let obj = null
    var sectionTags = document.querySelectorAll("section");
    var main = document.querySelector("main");
    var ul = document.querySelector("ul");
    var aTags = document.querySelectorAll("a");
    function removeColor() {
        aTags.forEach((element) => {
            element.style.background = "none";
        });
    }
    function getheight() {
        sectionTags.forEach((element) => {
            arr.push(element.offsetTop);
        });
    }
    function scrollMoveColor(e) {
        let scrollTop = e.srcElement.scrollTop;
        for (let i = 0; i < arr.length; i++) {
            if (scrollTop <= arr[i]) {
                removeColor();
                aTags[i].style.background = "rgb(255, 170, 0)";
                break;
            }
        }
    }
    getheight();
    main.addEventListener("scroll", scrollMoveColor);
    
    ul.addEventListener("click", function (e) {

        if (obj) {
            clearTimeout(obj)
            main.removeEventListener("scroll", scrollMoveColor);
            removeColor();
            e.target.style.background = "rgb(255, 170, 0)";
        }
        obj = setTimeout(() => {
            main.addEventListener("scroll", scrollMoveColor);
        }, 1000);
    });
</script>

