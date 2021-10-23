import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container, Typography} from '@mui/material';
import '@fontsource/roboto' 

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align='center' component="h1">Formulário de Cadastro</Typography>
      <FormularioCadastro aoEnviar={enviaFormulario} validaCpf={validaCpf}/>
    </Container>
  );
}

function enviaFormulario(dados){
  console.log(dados);
}

function validaCpf(cpf){
  cpf = cpf.replaceAll(".","");
  cpf = cpf.replaceAll("-","");
  
  console.log(cpf)
  return cpf.length !== 11 ? {valido:false, texto:"CPF deve ter 11"} : {valido:true, texto:""}
}

export default App;
