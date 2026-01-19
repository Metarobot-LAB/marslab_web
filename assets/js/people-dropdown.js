// People 드롭다운 메뉴 - 별도 JS 파일
(function() {
  function setupPeopleDropdown() {
    console.log('[People Dropdown] Setting up...');
    
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
      console.log('[People Dropdown] Not found, retrying...');
      return false;
    }
    
    if (peopleItem.classList.contains('has-dropdown') && peopleItem.querySelector('.custom-dropdown-menu')) {
      return true;
    }
    
    peopleItem.classList.add('has-dropdown');
    peopleItem.style.position = 'relative';
    
    peopleLink.href = 'javascript:void(0);';
    peopleLink.style.cursor = 'default';
    peopleLink.style.pointerEvents = 'none';
    
    peopleLink.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      return false;
    }, true);
    
    if (!peopleItem.querySelector('.custom-dropdown-menu')) {
      const dropdownUl = document.createElement('ul');
      dropdownUl.className = 'custom-dropdown-menu';
      dropdownUl.innerHTML = '<li><a href="/mars.github.io/professor/">Professor</a></li><li><a href="/mars.github.io/students/">Students</a></li>';
      peopleItem.appendChild(dropdownUl);
    }
    
    console.log('[People Dropdown] Setup complete');
    return true;
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(setupPeopleDropdown, 100);
      setTimeout(setupPeopleDropdown, 500);
      setTimeout(setupPeopleDropdown, 1000);
    });
  } else {
    setupPeopleDropdown();
    setTimeout(setupPeopleDropdown, 100);
    setTimeout(setupPeopleDropdown, 500);
    setTimeout(setupPeopleDropdown, 1000);
  }
  
  setTimeout(setupPeopleDropdown, 2000);
  setTimeout(setupPeopleDropdown, 3000);
  
  const observer = new MutationObserver(function() {
    setupPeopleDropdown();
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();

