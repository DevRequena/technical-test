import React from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { IntroSection } from '../sections/IntroSection/IntroSection';
import { InfoCardsSection } from '../sections/InfoCardsSection/InfoCardsSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { ServiceWorkflow } from '../sections/ServiceWorkflow/ServiceWorkflow';
import { CalltoActionSection } from '../sections/CalltoActionSection/CalltoActionSection';

const HomePage = () => {
  return (
    <MainLayout>
      <IntroSection
        title={'We Get Pet Care!'}
        subTitle={'For over 17 Years, Fetch! Pet Care has been a trusted partner in keeping pets healthy and happy!'}
        info={'Or Call 866.338.2463'}
        buttonTitle={'Schedule Service'}
      />
      <InfoCardsSection
        title="Our Services"
        subTitle="National Brand With a Local Feel. Experience the Fetch! Difference"
        info="Enter Your Location and Fetch Our Services"
        placeholder='Zip Code'
      />
      <ReviewsSection title="Here's what pet owners have to say about Fetch! Pet Care..." />
      <ServiceWorkflow
        title="How it Works"
        subTitle="Because finding a good pet sitter shouldn’t be a hassle. With Fetch! It’s as easy as…"
        info="Enter Your Location and Fetch Our Services"
        placeholder='Zip Code'
      />
      <CalltoActionSection
        title="Make Fetch! Happen"
        description="If you love pets and want exciting work, apply to be a Fetch! Pet Care Provider! We train every team member and provide ongoing support to help you get the most from your experience."
        buttonLabel="Join Now"
      />
    </MainLayout>
  );
};

export default HomePage;
