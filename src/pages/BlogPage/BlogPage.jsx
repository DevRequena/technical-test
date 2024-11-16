import React from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { IntroSection } from '../sections/IntroSection/IntroSection';
import { InfoCardsSection } from '../sections/InfoCardsSection/InfoCardsSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { ServiceWorkflow } from '../sections/ServiceWorkflow/ServiceWorkflow';
import { CalltoActionSection } from '../sections/CalltoActionSection/CalltoActionSection';

const BlogPage = () => {
  return (
    <MainLayout>
      <IntroSection
        title={'Insights & Stories'}
        subTitle={'Discover articles filled with expert advice, pet tips, and heartwarming stories. Join our community by sharing your own story!'}
        info={'Contribute to our community'}
        buttonTitle={'Submit Your Story'}
      />
      
      <InfoCardsSection
        title="Popular Topics"
        subTitle="Explore a variety of pet care articles, tips, and advice curated just for you."
        info="Find insights on pet health, training, and more"
        placeholder = 'Your Email'
      />
      
      <ReviewsSection 
        title="Reader Stories & Feedback"
      />
      
      <ServiceWorkflow
        title="Share Your Story"
        subTitle="Contributing is easy. Follow these steps to share your pet story with our community."
        info="Submit your story and be part of our blog!"
        placeholder = 'Your Email'
      />
      
      <CalltoActionSection
        title="Join Our Community"
        description="Love pets? Become a part of our community by sharing your experiences and insights. Submit your story to inspire others!"
        buttonLabel="Join Us"
      />
    </MainLayout>
  );
};

export default BlogPage;
