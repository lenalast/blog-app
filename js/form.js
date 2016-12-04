function handleSubmitForm(event) {
    event.preventDefault();

    var name = $('#name').val();
    var title = $('#title').val();
    var content = $('#content').val();

    var formInputs = {
        author: name,
        title: title,
        content: content,
        created: moment().format('YYYY-MM-DD, hh:mm')
    };

    if (validateForm(name, title, content)) {
        submitForm(formInputs);
        $('#form').trigger('reset');
        $('#error-message').text('');
        $('.modal').toggleClass('active');

    } else {
        $('#error-message').append('<h3>').text('All fields must be filled');
    }
}

function validateForm(name, title, content) {

    if (name.length < 1 || title.length < 1 || content.length < 1) {
        return false;
    }
    return true;
}

