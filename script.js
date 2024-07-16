document.addEventListener('DOMContentLoaded', function() {
  var content = document.getElementById('hidden-content');
  content.style.display = 'none';

  document.getElementById('reveal-button').addEventListener('click', function() {
    if (content.style.display === 'none') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  });
});