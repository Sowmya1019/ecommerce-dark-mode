// Select the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Check local storage for the theme preference on page load
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Event listener to toggle dark mode
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Update the local storage based on current state
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
