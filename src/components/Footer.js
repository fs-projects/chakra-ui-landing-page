import React from 'react';

import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Flex,
  Image,
  Link,
} from '@chakra-ui/react';
function Footer() {
  return (
    <Box background="#F9F7F7" p="50px">
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem>
          <Box
            display="flex"
            alignItems="center"
            columnGap="10px"
            marginBottom="20px"
          >
            <Image
              width="25px"
              height="25px"
              src="https://images.unsplash.com/photo-1667379586896-ce8d7844eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            />
            <Box as="span" fontWeight="bold">
              Trafalgar
            </Box>
          </Box>
          <Text fontWeight="light" fontSize="sm" marginBottom="30px">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Text>
          <Text fontWeight="light" fontSize="sm">
            ©Trafalgar PTY LTD 2020. All rights reserved
          </Text>
        </GridItem>
        <GridItem>
          <Flex
            flexDirection="column"
            justify-content="space-between"
            rowGap="5px"
            alignItems="center"
          >
            <Heading as="h2" size="sm" marginBottom="15px">
              Company
            </Heading>
            <Link color="teal.500" href="#">
              About
            </Link>
            <Link color="teal.500" href="#">
              Testimonial
            </Link>
            <Link color="teal.500" href="#">
              Find a doctor
            </Link>
            <Link color="teal.500" href="#">
              Apps
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDirection="column"
            justify-content="space-between"
            rowGap="5px"
            alignItems="center"
          >
            <Heading as="h2" size="sm" marginBottom="15px">
              Region
            </Heading>
            <Link color="teal.500" href="#">
              United States of America
            </Link>
            <Link color="teal.500" href="#">
              United Kingdom
            </Link>
            <Link color="teal.500" href="#">
              India
            </Link>
            <Link color="teal.500" href="#">
              Germany
            </Link>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex
            flexDirection="column"
            justify-content="space-between"
            rowGap="5px"
            alignItems="center"
          >
            <Heading as="h2" size="sm" marginBottom="15px">
              Help
            </Heading>
            <Link color="teal.500" href="#">
              Help Center
            </Link>
            <Link color="teal.500" href="#">
              Contact Support
            </Link>
            <Link color="teal.500" href="#">
              Instructions
            </Link>
            <Link color="teal.500" href="#">
              How it works
            </Link>
          </Flex>
        </GridItem>
        <GridItem></GridItem>
        <GridItem></GridItem>
      </Grid>
    </Box>
  );
}
export default Footer;
