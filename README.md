# Gift MBTI(작업기간)
✨MBTI별 선물을 추천해주는 웹서비스✨


영상 추가하기! <br/>
🔗 https://gift-mbti.vercel.app/

<br/>

## 1. 사용 스택 -> 프레임 워크 라이브러리 설명 추가!
1. Next JS, Typescript,  Emotion

### ➕ 사용 툴
협업 및 프로젝트 관리 I Github <br/>
커뮤니케이션 I Jira <br/>
UI, 화면구성 I Figma <br/>
회의 I 게더타운 


### ➕ 프로젝트 세팅
ESLint, Prettier

<br/>
<details>	
   <summary>자세히 보기</summary>
   <br/>
 <ul>
   
   [![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=zaman17&slug=Gift-MBTI-1.-Next.js-프로젝트-세팅-ESLintairbnb-Prettier-설정&color=dark)](https://velog.io/@zaman17/Gift-MBTI-1.-Next.js-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85-ESLintairbnb-Prettier-%EC%84%A4%EC%A0%95)
   
 </ul>
  </details>

<br/>

 
## 2. 구현 요구사항
- [x] 피그마 화면구성과 동일한 스타일링 구현
- [x] mbti에 맞는 결과 페이지 보여주기(동적라우팅)
- [x] 모든 결과를 모아 볼 수 있는 페이지 구현 
- [x] 전 페이지에서 테스트 다시하기 버튼 클릭 시 모달이 뜨도록 구현

<br/>



## 3. 폴더 구조 🗂 
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
│       │   ├── CopyAlert.tsx
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
│   ├── _document.tsx
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
│   └── themes.ts
└── utils
    └── calculateResult.ts
```
<br/>

## 4. 주안점
<br/>

## 5. 한계 및 개선
#### 성능 개선
: 처음 45점에서 77점으로 많이 개선했지만 아직 개선 여지가 많이 남았음 <br/><br/>
<img width="400" alt="스크린샷 2022-10-25 오후 6 52 36" src="https://user-images.githubusercontent.com/82802784/197742726-8d9cb365-7034-4ac5-aec0-fdcc94678ca5.png">
<br/>

특히 FCP, Speed Index, Largest Contentful Paint에서 개선할 부분이 남음
<img width="828" alt="스크린샷 2022-10-25 오후 6 54 37" src="https://user-images.githubusercontent.com/82802784/197743212-7d9b7c3f-5616-46b1-b747-822c6f9b84c8.png">

➡️ 추후 리팩토링 예정



<br/>

## 6. 💡 A-ha Moment!
<br/>
