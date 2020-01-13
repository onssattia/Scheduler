/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
import $ from 'jquery';
import '../vendor/bootstrap/js/bootstrap.min';
import 'jquery-slimscroll';
import _ from 'lodash';
import './klorofil-common';

import 'font-awesome/css/font-awesome.min.css';
// any CSS you require will output into a single css file (app.css in this case)
import '../vendor/bootstrap/css/bootstrap.min.css';
import '../vendor/linearicons/style.css';

import '../css/main.css';


if($('#btnTogglePassword').length) {
    $('#btnTogglePassword').on('click', function () {
        let self = $(this), target = $(self.data('target')), type = target.attr('type');

        if(type === 'text') {
            target.attr('type', 'password');
        }
        else {
            target.attr('type', 'text');
        }

        self.children('i').toggleClass('fa-eye-slash').toggleClass('fa-eye');
    });
}

if($('#sessionModal').length) {
    let self = $('#sessionModal'), submitted = self.data('submitted');
    if(submitted) {
        self.modal('show');
    }
}