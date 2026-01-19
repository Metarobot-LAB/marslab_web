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
/* Students 페이지 태그 숨김 */
.page__taxonomy, .taxonomy__index { display: none !important; }

/* 조직도 컨테이너 */
.org-container {
  max-width: 100%;
  padding: 40px 20px;
  text-align: center;
  overflow-x: auto;
}

/* 박스 공통 스타일 */
.node-box {
  display: inline-block;
  padding: 15px 30px;
  border-radius: 12px;
  background: #fff;
  border: 2px solid #333;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  position: relative;
  z-index: 2;
}

/* 최상위 Professor */
.node-professor {
  background: #2c3e50;
  color: #fff;
  font-size: 1.4em;
  min-width: 200px;
}

/* 학위 과정 */
.node-degree {
  background: #34495e;
  color: #fff;
  font-size: 1.2em;
  min-width: 180px;
}

/* 그룹 */
.node-group {
  background: #ecf0f1;
  color: #2c3e50;
  border-color: #bdc3c7;
  font-size: 1.1em;
  min-width: 150px;
}

/* 연결선 스타일 */
.line-vertical {
  width: 2px;
  background: #ccc;
  height: 30px;
  margin: 0 auto;
}

.line-horizontal-bar {
  height: 2px;
  background: #ccc;
  margin: 0 auto;
  position: relative;
  top: -2px;
}

/* 학생 카드 그리드 */
.student-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.student-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 140px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  text-decoration: none !important;
  color: inherit !important;
}

.student-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border-color: #333;
}

.student-name {
  font-size: 1.1em;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
}

.student-major {
  font-size: 0.8em;
  color: #666;
}

/* 레이아웃 섹션 */
.level-section {
  margin-bottom: 40px;
}

.flex-row {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
}

.group-column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 앵커 링크 스크롤 오프셋 */
#students-top,
#alumni {
  scroll-margin-top: 100px;
}
</style>

<div class="org-container">

  <div id="students-top" class="level-section">
    <div class="node-box node-professor">Professor</div>
    <div class="line-vertical"></div>
  </div>

  <div class="level-section">
    <div style="width: 50%; margin: 0 auto; border-top: 2px solid #ccc; height: 30px;"></div>
    
    <div class="flex-row">
      
      <div class="group-column">
        <div class="node-box node-degree">Graduate Students</div>
        <div class="line-vertical" style="height: 40px;"></div>
        
        <div class="flex-row" style="gap: 30px;">
          <div class="group-column">
            <div class="node-box node-group">AI Group</div>
            <div class="line-vertical"></div>
            <div class="student-grid">
              <a href="{{ site.baseurl }}/?person=이승호&group=ai" class="student-card">
                <div class="student-name">이승호</div>
                <div class="student-major">기계공학</div>
              </a>
              <a href="{{ site.baseurl }}/?person=김중길&group=ai" class="student-card">
                <div class="student-name">김중길</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=문준서&group=ai" class="student-card">
                <div class="student-name">문준서</div>
                <div class="student-major">전자공학</div>
              </a>
               <a href="{{ site.baseurl }}/?person=박한솔&group=ai" class="student-card">
                <div class="student-name">박한솔</div>
                <div class="student-major">메카트로닉스</div>
              </a>
            </div>
          </div>

          <div class="group-column">
            <div class="node-box node-group">HW Group</div>
            <div class="line-vertical"></div>
            <div class="student-grid">
              <a href="{{ site.baseurl }}/?person=정성조&group=hardware" class="student-card">
                <div class="student-name">정성조</div>
                <div class="student-major">기계공학</div>
              </a>
              <a href="{{ site.baseurl }}/?person=배성우&group=hardware" class="student-card">
                <div class="student-name">배성우</div>
                <div class="student-major">메카트로닉스</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="group-column">
        <div class="node-box node-degree">Undergraduates</div>
        <div class="line-vertical" style="height: 40px;"></div>

        <div class="flex-row" style="gap: 20px;">
          <div class="group-column">
            <div class="node-box node-group">AI Group</div>
            <div class="line-vertical"></div>
            <div class="student-grid">
              <a href="{{ site.baseurl }}/?person=권혁조&group=ai" class="student-card">
                <div class="student-name">권혁조</div>
                <div class="student-major">메카트로닉스</div>
              </a>
              <a href="{{ site.baseurl }}/?person=강민창&group=ai" class="student-card">
                <div class="student-name">강민창</div>
                <div class="student-major">기계공학</div>
              </a>
              <a href="{{ site.baseurl }}/?person=이강현&group=ai" class="student-card">
                <div class="student-name">이강현</div>
                <div class="student-major">메카트로닉스</div>
              </a>
              <a href="{{ site.baseurl }}/?person=유성우&group=ai" class="student-card">
                <div class="student-name">유성우</div>
                <div class="student-major">메카트로닉스</div>
              </a>
              <a href="{{ site.baseurl }}/?person=남채은&group=ai" class="student-card">
                <div class="student-name">남채은</div>
                <div class="student-major">메카트로닉스</div>
              </a>
            </div>
          </div>

          <div class="group-column">
            <div class="node-box node-group">HW Group</div>
            <div class="line-vertical"></div>
            <div class="student-grid">
              <a href="{{ site.baseurl }}/?person=변호진&group=hardware" class="student-card">
                <div class="student-name">변호진</div>
                <div class="student-major">메카트로닉스</div>
              </a>
              <a href="{{ site.baseurl }}/?person=정윤호&group=hardware" class="student-card">
                <div class="student-name">정윤호</div>
                <div class="student-major">기계공학</div>
              </a>
              <a href="{{ site.baseurl }}/?person=성무건&group=hardware" class="student-card">
                <div class="student-name">성무건</div>
                <div class="student-major">기계공학</div>
              </a>
              <a href="{{ site.baseurl }}/?person=임상수&group=hardware" class="student-card">
                <div class="student-name">임상수</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=오수민&group=hardware" class="student-card">
                <div class="student-name">오수민</div>
                <div class="student-major">기계공학</div>
              </a>
               <a href="{{ site.baseurl }}/?person=김윤기&group=hardware" class="student-card">
                <div class="student-name">김윤기</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=최성열&group=hardware" class="student-card">
                <div class="student-name">최성열</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=강정우&group=hardware" class="student-card">
                <div class="student-name">강정우</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=고다영&group=hardware" class="student-card">
                <div class="student-name">고다영</div>
                <div class="student-major">기계공학</div>
              </a>
               <a href="{{ site.baseurl }}/?person=임희수&group=hardware" class="student-card">
                <div class="student-name">임희수</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=남윤아&group=hardware" class="student-card">
                <div class="student-name">남윤아</div>
                <div class="student-major">메카트로닉스</div>
              </a>
            </div>
          </div>

          <div class="group-column">
            <div class="node-box node-group">Control Group</div>
            <div class="line-vertical"></div>
            <div class="student-grid">
              <a href="{{ site.baseurl }}/?person=서동욱&group=control" class="student-card">
                <div class="student-name">서동욱</div>
                <div class="student-major">메카트로닉스</div>
              </a>
              <a href="{{ site.baseurl }}/?person=서희찬&group=control" class="student-card">
                <div class="student-name">서희찬</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=김호영&group=control" class="student-card">
                <div class="student-name">김호영</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=강동호&group=control" class="student-card">
                <div class="student-name">강동호</div>
                <div class="student-major">메카트로닉스</div>
              </a>
               <a href="{{ site.baseurl }}/?person=이은석&group=control" class="student-card">
                <div class="student-name">이은석</div>
                <div class="student-major">메카트로닉스</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="alumni" style="margin-top: 60px; border-top: 2px dashed #ccc; padding-top: 40px;">
    <div class="node-box" style="background: #95a5a6; color: white; font-size: 1.4em; min-width: 200px;">Alumni</div>
    <div class="line-vertical"></div>
    <div class="student-grid" style="margin-top: 40px;">
      <a href="{{ site.baseurl }}/?person=김우진&group=control" class="student-card">
        <div class="student-name">김우진</div>
        <div class="student-major">메카트로닉스</div>
      </a>
      <a href="{{ site.baseurl }}/?person=박시우&group=control" class="student-card">
        <div class="student-name">박시우</div>
        <div class="student-major">전자공학</div>
      </a>
      <a href="{{ site.baseurl }}/?person=추성권&group=hardware" class="student-card">
        <div class="student-name">추성권</div>
        <div class="student-major">메카트로닉스</div>
      </a>
    </div>
  </div>

</div>
