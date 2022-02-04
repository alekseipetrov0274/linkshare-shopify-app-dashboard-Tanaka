import { useState } from 'react';
import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';

import {
  CustomSelect,
  CustomPaper
} from '../../components/Components'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f0f0f7',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const OrderTableWrap = styled(Stack)(({ theme }) => ({
  padding: '20px',
  borderRadius: '4px'
}));

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const rows = [
  {
    status: true,
    succedcode: '11234 (9879879798)',
    age: '2021/10/28',
    asp: 'LinkShare',
    succes_type: 'Purchase conversion',
    order_price: '¥10,000',
    reward_price: '¥10,000',
    duration: '24日',
    media: 'T3CH_iTRACKテストサイト7'
  },
  {
    status: false,
    succedcode: '11234 (9879879798)',
    age: '2021/10/28',
    asp: 'LinkShare',
    succes_type: 'Purchase conversion',
    order_price: '¥10,000',
    reward_price: '¥10,000',
    duration: '24日',
    media: 'T3CH_iTRACKテストサイト7'
  },
];

export default function Order() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title='Order'>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CustomPaper alignItems='center' backgroundColor='#fff'>
            <Typography fontWeight={600}>
              9
            </Typography>
            <Typography>
              注文件数
            </Typography>
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomPaper alignItems='center' backgroundColor='#fff'>
            <Typography fontWeight={600}>
              ¥1,000,000
            </Typography>
            <Typography>
              売上合計
            </Typography>
          </CustomPaper>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt: -4}}>
        <Grid item xs={12} md={4}>
          <CustomPaper>
            <Typography fontWeight={600}>
              ASP
            </Typography>
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
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomPaper>
            <Typography fontWeight={600}>
              注文日時
            </Typography>
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
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomPaper>
            <Typography fontWeight={600}>
              状態
            </Typography>
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
          </CustomPaper>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt: -4}}>
        <Grid item xs={12} md={12}>
          <OrderTableWrap backgroundColor='#fff'>
            <Stack
              direction='row'
            >
              <Button fontWeight={600} variant='outlined' sx={{mr: 1}}>
                拒否
              </Button>
              <Button fontWeight={600} variant='outlined'>
                承認
              </Button>
            </Stack>
            <Box sx={{ width: '100%', mt: 2 }}>
              <TableContainer>
                <Table sx={{ minWidth: 1250 }} aria-label="customized table">
                  <TableHead>
                    <TableRow sx={{border: 0}}>
                      <StyledTableCell>
                        <Checkbox {...label} />
                      </StyledTableCell>
                      <StyledTableCell align="center">ステータス</StyledTableCell>
                      <StyledTableCell align="center">成果コード (注文番号)</StyledTableCell>
                      <StyledTableCell align="center">成果発生日時</StyledTableCell>
                      <StyledTableCell align="center">ASP</StyledTableCell>
                      <StyledTableCell align="center">成果タイプ</StyledTableCell>
                      <StyledTableCell align="center">注文金額</StyledTableCell>
                      <StyledTableCell align="center">報酬金額</StyledTableCell>
                      <StyledTableCell align="center">承認期限</StyledTableCell>
                      <StyledTableCell align="center">メディア</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[0,1,2,3,4,5,6,7,8,9,10].map((i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell component="th" scope="row">
                          <Checkbox {...label} />
                        </StyledTableCell>
                        <StyledTableCell component="th" align="center" scope="row">
                          <Typography
                            sx={{
                              borderRadius: '20px',
                              border: rows[i%2].status ? '1px solid #0B69E3' : '1px solid #1ABC9C',
                              color: rows[i%2].status ? '#0B69E3' : '#1ABC9C'
                            }}
                          >
                            {rows[i%2].status ? '保留' : '承認'}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].succedcode}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].age}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].asp}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].succes_type}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].order_price}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].reward_price}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].duration}</StyledTableCell>
                        <StyledTableCell align="center">{rows[i%2].media}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </OrderTableWrap>

        </Grid>
      </Grid>
      <Stack sx={{mt: 2}}>
        <Pagination
          count={10}
          size="large"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Page>
  );
}
