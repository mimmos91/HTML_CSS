var numClass =$('.tab-button').length;
//console.log(numClass);
for (let i= 0; i < numClass; i++) {

    $('.tab-button').eq(i).on('click', function () {
//console.log(i);
        $('.tab-content').removeClass('show');
        $('.tab-button').removeClass('orange');
        $('.tab-button').eq(i).addClass('orange');
        $('.tab-content').eq(i).addClass('show');

    });

};
