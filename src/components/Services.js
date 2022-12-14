import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Grid,
  GridItem,
  Button,
  Flex,
  useBreakpointValue,
  Divider,
} from '@chakra-ui/react';
// import styles from './Services.module.css';
import { Icon } from '@chakra-ui/react';
import { data } from '../data';

import { Box } from '@chakra-ui/react';
function Services() {
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
      boxShadow={[
        '-1px 5px 10px 0px rgba(209,209,193,0.72)',
        '-1px 5px 10px 0px rgba(209,209,193,0.72)',
        '-1px 10px 21px 0px rgba(209,209,193,0.72)',
        '-1px 10px 21px 0px rgba(209,209,193,0.72)',
        '-1px 10px 21px 0px rgba(209,209,193,0.72)',
      ]}
      padding={['25px', '25px', '40px', '40px', '40px']}
    >
      <Box marginBottom={['20px', '25px', '40px', '45px', '45px']}>
        <Box position="relative">
          <Flex
            marginBottom={['20px', '25px', '40px', '45px', '45px']}
            justifyContent="center"
          >
            <Heading
              as="h2"
              size={['md', 'md', 'xl', '2xl', '2xl']}
              fontFamily="body"
            >
              Our Services
            </Heading>
          </Flex>
          <Divider
            borderColor="teal"
            position="absolute"
            bottom="-32%"
            left="30%"
            width="40%"
          />
        </Box>
        <Container maxW="6xl">
          <Text
            textAlign="center"
            fontWeight="light"
            fontSize={['sm', 'md', 'md', 'md', 'md']}
            marginBottom={['10px', '10px', '0px', '0px', '0px']}
          >
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Text>
        </Container>
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
            'repeat(3, 1fr)',
          ]}
          columnGap={['0', '1', '3', '3', '3']}
          rowGap={['2', '1', '3', '3', '3']}
          p={['10px', '15px', '50px', '50px', '50px']}
        >
          {data &&
            data.map((el, i) => {
              return (
                <GridItem
                  w="100%"
                  pl={['15px', '20px', '40px', '40px', '40px']}
                  py={['10px', '20px', '45px', '45x', '45x']}
                  pr={['10px', '20px', '45px', '45x', '45x']}
                  borderRadius={['10px', '15px', '20px', '20px', '20px']}
                  background="#F9F7F7"
                >
                  <Flex
                    alignItems="center"
                    flexDirection={[
                      'row',
                      'column',
                      'column',
                      'column',
                      'column',
                    ]}
                    justifyContent="space-between"
                  >
                    <Heading
                      as="h5"
                      size={['sm', 'sm', 'sm', 'sm', 'sm']}
                      marginBottom="15px"
                      display={['block', 'none', 'none', 'none', 'none']}
                      fontFamily="body"
                    >
                      {el.heading}
                    </Heading>
                    <Icon
                      as={el.icon}
                      width={['20px', '30px', '90px', '90px', '90px']}
                      height={['20px', '30px', '90px', '90px', '90px']}
                      marginBottom="20px"
                    />
                    <Heading
                      as="h5"
                      size={['sm', 'md', 'md', 'md', 'md']}
                      marginBottom="15px"
                      display={['none', 'block', 'block', 'block', 'block']}
                      fontFamily="body"
                    >
                      {el.heading}
                    </Heading>
                  </Flex>
                  <Text
                    fontWeight="light"
                    fontSize={['sm', 'md', 'md', 'md', 'md']}
                  >
                    {el.text}
                  </Text>
                </GridItem>
              );
            })}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
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
  );
}
export default Services;
