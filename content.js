const titleElement = document.getElementById('ai_cm_title');
if (titleElement) {
  titleElement.style.fontSize = '20px';
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'j' || event.key === 'k') {
    const url = new URL(window.location.href);
    const number = parseInt(url.searchParams.get('number'));

    if (event.key === 'k') {
      url.searchParams.set('number', number - 1);
    } else {
      url.searchParams.set('number', number + 1);
    }

    window.location.href = url.href;
  } else if (event.key === 'h') {
    window.scrollTo({ top: window.scrollY - 300, behavior: 'smooth' }); // 250px 위로 스크롤
  } else if (event.key === 'l') {
    window.scrollTo({ top: window.scrollY + 300, behavior: 'smooth' }); // 250px 아래로 스크롤
  }
});