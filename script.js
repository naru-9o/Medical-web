// Function to open sidebar
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

// Function to close sidebar
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}


var tl = gsap.timeline({
    repeat: -1
});

tl
.to (".img-container",{
    ease: Expo.easeInout,
    width: "110%",
    stagger: 3
}, 'a')

.to (".text-container h1",{
    ease: Expo.easeInout,
    stagger: 3,
    top: 0
},'a')

.to (".text-container h1",{
    delay: 3,
    ease: Expo.easeInout,
    stagger: 3,
    top: "-100%"
},'a')