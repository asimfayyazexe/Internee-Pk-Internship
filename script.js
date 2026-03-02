// Select elements
const dropArea = document.getElementById("dropArea");
const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

// Click to browse
dropArea.addEventListener("click", () => fileInput.click());

// Drag over area
dropArea.addEventListener("dragover", (e) => {
  e.preventDefault(); // prevent default
  dropArea.classList.add("active"); // add highlight
});

// Drag leave area
dropArea.addEventListener("dragleave", () => {
  dropArea.classList.remove("active"); // remove highlight
});

// File dropped
dropArea.addEventListener("drop", (e) => {
  e.preventDefault(); // prevent open
  dropArea.classList.remove("active"); // remove highlight
  handleFiles(e.dataTransfer.files); // handle files
});

// File selected
fileInput.addEventListener("change", () => {
  handleFiles(fileInput.files); // handle input
});

// Handle files
function handleFiles(files) {
  [...files].forEach((file) => { // loop files

    const fileItem = document.createElement("div");
    fileItem.classList.add("file-item"); // file container

    const fileInfo = document.createElement("div");
    fileInfo.classList.add("file-info"); // info wrapper

    const fileDetails = document.createElement("div");
    fileDetails.classList.add("file-details"); // details box

    fileDetails.innerHTML = `
      <strong>${file.name}</strong><br>
      Size: ${(file.size / 1024).toFixed(2)} KB
    `; // basic size

    // Convert to MB
    let fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);

    // Convert to KB
    let fileSizeKB = (file.size / 1024).toFixed(2);

    // Auto size format
    let displaySize =
      file.size >= 1024 * 1024 ? fileSizeMB + " MB" : fileSizeKB + " KB";

    fileDetails.innerHTML = `
  <strong>${file.name}</strong><br>
  Size: ${displaySize}
`; // final size

    const actions = document.createElement("div");
    actions.classList.add("actions"); // buttons box

    // Preview button
    const previewBtn = document.createElement("button");
    previewBtn.innerText = "Preview";
    previewBtn.classList.add("preview-btn");

    previewBtn.addEventListener("click", () => {
      const fileURL = URL.createObjectURL(file); // create url
      window.open(fileURL); // open file
    });

    // Remove button
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "✖";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
      fileItem.remove(); // remove item
    });

    actions.appendChild(previewBtn); // add preview
    actions.appendChild(removeBtn); // add remove

    fileInfo.appendChild(fileDetails); // add details
    fileInfo.appendChild(actions); // add actions

    // Progress container
    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");

    const progress = document.createElement("div");
    progress.classList.add("progress"); // inner bar

    const percentText = document.createElement("div");
    percentText.classList.add("percent"); // percent text

    progressBar.appendChild(progress); // add progress

    fileItem.appendChild(fileInfo); // add info
    fileItem.appendChild(progressBar); // add bar
    fileItem.appendChild(percentText); // add percent

    preview.appendChild(fileItem); // add to UI

    startUpload(progress, percentText); // start upload
  });
}

// Simulate upload
function startUpload(progress, percentText) {
  let percent = 0;       
  const interval = setInterval(() => {
    percent += Math.random() * 10; // random progress
    if (percent >= 100) {
      percent = 100;
      clearInterval(interval); // stop when done
    }
    progress.style.width = percent + "%"; // update progress bar
    percentText.innerText = Math.floor(percent) + "% Uploaded"; // update percent text
  }, 100); // speed control 
}