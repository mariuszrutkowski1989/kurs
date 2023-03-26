$(document).ready(function(){
    //po id, tak jak wczesniej
  const section = $('#about'); 
  console.log(section);
    //po klasie, tak jak nauczono
  const listItems = $('.list-item');
  console.log(listItems);
    //po elemencie
    const paragraphs = $('p');
    console.log(paragraphs);
    //drugi element z listy
    const secondItems = $('.list-item:nth-of-type(2)');
    console.log(secondItems);

    const links = $('a[title = "See more"]');
    console.log(links);

    const headingsInSection = $('section h2');
    console.log(headingsInSection);

    const documentObj = $(document);
    console.log(documentObj);
});

