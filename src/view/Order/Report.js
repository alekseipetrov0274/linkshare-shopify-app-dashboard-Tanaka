import Page from '../../components/Page';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { styled } from '@mui/material/styles';

import {
  CustomPaper,
  CustomInput
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

export default function Report() {
  return (
    <Page title='Order-Report'>
      <Grid container spacing={4} sx={{mt: -4}}>
        <Grid item xs={12} md={4}>
          <CustomPaper>
            <Typography fontWeight={600}>
              期間
            </Typography>
            <CustomInput
              variant='outlined'
              placeholder='未入力'
            />
          </CustomPaper>
        </Grid>
        <Grid item xs={12} md={4}>
          <CustomPaper>
            <Typography fontWeight={600}>
              表示形式
            </Typography>
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="日別" />
                <FormControlLabel value="male" control={<Radio />} label="月別" />
              </RadioGroup>
            </FormControl>
          </CustomPaper>
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{mt: -4}}>
        <Grid item xs={12} md={12}>
          <TableWrap backgroundColor='#fff'>
            <Box sx={{ width: '100%', mt: 2 }}>
              <TableContainer>
                <Table sx={{ minWidth: 1250 }} aria-label="customized table">
                  <TableHead>
                    <StyledTableRow>
                      <StyledTableCell align="center"></StyledTableCell>
                      <StyledTableCell align="center">表示回数</StyledTableCell>
                      <StyledTableCell align="center">クリック数</StyledTableCell>
                      <StyledTableCell align="center">発生件数</StyledTableCell>
                      <StyledTableCell align="center">発生金額</StyledTableCell>
                      <StyledTableCell align="center">未確定成 果報酬</StyledTableCell>
                      <StyledTableCell align="center">コンバー ジョン率</StyledTableCell>
                      <StyledTableCell align="center">確定件数</StyledTableCell>
                      <StyledTableCell align="center">確定金額</StyledTableCell>
                      <StyledTableCell align="center">確定成果 報酬</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                      <TableCell>
                        <Typography variant='h6'>ASP名</Typography>
                      </TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                      <TableCell align="center"></TableCell>
                    </StyledTableRow>
                  </TableHead>
                  <TableBody>
                    {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17].map((i) => (
                      <StyledTableRow key={i}>
                        <StyledTableCell>2021/10/20</StyledTableCell>
                        <StyledTableCell align="center">52</StyledTableCell>
                        <StyledTableCell align="center">52</StyledTableCell>
                        <StyledTableCell align="center">52</StyledTableCell>
                        <StyledTableCell align="center">¥10,000</StyledTableCell>
                        <StyledTableCell align="center">64</StyledTableCell>
                        <StyledTableCell align="center">30%</StyledTableCell>
                        <StyledTableCell align="center">24</StyledTableCell>
                        <StyledTableCell align="center">¥1,000,000</StyledTableCell>
                        <StyledTableCell align="center">¥1,000,000</StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </TableWrap>
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
