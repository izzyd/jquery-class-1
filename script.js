var sandwich = $('.sandwich');

console.log(sandwich);

var ourSandwich = $('#sandwich-cheese');

// console.log( ourSandwich.width());
// console.log( ourSandwich.height());
// console.log( sandwich.length );
// console.log( sandwich.toggleClass('cheese'));

// ourSandwich.addClass('food delicious');
// ourSandwich.removeClass('delicious');

// var $lettuce = $('.lettuce');
var lettuce = $('.lettuce');

function lettuceClicked() {
    // console.log(this);
    var newHeight = $(this).height();
    // console.log(height);
    newHeight = newHeight + 20;
    // (this) is lettuce
    $(this).height(newHeight);
}
// when someone clicks on it, do something ()
// array of lettuces 
lettuce.click(lettuceClicked);

// lettuce.click(function()){
//     $(this).animate(
//         {
//             height: "+=100",
//             width: "+=100",
//         },
//         100
//     ); 
// }); 


