import setUser from './api/teste.js';
//require('dotenv').config();
const mainContent = {
    height: '500px',
    width: '500px',
    backgroundColor: 'beige',
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
                <div style={form}>
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
                        <input style={input} type="text" id="telefone" placeholder="Telefone" required />
                    </div>
                    <div style={btnArea}>
                        <button style={btnCadastrar} id="btnCadastrar" onClick={() => { cadastrar() }} >Cadastrar</button>
                    </div>
                </div>

            </div>
        </div>
    )
}


function cadastrar() {
    enviarDados();
}

async function enviarDados() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const turma = document.getElementById('turma').value;

    setUser(nome, email, telefone, turma);



    


}







export default Home;
