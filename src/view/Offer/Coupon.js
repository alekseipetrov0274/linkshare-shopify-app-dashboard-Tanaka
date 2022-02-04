import { useState } from 'react';
import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { styled } from '@mui/material/styles';

import {
  CustomInput,
  CustomSelect,
  CustomPaper,
  CustomButton
} from '../../components/Components'

import DropzoneComponent from '../../components/DropzoneComponent';

const CouponWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '20px 30px',
  borderRadius: '4px'
}));

export default function Coupon() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title='LinkShareオファー内容の設定'>
      <CouponWrapper>
        <Typography variant='h5'>
          LinkShareオファー内容の設定
        </Typography>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              サービス名
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              サービスURL
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Typography fontWeight={600}>
              サービスの紹介
            </Typography>
            <CustomInput
              variant='outlined'
              multiline
              rows={6}
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <Typography fontWeight={600}>
              お知らせ
            </Typography>
            <CustomInput
              variant='outlined'
              multiline
              rows={6}
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              サービスロゴ
            </Typography>
            <DropzoneComponent />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <CustomPaper>
              <Typography fontWeight={600}>
                ポイント還元サイト
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel value='female' control={<Radio />} label='表示する' />
                  <FormControlLabel value='male' control={<Radio />} label='表示しない' />
                </RadioGroup>
              </FormControl>
            </CustomPaper>
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomPaper>
              <Typography fontWeight={600}>
                ログインしていないユーザー
              </Typography>
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel value='female' control={<Radio />} label='表示する' />
                  <FormControlLabel value='male' control={<Radio />} label='表示しない' />
                </RadioGroup>
              </FormControl>
            </CustomPaper>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              検索キーワード１
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              検索キーワード２
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              検索キーワード３
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              検索キーワード４
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              検索キーワード５
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              承認サイクル
            </Typography>
            <CustomSelect
              labelId='demo-simple-select-label'
              id='demo-simple-select'
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

        <Grid container spacing={4} justifyContent='space-around' sx={{ mt: 1 }}>
          <Stack direction='row'>
            <CustomButton
              variant='contained'
              sx={{
                mx: 1,
                width: '200px',
                backgroundColor: 'transparent',
                color: '#43425d',
                '&:hover': {
                  backgroundColor: '#43425d',
                  color: '#fff',
                }
              }}
            >
              キャンセル
            </CustomButton>
            <CustomButton
              variant='contained'
              sx={{
                mx: 1,
                width: '200px'
              }}
            >
              設定更新
            </CustomButton>
          </Stack>
        </Grid>
      </CouponWrapper>
    </Page>
  );
}
