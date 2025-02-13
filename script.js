document.getElementById("uploadBtn").addEventListener("click", function () {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function () {
    let file = this.files[0];
    if (file) {
        document.getElementById("fileName").textContent = "Selected File: " + file.name;
    }
});
