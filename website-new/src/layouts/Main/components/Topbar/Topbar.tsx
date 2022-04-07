import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import React from 'react';
import { NavItem } from './components';

interface Props {
  onSidebarOpen: () => void;
  colorInvert?: boolean;
  logo: { dark: string; light: string };
}

const Topbar = ({
  onSidebarOpen,
  logo,
  colorInvert = false,
}: Props): JSX.Element => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={1}
    >
      <Box
        display={'flex'}
        component="a"
        href="/"
        title="theFront"
        width={{ xs: 100, md: 120 }}
      >
        <Box
          component={'img'}
          src={mode === 'light' && !colorInvert ? logo.light : logo.dark}
          height={1}
          width={1}
        />
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        <Box>
          <NavItem title={'Music'} id={'music'} colorInvert={colorInvert} />
        </Box>

        <Box>
          <NavItem title={'Video'} id={'video'} colorInvert={colorInvert} />
        </Box>

        <Box>
          <NavItem title={'Photos'} id={'photos'} colorInvert={colorInvert} />
        </Box>

        <Box>
          <NavItem title={'Store'} id={'store'} colorInvert={colorInvert} />
        </Box>

        <Button variant="contained">Sign Up</Button>
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Topbar;
