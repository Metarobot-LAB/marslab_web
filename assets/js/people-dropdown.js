// People 드롭다운 메뉴 - 별도 JS 파일
(function() {
  let initialized = false;
  
  function setupPeopleDropdown() {
    // 이미 초기화되었으면 스킵
    if (initialized) {
      return true;
    }
    
    const allLinks = document.querySelectorAll('a');
    let peopleLink = null;
    let peopleItem = null;
    
    for (let link of allLinks) {
      if (link.textContent.trim() === 'People') {
        peopleLink = link;
        peopleItem = link.closest('li') || link.parentElement;
        break;
      }
    }
    
    if (!peopleLink || !peopleItem) {
      return false;
    }
    
    if (peopleItem.classList.contains('has-dropdown') && peopleItem.querySelector('.custom-dropdown-menu')) {
      initialized = true;
      return true;
    }
    
    peopleItem.classList.add('has-dropdown');
    peopleItem.style.position = 'relative';
    
    peopleLink.href = 'javascript:void(0);';
    peopleLink.style.cursor = 'default';
    
    peopleLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }, true);
    
    if (!peopleItem.querySelector('.custom-dropdown-menu')) {
      const dropdownUl = document.createElement('ul');
      dropdownUl.className = 'custom-dropdown-menu';
      dropdownUl.style.display = 'none';
      dropdownUl.style.visibility = 'hidden';
      dropdownUl.style.opacity = '0';
      dropdownUl.innerHTML = '<li><a href="/mars.github.io/professor/">Professor</a></li><li><a href="/mars.github.io/students/">Students</a></li>';
      peopleItem.appendChild(dropdownUl);
    }

    const dropdown = peopleItem.querySelector('.custom-dropdown-menu');
    function showDropdown() {
      if (!dropdown) return;
      dropdown.style.display = 'block';
      dropdown.style.visibility = 'visible';
      dropdown.style.opacity = '1';
    }
    function hideDropdown() {
      if (!dropdown) return;
      dropdown.style.display = 'none';
      dropdown.style.visibility = 'hidden';
      dropdown.style.opacity = '0';
    }
    peopleItem.addEventListener('mouseenter', showDropdown);
    peopleItem.addEventListener('mouseleave', hideDropdown);
    peopleLink.addEventListener('mouseenter', showDropdown);
    if (dropdown) {
      dropdown.addEventListener('mouseenter', showDropdown);
      dropdown.addEventListener('mouseleave', hideDropdown);
    }
    
    initialized = true;
    return true;
  }
  
  // DOMContentLoaded에서 한 번만 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setupPeopleDropdown();
    });
  } else {
    setupPeopleDropdown();
  }
})();

