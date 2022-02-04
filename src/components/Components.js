import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

export const CustomInput = styled(TextField)(({ theme }) => ({
  width: '100%',
  borderRadius: '4px',
  backgroundColor: '#fff',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 5px 10px -2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px;',
  '& input': {
    padding: '10px',
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  width: '100%',
  borderRadius: '4px',
  backgroundColor: '#fff',
  boxShadow: 'rgba(50, 50, 93, 0.25) 0px 5px 10px -2px, rgba(0, 0, 0, 0.3) 0px 3px 6px -3px;',
  '& .MuiSelect-select': {
    padding: '10px',
  },
}));

export const CustomPaper = styled(Stack)(({ theme }) => ({
  padding: '20px 0',
  borderRadius: '4px'
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#43425d',
  border: '1px solid #43425d',
  padding: '10px 0',
  margin: '30px auto',
  '&:hover': {
    backgroundColor: '#fff',
    color: '#43425d',
  }
}));