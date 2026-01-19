# 홈페이지 관리 가이드

이 문서는 코드를 전혀 모르는 분도 따라할 수 있도록 매우 자세하게 작성되었습니다.  
홈페이지를 관리하고 새로운 글을 작성하는 모든 방법을 단계별로 설명합니다.

---

## 목차

1. [기본 개념 이해하기](#1-기본-개념-이해하기)
2. [새로운 글 작성하기](#2-새로운-글-작성하기)
3. [사진 첨부하기](#3-사진-첨부하기)
4. [기존 글 수정하기](#4-기존-글-수정하기)
5. [사진 수정 및 교체하기](#5-사진-수정-및-교체하기)
6. [People 페이지 관리하기](#6-people-페이지-관리하기)
7. [Awards 페이지 관리하기](#7-awards-페이지-관리하기)
8. [변경사항 반영하기 (커밋 및 푸시)](#8-변경사항-반영하기-커밋-및-푸시)
9. [자주 묻는 질문 (FAQ)](#9-자주-묻는-질문-faq)

---

## 1. 기본 개념 이해하기

### 1.1 홈페이지 구조

이 홈페이지는 **GitHub**에서 관리되며, 파일을 수정하면 자동으로 웹사이트에 반영됩니다.

**주요 폴더와 파일:**
- `_posts/` : 모든 프로젝트 글들이 저장되는 폴더
- `assets/images/` : 사진들이 저장되는 폴더
- `people.md` : People 페이지 내용
- `awards.md` : Awards 페이지 내용
- `index.md` : 메인 페이지

### 1.2 GitHub 사용 방법

1. **GitHub에 로그인**: https://github.com 에서 로그인
2. **저장소 접속**: `textnecklee/mars.github.io` 저장소로 이동
3. **파일 편집**: 파일을 클릭하고 연필 아이콘(✏️)을 눌러 편집
4. **변경사항 저장**: 하단의 "Commit changes" 버튼 클릭

---

## 2. 새로운 글 작성하기

### 2.1 글 작성 준비

1. GitHub 저장소 페이지에서 `_posts` 폴더로 이동
2. 우측 상단의 **"Add file"** → **"Create new file"** 클릭

### 2.2 파일 이름 규칙

파일 이름은 반드시 다음 형식을 따라야 합니다:
```
YYYY-MM-DD-제목.md
```

**예시:**
- `2025-01-15-robot-arm-project.md`
- `2025-02-20-autonomous-driving.md`
- `2025-03-10-ai-vision-system.md`

**주의사항:**
- 날짜는 실제 작성 날짜로 설정
- 제목은 영어로 작성 (띄어쓰기는 `-`로 연결)
- 파일 확장자는 반드시 `.md`

### 2.3 글 내용 작성하기

파일을 생성하면 아래 템플릿을 복사해서 붙여넣으세요:

```markdown
---
title: "프로젝트 제목"
excerpt: "프로젝트 간단 설명"
categories:
  - Project
participants:
  - 참여자1
  - 참여자2

header:
  teaser: /assets/images/프로젝트사진.jpg
  overlay_image: /assets/images/프로젝트사진.jpg
  overlay_filter: 0.5
  caption: "프로젝트 설명"

last_modified_at: 2025-01-15
toc: true
toc_sticky: true
toc_label: "CONTENTS"
---

## 프로젝트 소개

여기에 프로젝트에 대한 설명을 작성하세요.

## 주요 기능

- 기능 1
- 기능 2
- 기능 3

## 기술 스택

- 기술 1
- 기술 2

## 결과

프로젝트 결과에 대한 설명을 작성하세요.
```

### 2.4 각 항목 설명

**title**: 프로젝트 제목 (홈페이지에 표시됨)

**excerpt**: 프로젝트 간단 설명 (목록에서 표시됨)

**categories**: 카테고리 (반드시 `Project`로 설정)

**participants**: 참여자 목록
- 여러 명일 경우 각 줄에 `- 이름` 형식으로 작성
- 예시:
  ```yaml
  participants:
    - 이강현
    - 홍길동
    - 김철수
  ```

**header**: 상단 이미지 설정
- `teaser`: 목록에 표시될 작은 이미지
- `overlay_image`: 글 상단에 표시될 큰 이미지
- `overlay_filter`: 이미지 어둡게 처리 (0.0~1.0, 숫자가 클수록 어둡게)
- `caption`: 이미지 아래 설명

**last_modified_at**: 마지막 수정 날짜

**toc**: 목차 표시 여부 (`true` 또는 `false`)

### 2.5 글 본문 작성

`---` 아래 부분에 실제 글 내용을 작성합니다.

**마크다운 문법:**
- **굵게**: `**텍스트**`
- *기울임*: `*텍스트*`
- 제목: `## 제목` (## 개수로 크기 조절)
- 목록: `- 항목` 또는 `1. 항목`
- 링크: `[텍스트](URL)`

**예시:**
```markdown
## 프로젝트 소개

이 프로젝트는 **로봇 팔**을 제작하는 프로젝트입니다.

### 주요 특징

- 정밀한 움직임 제어
- 실시간 피드백 시스템
- 사용자 친화적 인터페이스

더 자세한 내용은 [공식 문서](https://example.com)를 참고하세요.
```

### 2.6 글 저장하기

1. 파일 내용을 모두 작성한 후
2. 페이지 하단으로 스크롤
3. **"Commit new file"** 버튼 클릭
4. 커밋 메시지 입력 (예: "Add new project: robot arm")
5. **"Commit new file"** 버튼 다시 클릭

---

## 3. 사진 첨부하기

### 3.1 사진 준비

- 권장 크기: 최대 너비 1920px
- 권장 형식: JPG, PNG
- 파일 이름: 영어로 작성 (예: `robot-arm-main.jpg`)

### 3.2 사진 업로드하기

**방법 1: GitHub 웹에서 업로드**

1. GitHub 저장소에서 `assets/images/` 폴더로 이동
2. **"Add file"** → **"Upload files"** 클릭
3. 사진 파일을 드래그 앤 드롭 또는 **"choose your files"** 클릭
4. 파일 선택 후 **"Commit changes"** 클릭

**방법 2: 기존 파일 수정 시 업로드**

1. `_posts` 폴더에서 글 파일 편집
2. 상단의 **"Upload files"** 탭 클릭
3. 사진 파일 업로드
4. 글 내용에서 이미지 경로 지정

### 3.3 글에 사진 추가하기

글 본문에 사진을 추가하려면 다음 형식을 사용하세요:

```markdown
![이미지 설명](/assets/images/파일이름.jpg)
```

**예시:**
```markdown
![로봇 팔 전체 사진](/assets/images/robot-arm-full.jpg)

이 사진은 로봇 팔의 전체 모습을 보여줍니다.
```

**상단 헤더 이미지 설정:**

글 상단에 큰 이미지를 표시하려면 YAML front matter에서 설정:

```yaml
header:
  teaser: /assets/images/robot-arm-small.jpg
  overlay_image: /assets/images/robot-arm-large.jpg
  overlay_filter: 0.5
  caption: "로봇 팔 프로젝트"
```

### 3.4 사진 경로 확인하기

사진을 업로드한 후, GitHub에서 파일을 클릭하면 URL을 확인할 수 있습니다.
- 파일 경로: `/assets/images/파일이름.jpg`
- 절대 경로 사용: `/assets/images/`로 시작

---

## 4. 기존 글 수정하기

### 4.1 글 찾기

1. GitHub 저장소에서 `_posts` 폴더로 이동
2. 수정하고 싶은 글 파일 클릭

### 4.2 글 편집하기

1. 파일 페이지에서 우측 상단의 **연필 아이콘(✏️)** 클릭
2. 내용 수정
3. 페이지 하단으로 스크롤

### 4.3 수정사항 저장하기

1. **"Commit changes"** 섹션으로 이동
2. 커밋 메시지 입력 (예: "Update project description")
3. **"Commit changes"** 버튼 클릭

**주의사항:**
- 파일 이름은 수정하지 마세요 (날짜가 바뀌면 안 됨)
- YAML front matter의 형식을 유지하세요

---

## 5. 사진 수정 및 교체하기

### 5.1 기존 사진 삭제하기

1. `assets/images/` 폴더로 이동
2. 삭제할 사진 파일 클릭
3. 우측 상단의 **휴지통 아이콘(🗑️)** 클릭
4. 하단에서 **"Commit changes"** 클릭

### 5.2 새 사진으로 교체하기

**방법 1: 같은 이름으로 업로드**

1. 기존 사진 파일 클릭
2. **"Delete"** 버튼 클릭하여 삭제
3. 새 사진을 같은 이름으로 업로드
4. 글에서 경로 수정 불필요 (같은 이름이므로)

**방법 2: 새 이름으로 업로드**

1. 새 사진을 새 이름으로 업로드
2. 글 파일을 편집하여 이미지 경로 수정:
   ```markdown
   ![설명](/assets/images/새파일이름.jpg)
   ```

### 5.3 헤더 이미지 교체하기

글의 상단 이미지를 바꾸려면:

1. 새 이미지를 `assets/images/`에 업로드
2. 글 파일 편집
3. YAML front matter의 `header` 부분 수정:
   ```yaml
   header:
     teaser: /assets/images/새이미지.jpg
     overlay_image: /assets/images/새이미지.jpg
   ```

---

## 6. People 페이지 관리하기

### 6.1 People 페이지 위치

- 파일: `people.md`
- GitHub에서 `people.md` 파일 클릭하여 편집

### 6.2 새로운 인원 추가하기

1. `people.md` 파일 편집
2. 적절한 섹션(Undergraduate Students, Graduate Students, Alumni) 찾기
3. 다음 형식으로 추가:

```html
<div class="person-card">
  <div class="person-name">이름</div>
  <span class="person-group group-hardware">Hardware Group</span>
  <div class="person-major">전공명</div>
</div>
```

**그룹 종류:**
- `group-hardware`: Hardware Group
- `group-ai`: AI Group
- `group-control`: Control Group

**예시:**
```html
<div class="person-card">
  <div class="person-name">홍길동</div>
  <span class="person-group group-ai">AI Group</span>
  <div class="person-major">메카트로닉스공학</div>
</div>
```

### 6.3 인원 정보 수정하기

1. `people.md` 파일에서 해당 인원의 정보 찾기
2. 이름, 그룹, 전공 수정
3. 저장

### 6.4 인원 삭제하기

1. 해당 인원의 전체 `<div class="person-card">...</div>` 블록 삭제
2. 저장

---

## 7. Awards 페이지 관리하기

### 7.1 Awards 페이지 위치

- 파일: `awards.md`
- GitHub에서 `awards.md` 파일 클릭하여 편집

### 7.2 새로운 수상실적 추가하기

1. `awards.md` 파일 편집
2. 적절한 위치에 다음 형식으로 추가:

```html
<div class="award-item">
  <div class="award-year">2025</div>
  <div class="award-event">대회명</div>
  <div class="award-prize">수상내역 수상</div>
</div>
```

**여러 수상이 있는 경우:**
```html
<div class="award-item">
  <div class="award-year">2025</div>
  <div class="award-event">대회명</div>
  <ul class="award-prize-list">
    <li>수상내역1 수상</li>
    <li>수상내역2 수상</li>
  </ul>
</div>
```

**예시:**
```html
<div class="award-item">
  <div class="award-year">2025</div>
  <div class="award-event">로봇 경진대회</div>
  <div class="award-prize">금상 수상</div>
</div>
```

### 7.3 수상실적 수정하기

1. 해당 수상 항목 찾기
2. 연도, 대회명, 수상내역 수정
3. 저장

### 7.4 수상실적 삭제하기

1. 해당 `<div class="award-item">...</div>` 블록 전체 삭제
2. 저장

---

## 8. 변경사항 반영하기 (커밋 및 푸시)

### 8.1 커밋이란?

커밋은 변경사항을 저장하는 것입니다. GitHub 웹에서 파일을 수정하고 저장하면 자동으로 커밋됩니다.

### 8.2 커밋 메시지 작성하기

파일을 저장할 때 커밋 메시지를 입력합니다:

**좋은 커밋 메시지 예시:**
- "Add new project: robot arm system"
- "Update People page: add new member"
- "Fix typo in awards page"
- "Update project description"

**나쁜 커밋 메시지 예시:**
- "수정" (너무 모호함)
- "asdf" (의미 없음)

### 8.3 변경사항 확인하기

1. 저장소 메인 페이지에서 **"commits"** 클릭
2. 최근 커밋 목록 확인
3. 각 커밋을 클릭하여 변경 내용 확인

### 8.4 웹사이트 반영 시간

- 변경사항이 커밋되면 자동으로 GitHub Pages에 반영됩니다
- 보통 **1-2분** 정도 소요됩니다
- 브라우저에서 **새로고침(Ctrl+F5 또는 Cmd+Shift+R)**하여 확인

---

## 9. 자주 묻는 질문 (FAQ)

### Q1. 글을 작성했는데 홈페이지에 나타나지 않아요

**해결 방법:**
1. 파일 이름이 올바른 형식인지 확인 (`YYYY-MM-DD-제목.md`)
2. YAML front matter가 올바르게 작성되었는지 확인 (첫 줄이 `---`로 시작)
3. 몇 분 기다린 후 다시 확인 (빌드 시간 필요)
4. 브라우저 캐시 삭제 후 새로고침

### Q2. 사진이 표시되지 않아요

**해결 방법:**
1. 사진 파일이 `assets/images/` 폴더에 있는지 확인
2. 이미지 경로가 `/assets/images/파일이름.jpg` 형식인지 확인
3. 파일 이름에 한글이나 특수문자가 없는지 확인 (영어와 숫자, `-`만 사용)
4. 파일 확장자가 `.jpg`, `.png` 등 올바른지 확인

### Q3. 글을 삭제하고 싶어요

**방법:**
1. `_posts` 폴더에서 삭제할 파일 클릭
2. 우측 상단의 **휴지통 아이콘(🗑️)** 클릭
3. 하단에서 **"Commit changes"** 클릭

### Q4. 글의 순서를 바꾸고 싶어요

**방법:**
- 글은 날짜 순으로 정렬됩니다
- 파일 이름의 날짜를 변경하면 순서가 바뀝니다
- **주의**: 파일 이름을 변경하면 기존 링크가 깨질 수 있습니다

### Q5. People 페이지에서 인원을 클릭했을 때 프로젝트가 안 나와요

**원인:**
- 해당 인원이 참여한 프로젝트가 없거나
- 프로젝트 글의 `participants`에 이름이 정확히 일치하지 않음

**해결 방법:**
1. 프로젝트 글의 `participants`에 정확한 이름 추가
2. 이름이 정확히 일치하는지 확인 (띄어쓰기, 대소문자 등)

### Q6. 실수로 잘못 수정했어요

**해결 방법:**
1. GitHub에서 파일의 **"History"** 탭 클릭
2. 이전 버전 찾기
3. 해당 버전에서 **"Revert"** 클릭하여 되돌리기

### Q7. 카테고리는 어떻게 설정하나요?

**현재 설정:**
- 모든 프로젝트는 `categories: - Project`로 설정
- 카테고리 페이지에서 자동으로 분류됨

### Q8. 글에 동영상을 넣고 싶어요

**방법:**
YouTube 동영상 링크를 사용:
```markdown
[![동영상 제목](이미지URL)](YouTube링크)
```

또는 iframe 사용:
```html
<iframe width="560" height="315" src="YouTube링크" frameborder="0" allowfullscreen></iframe>
```

### Q9. 여러 사진을 한 번에 업로드할 수 있나요?

**가능합니다:**
1. `assets/images/` 폴더로 이동
2. **"Add file"** → **"Upload files"** 클릭
3. 여러 파일을 동시에 선택하여 업로드

### Q10. 글 작성 시 주의사항은?

**주의사항:**
- 파일 이름은 반드시 `YYYY-MM-DD-제목.md` 형식
- YAML front matter는 정확한 형식 유지
- 이미지 경로는 `/assets/images/`로 시작
- 참여자 이름은 People 페이지와 정확히 일치
- 커밋 메시지는 영어로 작성 (선택사항이지만 권장)

---

## 10. 추가 도움말

### 유용한 링크

- **GitHub 저장소**: https://github.com/textnecklee/mars.github.io
- **마크다운 문법 가이드**: https://www.markdownguide.org/
- **Jekyll 문서**: https://jekyllrb.com/docs/

### 문제 해결

문제가 발생하면:
1. 이 가이드의 FAQ 섹션 확인
2. GitHub의 파일 히스토리에서 이전 버전 확인
3. 필요시 개발자에게 문의

---

**마지막 업데이트**: 2025년 1월


