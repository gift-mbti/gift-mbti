import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <meta name="description" content="mbti별 맞춤 선물을 제안해드립니다." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="나의 선물 유형을 찾아서" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
