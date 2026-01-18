---
layout: archive
title: "Metarobot Projects"
author_profile: true
entries_layout: grid
classes: wide

header:
  image: /main_picture.jpg
  overlay_image: /main_picture.jpg
  overlay_filter: 0.3
  caption: "METAROBOT LABORATORY | MARS"
  image_description: "METAROBOT LABORATORY 단체 사진"
---

<div id="filter-message" style="display: none; margin: 20px 0; padding: 15px; background-color: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 4px;">
  <strong>필터링:</strong> <span id="filter-person-name"></span>이(가) 참여한 프로젝트만 표시됩니다. 
  <a href="/" style="color: #2196f3; text-decoration: underline;">모든 프로젝트 보기</a>
</div>

{% for post in site.posts %}
  <div class="project-item" data-participants="{% if post.participants %}{{ post.participants | join: ',' }}{% endif %}">
    {% include archive-single.html type="grid" %}
  </div>
{% endfor %}

<script>
(function() {
  // URL 파라미터에서 person 값 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const filterPerson = urlParams.get('person');
  
  if (filterPerson) {
    // 필터 메시지 표시
    const filterMessage = document.getElementById('filter-message');
    const filterPersonName = document.getElementById('filter-person-name');
    if (filterMessage && filterPersonName) {
      filterPersonName.textContent = decodeURIComponent(filterPerson);
      filterMessage.style.display = 'block';
    }
    
    // 프로젝트 필터링
    const projectItems = document.querySelectorAll('.project-item');
    let visibleCount = 0;
    
    projectItems.forEach(function(item) {
      const participants = item.getAttribute('data-participants');
      if (participants && participants.includes(decodeURIComponent(filterPerson))) {
        item.style.display = '';
        visibleCount++;
      } else {
        item.style.display = 'none';
      }
    });
    
    // 결과가 없을 때 메시지 표시
    if (visibleCount === 0) {
      const noResults = document.createElement('div');
      noResults.style.cssText = 'text-align: center; padding: 40px; color: #666;';
      noResults.innerHTML = '<p style="font-size: 1.2em;">' + decodeURIComponent(filterPerson) + '님이 참여한 프로젝트가 없습니다.</p>';
      const archiveSection = document.querySelector('.archive__item');
      if (archiveSection && archiveSection.parentNode) {
        archiveSection.parentNode.appendChild(noResults);
      } else {
        const mainContent = document.querySelector('.page__content') || document.querySelector('main');
        if (mainContent) {
          mainContent.appendChild(noResults);
        }
      }
    }
  }
})();
</script>