/*
    1.- Implement multi launguage support
  
*/

document.addEventListener('DOMContentLoaded', () => {
    // -> Determine which is the default language values
    document.querySelector('.languageSelect').value=window.localStorage.getItem('language');
    // -> Load page based in the default language
    if (!window.localStorage.getItem('language')) window.localStorage.setItem('language', 'es')
    else return loadLenguage(window.localStorage.getItem('language'));
    loadLenguage(window.localStorage.getItem('language'));
}, { once: true });


(() => {

    document.querySelector('.languageSelect').addEventListener('change', ({ target }) => {
        window.localStorage.removeItem('language');
        window.localStorage.setItem('language', target.value);
        loadLenguage(target.value);
    })

})()

// function saveLenguage

// function onLoadPage() {
//     document.querySelector('.languageSelect').addEventListener('change', ({ target }) => {
//         window.localStorage.removeItem('language');
//         window.localStorage.setItem('language', target.value);
//         console.log(target.value)
//         //
//         changeBarNavLanguage(target.value)
//         if (target.value === 'en') {
//             document.querySelector('.titulo').innerHTML = `
//                 <h1><span style="color: #00629B;">IEEE</span> STUDENT BRANCH TECNM IZTAPALAPA III</h1>  
//             `;
//         }
//         else if (target.value === 'es') {
//             document.querySelector('.titulo').innerHTML = `
//                 <h1>RAMA ESTUDIANTIL <span style="color: #00629B;">IEEE</span> TECNM IZTAPALAPA III</h1>
//             `;
//         }
//     })
// }


function changeTitleLanguage(leanguage = 'es') {
    if (leanguage === 'en') {
        document.querySelector('.titulo').innerHTML = `
                <h1><span style="color: #00629B;">IEEE</span> STUDENT BRANCH TECNM IZTAPALAPA III</h1>  
            `;
    }
    else if (leanguage === 'es') {
        document.querySelector('.titulo').innerHTML = `
                <h1>RAMA ESTUDIANTIL <span style="color: #00629B;">IEEE</span> TECNM IZTAPALAPA III</h1>
            `;
    }
}
function changeBarNavLanguage(lenguage = 'es') {
    // const spanishValues = ['Home', 'Conocenos', 'Equipo', 'Eventos', 'Proyectos', 'Galearia'];
    const spanishValues = ['Home', 'Conocenos', 'Equipo', 'Proyectos', 'Galeria'];
    const englishValues = ['Home', 'About us', 'Team', 'Projects', 'Galery'];
    document.querySelectorAll('.a_nav').forEach((element, index) => {
        if (lenguage === 'es') element.innerHTML = spanishValues[index];
        else if (lenguage === 'en') element.innerHTML = englishValues[index];
        else element.innerHTML = spanishValues[index];
    });
}

function loadLenguage(lenguage = 'es') {
    changeBarNavLanguage(lenguage);
    changeTitleLanguage(lenguage);
}