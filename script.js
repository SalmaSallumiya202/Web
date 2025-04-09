function showSection(section) {
    document.getElementById('profile').style.display = section === 'profile' ? 'block' : 'none';
    document.getElementById('grades').style.display = section === 'grades' ? 'block' : 'none';
  }