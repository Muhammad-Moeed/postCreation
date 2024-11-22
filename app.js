function createPost() {
    var username = document.getElementById('username').value.trim();
    var title = document.getElementById('title').value.trim();
    var description = document.getElementById('description').value.trim();
    var background = document.querySelector('input[name="background"]:checked')?.value;
    var currentTime = new Date().toLocaleString();

    // Validation
    if (!username || !title || !description || !background) {
        alert('Please fill all fields and select a background image.');
        return;
    }

    var postContainer = document.getElementById('postContainer');
    var postElement = document.createElement('div');
    postElement.className = 'card mb-4';
    postElement.innerHTML = `
        <div class="card-header d-flex justify-content-between align-items-center">
            <strong>${username}</strong>
            <small class="text-muted">${currentTime}</small>
        </div>
        <div class="card-body p-0" style="background-image: url('${background}'); background-size: cover; background-position: center;">
            <div class="position-relative p-4" style="background: rgba(0, 0, 0, 0.5);">
                <h3 class="card-title text-white text-center">${title}</h3>
                <p class="card-text text-white text-center">${description}</p>
            </div>
        </div>
        <div class="card-footer">
            <div class="d-flex justify-content-between align-items-center">
                <button class="btn btn-link text-muted like-btn" onclick="likePost(this)">
                    <i class="like fas fa-thumbs-up"></i> Like (<span class="like-count">0</span>)
                </button>
                <button class="btn btn-link text-muted" onclick="Comments(this)">
                    <i class="fas fa-comment"></i> Comment (<span class="comment-count">0</span>)
                </button>
                <button class="btn btn-link text-muted">
                    <i class="fas fa-share"></i> Share
                </button>
            </div>
            <div class="comment-section mt-3" style="display: none;">
                <input type="text" class="form-control mb-2" placeholder="Write a comment..." />
                <button class="btn btn-primary btn-sm" onclick="addComment(this)">Add Comment</button>
                <ul class="list-unstyled mt-3 comment-list"></ul>
            </div>
        </div>
    `;
    
    postContainer.prepend(postElement);
    document.getElementById('username').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}

var likeCount = 0;

function likePost(button) {
    button.querySelector('.like').style.color = 'blue';
    likeCount++;
    button.querySelector('.like-count').textContent = likeCount;
}

function Comments(button) {
    var commentSection = button.parentElement.nextElementSibling;
    if (commentSection.style.display === 'none' || commentSection.style.display === '') {
        commentSection.style.display = 'block';
    } else {
        commentSection.style.display = 'none';
    }
}

function addComment(button) {
    var commentSection = button.parentElement;
    var inputField = commentSection.querySelector('input');
    var commentText = inputField.value.trim();

    if (commentText) {
        var commentList = commentSection.querySelector('.comment-list');
        var newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentList.appendChild(newComment);

        // Increment comment

        var commentCountElement = commentSection.parentElement.querySelector('.comment-count');
        var currentCommentCount = parseInt(commentCountElement.textContent);
        commentCountElement.textContent = currentCommentCount + 1;

        inputField.value = '';
    }
}
