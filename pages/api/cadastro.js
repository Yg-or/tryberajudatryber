function tempo(request, response) {
  cadastro(request.query.email, request.query.nome, request.query.telefone, request.query.turma);
  

  response.json({
    'Nome': request.query.nome,
    'Email': request.query.email,
    'Telefone': request.query.telefone,
    'Turma': request.query.turma
  });

}

async function cadastro(reqMail, reqName, reqTel, reqTurma) {

  const apiKey = process.env.API_KEY;
  const rawResponse = await fetch('https://api.convertkit.com/v3/forms/2406333/subscribe', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'charset': 'utf-8'
    },
    body: JSON.stringify({
      "api_key": apiKey,
      email: reqMail,
      first_name: reqName,
      tags: [reqTurma]
    })
  });
  await rawResponse.json();

}


export default tempo;