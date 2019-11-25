$("#js-shopping-list-form").submit( function(event){
    event.preventDefault();
    let item = $("#shopping-list-entry").val();
    $(".shopping-list").append(`<li>
        <span class="shopping-item"> ${item} </span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

    $("#shopping-list-entry").val('');
      
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    let shoppingItemLabelDiv = $($(this).parent().parent().children('.shopping-item')[0])
    shoppingItemLabelDiv.toggleClass("shopping-item__checked");
  });
/*$( function (){
    $(".shopping-item-toggle").on("click", function (event){
        $(event.currentTarget).toggleClass("shopping-item__checked");
    });
});*/

//function handler (event){
  //  const itemSlash = $(even.currentTarget).parent.toggleClass('shopping-item__checked')
  //  $(".shopping-item-toggle").
//}