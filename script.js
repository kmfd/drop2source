const dropZone = document.querySelector('.drop-zone');
const htmlOutput = document.querySelector('#html-output');
const clearButton = document.querySelector('#clear-button');

// Initialize drag-and-drop
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const droppedHtml = e.dataTransfer.getData('text/html');
  htmlOutput.textContent = droppedHtml; // Show the dropped HTML source code
});

clearButton.addEventListener('click', () => {
  htmlOutput.textContent = ''; // Clear the HTML output
});
