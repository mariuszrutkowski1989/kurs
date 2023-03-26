$(document).ready(function(){
    const linkParents = $('a').parent();
    console.log(linkParents);

    const linkChildren = $('section').children();
    console.log(linkChildren);

    const elementAfterDescription = $('.description').next();
    console.log(elementAfterDescription);

    const elementBeforeDescription = $('.description').prev();
    console.log(elementBeforeDescription);
});

