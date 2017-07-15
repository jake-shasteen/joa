(function() {

  var tableOfContentsOpen = true;

  function openTableOfContents() {
    $('.table-of-contents').append(
    $('<h2 class="table-of-contents__header">Table of Contents</h2>'),
    $('<ul class="table-of-contents__list">')
      .append($('<li><a href="/">Home</a></li>'))
      .append($('<li><a href="/seaofbrass">Sea of Brass</a></li>'))
    );
  };

  function closeTableOfContents() {
    $('.table-of-contents').empty();
  }

  openTableOfContents();

  $('.table-of-contents__toggle').click(function(){
    if (tableOfContentsOpen) {
      tableOfContentsOpen = false;
      closeTableOfContents();
    } else {
      tableOfContentsOpen = true;
      openTableOfContents();
    }
  });
  
})();