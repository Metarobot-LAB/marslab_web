---
layout: single
title: "Students"
permalink: /students/
author_profile: true
classes: wide
show_tags: false
---

<style>
/* Students 페이지에서 태그 완전히 숨기기 */
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

.students-container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 40px 20px;
  overflow-x: auto;
}

.org-chart {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 600px;
}

/* 최상위 노드 (Professor) */
.top-node {
  background: #2c3e50;
  color: white;
  padding: 20px 40px;
  border-radius: 8px;
  font-size: 1.3em;
  font-weight: 600;
  margin-bottom: 40px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  min-width: 200px;
  text-align: center;
}

/* 중간 레벨 (Graduate/Undergraduate/Alumni) */
.mid-level {
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
}

.mid-node {
  background: #34495e;
  color: white;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 500;
  box-shadow: 0 3px 5px rgba(0,0,0,0.1);
  min-width: 180px;
  text-align: center;
  position: relative;
}

/* 그룹 레벨 */
.group-level {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
}

.group-node {
  background: #ecf0f1;
  border: 2px solid #bdc3c7;
  padding: 12px 25px;
  border-radius: 6px;
  font-size: 1em;
  font-weight: 500;
  color: #2c3e50;
  min-width: 150px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

/* 학생 카드 레벨 */
.students-level {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.student-card {
  background: #ffffff;
  border: 1px solid #ddd;
  padding: 12px 18px;
  border-radius: 5px;
  font-size: 0.95em;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  min-width: 100px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.student-card:hover {
  background-color: #f8f9fa;
  border-color: #999;
  transform: translateY(-2px);
  box-shadow: 0 3px 6px rgba(0,0,0,0.15);
}

.student-name {
  font-weight: 500;
  margin-bottom: 4px;
}

.student-major {
  font-size: 0.85em;
  color: #666;
  margin-top: 4px;
}

/* 연결선 스타일 */
.connection-line {
  width: 2px;
  background: #bdc3c7;
  margin: 0 auto;
}

.connection-line-vertical {
  height: 30px;
  width: 2px;
  background: #bdc3c7;
  margin: 0 auto 10px;
}

/* 섹션 컨테이너 */
.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

/* 그룹 컨테이너 */
.group-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

/* 반응형 디자인 */
@media (max-width: 1200px) {
  .mid-level {
    flex-direction: column;
    align-items: center;
  }
  
  .group-level {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 768px) {
  .students-container {
    padding: 20px 10px;
  }
  
  .top-node {
    font-size: 1.1em;
    padding: 15px 30px;
  }
  
  .mid-node {
    font-size: 1em;
    padding: 12px 25px;
  }
  
  .group-node {
    font-size: 0.9em;
    padding: 10px 20px;
  }
  
  .student-card {
    font-size: 0.85em;
    padding: 10px 15px;
  }
}
</style>

<div class="students-container">
  <div class="org-chart">
    
    <!-- 최상위: Professor -->
    <div class="top-node">Professor</div>
    <div class="connection-line-vertical"></div>
    
    <!-- 중간 레벨: Graduate Students, Undergraduate Students, Alumni -->
    <div class="mid-level">
      
      <!-- Graduate Students 섹션 -->
      <div class="section-container">
        <div class="mid-node">Graduate Students</div>
        <div class="connection-line-vertical"></div>
        
        <div class="group-level">
          <!-- AI Group -->
          <div class="group-container">
            <div class="group-node">AI Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=이승호&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">이승호</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=김중길&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">김중길</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=문준서&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">문준서</div>
                  <div class="student-major">전자공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=박한솔&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">박한솔</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Hardware Group -->
          <div class="group-container">
            <div class="group-node">Hardware Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=정성조&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">정성조</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=배성우&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">배성우</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Undergraduate Students 섹션 -->
      <div class="section-container">
        <div class="mid-node">Undergraduate Students</div>
        <div class="connection-line-vertical"></div>
        
        <div class="group-level">
          <!-- AI Group -->
          <div class="group-container">
            <div class="group-node">AI Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=권혁조&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">권혁조</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=강민창&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">강민창</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=이강현&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">이강현</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=유성우&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">유성우</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=남채은&group=ai" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">남채은</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Hardware Group -->
          <div class="group-container">
            <div class="group-node">Hardware Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=변호진&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">변호진</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=정윤호&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">정윤호</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=성무건&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">성무건</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=임상수&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">임상수</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=오수민&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">오수민</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=김윤기&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">김윤기</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=최성열&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">최성열</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=강정우&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">강정우</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=고다영&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">고다영</div>
                  <div class="student-major">기계공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=임희수&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">임희수</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=남윤아&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">남윤아</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Control Group -->
          <div class="group-container">
            <div class="group-node">Control Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=서동욱&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">서동욱</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=서희찬&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">서희찬</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=김호영&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">김호영</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=강동호&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">강동호</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=이은석&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">이은석</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Alumni 섹션 -->
      <div class="section-container">
        <div class="mid-node">Alumni</div>
        <div class="connection-line-vertical"></div>
        
        <div class="group-level">
          <!-- Control Group -->
          <div class="group-container">
            <div class="group-node">Control Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=김우진&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">김우진</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
              <a href="{{ site.baseurl }}/?person=박시우&group=control" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">박시우</div>
                  <div class="student-major">전자공학</div>
                </div>
              </a>
            </div>
          </div>
          
          <!-- Hardware Group -->
          <div class="group-container">
            <div class="group-node">Hardware Group</div>
            <div class="connection-line-vertical" style="height: 15px;"></div>
            <div class="students-level">
              <a href="{{ site.baseurl }}/?person=추성권&group=hardware" class="student-card-link" style="text-decoration: none; color: inherit;">
                <div class="student-card">
                  <div class="student-name">추성권</div>
                  <div class="student-major">메카트로닉스공학</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  </div>
</div>

