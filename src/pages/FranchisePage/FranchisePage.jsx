import React from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { IntroSection } from '../sections/IntroSection/IntroSection';
import { InfoCardsSection } from '../sections/InfoCardsSection/InfoCardsSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { ServiceWorkflow } from '../sections/ServiceWorkflow/ServiceWorkflow';
import { CalltoActionSection } from '../sections/CalltoActionSection/CalltoActionSection';

const FranchisePage = () => {
  return (
    <MainLayout>
      <IntroSection
        title={'Franchise with Fetch! Pet Care'}
        subTitle={'Join the Fetch! Pet Care family and bring trusted pet care services to your community. Learn more about our franchise opportunities.'}
        info={'Contact us to learn more'}
        buttonTitle={'Get Started'}
      />
      
      <InfoCardsSection
        title="Why Franchise with Us?"
        subTitle="Join a trusted brand with a proven model and full support."
        info="Explore the benefits of partnering with us"
        placeholder='Your email'
      />
      
      <ReviewsSection
        title="What Our Franchisees Are Saying"
      />
      
      <ServiceWorkflow
        title="How to Start Your Own Franchise"
        subTitle="Becoming a franchise owner is simple with Fetch! Pet Care. Follow these steps to get started."
        info="Learn the steps to owning a Fetch! franchise"
        placeholder='Your email'
      />
      
      <CalltoActionSection
        title="Ready to Join the Fetch! Family?"
        description="Take the first step toward owning your own pet care franchise. Start your journey with Fetch! Pet Care and make a difference in your community."
        buttonLabel="Join Us"
      />
    </MainLayout>
  );
};

export default FranchisePage;
