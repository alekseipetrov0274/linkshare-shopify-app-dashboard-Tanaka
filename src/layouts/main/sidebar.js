import React from 'react';
import { Link, useLocation } from "react-router-dom";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import WorkIcon from '@mui/icons-material/Work';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import EventNoteIcon from '@mui/icons-material/EventNote';
import EmailIcon from '@mui/icons-material/Email';

import { styled } from '@mui/material/styles';

const SidebarHeader = styled(Box)(({ theme }) => ({
  height: '70px',
  backgroundColor: '#3c3b54',
  padding: '0 25px'
}));

const LogoImage = styled(Box)(({ theme }) => ({
  marginRight: '5px'
}));

const SidebarLinkStyle = styled(Stack)(({ theme, active }) => ({
  height: '55px',
  padding: '0 25px',
  cursor: 'pointer',
  '& svg': {
    color: '#A5A4BF'
  }
}));

const SidebarFooter = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  width: '100%'
}));

const linkList = [
  {
    title: '注文管理',
    link: '/order',
    icon: <WorkIcon />
  },
  {
    title: 'オファー管理',
    link: '/offer',
    icon: <CardGiftcardIcon />
  },
  {
    title: '請求管理',
    link: '/invoice',
    icon: <EventNoteIcon />
  },
]

const footerData = {
  title: 'お問い合わせ',
  link: '/contact',
  icon: <EmailIcon />
}

function SidebarLink({ item }) {
  const location = useLocation();
  let active = location.pathname.includes(item.link)

  return (
    <Link to={item.link}>
      <SidebarLinkStyle
        direction='row'
        alignItems='center'
        sx={{
          '& svg': {
            color: active ? '#A3A0FB' : '#A5A4BF'
          },
          borderLeft: active ? '4px solid #A3A0FB' : '4px solid #43425D',
          backgroundColor: active ? '#3c3b54' : '#43425d'
        }}
      >
        <LogoImage>
          {item.icon}
        </LogoImage>
        <Typography variant='p' color={active ? '#A3A0FB' : 'white'}>
          {item.title}
        </Typography>
      </SidebarLinkStyle>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <>
      <SidebarHeader>
        <Stack
          direction='row'
          alignItems='center'
          sx={{ height: '100%' }}
        >
          <LogoImage>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <rect id="Circle_Logo" data-name="Circle Logo" width="32" height="32" rx="16" fill="#fff" />
            </svg>
          </LogoImage>
          <Typography variant='p' color='white'>
            Logo
          </Typography>
        </Stack>
      </SidebarHeader>
      {
        linkList.map((item, index) => (
          <SidebarLink item={item} key={index} />
        ))
      }
      <SidebarFooter>
        <SidebarLink item={footerData} />
      </SidebarFooter>
    </>
  );
}
