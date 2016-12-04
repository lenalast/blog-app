
$(document).ready(init());

function init() {

    getPosts();

    $('#open-modal').click(function () {
        $('.modal').toggleClass('active');
    });

    $(document).keyup(function (event) {
        if (event.keyCode === 27) {
            $('#form').trigger('reset');
            $('#error-message').text('');
            $('.modal').toggleClass('active');

        }
    });


}

function renderPostElements(posts) {

    posts.forEach(function (post) {
        var postElement = createPostElement(post);

        $('#blog-container').prepend(postElement);

    });

}

function createPostElement(post) {
    var postElement = $('<div class="post">');
    var titleElement = $('<h2>').text(post.title);
    var contentElement = $('<p>').text(post.content);
    var createdElement = $('<span>').text(post.created.substr(0, post.created.indexOf(',')));
    var authorElement = $('<span>').text(post.author);

    return postElement.append(
        titleElement,
        createdElement,
        authorElement,
        contentElement
    );
}


