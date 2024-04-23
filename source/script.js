// Function to toggle dress info and adjust background image opacity
function toggleDressInfo(dressInfo) {
    var dressElement = dressInfo.parentNode;
    var dressImage = dressElement.querySelector("img");
    var priceTag = dressElement.querySelector(".price-tag");

    if (!dressInfo.classList.contains("active")) {
        dressInfo.classList.add("active");
        dressImage.style.opacity = "0.5"; // Reduce opacity of the background image
        document.addEventListener("click", closeDressInfoOutside); // Add event listener to close dress info when clicked outside
    } else {
        dressInfo.classList.remove("active");
        dressImage.style.opacity = "1"; // Restore opacity of the background image
        document.removeEventListener("click", closeDressInfoOutside); // Remove event listener
    }
}

// Function to close dress info when clicked outside
function closeDressInfoOutside(event) {
    var dressInfos = document.querySelectorAll(".dress-info");

    dressInfos.forEach(function(dressInfo) {
        var dressElement = dressInfo.parentNode;
        var dressImage = dressElement.querySelector("img");

        if (!dressInfo.contains(event.target) && !event.target.classList.contains("fa-circle-info")) {
            dressInfo.classList.remove("active");
            dressImage.style.opacity = "1"; // Restore opacity of the background image
            document.removeEventListener("click", closeDressInfoOutside); // Remove event listener
        }
    });
}

// Assign click event listeners to all dress info icons
var dressInfoIcons = document.querySelectorAll(".fa-circle-info");
dressInfoIcons.forEach(function(icon) {
    icon.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent event from bubbling up to document
        var dressInfo = icon.nextElementSibling;
        toggleDressInfo(dressInfo);
    });
});
