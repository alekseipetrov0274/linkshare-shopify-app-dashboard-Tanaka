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

const CouponWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '20px 30px',
  borderRadius: '4px'
}));

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

export default function LinkDetail() {
  return (
    <Page title='商品の個別報酬設定の確認'>
      <CouponWrapper>
        <Typography variant='h5'>
          商品の個別報酬設定の確認
        </Typography>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              商品ID
            </Typography>
            <Typography>
              商品ID商品ID商品ID
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              商品名
            </Typography>
            <Typography fontWeight={600}>
              商品名商品名商品名商品名商品名商品名商品名商品名商品名
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              成果タイプ
            </Typography>
            <Typography>
              定額（円）
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              期間指定
            </Typography>
            <Typography>
              期間指定期間指定期間指定
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              有効期間開始日
            </Typography>
            <Typography>
              2021/10/10
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              有効期間終了日
            </Typography>
            <Typography>
              2021/10/20
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 0 }}>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600}>
              成果報酬
            </Typography>
            <Typography>
              成果報酬成果報酬成果報酬
            </Typography>
          </Grid>
        </Grid>
      </CouponWrapper>
      <CouponWrapper sx={{ mt: 5 }}>
        <Typography variant='h5'>
          変更予約している商品個別報酬の一覧
        </Typography>
        <Box sx={{ width: '100%', mt: 2 }}>
          <TableContainer>
            <Table sx={{ minWidth: 1250 }} aria-label='customized table'>
              <TableHead>
                <TableRow>
                  <StyledTableCell align='center'>予約日時</StyledTableCell>
                  <StyledTableCell align='center'>商品名</StyledTableCell>
                  <StyledTableCell align='center'>成果タイプ</StyledTableCell>
                  <StyledTableCell align='center'>成果報酬</StyledTableCell>
                  <StyledTableCell align='center'>有効期間</StyledTableCell>
                  <StyledTableCell align='center'></StyledTableCell>
                  <StyledTableCell align='center'></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <StyledTableRow key={i}>
                    <StyledTableCell align='center'>
                      2021/10/01
                    </StyledTableCell>
                    <StyledTableCell align='center'>商品名商品名商品名商品名商品名商品名…</StyledTableCell>
                    <StyledTableCell align='center'>
                      定額（円）
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      30,000円
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      2021/10/01 ~ 2021/10/31
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <Button fontWeight={600} variant='outlined' sx={{ mr: 1 }}>
                        編集
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align='center'>
                      <Button fontWeight={600} variant='outlined' color="error" sx={{ mr: 1 }}>
                        削除
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CouponWrapper>
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
