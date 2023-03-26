console.log("XMLHttpRequest");

let httpReq = new XMLHttpRequest();

const getUserData = () => {

    //Tworzenie nowego obiektu
    console.log(httpReq);

    //otwarcie połączenia - 
    httpReq.open('GET', 'https://jsonplaceholder.typicode.com/users/1');


    // jeśli status połączenia został zmieniony -> httpReq.readyState
    // 0: połączenie nie nawiązane,
    // 1: połączenie nawiązane,
    // 2: żądanie odebrane,
    // 3: przetwarzanie,
    // 4: dane zwrócone i gotowe do użycia.
    // https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp

    httpReq.onreadystatechange = () => {

        //4: dane zwrócone i gotowe do użycia
        if (httpReq.readyState === 4) {

            if (httpReq.status === 200) {
                let data = httpReq.responseText;
                let dataJSON = JSON.parse(data);

                // console.log(data);
                // console.log(dataJSON);
                console.log(dataJSON.name);
                console.log(dataJSON.email);

                //zwolnij obiekt, aby nie utrzymywać niepotrzebnego już połączenia z serwerem
                // httpReq = null;
            }
            // console.log(`200 OK`);
        }

        console.log(httpReq.readyState);
    }

    httpReq.send();
}

setInterval(getUserData,10000);