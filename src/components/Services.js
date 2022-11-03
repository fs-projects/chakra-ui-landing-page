import React from 'react';
import {
  Box,
  Heading,
  Container,
  Text,
  Grid,
  GridItem,
  Button,
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
  return (
    <Box as="section">
      <Box>
        <Container marginBottom="40px">
          <Heading as="h2" size="2xl">
            Our Services
          </Heading>
        </Container>
        <div className={styles.horizontalLine}></div>
        <Container maxW="6xl">
          <Text textAlign="center" fontWeight="light" fontSize="md">
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </Text>
        </Container>
        <Grid templateColumns="repeat(3, 1fr)" gap={3} p="50px">
          <GridItem
            w="100%"
            pl="40px"
            py="45px"
            pr="45px"
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Icon
              as={FcSearch}
              width="90px"
              height="90px"
              marginBottom="20px"
            />
            <Heading as="h5" size="sm" marginBottom="15px">
              Search Doctor
            </Heading>
            <Text fontWeight="light" fontSize="md">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl="40px"
            py="45px"
            pr="45px"
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Icon
              as={MdLocalPharmacy}
              width="90px"
              height="90px"
              marginBottom="20px"
            />
            <Heading as="h5" size="sm" marginBottom="15px">
              Tracking
            </Heading>
            <Text fontWeight="light" fontSize="md">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl="40px"
            py="45px"
            pr="45px"
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Icon
              as={FaSketch}
              width="90px"
              height="90px"
              marginBottom="20px"
            />
            <Heading as="h5" size="sm" marginBottom="15px">
              Online Pharmacy
            </Heading>
            <Text fontWeight="light" fontSize="md">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl="40px"
            py="45px"
            pr="45px"
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Icon
              as={GrEmergency}
              width="90px"
              height="90px"
              marginBottom="20px"
            />
            <Heading as="h5" size="sm" marginBottom="15px">
              Consultation
            </Heading>
            <Text fontWeight="light" fontSize="md">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl="40px"
            py="45px"
            pr="45px"
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Icon
              as={FcViewDetails}
              width="90px"
              height="90px"
              marginBottom="20px"
            />
            <Heading as="h5" size="sm" marginBottom="15px">
              Details Info
            </Heading>
            <Text fontWeight="light" fontSize="md">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            pl="40px"
            py="45px"
            pr="45px"
            borderRadius="20px"
            background="#F9F7F7"
          >
            <Icon
              as={GiDeerTrack}
              width="90px"
              height="90px"
              marginBottom="20px"
            />
            <Heading as="h5" size="sm" marginBottom="15px">
              Emergency Care
            </Heading>
            <Text fontWeight="light" fontSize="md">
              Choose your doctor from thousands of specialist, general, and
              trusted hospitals
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center">
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
export default Services;
