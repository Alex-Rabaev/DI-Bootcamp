// ------------ Exercise 2 : Work With Forms ------------


window.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const usersAnswer = document.querySelector('.usersAnswer');

    console.log(form);
    console.log(fnameInput);
    console.log(lnameInput);

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const fnameValue = fnameInput.value.trim();
        const lnameValue = lnameInput.value.trim();

        if (fnameValue !== '' && lnameValue !== '') {
            const fnameLi = document.createElement('li');
            fnameLi.textContent = fnameValue;

            const lnameLi = document.createElement('li');
            lnameLi.textContent = lnameValue;

            usersAnswer.appendChild(fnameLi);
            usersAnswer.appendChild(lnameLi);

            fnameInput.value = '';
            lnameInput.value = '';
        }
    });
});