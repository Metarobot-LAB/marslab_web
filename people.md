---
layout: single
title: "People"
permalink: /people/
author_profile: true
classes: wide
show_tags: false
---

<style>
/* People 드롭다운 메뉴 스타일 */
.custom-dropdown-menu {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
  position: absolute !important;
  top: 100% !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  background: #fff !important;
  min-width: 160px !important;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
  border: 1px solid #eee !important;
  border-radius: 8px !important;
  z-index: 99999 !important;
  padding: 8px 0 !important;
  list-style: none !important;
  margin-top: 10px !important;
  transition: opacity 0.2s ease-in-out !important;
}

.custom-dropdown-menu::before {
  content: '' !important;
  position: absolute !important;
  top: -6px !important;
  left: 50% !important;
  transform: translateX(-50%) !important;
  border-left: 6px solid transparent !important;
  border-right: 6px solid transparent !important;
  border-bottom: 6px solid #fff !important;
}

.custom-dropdown-menu li {
  margin: 0 !important;
  padding: 0 !important;
  display: block !important;
  text-align: center !important;
}

.custom-dropdown-menu a {
  display: block !important;
  padding: 10px 20px !important;
  color: #333 !important;
  text-decoration: none !important;
  font-size: 0.95em !important;
  font-weight: 500 !important;
  transition: background 0.2s !important;
}

.custom-dropdown-menu a:hover {
  background-color: #f5f7fa !important;
  color: #000 !important;
}

.has-dropdown {
  position: relative !important;
}

.has-dropdown:hover .custom-dropdown-menu {
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  animation: fadeIn 0.2s ease-in-out !important;
}

.has-dropdown:not(:hover) .custom-dropdown-menu {
  display: none !important;
  visibility: hidden !important;
  opacity: 0 !important;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -10px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

<style>
/* People 페이지에서 태그 완전히 숨기기 */
.page__taxonomy,
.taxonomy__index,
.taxonomy__title,
.archive__item-tags,
.page__taxonomy-item,
.taxonomy__section,
.tag__list,
.tag__item,
.taxonomy__tag,
.archive__item-tag,
.page__taxonomy-wrapper {
    display: none !important;
    visibility: hidden !important;
    height: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
}

.people-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  font-size: 1.8em;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 20px;
  color: #333;
  text-align: left;
  padding: 0;
}

.section-title:first-of-type {
  margin-top: 20px;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  margin-bottom: 40px;
}

.person-card {
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 15px;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: inherit;
}

.person-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.person-card:hover {
  border-color: #999;
  background-color: #f9f9f9;
}

.person-name {
  font-size: 1.1em;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
}

.person-group {
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.85em;
  font-weight: 400;
  margin-bottom: 6px;
  color: #666;
  background: #f5f5f5;
  border: 1px solid #ddd;
}

.person-major {
  font-size: 0.9em;
  color: #666;
  margin-top: 6px;
  line-height: 1.4;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .people-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }
  
  .section-title {
    font-size: 1.5em;
  }
  
  .person-card {
    padding: 12px;
  }
}

@media (max-width: 480px) {
  .people-grid {
    grid-template-columns: 1fr;
  }
}
</style>

<div class="people-container">

<h2 class="section-title">Undergraduate Students</h2>

<div class="people-grid">
  <div class="person-card">
    <div class="person-name">변호진</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">권혁조</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">정윤호</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">성무건</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">임상수</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">강민창</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">서동욱</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">서희찬</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <a href="{{ site.baseurl }}/?person=이강현&group=ai" class="person-card-link">
    <div class="person-card">
      <div class="person-name">이강현</div>
      <span class="person-group group-ai">AI Group</span>
      <div class="person-major">메카트로닉스공학</div>
    </div>
  </a>
  
  <div class="person-card">
    <div class="person-name">오수민</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">김윤기</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">최성열</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">김호영</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">유성우</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">강동호</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">강정우</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">이은석</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">고다영</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">임희수</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">남채은</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">남윤아</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
</div>

<h2 class="section-title">Graduate Students</h2>

<div class="people-grid">
  <div class="person-card">
    <div class="person-name">이승호</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">정성조</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">기계공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">김중길</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">문준서</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">전자공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">박한솔</div>
    <span class="person-group group-ai">AI Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">배성우</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
</div>

<h2 class="section-title">Alumni</h2>

<div class="people-grid">
  <div class="person-card">
    <div class="person-name">김우진</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">박시우</div>
    <span class="person-group group-control">Control Group</span>
    <div class="person-major">전자공학</div>
  </div>
  
  <div class="person-card">
    <div class="person-name">추성권</div>
    <span class="person-group group-hardware">Hardware Group</span>
    <div class="person-major">메카트로닉스공학</div>
  </div>
</div>

<script>
// 모든 person-card를 클릭 가능한 링크로 변환
document.addEventListener('DOMContentLoaded', function() {
  const personCards = document.querySelectorAll('.person-card:not(.person-card-link .person-card)');
  const baseurl = '{{ site.baseurl }}' || '';
  
  personCards.forEach(function(card) {
    const personName = card.querySelector('.person-name');
    const personGroup = card.querySelector('.person-group');
    
    if (personName) {
      const name = personName.textContent.trim();
      let group = '';
      
      if (personGroup) {
        const groupText = personGroup.textContent.trim();
        if (groupText.includes('Hardware')) {
          group = 'hardware';
        } else if (groupText.includes('Control')) {
          group = 'control';
        } else if (groupText.includes('AI')) {
          group = 'ai';
        }
      }
      
      const link = document.createElement('a');
      link.href = baseurl + '/?person=' + encodeURIComponent(name) + (group ? '&group=' + group : '');
      link.className = 'person-card-link';
      link.style.cssText = 'text-decoration: none; color: inherit; display: block;';
      
      // 카드를 링크로 감싸기
      card.parentNode.insertBefore(link, card);
      link.appendChild(card);
    }
  });
});
</script>

<script src="{{ site.baseurl }}/assets/js/people-dropdown.js"></script>

</div>
