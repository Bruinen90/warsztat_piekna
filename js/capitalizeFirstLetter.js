const contsToCapitalize = document.querySelectorAll('.capitalized');
contsToCapitalize.forEach(cont => {
    const currCont = cont.innerHTML;
    // Find first letter;
    let firstLetterPos;
    let firstLetter = () => {
        for (let i = 0; i < currCont.length; i++) {
            if(currCont[i].match(/[A-Za-z]/)) {
                firstLetterPos = i;
                return currCont[i];
            }
        }
    }
    const bigLetter = `<div class='bigLetter'>${firstLetter()}</div>`;
    const finalHTML = bigLetter + currCont.slice(firstLetterPos+1);
    cont.innerHTML = finalHTML
})
