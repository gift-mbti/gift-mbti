# Gift MBTI
✨MBTI별 선물을 추천해주는 웹서비스✨

구현 기간: 9월 15일부터 2주간 진행, 이후 리팩토링과 디자인 수정을 거침


https://user-images.githubusercontent.com/82802784/197800234-dc4d7efb-2d04-4547-aa50-0355f93f0ad3.mov


🔗 https://gift-mbti.vercel.app/

<br/>

## 1. 사용 스택 
Next JS
: SSR을 사용하고 싶어서! 이 프로젝트는 협업한 디자이너분들의 졸업 프로젝트였다. 많이 바이럴되고 공유되었으면 하는 마음에 SEO에 유리한 SSR 방식의 next를 채택해 사용했다

Typescript 
: 정적 타입 사용! 에러를 컴파일 단계에서 잡을 수 있고 타입을 보면서 코딩해서 훨씬 덜 헷갈린다

Emotion
: CSS-in-JS 사용, emotion이 styled-components보다 조금 더 가볍고 빠름 그리고 SSR에서 emotion은 별도 설정 없이 동작하지만 Styled-components는 ServerStyleSheet 설정을 해야함



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


## 4. 한계 및 개선
#### 성능 개선
: 처음 45점에서 77점으로 많이 개선했지만 아직 개선 여지가 많이 남았음 <br/><br/>
<img width="400" alt="스크린샷 2022-10-25 오후 6 52 36" src="https://user-images.githubusercontent.com/82802784/197742726-8d9cb365-7034-4ac5-aec0-fdcc94678ca5.png">
<br/>

특히 FCP, Speed Index, Largest Contentful Paint에서 개선할 부분이 남음
<img width="828" alt="스크린샷 2022-10-25 오후 6 54 37" src="https://user-images.githubusercontent.com/82802784/197743212-7d9b7c3f-5616-46b1-b747-822c6f9b84c8.png">

➡️ 추후 리팩토링 예정

<br/>

## 5. 💡 A-ha Moment!
#### SEO<br/>

1. head 태그 설정, meta 태그 설정
2. 이미지 크기, 높이 alt는 필수!
3. seo에 맞는 태그 사용하기 ➡️ [장점이 뭐야?](https://velog.io/@zaman17/Div%EC%97%90%EC%84%9C-%EB%B2%97%EC%96%B4%EB%82%98%EA%B8%B0-%EC%8B%9C%EB%A7%A8%ED%8B%B1-%ED%83%9C%EA%B7%B8)

#### 퍼포먼스와 렌더링 속도<br/>
디자인한 분들은 이게 졸업작품이라 이미지가 많이 들어가고 화질이 중요했음 ➡️ 너무 느린 FCP, Speed index

1. next link, next image 사용
2. 폰트 서브셋 사용하기
3. 만들수있는건 되도록이면 이미지 사용하지말고 만들어 사용하자! 

#### 아토믹 패턴 적용기<br/>

1. 재사용성!

확실히 나누고 나니 재사용성이 좋아졌다. 솔직히 작은 플젝이라 그냥 써본다는것에 의의를 두려고 했는데 재사용할 부분이 생각보다 많아서 뿌듯했다.

2. 공인된 명확한 구분점

기존엔 내 마음대로 나눈거라 딱히 기준이 없었다면 지금은 많은 사람들이 사용하는 분리 기준으로 나누어서 코드를 볼 때 안심이 들었다
이 페이지는 혼자 만들었기 때문에 못느꼈지만 아마 협업할 때! 이렇게 명확히 구분해두면 이해하고 찾기 편할 것 같았다!

<details>	
   <summary>자세히 보기</summary>
   <br/>
 <ul>
   
[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=zaman17&slug=Gift-MBTI-3.-Result-페이지-아토믹-디자인-패턴-적용하기&color=dark)](https://velog.io/@zaman17/Gift-MBTI-3.-Result-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%95%84%ED%86%A0%EB%AF%B9-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8C%A8%ED%84%B4-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0)
   
 </ul>
  </details>


<br/>

