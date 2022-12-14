import React from 'react';
import { Box } from '@chakra-ui/react';

import Navigation from './components/Navigation';
import CtaSection from './components/CtaSection';
import Services from './components/Services';
import Provider from './components/Providers';
import Downloads from './components/Downloads';
import CustomerTestimonals from './components/CustomerTestimonials';
import Articles from './components/Articles';
import Footer from './components/Footer';
export default function App() {
  return (
    <>
      <Box
        my={['20px', '30px', '60px', '60px', '60px']}
        mx={['30px', '40px', '40px', '150px', '150px']}
      >
        <Navigation />
        <CtaSection />
        <Services />
        <Provider />
        <Downloads />
        {/* <CustomerTestimonals /> */}
        <Articles />
      </Box>
      <Footer />
    </>
  );
}
