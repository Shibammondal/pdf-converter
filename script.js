document.getElementById("uploadBtn").addEventListener("click", function () {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function () {
    let file = this.files[0];
    if (file) {
        document.getElementById("fileName").textContent = "Selected File: " + file.name;

        // Backend e file upload
        let formData = new FormData();
        formData.append("file", file);

        fetch("https://your-backend-url.com/upload", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("File uploaded successfully!");
            } else {
                alert("File upload failed!");
            }
        })
        .catch(error => {
            console.error("Error uploading file:", error);
            alert("An error occurred while uploading.");
        });
    }
});
