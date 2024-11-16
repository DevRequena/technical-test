import React from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { IntroSection } from '../sections/IntroSection/IntroSection';
import { InfoCardsSection } from '../sections/InfoCardsSection/InfoCardsSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { ServiceWorkflow } from '../sections/ServiceWorkflow/ServiceWorkflow';
import { CalltoActionSection } from '../sections/CalltoActionSection/CalltoActionSection';

const AboutPage = () => {
  return (
    <MainLayout>
      <IntroSection
        title={'About Fetch! Pet Care'}
        subTitle={'Learn more about our journey, values, and commitment to providing top-notch pet care services to our community.'}
        info={'Contact us for more details'}
        buttonTitle={'Our Story'}
      />
      
      <InfoCardsSection
        title="Our Values"
        subTitle="At Fetch! Pet Care, we are committed to trust, love, and quality care for every pet."
        info="Discover what drives us"
        placeholder='Your Email'
      />
      
      <ReviewsSection
        title="What Our Clients Say About Us"
      />
      
      <ServiceWorkflow
        title="Our Mission"
        subTitle="We believe in providing personalized, loving care for every pet, every time. Learn more about how we work."
        info="See how our services make a difference"
        placeholder='Your Email'
      />
      
      <CalltoActionSection
        title="Become a Part of Our Journey"
        description="Join us in our mission to care for pets everywhere. Explore career opportunities or partner with Fetch! Pet Care."
        buttonLabel="Join Us"
      />
    </MainLayout>
  );
};

export default AboutPage;
