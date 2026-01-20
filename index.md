---
layout: archive
title: ""
author_profile: true
entries_layout: grid
classes: wide
header:
  overlay_image: /main_picture.jpg
  overlay_filter: 0.3
---

<style>
  /* 헤더 높이 및 배경 설정 */
  .page__hero--overlay {
    min-height: 600px !important; 
    background-position: center center !important; 
  }
  
  /* 이미지 위의 제목(Title)과 설명(Caption) 아예 안 보이게 숨기기 */
  .page__hero-title, 
  .page__hero-caption,
  .page__title { 
    display: none !important; 
  }

  /* 모바일 화면 높이 조정 */
  @media (max-width: 768px) {
    .page__hero--overlay {
      min-height: 400px !important;
    }
  }
</style>

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}