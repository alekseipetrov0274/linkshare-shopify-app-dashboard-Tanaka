import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';

import { styled } from '@mui/material/styles';

const LoginWrapper = styled(Stack)(({ theme }) => ({
  height: '100vh'
}));

const FormWrapper = styled(Box)(({ theme }) => ({
  width: '30%',
  minWidth: '300px'
}));

const LoginTitle = styled(Typography)(({ theme }) => ({
  marginBottom: '100px',
}));

const LoginTextField = styled(TextField)(({ theme }) => ({
  width: '100%',
  marginBottom: '40px',
  '& input': {
    padding: '10px 0'
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#43425d',
  padding: '10px 0'
}));

export default function Login() {
  const navigate = useNavigate();

  return (
    <LoginWrapper alignItems='center' justifyContent='space-around'>
      <FormWrapper>
        <LoginTitle variant='h4' align='center' color='#717171'>
          アフィリエイトアプリ
        </LoginTitle>

        <LoginTextField
          variant='standard'
          placeholder='メールアドレス'
        />

        <LoginTextField
          variant='standard'
          placeholder='パスワード'
        />

        <LoginButton variant="contained" onClick={() => navigate('/contact')}>
          ログイン
        </LoginButton>
      </FormWrapper>
    </LoginWrapper>
  );
}
