import './css/style.css';
import * as ajax from './js/ajax';
import { handleSubmitForm } from './js/form';
// import {getPosts,submitForm} from './js/ajax';

$(document).ready(init());

function init() {

    ajax.getPosts();

    $('#open-modal').click(function () {
        $('.modal').toggleClass('active');
    });

    $('#submit-form').click(function (event) {
        event.preventDefault();
        handleSubmitForm();
    });

    $(document).keyup(function (event) {
        if (event.keyCode === 27) {
            $('#form').trigger('reset');
            $('#error-message').text('');
            $('.modal').toggleClass('active');

        }
    });


}




