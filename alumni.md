---
layout: single
title: "Alumni"
permalink: /alumni/
author_profile: true
classes: wide
show_tags: false
sidebar:
  nav: "students_sidebar"
---

<style>
/* Students 페이지 스타일 재사용 */
.page__taxonomy, .taxonomy__index { display: none !important; }
.org-container { max-width: 100%; padding: 40px 20px; text-align: center; overflow-x: auto; }
.node-box { display: inline-block; padding: 15px 30px; border-radius: 12px; background: #fff; border: 2px solid #333; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; z-index: 2; }
.node-alumni { background: #95a5a6; color: white; font-size: 1.4em; min-width: 200px; }
.node-group { background: #ecf0f1; color: #2c3e50; border-color: #bdc3c7; font-size: 1.1em; min-width: 150px; }
.line-vertical { width: 2px; background: #ccc; height: 30px; margin: 0 auto; }
.flex-row { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
.group-column { display: flex; flex-direction: column; align-items: center; }
.student-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 20px; max-width: 800px; }
.student-card { background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 140px; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; text-decoration: none !important; color: inherit !important; }
.student-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-color: #333; }
.student-name { font-size: 1.1em; font-weight: 600; margin-bottom: 5px; color: #333; }
.student-major { font-size: 0.8em; color: #666; }
.level-section { margin-bottom: 40px; }
</style>

<div class="org-container">

  <div class="level-section">
    <div class="node-box node-alumni">Alumni</div>
    <div class="line-vertical" style="height: 40px;"></div>
  </div>

  <div class="flex-row">
    
    <div class="group-column">
      <div class="node-box node-group">Control Group</div>
      <div class="line-vertical"></div>
      <div class="student-grid">
        <a href="{{ site.baseurl }}/?person=김우진&group=control" class="student-card">
          <div class="student-name">김우진</div>
          <div class="student-major">메카트로닉스</div>
        </a>
        <a href="{{ site.baseurl }}/?person=박시우&group=control" class="student-card">
          <div class="student-name">박시우</div>
          <div class="student-major">전자공학</div>
        </a>
      </div>
    </div>

    <div class="group-column">
      <div class="node-box node-group">Hardware Group</div>
      <div class="line-vertical"></div>
      <div class="student-grid">
        <a href="{{ site.baseurl }}/?person=추성권&group=hardware" class="student-card">
          <div class="student-name">추성권</div>
          <div class="student-major">메카트로닉스</div>
        </a>
      </div>
    </div>

  </div>

</div>

