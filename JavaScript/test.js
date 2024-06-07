var 출석부 = ['흥민', '영희', '철수', '재석'];
console.log(이름찾기('영이'))

function 이름찾기(a) {

    var isThere = false

    출석부.forEach(function (b) {

        {
            if (b == a) {
                console.log('있어요!');
                isThere = true;
            }

        }
    })

    if (!isThere) {
        console.log('없네요 ㅠㅠ');

    }

}

구구단을외자();
function 구구단을외자(){

    for(var i =2;i<10;i++){

        for(var j=1;j<10;j++){

            console.log(`${i} X ${j}= ${i*j}`);

            }
    }

}

var scores = [40,40,50];
var score= 20;

평균점수(scores,score);

function 평균점수(scores,score){

    var items = scores.length;
    var sum=0;

    scores.forEach(function(a){
            sum+=a;
    })

    var average = sum/items;
    var sub = score-average;

    if(sub>=0){

        console.log(`평균보다 ${sub}점이 올랐네요`);

    }else{

        console.log(`평균보다 ${sub}점이 떨어졌네요! 재수추천`);

    }


}

var 어레이 = [7,3,5,2,40];
어레이.sort(function(a, b){
  return a - b
});

console.log(어레이);

var 가나다 = ['다', '가', '나'];

가나다.sort(function(a,b){

    return b-a;

});
  console.log(가나다);

