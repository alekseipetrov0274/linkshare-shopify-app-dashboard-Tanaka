import { Link } from 'react-router-dom';
import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { styled } from '@mui/material/styles';

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
  '& td, & th': {
    padding: '40px 20px',
  },
  '&:last-child td, &:last-child th': {
    border: 0
  },
}));

const TableWrap = styled(Stack)(({ theme }) => ({
  padding: '20px',
  borderRadius: '4px'
}));

export default function LinkSetting() {
  return (
    <Page title='個別リンクの一覧'>
      <Grid container spacing={4} sx={{ mt: -4 }}>
        <Grid item xs={12} md={12}>
          <TableWrap backgroundColor='#fff'>
            <Stack
              direction='row'
              justifyContent='space-between'
            >
              <Typography variant='h5'>
                個別リンクの一覧
              </Typography>
              <Link to='/offer/link_add'>
                <Button fontWeight={600} variant='outlined'>
                  新規作成
                </Button>
              </Link>
            </Stack>
            <Box sx={{ width: '100%', mt: 2 }}>
              <TableContainer>
                <Table sx={{ minWidth: 1250 }} aria-label='customized table'>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align='center'>リンクID</StyledTableCell>
                      <StyledTableCell align='center'>リンク名</StyledTableCell>
                      <StyledTableCell align='center'>有効期間</StyledTableCell>
                      <StyledTableCell align='center'></StyledTableCell>
                      <StyledTableCell align='center'></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell align='center'>
                          {i + 1}
                        </StyledTableCell>
                        <StyledTableCell align='center'>リンク名リンク名リンク名リンク名</StyledTableCell>
                        <StyledTableCell align='center'>
                          2021/10/01 ~ 2021/10/31
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                          <Link to={`/offer/link_edit/${i}`}>
                            <Button fontWeight={600} variant='outlined' sx={{ mr: 1 }}>
                              現在の設定
                            </Button>
                          </Link>
                        </StyledTableCell>
                        <StyledTableCell align='center'>
                          <Link to={`/offer/link_detail/${i}`}>
                            <Button fontWeight={600} variant='outlined' sx={{ mr: 1 }}>
                              予約の作成
                            </Button>
                          </Link>
                        </StyledTableCell>
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
          size='large'
          shape='rounded'
          color='primary'
        />
      </Stack>
    </Page>
  );
}
