function getPosts() {
    $.ajax({
        url: 'https://blog-33914.firebaseio.com/posts.json',
        type: 'GET',
        success: function (data) {
            var posts = $.map(data, function (value, key) {
                value.id = key;
                return [value];
            });
            renderPostElements(posts);
        },
        error: error
    });
}

function submitForm(post) {
    $.ajax({
        url: 'https://blog-33914.firebaseio.com/posts.json',
        type: 'POST',
        data: JSON.stringify(post),
        success: getPosts,
        error: error

    });
}

function error(error) {
    console.log(error.message);
}