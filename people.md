---
layout: single
title: "People"
permalink: /people/
author_profile: true
classes: wide
---

<style>
.people-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.section-title {
  font-size: 2.5em;
  font-weight: 700;
  margin-top: 60px;
  margin-bottom: 40px;
  color: #2c3e50;
  text-align: center;
  position: relative;
  padding-bottom: 15px;
}

.section-title:first-of-type {
  margin-top: 20px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 2px;
}

.people-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.person-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #3498db;
  position: relative;
  overflow: hidden;
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

.person-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #3498db;
  transition: width 0.3s ease;
}

.person-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.person-card:hover::before {
  width: 100%;
  opacity: 0.05;
}

.person-name {
  font-size: 1.4em;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
  line-height: 1.3;
}

.person-group {
  display: inline-block;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.9em;
  font-weight: 500;
  margin-bottom: 10px;
  color: white;
}

.group-ai {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.group-hardware {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.group-control {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.person-major {
  font-size: 1em;
  color: #7f8c8d;
  margin-top: 8px;
  line-height: 1.5;
}

.person-card:hover .person-name {
  color: #3498db;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .people-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 20px;
  }
  
  .section-title {
    font-size: 2em;
  }
  
  .person-card {
    padding: 20px;
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

</div>
