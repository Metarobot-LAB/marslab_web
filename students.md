---
layout: single
title: "Students"
permalink: /students/
author_profile: true
classes: wide
show_tags: false
---

<script src="{{ site.baseurl }}/assets/js/people-dropdown.js"></script>

<style>
/* Students 페이지 태그 숨김 */
.page__taxonomy, .taxonomy__index { display: none !important; }

/* 왼쪽 사이드바 메뉴 스타일 */
.students-sidebar-menu {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  border: 1px solid #ddd;
  border-left: none;
  border-radius: 0 8px 8px 0;
  box-shadow: 2px 0 8px rgba(0,0,0,0.1);
  padding: 20px 15px;
  z-index: 100;
  min-width: 150px;
}

.students-sidebar-menu a {
  display: block;
  padding: 12px 20px;
  margin-bottom: 8px;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.2s;
  font-weight: 500;
  border: 1px solid transparent;
}

.students-sidebar-menu a:hover {
  background-color: #f5f5f5;
  border-color: #ddd;
}

.students-sidebar-menu a.active {
  background-color: #2c3e50;
  color: #fff;
  border-color: #2c3e50;
}

/* 조직도 컨테이너 */
.org-container {
  max-width: 100%;
  padding: 40px 20px;
  padding-left: 180px; /* 사이드바 공간 확보 */
  text-align: center;
  overflow-x: auto;
}

/* 섹션 숨김/표시 제어 */
.students-section {
  display: none;
}

.students-section.active {
  display: block;
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

/* 학위 과정 (Graduate / Undergraduate) */
.node-degree {
  background: #34495e;
  color: #fff;
  font-size: 1.2em;
  min-width: 180px;
}

/* 그룹 (AI, HW, Control) */
.node-group {
  background: #ecf0f1;
  color: #2c3e50;
  border-color: #bdc3c7;
  font-size: 1.1em;
  min-width: 150px;
}

/* Alumni 박스 */
.node-alumni {
  background: #95a5a6;
  color: #fff;
  font-size: 1.4em;
  min-width: 200px;
}

/* 연결선 스타일 */
.line-vertical {
  width: 2px;
  background: #ccc;
  height: 30px;
  margin: 0 auto;
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

/* 반응형 디자인 */
@media (max-width: 1024px) {
  .students-sidebar-menu {
    position: relative;
    transform: none;
    top: auto;
    left: auto;
    border-radius: 8px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
  }
  
  .org-container {
    padding-left: 20px;
  }
}

@media (max-width: 768px) {
  .students-sidebar-menu {
    flex-direction: column;
    width: 100%;
  }
  
  .students-sidebar-menu a {
    text-align: center;
  }
}
</style>

<!-- 왼쪽 사이드바 메뉴 -->
<div class="students-sidebar-menu">
  <a href="#" class="sidebar-link active" data-section="students">Students</a>
  <a href="#" class="sidebar-link" data-section="alumni">Alumni</a>
</div>

<div class="org-container">

  <!-- Students 섹션 -->
  <div id="students-section" class="students-section active">
    <div class="level-section">
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
  </div>

  <!-- Alumni 섹션 -->
  <div id="alumni-section" class="students-section">
    <div class="level-section">
      <div class="node-box node-alumni">Alumni</div>
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

</div>

<script>
// 사이드바 메뉴 전환 기능
document.addEventListener('DOMContentLoaded', function() {
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const sections = document.querySelectorAll('.students-section');
  
  sidebarLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // 모든 링크와 섹션에서 active 제거
      sidebarLinks.forEach(function(l) {
        l.classList.remove('active');
      });
      sections.forEach(function(s) {
        s.classList.remove('active');
      });
      
      // 클릭한 링크와 해당 섹션에 active 추가
      const sectionId = this.getAttribute('data-section');
      this.classList.add('active');
      document.getElementById(sectionId + '-section').classList.add('active');
    });
  });
  
  // URL 파라미터로 섹션 선택 (선택사항)
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');
  if (section === 'alumni') {
    sidebarLinks[1].click();
  }
});
</script>
