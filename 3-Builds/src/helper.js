import $ from 'jquery';

export function createButton(text) {
    return $('<button>' + text + '</button>');
}

export function appendToBody(element) {
    $('body').append(element);
}
