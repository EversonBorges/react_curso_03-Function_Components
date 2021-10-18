import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@mui/material';
import '@fontsource/roboto' 

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align='center' component="h1">Formulário de Cadastro</Typography>
      <FormularioCadastro/>
    </Container>
  );
}

export default App;
