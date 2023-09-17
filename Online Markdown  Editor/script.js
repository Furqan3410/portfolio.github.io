const markdownInput = document.getElementById('markdownInput');
const preview = document.getElementById('preview');

function updatePreview() {
  const markdownText = markdownInput.value;
  const html = marked(markdownText);
  preview.innerHTML = html;
}

markdownInput.addEventListener('input', updatePreview);
updatePreview();

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(err => {
      console.log(`Error attempting to enable full-screen mode: ${err.message}`);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function clearEditor() {
  if (confirm('Are you sure you want to clear the editor?')) {
    markdownInput.value = '';
    updatePreview();
  }
}
