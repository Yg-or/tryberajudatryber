import swal from 'sweetalert';
import MaskedInput from 'react-text-mask';

const mainContent = {
    height: '500px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid rgb(17, 18, 175)',
    borderRadius: '20px',
}

const bodyStyle = {
    border: '0px',
    padding: '0px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '95vh',
    width: '100%',
}


const form = {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
}

const nameClassArea = {
    height: '80px',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
}


const inputNome = {
    marginRight: '5px',
    height: '35px',
    width: '175px',
    outline: 'none',
    borderRadius: '5px',
    padding: '2px 10px',
    backgroundColor: 'white',
    border: '1px solid rgb(17, 18, 175)',
}

const selectTurma = {
    height: '40px',
    width: '80px',
    borderRadius: '5px',
    padding: '7px',
    border: '1px solid rgb(17, 18, 175)',
}

const emailTelArea = {
    height: '100px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
}

const input = {
    height: '35px',
    width: '260px',
    outline: 'none',
    borderRadius: '5px',
    padding: '2px 10px',
    backgroundColor: 'white',
    border: '1px solid rgb(17, 18, 175)',
}

const btnArea = {
    height: '80px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const btnCadastrar = {
    height: '40px',
    width: '120px',
    fontSize: '16px',
    background: 'linear-gradient(to right, rgb(17, 18, 235), rgb(17, 18, 175))',
    color: 'white',
    padding: '12px 13px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '10px',
}

function Home() {
    return (
        <div style={bodyStyle}>
            <div style={mainContent}>
                <div style={form} id="formArea">
                    <div style={nameClassArea}>
                        <input style={inputNome} type="text" placeholder="Nome" id="nome" required />
                        <select style={selectTurma} name="turma" id="turma">
                            <option value="" selected disabled hidden>Turma</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                        </select>
                    </div>
                    <div style={emailTelArea}>
                        <input style={input} type="email" id="email" placeholder="E-mail" required />
                        <MaskedInput
                            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                            id='telefone'
                            style={input}
                            placeholder="Telefone"
                        />
                    </div>
                    <div style={btnArea}>
                        <button style={btnCadastrar} id="btnCadastrar" onClick={() => { enviarDados() }} >Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

function showConfirmation() {
    swal("Cadastro realizado com sucesso", "confirme na sua caixa de entrada!", "success");
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('turma').value = '';
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function verifyData(nome, email, telefone, turma) {
    if (!nome || !email || !turma || !telefone) {
        swal("Algo de errado ocorreu!", "Preencha corretamente todos os campos!", "error");
        return false;
    }

    if (!validateEmail(email)) {
        swal("Algo de errado ocorreu!", "Preencha corretamente o seu e-mail!", "error");
        return false;
    }
    return true;
}

function showErrorMessage() {
    swal("Algo de errado ocorreu!", "Tente Novamente", "error");

}

async function enviarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const turma = document.getElementById('turma').value;
    const confere = verifyData(nome, email, telefone, turma);

    if (confere) {
        await fetch('https://api.convertkit.com/v3/forms/2434471/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
            },
            body: JSON.stringify({
                api_key: 'f7tHWGq--y4ALq6wq5UVmw',
                email: email,
                first_name: nome,
                fields: {
                    telefone: telefone,
                    turma: turma
                }
            })
        }).then(
            () => {
                showConfirmation();
            }
        )
            .catch(
                () => {
                    showErrorMessage();
                }

            );
    }
}

export default Home;
