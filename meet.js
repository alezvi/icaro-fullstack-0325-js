const initialize = async function() {
    // los usuarios que llegaron a la meeting
    const people = [];

    // los usuarios invitados que estamos esperando que lleguen
    let participants = [];

    const response = await fetch('http://127.0.0.1:5500/participants.json');
    participants = await response.json();

    setInterval(function () {
        if (participants.length > 0) {
            people.push(participants.shift());
        }
        
        document.getElementById('people-list').innerHTML = renderParticipantsList(people);
    }, 3000);
}

function renderParticipantsList(people) {
    let items = ``;

    for (let i = 0; i < people.length; i++) {
        items += `<div class="list-group-item">${people[i].username}</div>`;
    }

    return `
        <div class="list-group">
            ${items}
        </div>
    `;
}

function renderUser(user) {
    let avatar;

    if (user.avatar_url) {
        avatar = `<img src="${user.avatar_url}" alt="Avatar" class="img-fluid rounded-circle">`
    } else {
        let [ nombre, apellido ] = user.username.split(' ')
        avatar = `${nombre[0]}${apellido[0]}`;
    }

    return `
        <div class="user-tile">
            <div class="user-avatar">
                ${avatar}
            </div>
            <div class="user-name mt-2 mb-5 fw-semibold">${user.username}</div>
                <div class="user-controls">
                <button><i class="bi bi-mic-fill"></i></button>
                <button><i class="bi bi-camera-video-fill"></i></button>
                <button class="btn-hangup"><i class="bi bi-telephone-x-fill"></i></button>
            </div>
        </div>
    `;
}

function renderUserElement(user) {
    let avatar;

    if (user.avatar_url) {
        avatar = `<img src="${user.avatar_url}" alt="Avatar" class="img-fluid rounded-circle">`
    } else {
        let [ nombre, apellido ] = user.username.split(' ')
        avatar = `${nombre[0]}${apellido[0]}`;
    }

    let userTile = document.createElement('div');
    userTile.classList.add('user-tile');

    let userAvatar = document.createElement('div');
    userAvatar.classList.add('user-avatar');
    userAvatar.innerHTML = avatar;

    let userName = document.createElement('div');
    userName.classList.add('user-name', 'mt-2', 'mb-5', 'fw-semibold');
    userName.innerHTML = user.username;

    let userControls = document.createElement('div');
    userControls.classList.add('user-controls');

    let micBtn = document.createElement('button');
    micBtn.innerHTML = `<i class="bi bi-mic-fill"></i>`;
    micBtn.addEventListener('click', function () {
        console.log('click en el boton del mic');
    });
    userControls.appendChild(micBtn);

    let cameraBtn = document.createElement('button');
    cameraBtn.innerHTML = `<i class="bi bi-camera-video-off-fill"></i>`;
    cameraBtn.addEventListener('click', function () {
        if ( cameraBtn.children[0].classList.contains('bi-camera-video-off-fill') ) {
            cameraBtn.innerHTML = `<i class="bi bi-camera-video-fill"></i>`;
        } else {
            cameraBtn.innerHTML = `<i class="bi bi-camera-video-off-fill"></i>`;
        }
    });
    userControls.appendChild(cameraBtn);

    let hangupBtn = document.createElement('button');
    hangupBtn.innerHTML = `<i class="bi bi-telephone-x-fill"></i>`;
    hangupBtn.addEventListener('click', function () {
        userTile.remove();
    });
    userControls.appendChild(hangupBtn);

    userTile.appendChild(userAvatar);
    userTile.appendChild(userName);
    userTile.appendChild(userControls);

    return userTile;
}

initialize();

const videoContainer = document.querySelector('.video-container');
const admitButton = document.querySelector('#btn-admit');
const closeButton = document.querySelector('#btn-close');

closeButton.addEventListener('click', function (event) {
    videoContainer.replaceChildren();
});

admitButton.addEventListener('click', function (event) {
    event.preventDefault();
    // videoContainer.innerHTML += renderUser(people[0]);

    if (people.length > 0) {
        videoContainer.appendChild( renderUserElement(people.shift()) );
    }
})
