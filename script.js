
window.addEventListener('load', function () {
  const loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0';
  setTimeout(() => {
    loadingScreen.style.display = 'none'; 
  }, 5000); 
});

window.addEventListener("DOMContentLoaded", () => {
  // FAB functionality
  const fab = document.getElementById('xFab');
  const mainBtn = document.getElementById('fabMain');
  const scrim = document.getElementById('scrim');

  function toggle() { fab.classList.toggle('open'); }

  mainBtn.addEventListener('click', toggle);
  scrim.addEventListener('click', toggle);

  // Close when tapping outside the FAB
  document.addEventListener('click', (e) => {
    if (!fab.contains(e.target) && fab.classList.contains('open')) fab.classList.remove('open');
  });
  const chatbot = document.getElementById("myText");
  const showBtn = document.getElementById("show-btn");
  const hideBtn = document.getElementById("hide-btn");

  chatbot.classList.remove("active");
  showBtn.style.display = "block";

  showBtn.addEventListener("click", () => {
    chatbot.classList.add("active");
    showBtn.style.display = "none";
  });

  hideBtn.addEventListener("click", () => {
    chatbot.classList.remove("active");
    showBtn.style.display = "block";
  });

  document.querySelectorAll('.post-grok').forEach(function (grokBtn) {
    grokBtn.addEventListener('click', function () {
      chatbot.classList.add('active');
      showBtn.style.display = 'none';
    });
  });
});

