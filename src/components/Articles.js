import React from 'react';

import {
  Box,
  Grid,
  GridItem,
  Image,
  Heading,
  Text,
  Button,
  Flex,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { articles } from '../data';
function Articles() {
  return (
    <Box
      marginBottom={['50px', '60px', '100px', '100px', '100px']}
      boxShadow={'-1px 10px 21px 0px rgba(209,209,193,0.72)'}
      padding={['25px', '25px', '40px', '40px', '40px']}
    >
      <Box marginBottom="10px" display="flex" justifyContent="center">
        <Heading
          as="h2"
          size={['md', 'md', 'xl', '2xl', '2xl']}
          fontFamily="body"
        >
          Check out our latest article
        </Heading>
      </Box>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
        ]}
        columnGap={['0', '1', '3', '3', '3']}
        rowGap={['2', '2', '3', '3', '3']}
        p={['10px', '15px', '50px', '50px', '50px']}
      >
        {articles &&
          articles.map((el, i) => {
            return (
              <GridItem
                borderRadius={['10px', '15px', '20px', '20px', '20px']}
                background="#F9F7F7"
              >
                <Image
                  src={el.image}
                  marginBottom="10px"
                  borderTopLeftRadius={['10px', '15px', '20px', '20px', '20px']}
                  borderTopRightRadius={[
                    '10px',
                    '15px',
                    '20px',
                    '20px',
                    '20px',
                  ]}
                />
                <Box pl="20px" py="20px" pr="25px">
                  <Heading
                    as="h2"
                    size={['sm', 'md', 'md', 'md', 'md']}
                    fontFamily="body"
                    marginBottom="25px"
                  >
                    {el.heading}
                  </Heading>
                  <Text
                    fontWeight="light"
                    fontSize={['sm', 'md', 'md', 'md', 'md']}
                    marginBottom="12px"
                  >
                    {el.text}
                  </Text>
                  <Flex justifyContent="flex-start" alignItems="center">
                    <Button
                      colorScheme="teal"
                      variant="link"
                      size={['sm', 'md', 'lg', 'lg', 'lg']}
                      padding="0px !important"
                    >
                      Read More
                    </Button>
                    <ArrowForwardIcon
                      w={4}
                      h={4}
                      color="teal"
                      marginLeft="3px"
                    />
                  </Flex>
                </Box>
              </GridItem>
            );
          })}
      </Grid>
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
export default Articles;
