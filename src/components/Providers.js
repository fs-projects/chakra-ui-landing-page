import React from 'react';

import { Box, Heading, Button, Image, Text } from '@chakra-ui/react';
function Providers() {
  return (
    <Box
      as="section"
      marginBottom="90px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box width="55%">
        <Image
          src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          borderRadius="10px"
          width="100%"
        />
      </Box>
      <Box width="40%">
        <Box marginBottom="40px">
        <Heading as="h2" size="2xl" marginBottom="25px">
          Leading healthcare providers
        </Heading>
        <Text fontWeight="light" fontSize="md">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </Text>
        </Box>
        <Button
          colorScheme="teal"
          size="lg"
          borderRadius="55px"
          variant="outline"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
export default Providers;
