import Head from 'next/head';

interface Type {
  title: string;
  // description?: string;
  // url?: string;
  // image?: string;
}

const SEO = ({ title }: Type) => {
  return (
    <Head>
      <title> {title} | Gift MBTI</title>
      {/* <meta
        name="description"
        content={
          description ||
          '집정리가 필요한 고객에게 정리전문가를 연결하고 정리습관을 만드는 대표 집정리 플랫폼 클린테크 기업'
        }
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title || '정리습관'} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || 'https://jungleehabit.com'} />
      <meta property="og:image" content={image} />
      <meta property="og:article:author" content="정리습관" /> */}
    </Head>
  );
};

export default SEO;
