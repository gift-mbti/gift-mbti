import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';

const LoadingWrapper = styled.div`
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-use-select: none;
  user-select: none;
`;
const LoadingTitle = styled.p`
  position: absolute;
  top: 274px;
  left: 115px;
  width: 144px;
  height: 46px;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
  white-space: pre-wrap;
`;

const LoadingImg = styled.div`
  position: absolute;
  top: 320px;
  left: 118px;
`;

const loading = () => {
  const router = useRouter();
  const queryResult = router.query.res;
  const loadingTitle = '선물 유형을\n 분석 중입니다...';

  useEffect(() => {
    setTimeout(() => {
      router.push(`/result/${queryResult}`);
    }, 2500);
  }, []);

  return (
    <LoadingWrapper>
      <SEO title="Loading" />
      <LoadingTitle>{loadingTitle}</LoadingTitle>
      <LoadingImg>
        <Image
          alt="loading img"
          width={139}
          height={132}
          src="/img/loadingGif.gif"
        />
      </LoadingImg>
    </LoadingWrapper>
  );
};

export default loading;
