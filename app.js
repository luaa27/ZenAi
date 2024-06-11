const button = document.getElementById('send--question')


const consultaGemini = (question) => {
    const keyGoogle = 'AIzaSyBZaybh57iVi23jcLvzuIrabNG4f3td60A'

    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + keyGoogle

    const requestData = {
        contents: [
            {
                parts: [
                    {
                        text: `${question}`
                    }
                ]
            }
        ]
    }

    const requestOptions = {
        method:'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(requestData)
    }

    fetch(url, requestOptions)
    .then(response => response.json())
    // .then(data => {
        
    //     const responseTextIa = data.candidates[0].content.parts[0].text
    //     console.log(responseTextIa);
    //     respostaIa(responseTextIa)
    // })
    .then(data => {
        console.log(data);
        if (data.candidates && data.candidates.length > 0) {
            const responseTextIa = data.candidates[0].content.parts[0].text;
            console.log(responseTextIa);
            respostaIa(responseTextIa);
        } else {
            console.error('No candidates found in the response');
        }
    })
    
    .catch(error => console.error('Error: ', error))
}


const respostaIa = (responseTextIa) => {
    const textAreaPt = document.getElementById('answer-pt')
    textAreaPt.value = responseTextIa
}


button.addEventListener('click', () => {
    const question = document.getElementById('questionInput').value
    consultaGemini(question)
})