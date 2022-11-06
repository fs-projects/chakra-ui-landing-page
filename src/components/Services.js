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
} from '@chakra-ui/react';
import styles from './Services.module.css';
import { Icon } from '@chakra-ui/react';
import { FcSearch } from 'react-icons/fc';
import { MdLocalPharmacy } from 'react-icons/md';
import { FaSketch } from 'react-icons/fa';
import { GrEmergency } from 'react-icons/gr';
import { FcViewDetails } from 'react-icons/fc';
import { GiDeerTrack } from 'react-icons/gi';

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
    <Box as="section" marginBottom="200px">
      <Box>
        <Flex marginBottom="40px" justifyContent="center">
          <Heading as="h2" size={['sm', 'md', 'xl', '2xl', '2xl']}>
            Our Services
          </Heading>
        </Flex>
        <div className={styles.horizontalLine}></div>
        <Container maxW="6xl">
          <Text
            textAlign="center"
            fontWeight="light"
            fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
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
          <GridItem
            w="100%"
            pl={['15px', '20px', '40px', '40px', '40px']}
            py={['10px', '20px', '45px', '45x', '45x']}
            pr={['10px', '20px', '45px', '45x', '45x']}
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Flex
              alignItems="center"
              flexDirection={['row', 'column', 'column', 'column', 'column']}
              justifyContent="space-between"
            >
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['block', 'none', 'none', 'none', 'none']}
              >
                Search Doctor
              </Heading>
              <Icon
                as={FcSearch}
                width={['20px', '30px', '90px', '90px', '90px']}
                height={['20px', '30px', '90px', '90px', '90px']}
                marginBottom="20px"
              />
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['none', 'block', 'block', 'block', 'block']}
              >
                Search Doctor
              </Heading>
            </Flex>
            <Text
              fontWeight="light"
              fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
            >
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>

          <GridItem
            w="100%"
            pl={['15px', '20px', '40px', '40px', '40px']}
            py={['10px', '20px', '45px', '45x', '45x']}
            pr={['10px', '20px', '45px', '45x', '45x']}
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Flex
              alignItems="center"
              flexDirection={['row', 'column', 'column', 'column', 'column']}
              justifyContent="space-between"
            >
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['block', 'none', 'none', 'none', 'none']}
              >
                Search Doctor
              </Heading>
              <Icon
                as={MdLocalPharmacy}
                width={['20px', '30px', '90px', '90px', '90px']}
                height={['20px', '30px', '90px', '90px', '90px']}
                marginBottom="20px"
              />
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['none', 'block', 'block', 'block', 'block']}
              >
                Search Doctor
              </Heading>
            </Flex>
            <Text
              fontWeight="light"
              fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
            >
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl={['15px', '20px', '40px', '40px', '40px']}
            py={['10px', '20px', '45px', '45x', '45x']}
            pr={['10px', '20px', '45px', '45x', '45x']}
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Flex
              alignItems="center"
              flexDirection={['row', 'column', 'column', 'column', 'column']}
              justifyContent="space-between"
            >
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['block', 'none', 'none', 'none', 'none']}
              >
                Search Doctor
              </Heading>
              <Icon
                as={FaSketch}
                width={['20px', '30px', '90px', '90px', '90px']}
                height={['20px', '30px', '90px', '90px', '90px']}
                marginBottom="20px"
              />
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['none', 'block', 'block', 'block', 'block']}
              >
                Search Doctor
              </Heading>
            </Flex>
            <Text
              fontWeight="light"
              fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
            >
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl={['15px', '20px', '40px', '40px', '40px']}
            py={['10px', '20px', '45px', '45x', '45x']}
            pr={['10px', '20px', '45px', '45x', '45x']}
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Flex
              alignItems="center"
              flexDirection={['row', 'column', 'column', 'column', 'column']}
              justifyContent="space-between"
            >
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['block', 'none', 'none', 'none', 'none']}
              >
                Search Doctor
              </Heading>
              <Icon
                as={GrEmergency}
                width={['20px', '30px', '90px', '90px', '90px']}
                height={['20px', '30px', '90px', '90px', '90px']}
                marginBottom="20px"
              />
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['none', 'block', 'block', 'block', 'block']}
              >
                Search Doctor
              </Heading>
            </Flex>
            <Text
              fontWeight="light"
              fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
            >
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl={['15px', '20px', '40px', '40px', '40px']}
            py={['10px', '20px', '45px', '45x', '45x']}
            pr={['10px', '20px', '45px', '45x', '45x']}
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Flex
              alignItems="center"
              flexDirection={['row', 'column', 'column', 'column', 'column']}
              justifyContent="space-between"
            >
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['block', 'none', 'none', 'none', 'none']}
              >
                Search Doctor
              </Heading>
              <Icon
                as={FcViewDetails}
                width={['20px', '30px', '90px', '90px', '90px']}
                height={['20px', '30px', '90px', '90px', '90px']}
                marginBottom="20px"
              />
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['none', 'block', 'block', 'block', 'block']}
              >
                Search Doctor
              </Heading>
            </Flex>
            <Text
              fontWeight="light"
              fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
            >
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl={['15px', '20px', '40px', '40px', '40px']}
            py={['10px', '20px', '45px', '45x', '45x']}
            pr={['10px', '20px', '45px', '45x', '45x']}
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Flex
              alignItems="center"
              flexDirection={['row', 'column', 'column', 'column', 'column']}
              justifyContent="space-between"
            >
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['block', 'none', 'none', 'none', 'none']}
              >
                Search Doctor
              </Heading>
              <Icon
                as={GiDeerTrack}
                width={['20px', '30px', '90px', '90px', '90px']}
                height={['20px', '30px', '90px', '90px', '90px']}
                marginBottom="20px"
              />
              <Heading
                as="h5"
                size={['sm', 'md', 'xl', '2xl', '2xl']}
                marginBottom="15px"
                display={['none', 'block', 'block', 'block', 'block']}
              >
                Search Doctor
              </Heading>
            </Flex>
            <Text
              fontWeight="light"
              fontSize={['sm', 'md', 'xl', '2xl', '2xl']}
            >
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button
          colorScheme="teal"
          size={['sm', 'md', 'lg', 'lg', 'lg']}
          borderRadius="55px"
          variant="outline"
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
}
export default Services;
