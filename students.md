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
  position: fixed !important;
  left: 0 !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  background: #fff !important;
  border: 1px solid #ddd !important;
  border-left: none !important;
  border-radius: 0 8px 8px 0 !important;
  box-shadow: 2px 0 8px rgba(0,0,0,0.1) !important;
  padding: 20px 15px !important;
  z-index: 10000 !important;
  min-width: 150px !important;
}

.students-sidebar-menu a {
  display: block !important;
  padding: 12px 20px !important;
  margin-bottom: 8px !important;
  color: #333 !important;
  text-decoration: none !important;
  border-radius: 6px !important;
  transition: all 0.2s !important;
  font-weight: 500 !important;
  border: 1px solid transparent !important;
  cursor: pointer !important;
  pointer-events: auto !important;
  position: relative !important;
  z-index: 10001 !important;
  user-select: none !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
}

.students-sidebar-menu a:hover {
  background-color: #f5f5f5 !important;
  border-color: #ddd !important;
}

.students-sidebar-menu a.active {
  background-color: #2c3e50 !important;
  color: #fff !important;
  border-color: #2c3e50 !important;
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
  display: none !important;
  visibility: hidden !important;
}

.students-section.active {
  display: block !important;
  visibility: visible !important;
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
// 사이드바 메뉴 전환 기능 - 무한 루프 방지 버전
(function() {
  let isInitialized = false; // 초기화 플래그
  let observer = null; // MutationObserver 참조
  
  function switchSection(sectionId) {
    console.log('Switching to section:', sectionId);
    
    // 모든 링크와 섹션에서 active 제거
    const allLinks = document.querySelectorAll('.sidebar-link');
    const allSections = document.querySelectorAll('.students-section');
    
    allLinks.forEach(function(link) {
      link.classList.remove('active');
    });
    
    allSections.forEach(function(section) {
      section.classList.remove('active');
      section.style.display = 'none';
      section.style.visibility = 'hidden';
    });
    
    // 선택한 섹션 활성화
    const targetLink = document.querySelector('.sidebar-link[data-section="' + sectionId + '"]');
    const targetSection = document.getElementById(sectionId + '-section');
    
    if (targetLink) {
      targetLink.classList.add('active');
      console.log('Link activated:', sectionId);
    }
    
    if (targetSection) {
      targetSection.classList.add('active');
      targetSection.style.display = 'block';
      targetSection.style.visibility = 'visible';
      console.log('Section activated:', sectionId);
    } else {
      console.error('Section not found:', sectionId + '-section');
    }
  }
  
  // 전역 함수로 등록 (HTML onclick에서 사용)
  window.switchToSection = switchSection;
  
  function initSidebarMenu() {
    // 이미 초기화되었으면 스킵
    if (isInitialized) {
      console.log('Already initialized, skipping...');
      return;
    }
    
    console.log('Initializing sidebar menu...');
    
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    
    if (sidebarLinks.length === 0) {
      console.log('Sidebar links not found, retrying...');
      setTimeout(initSidebarMenu, 300);
      return;
    }
    
    // 이미 이벤트가 등록된 링크 확인
    const firstLink = sidebarLinks[0];
    if (firstLink.hasAttribute('data-initialized')) {
      console.log('Links already initialized');
      isInitialized = true;
      return;
    }
    
    // 모든 링크에 이벤트 리스너 추가
    sidebarLinks.forEach(function(link, index) {
      const sectionId = link.getAttribute('data-section');
      
      // 초기화 마커 추가
      link.setAttribute('data-initialized', 'true');
      
      // 스타일 및 속성 설정
      link.style.cursor = 'pointer';
      link.style.pointerEvents = 'auto';
      link.href = '#';
      
      // click 이벤트 (capture phase)
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        console.log('Click (capture) - section:', sectionId);
        switchSection(sectionId);
        return false;
      }, true);
      
      // click 이벤트 (bubble phase)
      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Click (bubble) - section:', sectionId);
        switchSection(sectionId);
        return false;
      }, false);
      
      // mousedown 이벤트
      link.addEventListener('mousedown', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Mousedown - section:', sectionId);
        switchSection(sectionId);
        return false;
      }, true);
      
      // onclick 속성
      link.onclick = function(e) {
        e = e || window.event;
        if (e) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
        console.log('onclick - section:', sectionId);
        switchSection(sectionId);
        return false;
      };
      
      // HTML onclick 속성도 추가
      link.setAttribute('onclick', 'window.switchToSection("' + sectionId + '"); return false;');
    });
    
    isInitialized = true;
    console.log('Sidebar menu initialized with', sidebarLinks.length, 'links');
    
    // MutationObserver 중지
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  }
  
  // DOMContentLoaded에서 한 번만 실행
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(initSidebarMenu, 100);
    });
  } else {
    setTimeout(initSidebarMenu, 100);
  }
  
  // URL 파라미터로 섹션 선택
  const urlParams = new URLSearchParams(window.location.search);
  const section = urlParams.get('section');
  if (section === 'alumni') {
    setTimeout(function() {
      switchSection('alumni');
    }, 1500);
  }
})();
</script>
