import React from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { IntroSection } from '../sections/IntroSection/IntroSection';
import { InfoCardsSection } from '../sections/InfoCardsSection/InfoCardsSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { ServiceWorkflow } from '../sections/ServiceWorkflow/ServiceWorkflow';
import { CalltoActionSection } from '../sections/CalltoActionSection/CalltoActionSection';

const LocationPage = () => {
  return (
    <MainLayout>
      <IntroSection
        title={'Find Us'}
        subTitle={'For over 17 years, Fetch! Pet Care has been right where you need us – find the nearest location to keep your pet happy and healthy!'}
        info={'Call Us at 866.338.2463'}
        buttonTitle={'Location'}
      />
      
      <InfoCardsSection
        title="Our Locations"
        subTitle="Fetch! Pet Care offers services across the country, bringing top-quality care to your area."
        info="Find a location near you"
        placeholder='Find Us'
      />
      
      <ReviewsSection
        title="What Our Clients Are Saying"
      />
      
      <ServiceWorkflow
        title="How to Find Us"
        subTitle="It’s simple to locate and connect with your local Fetch! Pet Care provider."
        info="Enter your location to get started"
        placeholder='Your Location'
      />
      
      <CalltoActionSection
        title="Become a Part of Fetch!"
        description="Join the Fetch! Pet Care family. Find a local branch or start your own franchise to bring quality pet care to your community."
        buttonLabel="Learn More"
      />
    </MainLayout>
  );
};

export default LocationPage;
