var products = [{
        id: 0,
        price: 70000,
        title: 'Blossom Dress'
            },
    {
        id: 1,
        price: 50000,
        title: 'Springfield Shirt'
            },
    {
        id: 2,
        price: 60000,
        title: 'Black Monastery'
            }
        ];


function 출력(manyPriducts) {
    console.log(manyPriducts);

    for (var i = 0; i < manyPriducts.length; i++) {
        var lists = `<div class="col-sm-4">
        <img src="https://via.placeholder.com/600"class="w-100">
        <h5>${manyPriducts[i].title}</h5>
        <p>가격 : ${manyPriducts[i].price}</p>
  </div>
</div>`
        $('.row').append(lists);
        //            $('.card-body h5').eq(i).html(products[i].title);
        //            $('.card-body p').eq(i).html('가격: ' + products[i].price);

    }



}




출력(products);
let count = 0;

$('.plus').on('click', function () {

    if (count == 0) {
        $.get('https://codingapple1.github.io/js/more1.json').done(function (data) {

            출력(data);

        })
        count++;
    } else if (count == 1) {
        $.get('https://codingapple1.github.io/js/more2.json').done(function (data) {

            출력(data);

        })
        count++;
        $('.plus').addClass('form-hide');


    }

})


$('.all').on('click', function () {

    $('.row').html('');

    var   allproducts =[];
    allproducts=allproducts.concat(products);

    $.get('https://codingapple1.github.io/js/more1.json').done(function (data) {

        allproducts = allproducts.concat(data);


        $.get('https://codingapple1.github.io/js/more2.json').done(function (data) {

            allproducts = allproducts.concat(data);
                $('.row').html('');
            출력(allproducts);
            $('.plus').addClass('form-hide');

        })

    })


})





$('.cheap').on('click', function () {

    var allproduct =[];
    var under6 = [];
        $('.row').html('');
    allproduct=allproduct.concat(products);
    $.get('https://codingapple1.github.io/js/more1.json').done(function (data) {

        allproduct = allproduct.concat(data);


        $.get('https://codingapple1.github.io/js/more2.json').done(function (data) {

            allproduct = allproduct.concat(data);

            allproduct.forEach(function(a) {

                console.log(a.price);
                console.log(parseInt(a.price) < 60000);


                if (parseInt(a.price) < 60000) {

                    under6.push(a);

                }




            });

            $('.plus').addClass('form-hide');
            출력(under6);


        })

    })


})

$('.back').on('click',function(){
     $('.row').html('');
    출력(products);
    count=0;
    $('.plus').addClass('form-show');

})
