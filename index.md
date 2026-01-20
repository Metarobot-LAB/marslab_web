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
  .page__hero--overlay {
    /* 1. 헤더 높이 늘리기 (기본값보다 크게 설정) */
    min-height: 600px !important; 
    
    /* 2. 이미지 위치 조정 (얼굴이 위에 있다면 'center top'으로 설정) */
    background-position: center center !important; 
    
    /* 3. 이미지 크기 방식 (cover는 꽉 채우기, contain은 다 보여주기) */
    /* 얼굴이 잘리는 게 싫다면 아래 주석을 풀어 'contain'을 시도해 볼 수 있습니다. 
       단, 이 경우 좌우 여백이 생길 수 있습니다. */
    /* background-size: contain !important; */
  }
  
  /* 모바일 화면에서는 높이를 조금 줄임 */
  @media (max-width: 768px) {
    .page__hero--overlay {
      min-height: 400px !important;
    }
  }
</style>

{% for post in site.posts %}
  {% include archive-single.html type="grid" %}
{% endfor %}