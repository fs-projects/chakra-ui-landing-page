import React from 'react';

import {
  Box,
  Heading,
  Button,
  Image,
  Text,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
function Providers() {
  const breakpoint = useBreakpointValue({
    base: 'base',
    sm: 'small',
    lg: 'large',
    xl: 'xtralarge',
    '2xl': 'doublextralarge',
  });
  return (
    <Box
      as="section"
      marginBottom={['100px', '150px', '200px', '200px', '200px']}
      display="flex"
      flexDirection={['column', 'row', 'row', 'row', 'row']}
      alignItems="center"
      justifyContent="space-between"
      boxShadow={[
        '-1px 5px 10px 0px rgba(209,209,193,0.72)',
        '-1px 5px 10px 0px rgba(209,209,193,0.72)',
        '-1px 10px 21px 0px rgba(209,209,193,0.72)',
        '-1px 10px 21px 0px rgba(209,209,193,0.72)',
        '-1px 10px 21px 0px rgba(209,209,193,0.72)',
      ]}
      padding={['25px', '25px', '40px', '40px', '40px']}
    >
      {breakpoint === 'base' && (
        <Heading as="h2" size="md" marginBottom="25px" fontFamily="body">
          Leading healthcare providers
        </Heading>
      )}
      <Box width={['100%', '55%', '55%', '55%', '55%']}>
        <Image
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          borderRadius={['10px', '15px', '20px', '20px', '20px']}
          width="100%"
          marginBottom={['20px', '0px', '0px', '0px', '0px']}
        />
      </Box>
      <Box width={['100%', '40%', '40%', '40%', '40%']}>
        <Box marginBottom="20px">
          {breakpoint !== 'base' && (
            <Heading as="h2" size="2xl" marginBottom="25px" fontFamily="body">
              Leading healthcare providers
            </Heading>
          )}
          <Text fontWeight="light" fontSize={['sm', 'md', 'md', 'md', 'md']}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </Text>
        </Box>
        <Box
          display="flex"
          justifyContent={[
            'center',
            'flex-start',
            'flex-start',
            'flex-start',
            'flex-start',
          ]}
        >
          <Button
            colorScheme="teal"
            size={['sm', 'md', 'lg', 'lg', 'lg']}
            borderRadius={['35px', '40px', '55px', '55px', '55px']}
            variant="outline"
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
export default Providers;
