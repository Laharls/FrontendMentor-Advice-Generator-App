function getAdvice(){
    fetch('https://api.adviceslip.com/advice').then((response) => {
        response.json().then((advice) => {
            console.log(advice.slip.id);
            console.log(advice.slip.advice);
            document.getElementById('advice_id').innerText = advice.slip.id;
            document.getElementById('advice_text').innerText = '"' + advice.slip.advice + '"';
        })
    })
}