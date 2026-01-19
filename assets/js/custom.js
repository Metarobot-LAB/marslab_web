// People 드롭다운 메뉴 제어
document.addEventListener('DOMContentLoaded', function() {
  // People 메뉴 항목 찾기
  const navItems = document.querySelectorAll('.nav__item');
  
  navItems.forEach(function(item) {
    const navLink = item.querySelector('.nav__link');
    const navChildren = item.querySelector('.nav__children');
    
    // People 메뉴 항목인지 확인 (children이 있는 경우)
    if (navChildren && navLink) {
      const linkText = navLink.textContent.trim();
      
      // People 메뉴인 경우
      if (linkText === 'People') {
        // People 링크 클릭 방지
        navLink.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        });
        
        // 호버 시 드롭다운 표시
        item.addEventListener('mouseenter', function() {
          if (navChildren) {
            navChildren.style.display = 'block';
            navChildren.style.visibility = 'visible';
            navChildren.style.opacity = '1';
          }
        });
        
        // 마우스가 떠날 때 드롭다운 숨기기 (약간의 지연)
        item.addEventListener('mouseleave', function() {
          setTimeout(function() {
            if (navChildren && !item.matches(':hover')) {
              navChildren.style.display = 'none';
              navChildren.style.visibility = 'hidden';
              navChildren.style.opacity = '0';
            }
          }, 100);
        });
        
        // 드롭다운 자체에 마우스가 있을 때도 유지
        if (navChildren) {
          navChildren.addEventListener('mouseenter', function() {
            this.style.display = 'block';
            this.style.visibility = 'visible';
            this.style.opacity = '1';
          });
        }
      }
    }
  });
});

