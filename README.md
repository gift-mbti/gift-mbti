# Gift MBTI
✨MBTI별 선물을 추천해주는 웹서비스✨


### Demo
링크: https://gift-mbti.vercel.app/


## 1. 프로젝트 개요
<br/>

## 2. 목표

### 작업 기간
: 2022-09-16 
<br/>

## 3. 사용 스택
#### 1. Next JS
#### 2. typescript
#### 3. Redux-toolkit
#### 4. Emotion

### ➕ 사용 툴
협업 및 프로젝트 관리 I Github
커뮤니케이션 I Jira
UI, 화면구성 I Figma (디자이너와 협업!)
회의 I 게더타운

### 프로젝트 세팅
[ESLint(airbnb), Prettier](https://velog.io/@zaman17/Gift-MBTI-1.-Next.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85-ESLintairbnb-Prettier-%EC%84%A4%EC%A0%95)

<br/>

## 4. 폴더 구조 🗂 

```
.
├── components
│   ├── QuizArticle.tsx
│   ├── QuizTitle.tsx
│   ├── SEO.tsx
│   └── result
│       ├── atoms
│       │   ├── Button.tsx
│       │   ├── FixedButton.tsx
│       │   ├── PickSign.tsx
│       │   ├── ShareButton.tsx
│       │   └── Tag.tsx
│       ├── molecules
│       │   ├──  GotoHomeModal.tsx
│       │   ├── Card.tsx
│       │   ├── Gifts.tsx
│       │   ├── Pick.tsx
│       │   └── SmallCard.tsx
│       └── organisms
│           ├── Cards.tsx
│           ├── Description.tsx
│           └── Share.tsx
├── data
│   ├── quiz.json
│   ├── quiz.ts
│   └── result.json
├── pages
│   ├── 404.tsx
│   ├── _app.tsx
│   ├── index.tsx
│   ├── loading.tsx
│   ├── quiz.tsx
│   ├── result
│   │   └── [type].tsx
│   └── results
│       └── [types].tsx
├── store
├── styles
│   ├── emotion.d.ts
│   ├── modalStyle.ts
│   ├── reset.ts
│   ├── style.css
│   └── themes.ts
└── utils
    └── calculateResult.ts

```
<br/>

## 5. Why & How
<br/>



