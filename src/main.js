/*
    1.- Implement multi launguage support
  
*/

document.addEventListener('DOMContentLoaded', () => {
    // -> Determine which is the default language values
    document.querySelector('.languageSelect').value = window.localStorage.getItem('language');
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


function loadLenguage(lenguage = 'es') {
    switch (lenguage) {
        case 'es': loadSpanish();
            break;
        case 'en': loadEnglish();
            break;
        default: loadSpanish();
            break;
    }
}

const spanishBarNavValues = ['Home', 'Conocenos', 'Equipo', 'Proyectos', 'Galeria'];
const englishBarNAvValues = ['Home', 'About us', 'Team', 'Projects', 'Galery'];

function loadSpanish() {
    // -> Load h1 title text in spanish
    document.querySelector('.titulo').innerHTML = `
        <h1>RAMA ESTUDIANTIL <span style="color: #00629B;">IEEE</span> TECNM IZTAPALAPA III</h1>
    `;
    // -> Load navbar text in spanish
    document.querySelectorAll('.a_nav').forEach((element, index) => {
        element.innerHTML = spanishBarNavValues[index];
    });
    // -> Load 'our vission' text in spanish
    document.querySelector('#vision-text').textContent = `
        Creemos en un mundo mejor, en el que la tecnología sea un motor de cambio social, en el que la innovación
        tecnológica sea una herramienta para el desarrollo de la humanidad y en el que la excelencia sea la
        base de la sociedad.
    `;
    // -> Load 'our mission' text in english
    document.querySelector('#mission-text').textContent = `
    Promover, difundir e incentivar la innovación tecnológica dentro y fuera de la comunidad de la Rama Estudiantil IEEE
    TecNM Iztapalapa III, así como promover el desarrollo tecnológico en la comunidad del entorno del país y de las instituciones. 
    Impulsa el crecimiento de la tecnología y es un motor de cambio social para la comunidad de San Miguel Teotongo y la alcaldía de Iztapalapa.
    `;
}

function loadEnglish() {
    // -> Load h1 title text in english
    document.querySelector('.titulo').innerHTML = `
        <h1><span style="color: #00629B;">IEEE</span> STUDENT BRANCH TECNM IZTAPALAPA III</h1>  
    `;
    // -> Load navbar text in english
    document.querySelectorAll('.a_nav').forEach((element, index) => {
        element.innerHTML = englishBarNAvValues[index];
    });
    // -> Load 'our vision' text in english
    document.querySelector('#vision-text').textContent = `
        We trusth in a better world, in which technology is a social change engine, in which technological innovation
        can be a tool for the development of humanity and in which excellence is the basis of society.
    `;
    // -> Load 'our mission' text in english
    document.querySelector('#mission-text').textContent = `
        Our purposes are promote, disseminate, and encourage technological innovation within and outside the community of the IEEE TecNM Iztapalapa III Student Branch,
        as well as to promote technological development in the community and institutions in the country's surroundings.
        It drives technology growth and is a social change engine for the community of San Miguel Teotongo and the Iztapalapa borough.
    `;
}


