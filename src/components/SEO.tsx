import Head from 'next/head';

interface ITitle {
  title: string;
}

const SEO = ({ title }: ITitle) => {
  return (
    <Head>
      <title>{title} | Gift MBTI</title>
    </Head>
  );
};

export default SEO;
