var numClass =$('.tab-button').length;
//console.log(numClass);
//for (let i= 0; i < numClass; i++) {
//
//    $('.tab-button').eq(i).on('click', function () {
////console.log(i);
//        $('.tab-content').removeClass('show');
//        $('.tab-button').removeClass('orange');
//        $('.tab-button').eq(i).addClass('orange');
//        $('.tab-content').eq(i).addClass('show');
//
//    });
//
//};



//for (let i= 0; i < numClass; i++) {
//   $('.tab-button').eq(i).on('click', function () {
////console.log(i);
//       탭열기(i);
//
//    });
//
//
//};
//
function 탭열기(i){
        $('.tab-content').removeClass('show');
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');
}


$('.list').click(function(e){
//    console.log(e.target);
//    console.log(e.currentTarget);
//    console.log(e.target==document.querySelectorAll('.tab-button')[0]);
    var tabNum = e.target.dataset.id;
//    console.log(tabNum);
    탭열기(tabNum);


//    if(e.target==document.querySelectorAll('.tab-button')[0]){
//        탭열기(0)
//    }else if(e.target==document.querySelectorAll('.tab-button')[1]){
//        탭열기(1)
//    }else if(e.target==document.querySelectorAll('.tab-button')[2]){
//        탭열기(2)
//    }

})

var car2 = {name:'스파크',price:'6000만원'}

$('span').eq(0).html(car2.name);
$('span').eq(1).html(car2.price);


