import Head from 'next/head';

interface Type {
  title: string;
  description: string;
  // url?: string;
  // image?: string;
}

const SEO = ({ title, description }: Type) => {
  return (
    <Head>
      <title> {title} | Gift MBTI</title>
      <meta
        name="description"
        content={description || 'mbti별 맞춤 선물을 제안해드립니다.'}
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || '나의 선물 유형을 찾아서'} />
      <meta property="og:type" content="website" />
      {/* <meta
        property="og:url"
        content={url || 'https://gift-mbti-sandy.vercel.app'}
      />
      <meta property="og:image" content={image} /> */}
      <meta property="og:article:author" content="선물 유형 찾기" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
      />

      {/* <link
        rel="stylesheet"
        as="style"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
      /> */}
    </Head>
  );
};

export default SEO;
