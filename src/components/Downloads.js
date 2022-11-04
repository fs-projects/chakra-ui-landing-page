import React from 'react';

import { Box, Heading, Text, Button, Icon, Image } from '@chakra-ui/react';
import { HiDownload } from 'react-icons/hi';

function Downloads() {
  return (
    <Box
      as="section"
      marginBottom="200px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box width="35%">
        <Box marginBottom="40px">
          <Heading as="h2" size="2xl" marginBottom="25px">
            Download our mobile apps
          </Heading>
          <Text fontWeight="light" fontSize="md">
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Button
            colorScheme="teal"
            size="lg"
            borderRadius="55px"
            variant="outline"
          >
            Download
            <Icon as={HiDownload} marginLeft="3px" />
          </Button>
        </Box>
      </Box>
      <Box width="55%">
        <Image
          src="https://images.unsplash.com/photo-1507297230445-ff678f10b524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJuZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          borderRadius="10px"
          width="100%"
        />
      </Box>
    </Box>
  );
}
export default Downloads;
