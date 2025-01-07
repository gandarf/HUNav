const scrollAmount = 350; // 스크롤 거리 변수

function handleScroll(direction) {
  const top = direction === 'up' 
    ? window.scrollY - scrollAmount 
    : window.scrollY + scrollAmount;
  window.scrollTo({ top, behavior: 'smooth' });
}

function handleNavigation(direction) {
  const url = new URL(window.location.href);
  const number = parseInt(url.searchParams.get('number'));

  if (!isNaN(number)) { // number 변수 유효성 검사
    const newNumber = direction === 'prev' ? number - 1 : number + 1;
    url.searchParams.set('number', newNumber);
    window.location.href = url.href;
  };
}

document.addEventListener('keydown', function(event) {
  if (event.key === 's') {
    handleNavigation('next');
  } else if (event.key === 'd') {
    handleNavigation('prev');
  } else if (event.key === 'a') {
    handleScroll('up');
  } else if (event.key === 'f') {
    handleScroll('down');
  }
});

const titleElement = document.getElementById('ai_cm_title');

if (titleElement) {
  const originalStyle = titleElement.getAttribute('style');
  titleElement.style.fontSize = '20px';
  titleElement.style.position = 'fixed';
  titleElement.style.top = '0'; 
  titleElement.style.left = '0'; 
  titleElement.style.zIndex = '9999'; 

  window.addEventListener('beforeunload', () => {
    titleElement.setAttribute('style', originalStyle);
  }); 
}