const jwt = localStorage.getItem("token");

const message_list = document.querySelector('.messages-list');

    fetch('http://localhost:4500/api/v1/messages', {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': jwt
        },
    })

    .then(res => {
        console.log(res)
        res.data.message.map(giveMeMessage => {
            message_list.innerHTML += ` <tr>
            <td>${giveMeMessage.name}</td>
            <td>${giveMeMessage.email}</td>
            <td>${giveMeMessage.date}</td>
            <td>${giveMeMessage.message}</td>
            <td>delete</td>
            </tr>
             `;
        });
    }
    ).catch(err=>{
        console.log(err);
    });

/*
const jwt = localStorage.getItem("token")
const message_list = document.querySelector('.messages-list');
const displayQueries = async () => {
    const queries = await fetch(`${globalURL}/api/v1/messages`, {
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': jwt
        },
    })
    const data = await queries.json()
    console.log(data)
    let ui = ''
    data.map(queries => {
        ui += `
        <tr>
            <td>${queries.name}</td>
            <td>${queries.email}</td>
            <td>${queries.date}</td>
            <td>${queries.message}</td>
            <td>delete</td>
        </tr>`
    })
    console.log("The ui is: " + ui)
    console.log("The containerComments", containerComponents)
    containerComponents[ 0 ].innerHTML += ui
    console.log(data)
}
displayQueries()
*/