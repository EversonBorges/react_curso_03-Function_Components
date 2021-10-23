import React, { useState } from 'react';
import { TextField, Switch, Button, FormControlLabel } from '@mui/material';

function FormularioCadastro({aoEnviar, validaCpf}) {

    const [nome, setNome] = useState("");
    const [sobrenome, setSobreNome] = useState("");
    const [cpf, setCPF] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);

    const[dados, setDados] = useState({
                                        nome:"",
                                        sobrenome:"",
                                        cpf:"",
                                        promocoes: true,
                                        novidades: true
                                    })
    
    const [erros, setErros] = useState({cpf:{valido:true, texto:""}});


    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
        }}>
            <TextField
                value={nome}
                onChange={(event) => {
                    setNome(event.target.value);
                    //setDados(dados.nome = event.target.value)
                }}
                id="nome"
                label="Nome"
                variant="outlined"
                fullWidth
                margin="normal"

            />
            <TextField
                value={sobrenome}
                onChange={(event) => {
                    setSobreNome(event.target.value);
                    //setDados(dados.sobrenome = event.target.value)
                }}
                id="sobrenome"
                label="Sobrenome"
                variant="outlined"
                fullWidth
                margin="normal"

            />
            <TextField
                value={cpf}
                onChange={(event) => {
                    setCPF(event.target.value);
                    //setDados(dados.cpf = event.target.value)
                }}
                onBlur={(event) => {
                    const ehValido = validaCpf(cpf);
                    setErros({cpf:ehValido})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id="cpf"
                label="CPF"
                variant="outlined"
                fullWidth
                margin="normal"

            />
            <FormControlLabel
                label="Promoções"
                control={<Switch
                    name="promocoes"
                    checked={promocoes}
                    color="primary"
                    onChange={(event) => {
                        //setDados(dados.promocoes = event.target.value)
                        setPromocoes(event.target.checked);
                    }}
                />}

            />
            <FormControlLabel
                label="Novidades"
                control={<Switch
                    name="novidades"
                    checked={novidades}
                    color="primary"
                    onChange={(event) => {
                        //setDados(dados.promocoes = event.target.value)
                        setNovidades(event.target.checked);
                    }}
                />}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
            >Cadastrar</Button>
        </form>
    );
}

export default FormularioCadastro;