import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import { styled } from '@mui/material/styles';

import Sidebar from './sidebar';

const SidebarWrapper = styled(Box)(({ theme }) => ({
  width: '15%',
  minWidth: '260px',
  minHeight: '100vh',
  backgroundColor: '#43425d',
  position: 'relative',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const HeaderWrapper = styled(Stack)(({ theme }) => ({
  padding: '0 85px',
  height: '70px',
  backgroundColor: '#ffffff',
  [theme.breakpoints.down('md')]: {
    padding: '0 20px',
  }
}));

const ToggleButton = styled(Button)(({ theme }) => ({
  display: 'none',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const HeaderLinkStyle = styled(Stack)(({ theme, active }) => ({
  marginTop: '40px',
  padding: '6px 20px',
  cursor: 'pointer'
}));

const headerList = {
  contact: [
    {
      title: 'お問い合わせ',
      link: '/contact'
    }
  ],
  order: [
    {
      title: '注文一覧',
      link: '/order'
    },
    {
      title: 'レポート',
      link: '/order/report'
    }
  ],
  offer: [
    {
      title: 'オファー',
      link: '/offer/coupon'
    },
    {
      title: '個別リンク設定',
      link: '/offer/link'
    },
    {
      title: '商品個別報酬設定',
      link: '/offer/revenue'
    }
  ],
  invoice: [
    {
      title: '請求一覧',
      link: '/invoice'
    }
  ],
}

function HeaderLink({ item }) {
  const location = useLocation();

  let temp = location.pathname.split('_')[0];
  let active = temp === item.link;

  return (
    <Link to={item.link}>
      <HeaderLinkStyle
        sx={{
          borderBottom: active ? '2px solid #3B86FF' : '2px solid #FFF'
        }}
      >
        <Typography variant='p' color={active ? '#3B86FF' : '#A3A6B4'} sx={{ lineHeight: 1 }}>
          {item.title}
        </Typography>
      </HeaderLinkStyle>
    </Link>
  );
}

export default function Header() {
  const [show, setShow] = useState(false);

  const location = useLocation();
  let temp = 'contact';

  if (location.pathname.includes('contact')) {
    temp = 'contact';
  } else if (location.pathname.includes('order')) {
    temp = 'order';
  } else if (location.pathname.includes('offer')) {
    temp = 'offer';
  } else if (location.pathname.includes('invoice')) {
    temp = 'invoice';
  }

  return (
    <>
      <HeaderWrapper
        direction='row'
        justifyContent='space-between'
      >
        <Stack direction='row'>
          {
            headerList[temp].map((item, index) => (
              <HeaderLink item={item} key={index} />
            ))
          }
        </Stack>
        <ToggleButton onClick={() => setShow(true)}>
          <MenuOpenIcon />
        </ToggleButton>
      </HeaderWrapper>
      <React.Fragment>
        <Drawer
          anchor='left'
          open={show}
          onClose={() => setShow(false)}
        >
          <SidebarWrapper
            sx={{
              display: show ? 'block' : 'none'
            }}
          >
            <Sidebar />
          </SidebarWrapper>
        </Drawer>
      </React.Fragment>
    </>
  );
}
