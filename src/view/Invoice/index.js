import { useState } from 'react';
import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';

import {
  CustomPaper,
  CustomSelect
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

const TableWrap = styled(Stack)(({ theme }) => ({
  padding: '20px',
  borderRadius: '4px'
}));

export default function Invoice() {
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Page title='請求年'>
      <Grid container spacing={4} sx={{ mt: -4 }}>
        <Grid item xs={6} md={2}>
          <CustomPaper>
            <Typography fontWeight={600}>請求年</Typography>
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
        <Grid item xs={6} md={2}>
          <CustomPaper>
            <Typography fontWeight={600}>請求月</Typography>
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
      <Grid container spacing={4} sx={{ mt: -4 }}>
        <Grid item xs={12} md={12}>
          <TableWrap backgroundColor='#fff'>
            <Box sx={{ width: '100%', mt: 2 }}>
              <TableContainer>
                <Table sx={{ minWidth: 1250 }} aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center">年月</StyledTableCell>
                      <StyledTableCell align="center">承認件数</StyledTableCell>
                      <StyledTableCell align="center">報酬金額</StyledTableCell>
                      <StyledTableCell align="center">手数料</StyledTableCell>
                      <StyledTableCell align="center">ASP月額利用料</StyledTableCell>
                      <StyledTableCell align="center">ASP初期費用</StyledTableCell>
                      <StyledTableCell align="center">合計</StyledTableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell align="center">2021年12月</StyledTableCell>
                        <StyledTableCell align="center">30</StyledTableCell>
                        <StyledTableCell align="center">¥10,000</StyledTableCell>
                        <StyledTableCell align="center">¥1,000</StyledTableCell>
                        <StyledTableCell align="center">_</StyledTableCell>
                        <StyledTableCell align="center">_</StyledTableCell>
                        <StyledTableCell align="center">¥300,000</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </TableWrap>
        </Grid>
      </Grid>
      <Stack sx={{ mt: 2 }}>
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
