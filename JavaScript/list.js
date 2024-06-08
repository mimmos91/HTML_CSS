
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

        $('.plus').on('click', function() {

            if (count == 0) {
                $.get('https://codingapple1.github.io/js/more1.json').done(function(data) {

                    출력(data);

                })
                count++;
            }else if(count==1){
                 $.get('https://codingapple1.github.io/js/more2.json').done(function(data) {

                    출력(data);

                })
                count++;
                $('.plus').addClass('form-hide');


            }

        })


    function 합쳐라(products){

        $.get('https://codingapple1.github.io/js/more1.json').done(function(data) {

                    products = products.concat(data);


            $.get('https://codingapple1.github.io/js/more2.json').done(function(data) {

                    products = products.concat(data);
                console.log(products);
                return products;

                })

                })


    }


function 지우기(){

    $('.row').remove;
}




    $('.cheap').on('click',function(){

        var under6 = 합쳐라(products);
        under6.sort(function(a,b){

        if(a.price<=6000){

            return a-b;
        }else{

        }

            console.log('under6'+under6);

        });


    })


