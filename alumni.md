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
/* 기본 설정 */
.page__taxonomy, .taxonomy__index { display: none !important; }

/* 글씨체 설정 */
.org-container,
.org-container * {
  font-family: 'Segoe UI', 'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif;
}

.org-container { max-width: 100%; padding: 40px 20px; text-align: center; overflow-x: auto; }
.node-box { display: inline-block; padding: 15px 30px; border-radius: 12px; background: #fff; border: 2px solid #333; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1); position: relative; z-index: 2; }
.node-alumni { background: #333; color: white; font-size: 1.4em; min-width: 200px; }
.node-group { background: #555; color: #fff; border-color: #333; font-size: 1.1em; min-width: 150px; }
.line-vertical { width: 2px; background: #ccc; height: 30px; margin: 0 auto; }
.flex-row { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; }
.group-column { display: flex; flex-direction: column; align-items: center; }
.student-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 15px; margin-top: 20px; max-width: 800px; }
.student-card { background: #fff; border: 1px solid #ddd; border-radius: 8px; padding: 15px; width: 140px; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; text-decoration: none !important; color: inherit !important; }
.student-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-color: #333; }
.student-name { font-size: 1.1em; font-weight: 600; margin-bottom: 5px; color: #333; }
.student-major { font-size: 0.8em; color: #666; }
.level-section { margin-bottom: 40px; }

/* 대학원생 테이블 스타일 */
.grad-section {
  margin-top: 80px;
  padding-top: 40px;
  border-top: 2px dashed #ccc;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.grad-table {
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-size: 1.1em;
  display: table;
  margin-left: auto;
  margin-right: auto;
}

.grad-table th, .grad-table td {
  padding: 18px 20px;
  border-bottom: 1px solid #ddd;
  text-align: center;
}

.grad-table th {
  background-color: #333;
  font-weight: bold;
  color: #fff;
  border-top: 2px solid #333;
  font-size: 1.15em;
}

.grad-table td {
  font-size: 1.05em;
  color: #333;
}

.grad-table tbody tr:hover {
  background-color: #f5f5f5;
}

/* 반응형 처리 */
@media (max-width: 768px) {
  .grad-table {
    font-size: 0.9em;
  }
  .grad-table th, .grad-table td {
    padding: 12px 10px;
  }
}
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

  <div class="grad-section">
    <h2 style="color: #333; font-weight: bold; margin-bottom: 30px; font-size: 1.8em;">Graduate Students</h2>
    <table class="grad-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Group</th>
          <th>Major</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>이승호</td>
          <td><span style="font-weight:bold;">AI Group</span></td>
          <td>기계공학</td>
        </tr>
        <tr>
          <td>김중길</td>
          <td><span style="font-weight:bold;">AI Group</span></td>
          <td>메카트로닉스공학</td>
        </tr>
        <tr>
          <td>문준서</td>
          <td><span style="font-weight:bold;">AI Group</span></td>
          <td>전자공학</td>
        </tr>
        <tr>
          <td>박한솔</td>
          <td><span style="font-weight:bold;">AI Group</span></td>
          <td>메카트로닉스공학</td>
        </tr>
        <tr>
          <td>정성조</td>
          <td><span style="font-weight:bold;">Hardware Group</span></td>
          <td>기계공학</td>
        </tr>
        <tr>
          <td>배성우</td>
          <td><span style="font-weight:bold;">Hardware Group</span></td>
          <td>메카트로닉스공학</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

