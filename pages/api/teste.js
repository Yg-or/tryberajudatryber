async function setUser(nome, email, telefone, turma) {
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
        (response) => {
            //console.log(response);
        }
    )
        .catch(
            () => {
                //console.log('erro')
            }

        );
    //const result = await rawResponse;
    //console.log(rawResponse)
}

export default setUser;