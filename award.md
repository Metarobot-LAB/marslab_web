---
layout: single
title: "Award"
permalink: /award/
author_profile: true
classes: wide
show_tags: false
---

<style>
/* Award 페이지에서 태그 완전히 숨기기 */
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

.award-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.award-section {
  margin-bottom: 50px;
}

.award-title {
  font-size: 2em;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 30px;
  text-align: center;
  border-bottom: 3px solid #3498db;
  padding-bottom: 15px;
}

.award-item {
  background: #ffffff;
  border-left: 5px solid #3498db;
  padding: 25px;
  margin-bottom: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  border-radius: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.award-item:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.award-year {
  font-size: 1.3em;
  font-weight: 600;
  color: #3498db;
  margin-bottom: 15px;
}

.award-event {
  font-size: 1.1em;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 10px;
}

.award-prize {
  font-size: 1em;
  color: #27ae60;
  font-weight: 500;
  margin-top: 8px;
  padding-left: 20px;
  position: relative;
}

.award-prize::before {
  content: "🏆";
  position: absolute;
  left: 0;
}

.award-prize-list {
  margin-top: 10px;
  padding-left: 20px;
}

.award-prize-list li {
  margin-bottom: 8px;
  color: #555;
  line-height: 1.6;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .award-title {
    font-size: 1.5em;
  }
  
  .award-item {
    padding: 20px;
  }
  
  .award-year {
    font-size: 1.1em;
  }
  
  .award-event {
    font-size: 1em;
  }
}
</style>

<div class="award-container">

<h1 class="award-title">수상실적</h1>

<div class="award-section">

<div class="award-item">
  <div class="award-year">2025</div>
  <div class="award-event">ZEUS Robot Mission Challenge</div>
  <div class="award-prize">대통령상 수상</div>
</div>

<div class="award-item">
  <div class="award-year">2025</div>
  <div class="award-event">창업 아이디어 경진 대회</div>
  <div class="award-prize">2등</div>
</div>

<div class="award-item">
  <div class="award-year">2025</div>
  <div class="award-event">메타로봇대회</div>
  <div class="award-prize">입상</div>
</div>

<div class="award-item">
  <div class="award-year">2024</div>
  <div class="award-event">R-BIZ CHALLENGE 엑스와이지</div>
  <div class="award-prize">대상 (산업통상자원부장관상) 수상</div>
</div>

<div class="award-item">
  <div class="award-year">2024</div>
  <div class="award-event">메타로봇 경진대회</div>
  <ul class="award-prize-list">
    <li>다관절로봇 부문 총장상 수상</li>
    <li>자율주행 부문 센터장상 수상</li>
    <li>다관절로봇 부문 장려상 수상</li>
    <li>자율주행 부문 장려상 수상</li>
  </ul>
</div>

</div>

</div>

