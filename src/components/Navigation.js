import React from 'react';

import { Box, Image, Link } from '@chakra-ui/react';
function Navigation() {
  return (
    <Box as="section" marginBottom="90px">
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center" columnGap="10px">
          <Image
            width="25px"
            height="25px"
            src="https://images.unsplash.com/photo-1667379586896-ce8d7844eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
          <Box as="span">Trafalgar</Box>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          columnGap="40px"
        >
          <Link color="teal.500" href="#">
            Home
          </Link>
          <Link color="teal.500" href="#">
            Find a Doctor
          </Link>
          <Link color="teal.500" href="#">
            Apps
          </Link>
          <Link color="teal.500" href="#">
            Testimonials
          </Link>
          <Link color="teal.500" href="#">
            About us
          </Link>
        </Box>
      </Box>
    </Box>
  );
}
export default Navigation;
