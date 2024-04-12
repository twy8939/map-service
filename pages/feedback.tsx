import Header from '@/components/common/Header';
import { NextSeo } from 'next-seo';
import React, { Fragment } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { getFeedbackListFromFirestore } from '@/firebase/feedback';
import { Feedback } from '@/types/feedback';

interface Props {
  initialFeedbackList: Feedback[];
}

export const FeedbackPage: NextPage<Props> = ({ initialFeedbackList }) => {
  return (
    <Fragment>
      <NextSeo
        title="피드백"
        description="매장 지도 서비스에 대한 피드백을 받습니다."
        canonical="https://map-service-two.vercel.app/feedback"
      />
      <Header />
      <main
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          touchAction: 'pinch-zoom',
        }}
      >
        피드백
      </main>
    </Fragment>
  );
};
export default FeedbackPage;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      initalFeedbackList: await getFeedbackListFromFirestore(),
    },
  };
};
