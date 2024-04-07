import Header from '@/components/common/Header';
import { NextSeo } from 'next-seo';
import React, { Fragment } from 'react';

export default function feedback() {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://map-service-two.vercel.app/feedback"
      />
      <Header />
      <main></main>
    </Fragment>
  );
}
