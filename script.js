document.querySelectorAll('.navbar a').forEach(item => {
    item.addEventListener('click', event => {
        // Handle click event, like showing a dropdown
        console.log("Dropdown clicked");
    });
});
