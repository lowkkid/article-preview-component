const button = document.getElementById("share-btn");
const share = document.getElementById("share");

let isOpen = false;

document.addEventListener("click", function (e) {
    if (isOpen && !share.contains(e.target) && !button.contains(e.target)) {
        toggleShare();
    }
})

button.addEventListener("click", function () {
    toggleShare();

})

function toggleShare() {
    isOpen = !isOpen;
    button.classList.toggle("hover:bg-gray-300");
    if (button.classList.toggle("bg-gray-200")) {
        button.children[0].children[0].setAttribute("fill", "#6E8098");
    }

    button.classList.toggle("hover:bg-gray-400");
    if (button.classList.toggle("bg-gray-500")) {
        button.children[0].children[0].setAttribute("fill", "#FFFFFF");
    }


    share.classList.toggle("hidden");
    share.classList.toggle("flex");
}