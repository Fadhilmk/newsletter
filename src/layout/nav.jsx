// // Nav.jsx
"use client";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import { useResponsive } from '../hooks/use-responsive';
import { useAuth } from '../../context/AuthContext';
import Scrollbar from '../components/scrollbar';
import { NAV } from './config-layout';
import navConfig from './config-navigation';
import {account} from '../_mock/account'
import { usePathname } from 'next/navigation';
// NavItem component (nested inside Nav)
function NavItem({ item }) {
 
  const { logout } = useAuth();  // Get the logout function from AuthContext
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const pathname = usePathname();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await logout();
    window.location.href = '/signin';  // Redirect to signin page
  };

  const isLogout = item.action === 'logout';

  const handleItemClick = async (event) => {
    if (isLogout) {
      await handleLogout();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const isActive = pathname === item.path || (item.children && item.children.some(child => pathname === child.path));

  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  return (
    <>
      <ListItemButton
        component={!item.children ? 'a' : 'div'}
        href={!item.children && !isLogout ? item.path : null}
        onClick={item.children ? handleClick : isLogout ? handleItemClick : null}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: 'body2',
          color: 'text.secondary',
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          ...(isActive && {
            color: 'primary.main',
            fontWeight: 'fontWeightSemiBold',
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
            },
          }),
        }}
      >
        <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>
        <Box component="span" sx={{ flexGrow: 1 }}>{item.title}</Box>
        {item.children ? <KeyboardArrowDownIcon /> : null}
      </ListItemButton>
      {item.children && (
        <StyledMenu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {item.children.map((child) => (
            <MenuItem
              key={child.title}
              component='a'
              href={child.path}
              onClick={handleClose}
            >
              {child.title}
            </MenuItem>
          ))}
        </StyledMenu>
      )}
    </>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};

// Main Nav component
export default function Nav({ openNav, onCloseNav }) {
  const { user } = useAuth();
  const upLg = useResponsive('up', 'lg');

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={account.photoURL} alt="photoURL" />
      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{user ? user.displayName : 'Guest'}</Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={1.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};
