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
  const filterGroup = urlParams.get('group');
  
  if (filterPerson) {
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
    
    // 결과가 없을 때 그룹별 귀여운 메시지 표시
    if (visibleCount === 0) {
      const noResults = document.createElement('div');
      noResults.style.cssText = 'text-align: center; padding: 60px 20px; color: #666;';
      
      let message = '';
      let emoji = '😊';
      
      if (filterGroup === 'hardware') {
        message = 'SolidWorks 다운로드 중...';
        emoji = '🔧';
      } else if (filterGroup === 'control') {
        message = 'Xenomai 다운로드 중...';
        emoji = '⚙️';
      } else if (filterGroup === 'ai') {
        message = 'Isaac Sim 다운로드 중...';
        emoji = '🤖';
      } else {
        message = '프로젝트 준비 중...';
        emoji = '📦';
      }
      
      noResults.innerHTML = '<div style="font-size: 4em; margin-bottom: 20px;">' + emoji + '</div>' +
                           '<p style="font-size: 1.5em; font-weight: 500; margin-bottom: 10px; color: #2c3e50;">' + 
                           decodeURIComponent(filterPerson) + '님</p>' +
                           '<p style="font-size: 1.2em; color: #7f8c8d;">' + message + '</p>' +
                           '<p style="font-size: 0.95em; color: #95a5a6; margin-top: 20px;">곧 멋진 프로젝트가 올라올 예정입니다! 🚀</p>';
      
      // archive 섹션 찾기
      const archiveSection = document.querySelector('.archive');
      if (archiveSection) {
        archiveSection.appendChild(noResults);
      } else {
        const mainContent = document.querySelector('.page__content') || document.querySelector('main') || document.querySelector('.page');
        if (mainContent) {
          mainContent.appendChild(noResults);
        }
      }
    }
  }
})();
</script>