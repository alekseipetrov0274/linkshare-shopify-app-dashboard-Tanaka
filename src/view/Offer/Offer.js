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

export default function Offer() {
  return (
    <Page title='Offer'>
      <Grid container spacing={4} sx={{ mt: -4 }}>
        <Grid item xs={12} md={12}>
          <TableWrap backgroundColor='#fff'>
            <Box sx={{ width: '100%', mt: 2 }}>
              <TableContainer>
                <Table sx={{ minWidth: 1250 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">ASP</StyledTableCell>
                      <StyledTableCell align="center">オファー名</StyledTableCell>
                      <StyledTableCell align="center">報酬</StyledTableCell>
                      <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell align="center">
                          <Typography
                            sx={{
                              borderRadius: '20px',
                              border: i % 2 === 0 ? '1px solid #0B69E3' : '1px solid #1ABC9C',
                              color: i % 2 === 0 ? '#0B69E3' : '#1ABC9C'
                            }}
                          >
                            {i % 2 === 0 ? '承認' : '審査完了'}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell align="center">LinkShare</StyledTableCell>
                        <StyledTableCell align="center">
                          {i % 2 === 0 ? 'キング枕「王様の夢枕」販促 キング枕「王様の夢枕」販促販促販促販促販促販販促…' : 'キング枕「王様の夢枕」販促 キング枕「王様の夢枕」販促'}

                        </StyledTableCell>
                        <StyledTableCell align="center">15%</StyledTableCell>
                        <StyledTableCell align="center">
                          <Button fontWeight={600} variant='outlined' sx={{ mr: 1 }}>
                            設定
                          </Button>
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
          size="large"
          shape="rounded"
          color="primary"
        />
      </Stack>
    </Page>
  );
}
