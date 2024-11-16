import React from 'react';
import { MainLayout } from '../../Layouts/MainLayout/MainLayout';
import { IntroSection } from '../sections/IntroSection/IntroSection';
import { InfoCardsSection } from '../sections/InfoCardsSection/InfoCardsSection';
import { ReviewsSection } from '../sections/ReviewsSection/ReviewsSection';
import { ServiceWorkflow } from '../sections/ServiceWorkflow/ServiceWorkflow';
import { CalltoActionSection } from '../sections/CalltoActionSection/CalltoActionSection';

const ServicesPage = () => {
  return (
    <MainLayout>
      <IntroSection
        title={'Our Services'}
        subTitle={'Fetch! Pet Care provides a range of high-quality pet care services to keep your pets happy and healthy. Discover our offerings below!'}
        info={'Questions? Call Us Now'}
        buttonTitle={'Explore Services'}
      />
      
      <InfoCardsSection
        title="Explore Our Services"
        subTitle="From dog walking to pet sitting, we have services designed to meet your pet's unique needs."
        info="Learn more about each of our services"
        placeholder='Your Email'
      />
      
      <ReviewsSection
        title="Customer Testimonials"
      />
      
      <ServiceWorkflow
        title="How Our Services Work"
        subTitle="Getting started with Fetch! Pet Care is simple. Here’s how we make it easy for you and your pet."
        info="Follow these steps to book a service"
        placeholder='Your Email'
      />
      
      <CalltoActionSection
        title="Ready to Get Started?"
        description="Whether you need daily walks or overnight care, Fetch! Pet Care is here for you. Schedule a service today and give your pet the care they deserve."
        buttonLabel="Book Now"
      />
    </MainLayout>
  );
};

export default ServicesPage;
