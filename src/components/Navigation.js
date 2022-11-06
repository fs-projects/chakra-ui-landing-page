import React from 'react';

import {
  useBreakpointValue,
  Box,
  Image,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { ImHome2 } from 'react-icons/im';
import { MdFindInPage } from 'react-icons/md';
import { IoIosApps } from 'react-icons/io';
import { GiNothingToSay } from 'react-icons/gi';
import { TbListDetails } from 'react-icons/tb';

function Navigation() {
  const breakpoint = useBreakpointValue({
    base: 'base',
    sm: 'small',
    lg: 'large',
    xl: 'xtralarge',
    '2xl': 'doublextralarge',
  });
  if (breakpoint === 'base' || breakpoint === 'small') {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom="50px"
      >
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            size="sm"
          />
          <MenuList>
            <MenuItem icon={<ImHome2 />}>
              <Link color="teal.500" href="#">
                Home
              </Link>
            </MenuItem>
            <MenuItem icon={<MdFindInPage />}>
              <Link color="teal.500" href="#">
                Find a doctor
              </Link>
            </MenuItem>
            <MenuItem icon={<IoIosApps />}>
              <Link color="teal.500" href="#">
                Apps
              </Link>
            </MenuItem>
            <MenuItem icon={<GiNothingToSay />}>
              <Link color="teal.500" href="#">
                Testimonials
              </Link>
            </MenuItem>
            <MenuItem icon={<TbListDetails />}>
              <Link color="teal.500" href="#">
                About Us
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
        <Box as="span" fontWeight="semibold">
          Trafalgar
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            width="25px"
            height="25px"
            src="https://images.unsplash.com/photo-1667379586896-ce8d7844eb0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          />
        </Box>
      </Box>
    );
  }
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
