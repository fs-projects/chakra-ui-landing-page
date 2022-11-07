import React from 'react';

import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  Flex,
  useBreakpointValue,
} from '@chakra-ui/react';
function CtaSection() {
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
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'row', 'row', 'row', 'row']}
    >
      <Box width={['100%', '40%', '40%', '40%', '40%']}>
        <Box marginBottom={['20px', '25px', '40px', '45px', '45px']}>
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
            <Heading
              as="h2"
              size={['md', 'md', 'xl', '2xl', '2xl']}
              marginBottom={['20px', '25px', '40px', '40px', '40px']}
              fontFamily="body"
            >
              Virtual Healthcare for you
            </Heading>
          </Box>
          {breakpoint === 'base' && (
            <Box
              width={['100%', '55%', '55%', '55%', '55%']}
              marginBottom="20px"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwbWVldGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                borderRadius="10px"
                width="100%"
              />
            </Box>
          )}
          <Text fontWeight="light" fontSize={['sm', 'md', 'md', 'md', 'md']}>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Text>
        </Box>
        <Flex justifyContent={['center', 'start', 'start', 'start', 'start']}>
          <Button
            colorScheme="teal"
            size={['sm', 'md', 'lg', 'lg', 'lg']}
            borderRadius="55px"
          >
            Consult Today
          </Button>
        </Flex>
      </Box>
      {breakpoint !== 'base' && (
        <Box width={['100%', '55%', '55%', '55%', '55%']}>
          <Image
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwbWVldGluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            borderRadius="10px"
            width="100%"
          />
        </Box>
      )}
    </Box>
  );
}
export default CtaSection;
