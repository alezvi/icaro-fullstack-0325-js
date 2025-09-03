
// TEMPLATE STRINGS
let fluid = true;

let header = '<div class="container '+ (fluid ? 'fluid' : '') +'"><div class="row"><div class="col"><h3>Hola, ' + username + '</h3></div></div></div>';


let username = 'Cosme Fulanito';

function getGreeting(username = '') {
    return `
        <div class="container">
            <div class="row">
                <div class="col">
                    <h3>Hola, ${username}</h3>
                    <p>Programmer's House</p>
                </div>
            </div>
        </div>
    `;
}


// function getProfile(profile) {
//     return `
//         <div>
//             <div><b>Nombre: </b>${profile.firstname}</div>
//             <div><b>Apellido: </b>${profile.lastname}</div>
//             <div><b>Edad: </b>${profile.age}</div>
//             <div><b>Nacionalidad: </b>${profile.nationality}</div>
//         </div>
//     `
// }

function getProfile({ firstname, lastname, age, nationality } = profile) {
    return `
        <div>
            <div><b>Nombre: </b>${firstname}</div>
            <div><b>Apellido: </b>${lastname}</div>
            <div><b>Edad: </b>${age}</div>
            <div><b>Nacionalidad: </b>${nationality}</div>
        </div>
    `
}
