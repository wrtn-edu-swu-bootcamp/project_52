# 랜덤 점심 메뉴 룰렛 🎯

> 오늘 점심 뭐 먹지? 고민을 재미있게 해결하는 룰렛 서비스

## 📋 프로젝트 소개

매일 반복되는 점심 메뉴 선택을 재미있는 룰렛 게임으로 해결합니다. 원형 휠을 돌려 랜덤으로 선택된 한식 메뉴를 추천받고, 결과를 친구들과 공유할 수 있습니다.

## ✨ 주요 기능

- 🎯 **원형 휠 룰렛**: Canvas 기반 부드러운 애니메이션
- 🎉 **결과 표시**: 선택된 메뉴 정보와 설명
- 🔄 **다시 돌리기**: 원하지 않는 메뉴가 나오면 다시 도전
- 🔗 **공유 기능**: Web Share API를 통한 간편한 공유
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두 지원
- 🎨 **다크 모드**: 시스템 설정에 따른 자동 다크 모드

## 🛠️ 기술 스택

- **프레임워크**: React 18 + TypeScript 5
- **빌드 도구**: Vite 5
- **스타일링**: CSS Modules
- **테스트**: Vitest + React Testing Library

## 📦 설치 및 실행

### 개발 환경 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
# 개발 서버 시작 (http://localhost:3000)
npm run dev
```

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 테스트

```bash
# 테스트 실행
npm run test

# 테스트 UI
npm run test:ui

# 커버리지
npm run test:coverage
```

### 린트

```bash
# ESLint 실행
npm run lint

# ESLint 자동 수정
npm run lint:fix

# Prettier 포매팅
npm run format
```

## 📁 프로젝트 구조

```
random-lunch-roulette/
├── src/
│   ├── components/         # 공통 컴포넌트
│   │   ├── common/        # Button, Modal 등
│   │   └── layout/        # Header, Footer 등
│   ├── features/          # 기능별 모듈
│   │   ├── roulette/      # 룰렛 기능
│   │   └── result/        # 결과 표시
│   ├── data/              # 정적 데이터 (메뉴, 상수)
│   ├── types/             # TypeScript 타입
│   ├── styles/            # 글로벌 스타일
│   └── utils/             # 유틸리티 함수
├── docs/                  # 문서
└── public/                # 정적 파일
```

## 🎨 디자인 시스템

- **색상**: 따뜻한 오렌지/레드 계열 (식욕 자극)
- **타이포그래피**: Pretendard 폰트 (한글 최적화)
- **애니메이션**: 부드러운 ease-out 효과
- **간격**: 8px 기반 시스템

## 📝 개발 가이드

### 코딩 규칙

- TypeScript 우선 (any 금지)
- 함수형 컴포넌트만 사용
- CSS Modules로 스타일 격리
- Feature-based 폴더 구조
- 자세한 내용은 `.cursorrules` 참고

### Git 커밋 메시지

```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅
refactor: 리팩토링
test: 테스트 추가/수정
chore: 빌드 설정 등
```

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub 리포지토리에 푸시
2. Vercel에 프로젝트 연결
3. 자동 배포 완료!

### 환경 변수

```bash
# .env.production
VITE_APP_TITLE=랜덤 점심 메뉴 룰렛
VITE_APP_URL=https://your-domain.com
```

## 📖 문서

- [프로젝트 기획안](docs/project-proposal.md)
- [디자인 가이드](docs/design-guide.md)
- [코드 아키텍처](docs/code-architecture.md)
- [개발 TODO 리스트](docs/development-todolist.md)

## 🎯 MVP 성공 기준

이 3가지가 동작하면 MVP 성공!

1. ✅ 룰렛을 돌렸을 때 **랜덤 메뉴**가 선택됨
2. ✅ 결과 모달에서 **"다시 돌리기"** 가능
3. ✅ **모바일**에서도 잘 동작함

## 🔮 향후 계획 (V2)

- [ ] 카카오톡 공유 연동
- [ ] 사운드 효과 추가
- [ ] 메뉴 커스터마이징 (추가/삭제)
- [ ] 카테고리 필터
- [ ] 선택 히스토리 기능
- [ ] 최근 선택 메뉴 제외 옵션

## 📄 라이선스

MIT License

## 👤 Author

랜덤 점심 메뉴 룰렛 팀

---

**문서 버전**: 1.0  
**작성일**: 2026-01-23  
**최종 수정일**: 2026-01-23
