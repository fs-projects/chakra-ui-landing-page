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
import { footer } from '../data';
function Footer() {
  return (
    <Box background="#F9F7F7" p="50px">
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          '44% 18.6% 18.6% 18.6%',
          '44% 18.6% 18.6% 18.6%',
        ]}
        columnGap={['0', '1', '1', '1', '1']}
        rowGap={['4', '2', '2', '2', '2']}
      >
        <GridItem>
          <Box display="flex" alignItems="center" marginBottom="20px">
            <Image
              width="25px"
              height="25px"
              src="https://images.unsplash.com/photo-1667379586896-ce8d7844eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
              marginRight="5px"
            />
            <Box
              as="span"
              fontWeight="bold"
              fontSize={['sm', 'md', 'md', 'md', 'md']}
            >
              Trafalgar
            </Box>
          </Box>
          <Text
            fontWeight="light"
            fontSize={['sm', 'md', 'md', 'md', 'md']}
            marginBottom={['5px', '8px', '30px', '30px', '30px']}
          >
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone
          </Text>
          <Text fontWeight="light" fontSize={['sm', 'md', 'md', 'md', 'md']}>
            ©Trafalgar PTY LTD 2020. All rights reserved
          </Text>
        </GridItem>

        {footer &&
          footer.map((el, i) => {
            return (
              <GridItem marginBottom={['5px', '5px', '0px', '0px', '0px']}>
                <Flex
                  flexDirection="column"
                  justify-content="space-between"
                  rowGap="5px"
                  alignItems="center"
                >
                  <Heading
                    as="h2"
                    size={['sm', 'md', 'md', 'md', 'md']}
                    marginBottom={['5px', '8px', '15px', '15px', '15px']}
                    fontFamily="body"
                  >
                    {el.key}
                  </Heading>
                  {el.value &&
                    el.value.map((el, i) => {
                      return (
                        <Link
                          color="teal.500"
                          href="#"
                          fontSize={['xs', 'md', 'md', 'md', 'md']}
                        >
                          {el}
                        </Link>
                      );
                    })}
                </Flex>
              </GridItem>
            );
          })}
      </Grid>
    </Box>
  );
}
export default Footer;
