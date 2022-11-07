import React from 'react';

import {
  Box,
  Heading,
  Text,
  Button,
  Icon,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HiDownload } from 'react-icons/hi';

function Downloads() {
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
    >
      {breakpoint === 'base' && (
        <>
          <Heading as="h2" size="md" marginBottom="25px" fontFamily="body">
            Download our mobile apps
          </Heading>
          <Box width="100%" marginBottom="25px">
            <Image
              src="https://images.unsplash.com/photo-1507297230445-ff678f10b524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJuZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              borderRadius="10px"
              width="100%"
            />
          </Box>
        </>
      )}
      <Box width={['100%', '40%', '40%', '40%', '40%']}>
        <Box marginBottom={['20px', '30px', '40px', '40px', '40px']}>
          {breakpoint !== 'base' && (
            <Heading as="h2" size="2xl" marginBottom="25px" fontFamily="body">
              Download our mobile apps
            </Heading>
          )}
          <Text fontWeight="light" fontSize={['sm', 'md', 'md', 'md', 'md']}>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          display={['none', 'block', 'block', 'block', 'block']}
        >
          <Button
            colorScheme="teal"
            size={['sm', 'md', 'lg', 'lg', 'lg']}
            borderRadius="55px"
            variant="outline"
          >
            Download
            <Icon as={HiDownload} marginLeft="3px" />
          </Button>
        </Box>
      </Box>
      <Box
        width={['100%', '55%', '55%', '55%', '55%']}
        marginBottom={['10px', '0px', '0px', '0px', '0px', '0px']}
        display={['none', 'block', 'block', 'block', 'block']}
      >
        <Image
          src="https://images.unsplash.com/photo-1507297230445-ff678f10b524?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJuZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          borderRadius="10px"
          width="100%"
        />
      </Box>
      {breakpoint === 'base' && (
        <Box display="flex" alignItems="center">
          <Button
            colorScheme="teal"
            size={['sm', 'md', 'lg', 'lg', 'lg']}
            borderRadius="55px"
            variant="outline"
          >
            Download
            <Icon as={HiDownload} marginLeft="3px" />
          </Button>
        </Box>
      )}
    </Box>
  );
}
export default Downloads;
