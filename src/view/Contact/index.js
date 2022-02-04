import { useState } from 'react';
import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

import { styled } from '@mui/material/styles';

import {
  CustomInput,
  CustomSelect,
  CustomButton
} from '../../components/Components'

const ContactWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '20px 30px',
  borderRadius: '4px'
}));

export default function Contact() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title='お問い合わせ'>
      <ContactWrapper>
        <Typography variant='h5'>お問い合わ</Typography>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>会社名</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>会社名（フリガナ）</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>担当者名（姓）</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>担当者名（名）</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>担当者名（セイ）</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>担当者名（メイ）</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>郵便番号</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>都道府県</Typography>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant='outlined'
              value={age}
              label='未入力'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CustomSelect>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>市区郡</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>町村名・番地</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>アパート・マンション名</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>電話番号</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>メールアドレス</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>お問い合わせの種類</Typography>
            <CustomSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              variant='outlined'
              value={age}
              label='未入力'
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CustomSelect>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography>件名</Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Typography>お問い合わせ内容</Typography>
            <CustomInput
              variant='outlined'
              multiline
              rows={6}
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <CustomButton
            variant="contained"
            sx={{ width: '200px' }}
          >
            送信する
            </CustomButton>
        </Grid>
      </ContactWrapper>
    </Page>
  );
}
