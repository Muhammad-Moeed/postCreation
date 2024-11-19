function createPost() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const background = document.querySelector('input[name="background"]:checked').value;
    const currentTime = new Date().toLocaleString();

    const postContainer = document.getElementById('postContainer');
    const postElement = document.createElement('div');
    postElement.className = 'card mb-4';
    postElement.innerHTML = `
        <div class="card-body p-0" style="background-image: url('${background}'); background-size: cover; background-position: center;">
            <div class="position-relative p-4" style="background: rgba(0, 0, 0, 0.5);">
                <h3 class="card-title text-white text-center">${title}</h3>
                <p class="card-text text-white text-center">${description}</p>
            </div>
        </div>
        <div class="card-footer text-muted text-right">
            ${currentTime}
        </div>
    `;
    
    postContainer.appendChild(postElement);
}