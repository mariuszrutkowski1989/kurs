console.log('działa?');

let endOfThePage = 0;

const showPreloader = () => {

    let preloader = document.getElementById(`preloader`);

    console.log('showPreloader()');
    // preloader.style.display = 'block';
    preloader.classList.add('show');
}

// const showPreloader = () => {
//     setTimeout(() => {
//         let preloader = document.getElementById(`preloader`);

//         console.log('showPreloader()');
//         preloader.style.display = 'block';
//     }, 500);
// }

const hidePreloader = () => {

    let preloader = document.getElementById(`preloader`);

    console.log('hidePreloader()');
    // preloader.style.display = 'none';
    preloader.classList.remove('show');
}

const getData = () => {
    // console.log(`getData()`);

    showPreloader();

    fetch('https://akademia108.pl/api/ajax/get-users.php')
        .then(res => res.json())
        .then(data => {
            setTimeout(() => {
                let body = document.body;
                let hr = document.createElement('hr');
                body.appendChild(hr);

                for (let user of data) {
                    let pId = document.createElement('p');
                    let pName = document.createElement('p');
                    let pWebsite = document.createElement('p');

                    pId.innerText = `user ID: ${user.id}`;
                    pName.innerText = `user Name: ${user.name}`;
                    pWebsite.innerHTML = `user URL: ${user.website}<br />-----------`;

                    body.appendChild(pId);
                    body.appendChild(pName);
                    body.appendChild(pWebsite);
                }

                hidePreloader();

                console.log(data);
            }, 3000);
        })
        .catch(error => {
            console.log(error);
        })
}

const scrollToEndOfPage = () => {

    let d = document.documentElement;

    //Wysokość zawartości elementu, łącznie z zawartością niewidoczną na ekranie
    let scrollHeight = d.scrollHeight;

    // numer pixeli przeskrolowanych na osi pionowej
    let scrollTop = d.scrollTop;

    //wewnętrzna wysokość elementu w pikselach
    let clientHeight = d.clientHeight;

    let sumScrollTopClientHeight = Math.ceil(scrollTop + clientHeight);



    console.log(`scrollHeight: ${scrollHeight}`);

    console.log(`scrollTop: ${scrollTop}`);

    console.log(`clientHeight: ${clientHeight}`);

    console.log(`sumScrollTopClientHeight: ${sumScrollTopClientHeight}`);

    console.log(`============================`);

    if (sumScrollTopClientHeight >= scrollHeight) {

        endOfThePage += 1;

        console.log(`przeskrolowano do konca strony ${endOfThePage}`);

        showPreloader();

        getData();

    }


}

window.addEventListener('scroll', scrollToEndOfPage)


// https://akademia108.pl/api/ajax/get-users.php