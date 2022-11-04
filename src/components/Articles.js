import React from 'react';

import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
function Articles() {
  return (
    <Box marginBottom="200px">
       <Box marginBottom="10px" display="flex" justifyContent="center">
          <Heading as="h2" size="2xl">
            Check out our latest article
          </Heading>
        </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={3} p="50px">
        <GridItem borderRadius="20px" background="#F9F7F7">
          <Image
            src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhlYWx0aGNhcmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            marginBottom="10px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            height="50%"
          />
          <Box pl="20px" py="20px" pr="25px">
            <Heading as="h2" size="md" marginBottom="25px">
              Herbal medicines that are safe for consumption
            </Heading>
            <Text fontWeight="light" fontSize="md" marginBottom="12px">
              Herbal medicine is very widely used at this time because of its
              very good for your health good for your health good for your health good for your health...
            </Text>
            <Button colorScheme="teal" variant="link">
              Read More
            </Button>
            <ArrowForwardIcon w={4} h={4} color="teal" marginLeft="3px" />
          </Box>
        </GridItem>
        <GridItem borderRadius="20px" background="#F9F7F7">
          <Image
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            marginBottom="10px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            height="50%"
          />
          <Box pl="20px" py="20px" pr="25px">
            <Heading as="h2" size="md" marginBottom="25px">
              Disease detection, check up in the laboratory
            </Heading>
            <Text fontWeight="light" fontSize="md" marginBottom="12px">
              In this case, the role of the health laboratory is very important
              to do a disease detection...
            </Text>
            <Button colorScheme="teal" variant="link">
              Read More
            </Button>
            <ArrowForwardIcon w={4} h={4} color="teal" marginLeft="3px" />
          </Box>
        </GridItem>
        <GridItem borderRadius="20px" background="#F9F7F7">
          <Image
            src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvc3BpdGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            marginBottom="10px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            height="50%"
          />
          <Box pl="20px" py="20px" pr="25px">
            <Heading as="h2" size="md" marginBottom="25px">
              Natural care for healthy facial skin
            </Heading>
            <Text fontWeight="light" fontSize="md" marginBottom="12px">
              A healthy lifestyle should start from now and also for your skin
              health. There are some...
            </Text>
            <Button colorScheme="teal" variant="link">
              Read More
            </Button>
            <ArrowForwardIcon w={4} h={4} color="teal" marginLeft="3px" />
          </Box>
        </GridItem>
      </Grid>
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
export default Articles;
