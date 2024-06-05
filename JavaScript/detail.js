
var count;

for (count = 0; count < 3; count++) {
    $('.tab-button').ep({
        count
    }).on('click', function () {
        $('.tab-content').removeClass('.show');
        $('.tab-button').removeClass('.orange');
        $('.tab-button').eq({
            count
        }).addClass('.orange');
        $('.tab-content').eq({
            count
        }).addClass('.show');

    });

};
