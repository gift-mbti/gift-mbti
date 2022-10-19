import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SEO from '../components/SEO';

const LoadingWrapper = styled.div`
  position: relative;
`;
const LoadingTitle = styled.p`
  position: absolute;
  font-family: 'Pretendard';
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

const LoadingImg = styled.img`
  position: absolute;
  top: 320px;
  left: 118px;
  width: 139px;
  height: 132px;
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
      <SEO title="Loading" description="loading" />
      <LoadingTitle>{loadingTitle}</LoadingTitle>
      <LoadingImg src="/img/loadingGif.gif" />
    </LoadingWrapper>
  );
};

export default loading;
