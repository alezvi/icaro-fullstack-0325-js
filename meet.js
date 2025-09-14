const people = [
    { username : "Cosme Fulanito", avatar_url : "https://i.pravatar.cc/80?img=13" },
    { username : "Marge Simpsons", avatar_url : "https://i.pravatar.cc/80?img=14" },
    { username : "Homero Simpsons", avatar_url : "https://i.pravatar.cc/80?img=15" },
    { username : "Bart Simpsons", avatar_url : null },
];

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
