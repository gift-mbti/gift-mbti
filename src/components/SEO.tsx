import Head from 'next/head';

interface IType {
  type: string;
}

const SEO = ({ type }: IType) => {
  return (
    <Head>
      <title> MBTI | Gift MBTI</title>
    </Head>
  );
};

export default SEO;
