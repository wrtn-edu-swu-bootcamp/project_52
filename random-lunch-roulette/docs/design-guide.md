# 랜덤 점심 메뉴 룰렛 - 디자인 가이드

> **버전**: 1.0  
> **작성일**: 2026-01-21  
> **문서 유형**: Design System & Style Guide  
> **기반 문서**: [project-proposal.md](project-proposal.md), [wireframes.md](wireframes.md)

---

## 목차

1. [디자인 원칙](#1-디자인-원칙)
2. [색상 시스템](#2-색상-시스템)
3. [타이포그래피](#3-타이포그래피)
4. [간격 시스템](#4-간격-시스템)
5. [그림자와 Elevation](#5-그림자와-elevation)
6. [버튼 스타일](#6-버튼-스타일)
7. [아이콘 시스템](#7-아이콘-시스템)
8. [애니메이션 가이드](#8-애니메이션-가이드)
9. [컴포넌트 스타일](#9-컴포넌트-스타일)
10. [반응형 디자인](#10-반응형-디자인)
11. [접근성](#11-접근성)
12. [코드 예제](#12-코드-예제)

---

## 1. 디자인 원칙

### 1.1 브랜드 철학

**"재미있고 단순한 결정의 순간"**

매일 반복되는 점심 메뉴 선택을 즐거운 경험으로 바꾸는 것이 우리의 목표입니다. 복잡한 기능보다는 하나의 완벽한 경험에 집중합니다.

### 1.2 디자인 가치

1. **재미 (Fun)**: 룰렛이라는 게임적 요소로 즐거움 제공
2. **단순 (Simple)**: 불필요한 요소 제거, 핵심 기능에 집중
3. **친근 (Friendly)**: 따뜻하고 접근하기 쉬운 비주얼
4. **빠름 (Fast)**: 즉각적인 피드백과 부드러운 애니메이션

### 1.3 디자인 키워드

```
활기찬 (Vibrant) | 맛있는 (Delicious) | 직관적 (Intuitive)
따뜻한 (Warm) | 재미있는 (Playful) | 신뢰할 수 있는 (Reliable)
```

### 1.4 비주얼 톤 & 매너

- **컬러**: 따뜻하고 식욕을 돋우는 색상 (오렌지, 레드, 옐로우)
- **형태**: 둥근 모서리로 친근함 표현
- **타이포그래피**: 가독성 높은 산세리프
- **이미지**: 이모지 활용으로 가볍고 즐거운 느낌

---

## 2. 색상 시스템

### 2.1 브랜드 컬러

#### Primary Color (주황-레드)
활력과 식욕을 자극하는 메인 컬러

| 이름 | 용도 | 색상 코드 | 미리보기 |
|-----|------|---------|---------|
| Primary | 주요 버튼, CTA | `#FF6B35` | 🟠 |
| Primary Hover | 버튼 호버 | `#FF5722` | 🔴 |
| Primary Active | 버튼 클릭 | `#E64A19` | 🔴 |
| Primary Light | 배경 강조 | `#FFE8DF` | 🟡 |
| Primary Dark | 텍스트, 아이콘 | `#D84315` | 🔴 |

#### Secondary Color (밝은 노랑)
활기차고 긍정적인 보조 컬러

| 이름 | 용도 | 색상 코드 | 미리보기 |
|-----|------|---------|---------|
| Secondary | 액센트, 강조 | `#FFD23F` | 🟡 |
| Secondary Hover | 호버 상태 | `#FFC107` | 🟡 |
| Secondary Light | 배경 | `#FFF9E6` | 🟡 |

#### Accent Color (민트 그린)
신선함을 더하는 포인트 컬러

| 이름 | 용도 | 색상 코드 | 미리보기 |
|-----|------|---------|---------|
| Accent | 선택 상태, 하이라이트 | `#4ECDC4` | 🔵 |
| Accent Hover | 호버 상태 | `#45B8AF` | 🔵 |

---

### 2.2 중성 컬러 (Neutral)

12단계 그레이 스케일

| 레벨 | 용도 | Light Mode | Dark Mode |
|-----|------|-----------|-----------|
| 50 | 배경 | `#FAFAFA` | `#0A0A0A` |
| 100 | 카드 배경 | `#F5F5F5` | `#1A1A1A` |
| 200 | 비활성 배경 | `#EEEEEE` | `#2D2D2D` |
| 300 | 경계선 | `#E0E0E0` | `#404040` |
| 400 | 비활성 텍스트 | `#BDBDBD` | `#666666` |
| 500 | 아이콘, 플레이스홀더 | `#9E9E9E` | `#808080` |
| 600 | 본문 텍스트 (보조) | `#757575` | `#999999` |
| 700 | 본문 텍스트 | `#616161` | `#B8B8B8` |
| 800 | 제목 텍스트 | `#424242` | `#DBDBDB` |
| 900 | 강조 텍스트 | `#212121` | `#F5F5F5` |
| 950 | 최대 대비 | `#0A0A0A` | `#FAFAFA` |

---

### 2.3 시맨틱 컬러

#### Success (성공)
| 이름 | 색상 코드 | 용도 |
|-----|---------|------|
| Success | `#4CAF50` | 성공 메시지, 완료 상태 |
| Success Light | `#E8F5E9` | 성공 배경 |
| Success Dark | `#2E7D32` | 성공 텍스트 |

#### Error (오류)
| 이름 | 색상 코드 | 용도 |
|-----|---------|------|
| Error | `#F44336` | 오류 메시지 |
| Error Light | `#FFEBEE` | 오류 배경 |
| Error Dark | `#C62828` | 오류 텍스트 |

#### Warning (경고)
| 이름 | 색상 코드 | 용도 |
|-----|---------|------|
| Warning | `#FF9800` | 경고 메시지 |
| Warning Light | `#FFF3E0` | 경고 배경 |
| Warning Dark | `#E65100` | 경고 텍스트 |

#### Info (정보)
| 이름 | 색상 코드 | 용도 |
|-----|---------|------|
| Info | `#2196F3` | 정보 메시지 |
| Info Light | `#E3F2FD` | 정보 배경 |
| Info Dark | `#1565C0` | 정보 텍스트 |

---

### 2.4 CSS 변수 (Design Tokens)

```css
:root {
  /* Brand Colors */
  --color-primary: #FF6B35;
  --color-primary-hover: #FF5722;
  --color-primary-active: #E64A19;
  --color-primary-light: #FFE8DF;
  --color-primary-dark: #D84315;
  
  --color-secondary: #FFD23F;
  --color-secondary-hover: #FFC107;
  --color-secondary-light: #FFF9E6;
  
  --color-accent: #4ECDC4;
  --color-accent-hover: #45B8AF;
  
  /* Neutral Colors */
  --color-gray-50: #FAFAFA;
  --color-gray-100: #F5F5F5;
  --color-gray-200: #EEEEEE;
  --color-gray-300: #E0E0E0;
  --color-gray-400: #BDBDBD;
  --color-gray-500: #9E9E9E;
  --color-gray-600: #757575;
  --color-gray-700: #616161;
  --color-gray-800: #424242;
  --color-gray-900: #212121;
  --color-gray-950: #0A0A0A;
  
  /* Semantic Colors */
  --color-success: #4CAF50;
  --color-success-light: #E8F5E9;
  --color-success-dark: #2E7D32;
  
  --color-error: #F44336;
  --color-error-light: #FFEBEE;
  --color-error-dark: #C62828;
  
  --color-warning: #FF9800;
  --color-warning-light: #FFF3E0;
  --color-warning-dark: #E65100;
  
  --color-info: #2196F3;
  --color-info-light: #E3F2FD;
  --color-info-dark: #1565C0;
  
  /* Background & Text */
  --color-background: var(--color-gray-50);
  --color-surface: #FFFFFF;
  --color-text-primary: var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-border: var(--color-gray-300);
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
  :root {
    --color-gray-50: #0A0A0A;
    --color-gray-100: #1A1A1A;
    --color-gray-200: #2D2D2D;
    --color-gray-300: #404040;
    --color-gray-400: #666666;
    --color-gray-500: #808080;
    --color-gray-600: #999999;
    --color-gray-700: #B8B8B8;
    --color-gray-800: #DBDBDB;
    --color-gray-900: #F5F5F5;
    --color-gray-950: #FAFAFA;
    
    --color-background: #0A0A0A;
    --color-surface: #1A1A1A;
    --color-text-primary: var(--color-gray-900);
    --color-text-secondary: var(--color-gray-600);
    --color-border: var(--color-gray-300);
  }
}
```

---

### 2.5 색상 사용 가이드

#### 배경 색상
- **페이지 배경**: `--color-background` (gray-50)
- **카드/모달 배경**: `--color-surface` (white)
- **비활성 영역**: `--color-gray-100`

#### 텍스트 색상
- **제목**: `--color-text-primary` (gray-900)
- **본문**: `--color-text-secondary` (gray-600)
- **비활성**: `--color-gray-400`

#### 버튼 색상
- **Primary 버튼**: `--color-primary` 배경
- **Secondary 버튼**: `--color-secondary` 배경
- **Ghost 버튼**: 투명 배경, `--color-primary` 테두리

#### 상태 색상
- **성공**: `--color-success`
- **오류**: `--color-error`
- **경고**: `--color-warning`
- **정보**: `--color-info`

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

#### 한글 폰트
**주 폰트**: Pretendard (권장)
```css
font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

**대체 폰트**: Noto Sans KR
```css
font-family: "Noto Sans KR", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

#### 영문/숫자 폰트
**주 폰트**: Inter
```css
font-family: "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
```

#### 폴백 스택 (완전한 폰트 스택)
```css
font-family: "Pretendard Variable", Pretendard, "Inter", -apple-system, BlinkMacSystemFont, 
             "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, 
             "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
```

---

### 3.2 타입 스케일 (Type Scale)

**비율**: Major Third (1.25)  
**기준 크기**: 16px (1rem)

| 레벨 | 크기 (rem) | 크기 (px) | 용도 | 굵기 |
|-----|----------|----------|------|------|
| h1 | 3.052rem | 48.83px | 페이지 제목 | 700 (Bold) |
| h2 | 2.441rem | 39.06px | 섹션 제목 | 700 (Bold) |
| h3 | 1.953rem | 31.25px | 서브 섹션 | 600 (SemiBold) |
| h4 | 1.563rem | 25.00px | 카드 제목 | 600 (SemiBold) |
| h5 | 1.25rem | 20.00px | 작은 제목 | 500 (Medium) |
| body-lg | 1.125rem | 18.00px | 큰 본문 | 400 (Regular) |
| body | 1rem | 16.00px | 기본 본문 | 400 (Regular) |
| body-sm | 0.875rem | 14.00px | 작은 본문 | 400 (Regular) |
| caption | 0.8rem | 12.80px | 캡션, 레이블 | 400 (Regular) |
| small | 0.75rem | 12.00px | 작은 텍스트 | 400 (Regular) |

---

### 3.3 폰트 굵기 (Font Weight)

| 이름 | 값 | 용도 |
|-----|---|------|
| Light | 300 | 장식적 텍스트 (거의 사용 안 함) |
| Regular | 400 | 기본 본문 텍스트 |
| Medium | 500 | 강조 텍스트, 버튼 |
| SemiBold | 600 | 서브 제목 |
| Bold | 700 | 제목, 강한 강조 |

---

### 3.4 행간 (Line Height)

| 요소 | Line Height | 비고 |
|-----|------------|------|
| h1 | 1.2 (58px) | 타이트한 행간 |
| h2 | 1.25 (49px) | |
| h3-h5 | 1.3 | |
| body | 1.6 (25.6px) | 가독성 중시 |
| button | 1.0 | 버튼 텍스트 |
| caption | 1.4 | |

```css
/* CSS Variables */
:root {
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.6;
  --line-height-loose: 1.8;
}
```

---

### 3.5 자간 (Letter Spacing)

| 요소 | Letter Spacing | 용도 |
|-----|---------------|------|
| h1-h3 | -0.02em | 큰 제목 (타이트하게) |
| body | 0 | 기본 본문 |
| button | 0.02em | 버튼 텍스트 (약간 여유) |
| caption | 0.05em | 작은 텍스트 (가독성 향상) |
| uppercase | 0.1em | 대문자 텍스트 |

---

### 3.6 타이포그래피 CSS 클래스

```css
/* Headings */
.text-h1 {
  font-size: 3.052rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.text-h2 {
  font-size: 2.441rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: -0.02em;
}

.text-h3 {
  font-size: 1.953rem;
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.text-h4 {
  font-size: 1.563rem;
  font-weight: 600;
  line-height: 1.3;
}

.text-h5 {
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.3;
}

/* Body Text */
.text-body-lg {
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.6;
}

.text-body {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
}

.text-body-sm {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
}

/* Caption & Small */
.text-caption {
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.05em;
}

.text-small {
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.4;
}

/* Button Text */
.text-button {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.0;
  letter-spacing: 0.02em;
}
```

---

## 4. 간격 시스템

### 4.1 Spacing Scale (8px 기반)

| 이름 | 값 | rem | 용도 |
|-----|---|-----|------|
| xxs | 2px | 0.125rem | 미세 간격 |
| xs | 4px | 0.25rem | 최소 간격 |
| sm | 8px | 0.5rem | 작은 간격 |
| md | 16px | 1rem | 기본 간격 |
| lg | 24px | 1.5rem | 중간 간격 |
| xl | 32px | 2rem | 큰 간격 |
| 2xl | 48px | 3rem | 매우 큰 간격 |
| 3xl | 64px | 4rem | 섹션 간격 |
| 4xl | 96px | 6rem | 큰 섹션 간격 |

### 4.2 CSS 변수

```css
:root {
  --spacing-xxs: 0.125rem;  /* 2px */
  --spacing-xs: 0.25rem;    /* 4px */
  --spacing-sm: 0.5rem;     /* 8px */
  --spacing-md: 1rem;       /* 16px */
  --spacing-lg: 1.5rem;     /* 24px */
  --spacing-xl: 2rem;       /* 32px */
  --spacing-2xl: 3rem;      /* 48px */
  --spacing-3xl: 4rem;      /* 64px */
  --spacing-4xl: 6rem;      /* 96px */
}
```

### 4.3 간격 사용 가이드

#### 컴포넌트 내부 패딩
- **버튼**: 좌우 `24px` (lg), 상하 `12px` (sm + xs)
- **카드**: `24px` (lg) ~ `32px` (xl)
- **모달**: `32px` (xl)
- **입력 필드**: 좌우 `16px` (md), 상하 `12px`

#### 컴포넌트 간 마진
- **밀접 관계**: `8px` (sm)
- **관련 요소**: `16px` (md)
- **섹션 구분**: `32px` (xl) ~ `48px` (2xl)
- **페이지 섹션**: `64px` (3xl) ~ `96px` (4xl)

#### 텍스트 간격
- **제목-본문**: `16px` (md)
- **문단 간**: `16px` (md) ~ `24px` (lg)
- **리스트 항목**: `8px` (sm)

---

## 5. 그림자와 Elevation

### 5.1 Shadow Levels

3단계 그림자 시스템

| 레벨 | 이름 | 용도 | CSS |
|-----|------|------|-----|
| 1 | Small | 버튼 호버, 작은 카드 | `0 1px 2px rgba(0, 0, 0, 0.05)` |
| 2 | Medium | 카드, 드롭다운 | `0 4px 6px rgba(0, 0, 0, 0.1)` |
| 3 | Large | 모달, 대형 팝업 | `0 10px 15px rgba(0, 0, 0, 0.15)` |
| 4 | XLarge | 최상위 레이어 | `0 20px 25px rgba(0, 0, 0, 0.2)` |

### 5.2 CSS 변수

```css
:root {
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.2);
  
  /* Colored Shadows */
  --shadow-primary: 0 4px 12px rgba(255, 107, 53, 0.25);
  --shadow-secondary: 0 4px 12px rgba(255, 210, 63, 0.25);
}

/* Dark Mode Adjustments */
@media (prefers-color-scheme: dark) {
  :root {
    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.3);
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.35);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.6);
  }
}
```

### 5.3 Elevation 가이드

**Z-Index 레이어링**

| 레벨 | Z-Index | 용도 |
|-----|---------|------|
| Base | 0 | 기본 콘텐츠 |
| Raised | 1 | 호버 상태 |
| Dropdown | 100 | 드롭다운 메뉴 |
| Sticky | 200 | 고정 헤더 |
| Modal Overlay | 900 | 모달 배경 |
| Modal | 1000 | 모달 콘텐츠 |
| Toast | 1100 | 알림 메시지 |

```css
:root {
  --z-base: 0;
  --z-raised: 1;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-modal-overlay: 900;
  --z-modal: 1000;
  --z-toast: 1100;
}
```

---

## 6. 버튼 스타일

### 6.1 버튼 타입

#### Primary Button (주요 액션)
```css
.btn-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-primary:active {
  background: var(--color-primary-active);
  transform: translateY(0);
}

.btn-primary:disabled {
  background: var(--color-gray-300);
  color: var(--color-gray-500);
  cursor: not-allowed;
  box-shadow: none;
}
```

#### Secondary Button (보조 액션)
```css
.btn-secondary {
  background: var(--color-secondary);
  color: var(--color-gray-900);
  border: none;
  box-shadow: var(--shadow-sm);
}

.btn-secondary:hover {
  background: var(--color-secondary-hover);
  box-shadow: var(--shadow-md);
}
```

#### Ghost Button (투명 배경)
```css
.btn-ghost {
  background: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  box-shadow: none;
}

.btn-ghost:hover {
  background: var(--color-primary-light);
  border-color: var(--color-primary-hover);
}
```

---

### 6.2 버튼 크기

| 크기 | 높이 | 패딩 (좌우) | 폰트 크기 | 용도 |
|-----|------|-----------|---------|------|
| Small | 40px | 16px | 14px | 작은 액션 |
| Medium | 48px | 24px | 16px | 기본 버튼 |
| Large | 56px | 32px | 18px | 모바일 주요 버튼 |

```css
/* Small */
.btn-sm {
  height: 40px;
  padding: 0 16px;
  font-size: 0.875rem;
  border-radius: 6px;
}

/* Medium (기본) */
.btn {
  height: 48px;
  padding: 0 24px;
  font-size: 1rem;
  border-radius: 8px;
}

/* Large */
.btn-lg {
  height: 56px;
  padding: 0 32px;
  font-size: 1.125rem;
  border-radius: 10px;
}
```

---

### 6.3 버튼 상태

| 상태 | 설명 | 스타일 |
|-----|------|-------|
| Default | 기본 상태 | 기본 색상 |
| Hover | 마우스 올렸을 때 | 색상 변경, 그림자 증가, Y축 -1px |
| Active | 클릭 중 | 어두운 색상, Y축 원위치 |
| Focus | 키보드 포커스 | 외곽선 표시 |
| Disabled | 비활성 | 회색, 투명도 50%, 커서 금지 |
| Loading | 로딩 중 | 스피너 아이콘, 비활성 |

```css
/* Focus State */
.btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* Loading State */
.btn-loading {
  position: relative;
  color: transparent;
  pointer-events: none;
}

.btn-loading::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  margin-left: -8px;
  margin-top: -8px;
  border: 2px solid white;
  border-radius: 50%;
  border-top-color: transparent;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

### 6.4 아이콘 버튼

```css
.btn-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

/* 아이콘만 있는 버튼 */
.btn-icon-only {
  width: 48px;
  height: 48px;
  padding: 0;
  border-radius: 50%;
}
```

---

## 7. 아이콘 시스템

### 7.1 아이콘 소스

#### 우선순위 1: 이모지
본 서비스는 가볍고 재미있는 느낌을 위해 **이모지를 우선 사용**합니다.

| 용도 | 이모지 | 유니코드 |
|-----|-------|---------|
| 룰렛/돌리기 | 🎯 | U+1F3AF |
| 음식 일반 | 🍽️ | U+1F37D |
| 밥류 | 🍚 | U+1F35A |
| 면류 | 🍜 | U+1F35C |
| 국/찌개 | 🍲 | U+1F372 |
| 고기 | 🍖 | U+1F356 |
| 치킨 | 🍗 | U+1F357 |
| 공유 | 🔗 | U+1F517 |
| 다시하기 | 🔄 | U+1F504 |
| 성공 | ✅ | U+2705 |
| 축하 | 🎉 | U+1F389 |

#### 우선순위 2: SVG 아이콘
이모지로 표현하기 어려운 경우 SVG 아이콘 사용

**추천 아이콘 라이브러리**:
- [Lucide Icons](https://lucide.dev/) - 미니멀하고 일관성 있는 아이콘
- [Material Icons](https://fonts.google.com/icons) - 구글 머티리얼 디자인
- [Heroicons](https://heroicons.com/) - 심플한 SVG 아이콘

---

### 7.2 아이콘 크기

| 크기 | 값 | 용도 |
|-----|---|------|
| Small | 16px | 인라인 텍스트 아이콘 |
| Medium | 24px | 버튼 아이콘, 기본 크기 |
| Large | 32px | 강조 아이콘 |
| XLarge | 48px | 결과 화면 메인 아이콘 |

```css
:root {
  --icon-xs: 12px;
  --icon-sm: 16px;
  --icon-md: 24px;
  --icon-lg: 32px;
  --icon-xl: 48px;
}

.icon-sm { font-size: var(--icon-sm); }
.icon-md { font-size: var(--icon-md); }
.icon-lg { font-size: var(--icon-lg); }
.icon-xl { font-size: var(--icon-xl); }
```

---

### 7.3 이모지 렌더링 최적화

```css
.emoji {
  font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", 
               "Noto Color Emoji", sans-serif;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  vertical-align: middle;
}
```

---

## 8. 애니메이션 가이드

### 8.1 Duration (지속 시간)

| 속도 | 시간 | 용도 |
|-----|------|------|
| Instant | 0ms | 즉시 변경 |
| Fast | 150ms | 작은 변화 (버튼 호버) |
| Normal | 300ms | 일반 전환 (모달, 드롭다운) |
| Slow | 500ms | 큰 변화 (페이지 전환) |
| Roulette | 3000~5000ms | 룰렛 회전 |

```css
:root {
  --duration-instant: 0ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-roulette: 4000ms;
}
```

---

### 8.2 Easing Functions

| 이름 | Cubic Bezier | 용도 |
|-----|-------------|------|
| ease-in | `cubic-bezier(0.4, 0, 1, 1)` | 시작 느리게 |
| ease-out | `cubic-bezier(0, 0, 0.2, 1)` | 끝 느리게 (권장) |
| ease-in-out | `cubic-bezier(0.4, 0, 0.2, 1)` | 시작/끝 느리게 |
| linear | `linear` | 일정한 속도 |
| spring | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | 튕기는 효과 |

```css
:root {
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

---

### 8.3 애니메이션 타입

#### Fade (투명도 전환)
```css
.fade-in {
  animation: fadeIn 300ms var(--ease-out);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Slide (슬라이드)
```css
.slide-up {
  animation: slideUp 300ms var(--ease-out);
}

@keyframes slideUp {
  from { 
    opacity: 0;
    transform: translateY(20px); 
  }
  to { 
    opacity: 1;
    transform: translateY(0); 
  }
}
```

#### Scale (크기 변화)
```css
.scale-in {
  animation: scaleIn 300ms var(--ease-out);
}

@keyframes scaleIn {
  from { 
    opacity: 0;
    transform: scale(0.9); 
  }
  to { 
    opacity: 1;
    transform: scale(1); 
  }
}
```

#### Spin (회전)
```css
.spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

### 8.4 룰렛 애니메이션 특수 정의

```css
.roulette-spin {
  animation: rouletteSpin var(--duration-roulette) var(--ease-roulette) forwards;
}

:root {
  --ease-roulette: cubic-bezier(0.17, 0.67, 0.12, 0.99);
}

@keyframes rouletteSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1800deg); /* 5바퀴 */
  }
}
```

---

### 8.5 모션 감소 설정 (Accessibility)

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  /* 룰렛도 즉시 결과 표시 */
  .roulette-spin {
    animation-duration: 0.01ms !important;
  }
}
```

---

## 9. 컴포넌트 스타일

### 9.1 Header 컴포넌트

```css
.header {
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-lg) var(--spacing-xl);
  text-align: center;
}

.header-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.header-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-secondary);
  font-weight: 400;
}

/* 모바일 */
@media (max-width: 767px) {
  .header {
    padding: var(--spacing-md) var(--spacing-lg);
  }
  
  .header-title {
    font-size: 1.5rem;
  }
  
  .header-subtitle {
    font-size: 1rem;
  }
}
```

---

### 9.2 Roulette Wheel 컴포넌트

```css
.roulette-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  min-height: 600px;
}

.roulette-wheel {
  width: 400px;
  height: 400px;
  position: relative;
  border-radius: 50%;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-2xl);
  will-change: transform;
}

.roulette-pointer {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  z-index: 10;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

/* 회전 상태 */
.roulette-wheel.spinning {
  animation: rouletteSpin var(--duration-roulette) var(--ease-roulette) forwards;
}

/* 모바일 */
@media (max-width: 767px) {
  .roulette-container {
    padding: var(--spacing-xl) var(--spacing-lg);
    min-height: auto;
  }
  
  .roulette-wheel {
    width: 280px;
    height: 280px;
  }
}

/* 태블릿 */
@media (min-width: 768px) and (max-width: 1023px) {
  .roulette-wheel {
    width: 350px;
    height: 350px;
  }
}
```

---

### 9.3 Spin Button 컴포넌트

```css
.spin-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 12px;
  
  font-size: 1.125rem;
  font-weight: 600;
  
  padding: 0 var(--spacing-xl);
  height: 60px;
  min-width: 180px;
  
  box-shadow: var(--shadow-md);
  cursor: pointer;
  
  transition: all var(--duration-fast) var(--ease-out);
}

.spin-button:hover {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.spin-button:active {
  background: var(--color-primary-active);
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.spin-button:disabled {
  background: var(--color-gray-300);
  color: var(--color-gray-500);
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

.spin-button:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 3px;
}

/* 모바일 */
@media (max-width: 767px) {
  .spin-button {
    width: 90%;
    max-width: 310px;
    height: 56px;
    font-size: 1rem;
  }
}
```

---

### 9.4 Result Modal 컴포넌트

```css
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: var(--z-modal-overlay);
  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
  
  animation: fadeIn var(--duration-normal) var(--ease-out);
}

.modal {
  background: var(--color-surface);
  border-radius: 16px;
  box-shadow: var(--shadow-xl);
  
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  
  position: relative;
  z-index: var(--z-modal);
  
  animation: scaleIn var(--duration-normal) var(--ease-out);
}

.modal-header {
  padding: var(--spacing-xl);
  text-align: center;
  border-bottom: 1px solid var(--color-border);
  position: relative;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
}

.modal-close {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  
  width: 36px;
  height: 36px;
  border-radius: 50%;
  
  background: transparent;
  border: none;
  color: var(--color-gray-600);
  
  font-size: 1.5rem;
  cursor: pointer;
  
  transition: all var(--duration-fast) var(--ease-out);
}

.modal-close:hover {
  background: var(--color-gray-100);
  color: var(--color-gray-900);
}

.modal-body {
  padding: var(--spacing-xl);
  text-align: center;
}

.result-menu-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: var(--spacing-lg) 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
}

.result-menu-description {
  font-size: 1rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
}

.result-menu-category {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-primary-light);
  color: var(--color-primary-dark);
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.modal-actions {
  padding: var(--spacing-lg) var(--spacing-xl) var(--spacing-xl);
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
}

/* 모바일 */
@media (max-width: 767px) {
  .modal {
    max-width: 90%;
    border-radius: 12px;
  }
  
  .modal-actions {
    flex-direction: column;
  }
  
  .modal-actions .btn {
    width: 100%;
  }
  
  .result-menu-name {
    font-size: 2rem;
  }
}
```

---

### 9.5 Footer 컴포넌트

```css
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: var(--spacing-lg) var(--spacing-xl);
  text-align: center;
  
  color: var(--color-text-secondary);
  font-size: 0.875rem;
}

.footer-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.footer-link {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

.footer-link:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.footer-divider {
  color: var(--color-gray-400);
}

/* 모바일 */
@media (max-width: 767px) {
  .footer {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: 0.75rem;
  }
  
  .footer-links {
    gap: var(--spacing-sm);
  }
}
```

---

## 10. 반응형 디자인

### 10.1 Breakpoints

```css
:root {
  --breakpoint-mobile: 767px;
  --breakpoint-tablet: 768px;
  --breakpoint-desktop: 1024px;
  --breakpoint-wide: 1440px;
}

/* 모바일 퍼스트 접근 */
/* 기본 스타일은 모바일 */

/* 태블릿 */
@media (min-width: 768px) {
  /* 태블릿 스타일 */
}

/* 데스크톱 */
@media (min-width: 1024px) {
  /* 데스크톱 스타일 */
}

/* 와이드 스크린 */
@media (min-width: 1440px) {
  /* 큰 화면 스타일 */
}
```

---

### 10.2 Container

```css
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--spacing-lg);
  padding-right: var(--spacing-lg);
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding-left: var(--spacing-xl);
    padding-right: var(--spacing-xl);
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1440px) {
  .container {
    max-width: 1200px;
  }
}
```

---

### 10.3 Fluid Typography

```css
/* Fluid font size using clamp() */
.text-h1-fluid {
  font-size: clamp(2rem, 5vw, 3.052rem);
}

.text-h2-fluid {
  font-size: clamp(1.75rem, 4vw, 2.441rem);
}

.text-h3-fluid {
  font-size: clamp(1.5rem, 3vw, 1.953rem);
}

.text-body-fluid {
  font-size: clamp(0.875rem, 2vw, 1rem);
}
```

---

## 11. 접근성

### 11.1 색상 대비율

WCAG AA 기준 충족 (최소 4.5:1)

| 조합 | 대비율 | 통과 |
|-----|-------|-----|
| Primary (#FF6B35) / White | 3.8:1 | ⚠️ Large text only |
| Primary Dark (#D84315) / White | 4.9:1 | ✅ Pass |
| Gray 900 (#212121) / White | 16.1:1 | ✅ Pass |
| Gray 600 (#757575) / White | 4.5:1 | ✅ Pass |

**권장 조합**:
- 본문 텍스트: Gray 900 on White
- 보조 텍스트: Gray 600 on White
- Primary 버튼: White text on Primary Dark

---

### 11.2 포커스 스타일

```css
/* 모든 포커스 가능한 요소 */
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}

/* 버튼 포커스 */
button:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

/* 링크 포커스 */
a:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
  text-decoration: underline;
}

/* 포커스 숨기기 (마우스 클릭 시) */
*:focus:not(:focus-visible) {
  outline: none;
}
```

---

### 11.3 터치 타겟 크기

**최소 크기**: 48x48px (Apple HIG), 44x44px (WCAG)

```css
/* 모든 인터랙티브 요소 */
button,
a,
input,
[role="button"],
[tabindex] {
  min-height: 48px;
  min-width: 48px;
}

/* 모바일에서는 더 크게 */
@media (max-width: 767px) {
  button,
  a[role="button"],
  .btn {
    min-height: 56px;
  }
}
```

---

### 11.4 스크린 리더

```css
/* 시각적으로 숨기지만 스크린 리더는 읽음 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* 포커스 시 보이기 */
.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

---

## 12. 코드 예제

### 12.1 완전한 버튼 구현

```html
<button class="btn btn-primary btn-lg" type="button">
  <span class="emoji">🎯</span>
  <span>돌리기</span>
</button>
```

```css
.btn {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  
  /* Typography */
  font-family: var(--font-primary);
  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
  
  /* Spacing */
  padding: 0 var(--spacing-xl);
  height: 48px;
  
  /* Visual */
  border: none;
  border-radius: 8px;
  background: var(--color-primary);
  color: white;
  box-shadow: var(--shadow-sm);
  
  /* Interaction */
  cursor: pointer;
  user-select: none;
  
  /* Animation */
  transition: all var(--duration-fast) var(--ease-out);
}

.btn:hover:not(:disabled) {
  background: var(--color-primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn:active:not(:disabled) {
  background: var(--color-primary-active);
  box-shadow: var(--shadow-xs);
  transform: translateY(0);
}

.btn:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
}

.btn:disabled {
  background: var(--color-gray-300);
  color: var(--color-gray-500);
  cursor: not-allowed;
  box-shadow: none;
  opacity: 0.6;
}

/* Size variants */
.btn-lg {
  height: 56px;
  padding: 0 var(--spacing-2xl);
  font-size: 1.125rem;
}

.btn-sm {
  height: 40px;
  padding: 0 var(--spacing-md);
  font-size: 0.875rem;
}
```

---

### 12.2 완전한 모달 구현

```html
<div class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
  <div class="modal">
    <div class="modal-header">
      <h2 id="modal-title" class="modal-title">🎉 결과 🎉</h2>
      <button class="modal-close" aria-label="닫기">✕</button>
    </div>
    <div class="modal-body">
      <p class="text-body-sm">오늘 점심은!</p>
      <div class="result-menu-name">
        <span class="emoji">🍚</span>
        <span>비빔밥</span>
        <span class="emoji">🍚</span>
      </div>
      <p class="result-menu-description">건강하고 맛있는 한식의 정석</p>
      <span class="result-menu-category">카테고리: 밥류</span>
    </div>
    <div class="modal-actions">
      <button class="btn btn-secondary">
        <span class="emoji">🔗</span>
        <span>공유하기</span>
      </button>
      <button class="btn btn-primary">
        <span class="emoji">🔄</span>
        <span>다시 돌리기</span>
      </button>
    </div>
  </div>
</div>
```

---

### 12.3 CSS Reset & Base Styles

```css
/* CSS Reset */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-size-adjust: 100%;
}

body {
  font-family: "Pretendard Variable", Pretendard, -apple-system, 
               BlinkMacSystemFont, system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  color: var(--color-text-primary);
  background: var(--color-background);
  
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-primary);
}

p {
  margin-bottom: 1rem;
}

a {
  color: var(--color-primary);
  text-decoration: none;
  transition: color var(--duration-fast) var(--ease-out);
}

a:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
}

/* Button reset */
button {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* Image */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* List */
ul, ol {
  list-style: none;
}
```

---

## 부록

### A. 디자인 토큰 전체 목록

```css
:root {
  /* Colors */
  --color-primary: #FF6B35;
  --color-secondary: #FFD23F;
  --color-accent: #4ECDC4;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  --spacing-3xl: 4rem;
  
  /* Typography */
  --font-primary: "Pretendard Variable", Pretendard, sans-serif;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.15);
  
  /* Border Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;
  
  /* Transitions */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* Z-index */
  --z-dropdown: 100;
  --z-modal: 1000;
  --z-toast: 1100;
}
```

---

### B. 참고 자료

**디자인 시스템**:
- [Material Design](https://material.io/design) - Google
- [Carbon Design System](https://carbondesignsystem.com/) - IBM
- [Radix Colors](https://www.radix-ui.com/colors) - 접근성 우선 색상
- [Ant Design](https://ant.design/) - 종합 디자인 시스템

**타이포그래피**:
- [Typescale](https://typescale.com/) - 타입 스케일 생성기
- [Modern CSS](https://moderncss.dev/) - Fluid Typography

**폰트**:
- [Pretendard](https://github.com/orioncactus/pretendard) - 한글 폰트
- [Inter](https://rsms.me/inter/) - 영문 폰트
- [Google Fonts](https://fonts.google.com/)

**도구**:
- [Coolors](https://coolors.co/) - 색상 팔레트 생성
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - 대비율 확인
- [Can I Use](https://caniuse.com/) - 브라우저 호환성

---

**문서 이력**:
- v1.0 (2026-01-21): 초안 작성, 완전한 디자인 시스템 정의
