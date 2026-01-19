---
layout: single
title: "Students"
permalink: /students/
author_profile: true
classes: wide
show_tags: false
sidebar:
  nav: "students_sidebar"
---

<style>
/* 기본 설정 */
.page__taxonomy, .taxonomy__index { display: none !important; }

/* 전체 컨테이너 */
.org-chart-container {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

/* 박스 스타일 */
.node-box {
  display: inline-block;
  padding: 12px 25px;
  border-radius: 8px;
  background: #fff;
  border: 2px solid #333;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: relative;
  z-index: 2;
  min-width: 140px;
}

/* 회장 스타일 */
.node-president {
  background: #2c3e50;
  color: #fff;
  font-size: 1.3em;
  padding: 15px 40px;
  border: none;
}

/* 임원/팀장 스타일 */
.node-leader {
  background: #34495e;
  color: #fff;
  font-size: 1.1em;
}

.node-leader-major {
  font-size: 0.7em;
  font-weight: normal;
  opacity: 0.9;
  margin-top: 5px;
}

/* 그룹 뱃지 스타일 */
.group-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  font-weight: 600;
  margin-bottom: 8px;
  color: #fff;
}
.badge-hw { background-color: #e67e22; }
.badge-ctrl { background-color: #27ae60; }
.badge-ai { background-color: #2980b9; }

/* 연결선 */
.line-vertical {
  width: 2px;
  background: #ccc;
  height: 25px;
  margin: 0 auto;
}

/* 레이아웃 그리드 */
.leaders-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 0;
  flex-wrap: nowrap;
}

.column-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 250px;
}

/* 학생 리스트 스타일 */
.members-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
}

.student-row {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 10px 15px;
  width: 90%;
  max-width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s;
  cursor: pointer;
  text-decoration: none !important;
  color: inherit !important;
}

.student-row:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  border-color: #333;
}

.st-name { 
  font-weight: bold; 
  font-size: 1.05em; 
  color: #333; 
}

.st-info { 
  font-size: 0.9em; 
  color: #666; 
  margin-top: 4px; 
}

/* 대학원생 테이블 스타일 */
.grad-section {
  margin-top: 80px;
  padding-top: 40px;
  border-top: 2px dashed #ccc;
  width: 100%;
}

.grad-table {
  width: 100%;
  max-width: 1000px;
  margin: 30px auto;
  border-collapse: collapse;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  font-size: 1.1em;
}

.grad-table th, .grad-table td {
  padding: 18px 20px;
  border-bottom: 1px solid #eee;
  text-align: center;
}

.grad-table th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #2c3e50;
  border-top: 2px solid #2c3e50;
  font-size: 1.15em;
}

.grad-table td {
  font-size: 1.05em;
}

.grad-table tbody tr:hover {
  background-color: #f8f9fa;
}

/* 반응형 처리 */
@media (max-width: 768px) {
  .leaders-grid {
    flex-direction: column;
    gap: 50px;
  }
  .line-vertical-connector { display: none; }
  .grad-table {
    font-size: 0.9em;
  }
  .grad-table th, .grad-table td {
    padding: 12px 10px;
  }
}
</style>

<div class="org-chart-container">

  <div style="margin-bottom: 20px;">
    <span class="group-badge" style="background: #333;">President</span><br>
    <a href="{{ site.baseurl }}/?person=성무건&group=hardware" class="node-box node-president" style="text-decoration: none; color: #fff;">
      성무건
      <div style="font-size: 0.6em; margin-top: 5px; font-weight: normal; opacity: 0.9;">기계공학</div>
    </a>
    <div class="line-vertical" style="height: 30px;"></div>
  </div>

  <div style="width: 70%; margin: 0 auto; position: relative; height: 20px;" class="line-vertical-connector">
    <div style="border-top: 2px solid #ccc; width: 100%; position: absolute; top: 0;"></div>
    <div style="position: absolute; left: 0; top: 0; width: 2px; height: 20px; background: #ccc;"></div>
    <div style="position: absolute; left: 50%; top: 0; width: 2px; height: 20px; background: #ccc; transform: translateX(-50%);"></div>
    <div style="position: absolute; right: 0; top: 0; width: 2px; height: 20px; background: #ccc;"></div>
  </div>

  <div class="leaders-grid">

    <div class="column-group">
      <span class="group-badge badge-hw">Hardware Leader</span>
      <div class="node-box node-leader">임상수
        <div class="node-leader-major">메카트로닉스공학</div>
      </div>
      <div class="line-vertical"></div>
      
      <div class="members-list">
        <a href="{{ site.baseurl }}/?person=변호진&group=hardware" class="student-row">
          <span class="st-name">변호진</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=정윤호&group=hardware" class="student-row">
          <span class="st-name">정윤호</span>
          <span class="st-info">기계공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=오수민&group=hardware" class="student-row">
          <span class="st-name">오수민</span>
          <span class="st-info">기계공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=김윤기&group=hardware" class="student-row">
          <span class="st-name">김윤기</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=최성열&group=hardware" class="student-row">
          <span class="st-name">최성열</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=강정우&group=hardware" class="student-row">
          <span class="st-name">강정우</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=고다영&group=hardware" class="student-row">
          <span class="st-name">고다영</span>
          <span class="st-info">기계공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=임희수&group=hardware" class="student-row">
          <span class="st-name">임희수</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=남윤아&group=hardware" class="student-row">
          <span class="st-name">남윤아</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
      </div>
    </div>

    <div class="column-group">
      <span class="group-badge badge-ctrl">Control Leader</span>
      <div class="node-box node-leader">서희찬
        <div class="node-leader-major">메카트로닉스공학</div>
      </div>
      <div class="line-vertical"></div>
      
      <div class="members-list">
        <a href="{{ site.baseurl }}/?person=서동욱&group=control" class="student-row">
          <span class="st-name">서동욱</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=김호영&group=control" class="student-row">
          <span class="st-name">김호영</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=이은석&group=control" class="student-row">
          <span class="st-name">이은석</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=강동호&group=control" class="student-row">
          <span class="st-name">강동호</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
      </div>
    </div>

    <div class="column-group">
      <span class="group-badge badge-ai">AI Leader</span>
      <div class="node-box node-leader">강민창
        <div class="node-leader-major">기계공학</div>
      </div>
      <div class="line-vertical"></div>
      
      <div class="members-list">
        <a href="{{ site.baseurl }}/?person=권혁조&group=ai" class="student-row">
          <span class="st-name">권혁조</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=이강현&group=ai" class="student-row">
          <span class="st-name">이강현</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=유성우&group=ai" class="student-row">
          <span class="st-name">유성우</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
        <a href="{{ site.baseurl }}/?person=남채은&group=ai" class="student-row">
          <span class="st-name">남채은</span>
          <span class="st-info">메카트로닉스공학</span>
        </a>
      </div>
    </div>

  </div>

  <div class="grad-section">
    <h2 style="color: #2c3e50; font-weight: bold; margin-bottom: 30px; font-size: 1.8em;">Graduate Students</h2>
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
          <td><span style="color: #2980b9; font-weight:bold;">AI Group</span></td>
          <td>기계공학</td>
        </tr>
        <tr>
          <td>김중길</td>
          <td><span style="color: #2980b9; font-weight:bold;">AI Group</span></td>
          <td>메카트로닉스공학</td>
        </tr>
        <tr>
          <td>문준서</td>
          <td><span style="color: #2980b9; font-weight:bold;">AI Group</span></td>
          <td>전자공학</td>
        </tr>
        <tr>
          <td>박한솔</td>
          <td><span style="color: #2980b9; font-weight:bold;">AI Group</span></td>
          <td>메카트로닉스공학</td>
        </tr>
        <tr>
          <td>정성조</td>
          <td><span style="color: #e67e22; font-weight:bold;">Hardware Group</span></td>
          <td>기계공학</td>
        </tr>
        <tr>
          <td>배성우</td>
          <td><span style="color: #e67e22; font-weight:bold;">Hardware Group</span></td>
          <td>메카트로닉스공학</td>
        </tr>
      </tbody>
    </table>
  </div>

</div>
