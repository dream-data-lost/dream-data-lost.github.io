//날짜 입력

var dt = new Date();

var month = dt.getMonth()+1;	//월
var day = dt.getDate();			//일
var year = dt.getFullYear();	//년
var weekday = dt.getDay();		//요일

document.getElementById("day").innerHTML = year + '년 ' + month + '월 ' + day + '일' + weekday;

//요일 사진 자동 지정
var weekdayimg = document.querySelectorAll(".weekday");

if(weekday==0){
	weekdayimg[0].style.backgroundImage = "url(sunday.png)";
}
else if(weekday==1){
	weekdayimg[0].style.backgroundImage = "url(monday.png)";
}
else if(weekday==2){
	weekdayimg[0].style.backgroundImage = "url(tuesday.png)";
}
else if(weekday==3){
	weekdayimg[0].style.backgroundImage = "url(wednesday.png)";
}
else if(weekday==4){
	weekdayimg[0].style.backgroundImage = "url(thursday.png)";
}
else if(weekday==5){
	weekdayimg[0].style.backgroundImage = "url(friday.png)";
}
else if(weekday==6){
	weekdayimg[0].style.backgroundImage = "url(saturday.png)";
}
else weekdayimg[0].style.backgroundImage = "url(card_back.png)";

//계절 사진 자동 지정

var season = document.querySelectorAll(".season");

if((month>=3)&&(month<=5)){
	season[0].style.backgroundImage = "url(spring.png)";
}
else if((month>=6)&&(month<=8)){
	season[0].style.backgroundImage = "url(summer.png)";
}
else if((month>=9)&&(month<=11)){
	season[0].style.backgroundImage = "url(fall.png)";
}
else if((month==12)||(month==1)||(month==2)){
	season[0].style.backgroundImage = "url(winter.png)";
}
else season[0].style.backgroundImage = "url(card_back.png)";


//구현 부분
var clicked_image;

//카드 뒷면 랜덤
    var card_backs = document.querySelectorAll(".card_back");

    function setRand(min, max, number) {
        randResult = new Array();
        randList = new Array();
        for (i = min; i <= max; i++) {
            randList.push(i);
        }
        for (i = 0; i < number; i++) {
            getRand();
        }
        return randResult;
    }

    function getRand() {
        randNumber = Math.floor(Math.random() * randList.length);
        randResult.push(randList[randNumber]);
        randList.splice(randNumber, 1);
    }
    var randnums = setRand(1, 4, 4);
    var randnums2 = setRand(5, 11, 7);
    randnums = randnums.concat(randnums2);
    for (i = 0; i <= 10; i++) {
        if (randnums[i] == 1) {
            card_backs[i].style.backgroundImage = "url(picnic.png)";
        }
        else if (randnums[i] == 2) {
            card_backs[i].style.backgroundImage = "url(concert.png)";
        }
        else if (randnums[i] == 3) {
            card_backs[i].style.backgroundImage = "url(date.png)";
        }
        else if (randnums[i] == 4) {
            card_backs[i].style.backgroundImage = "url(trip.png)";
        }
        else if (randnums[i] == 5) {
            card_backs[i].style.backgroundImage = "url(bag.png)";
        }
        else if (randnums[i] == 6) {
            card_backs[i].style.backgroundImage = "url(cellphone.png)";
        }
        else if (randnums[i] == 7) {
            card_backs[i].style.backgroundImage = "url(cloth.png)";
        }
        else if (randnums[i] == 8) {
            card_backs[i].style.backgroundImage = "url(computer.png)";
        }
        else if (randnums[i] == 9) {
            card_backs[i].style.backgroundImage = "url(credit_card.png)";
        }
        else if (randnums[i] == 10) {
            card_backs[i].style.backgroundImage = "url(jewelry.png)";
        }
        else if (randnums[i] == 11) {
            card_backs[i].style.backgroundImage = "url(wallet.png)";
        }
        else {
            card_backs[i].style.backgroundImage = "url(card_back.png)";
        }
      
    }
	
 
//뒤집기

    var cards = document.querySelectorAll(".card.effect_click");
    for (var i = 0, len = cards.length; i < len; i++) {
        var card = cards[i];
        clickListener(card);
  }

    function clickListener(card) {
        card.addEventListener("click", function () {
            
			var otherClicked = card.parentNode.querySelector(".card.effect_click.flipped");

            if (otherClicked !== null) {
                otherClicked.classList.remove("flipped");
                console.log(otherClicked);
            }

            var c = this.classList;
            //c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
            c.add("flipped");
			
			//결과카드
			clicked_image = document.querySelector(".card.effect_click.flipped.card_back");
        });
    }




//결과카드 보여주기

var situation_result = document.querySelectorAll(".situation_result");
situation_result[0].style.backgroundImage = "url(date.png)";

var content_result = document.querySelectorAll(".content_result");
content_result[0].style.backgroundImage = "url(bag.png)";

var temprature = document.querySelectorAll(".temprature");
temprature[0].style.backgroundImage = "url(good.png)";
