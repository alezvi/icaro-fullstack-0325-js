const externalLink = document.querySelector('#external-link');

externalLink.addEventListener('click', function (event) {
    event.preventDefault();
});

const myModalEl = document.getElementById('externalLinkConfirm');

myModalEl.addEventListener('shown.bs.modal', event => {
    const accept = document.getElementById('external-link-accept');

    accept.addEventListener('click', function () {
        // window.location.href = event.relatedTarget.href;
        window.open(event.relatedTarget.href);

        bootstrap.Modal.getInstance(myModalEl).hide();
    })
})

const showCommentForm = document.querySelector('#show-comment-form');
const postControls = document.querySelector('#post-controls');

showCommentForm.addEventListener('click', function (event) {
    event.preventDefault();

    postControls.innerHTML += `
        <form>
            <textarea name="" id="" class="my-3 form-control"></textarea>
        </form>
    `
})
