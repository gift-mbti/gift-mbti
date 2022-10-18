import Head from 'next/head';

interface IType {
  text: string;
}

const SEO = ({ text }: IType) => {
  // jaman - meta tag?
  return (
    <Head>
      <title> {text} | Gift MBTI</title>
    </Head>
  );
};

export default SEO;
