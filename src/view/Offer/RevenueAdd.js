import { useState } from 'react';
import { useParams } from "react-router-dom";
import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

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

const CouponWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '20px 30px',
  borderRadius: '4px'
}));

export default function RevenueAdd() {
  const [age, setAge] = useState('');
  const params = useParams();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title='商品の個別報酬を新規作成'>
      <CouponWrapper>
        <Typography variant='h5'>
          商品の個別報酬を新規作成
        </Typography>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              商品ID
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              商品名
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <CustomPaper>
              <Typography fontWeight={600}>
                成果タイプ
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
            <Typography fontWeight={600}>
              期間指定
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
        <Grid container spacing={4} sx={{ mt: 1 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              有効期間開始日
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              有効期間終了日
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
              成果報酬
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
        {
          params.id ? (
            <Grid container spacing={4} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Typography fontWeight={600}>
                  変更予約日時
                </Typography>
                <CustomInput
                  variant='outlined'
                  placeholder='未入力'
                />
                <List>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemText
                      primary='※予約日時は5日以降の日付から選択が可能です。'
                    />
                  </ListItem>
                  <ListItem sx={{ p: 0 }}>
                    <ListItemText
                      primary='※お急ぎの場合はお問い合わせからご連絡ください。'
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          ) : null
        }

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
