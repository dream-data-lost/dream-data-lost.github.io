//날짜 입력
var dt = new Date();

var month = dt.getMonth()+1;	//월
var day = dt.getDate();			//일
var year = dt.getFullYear();	//년
var weekday = dt.getDay();		//요일

document.getElementById("day").innerHTML = year + '년 ' + month + '월 ' + day + '일';

//요일 사진 자동 지정
var weekdayimg = document.querySelectorAll(".weekday");
var weekdayUrl = ["sunday.png", "monday.png", "tuesday.png", "wednessday.png", "thursday.png", "friday.png", "saturday.png"];


if(weekday >= 0 && weekday <= 6) {
    for(i = 0; i < weekdayimg.length; i++) {
        weekdayimg[i].style.backgroundImage = "url(" + weekdayUrl[weekday] + ")";
    }
} else {
    weekdayimg[0].style.backgroundImage = "url(card_back.png)";
}

//계절 사진 자동 지정

var season = document.querySelectorAll(".season");
var seasonUrl = ["winter.png", "spring.png", "summer.png", "fall.png"];

if(month >= 0 && month <= 11) {
    var index = Math.floor((month % 11 + 1) / 3);
    for(i = 0; i < season.length; i++) {
        season[i].style.backgroundImage = "url(" + seasonUrl[index] + ")";
    }
} else {
    season[0].style.backgroundImage = "url(card_back.png)";
}

//구현 부분


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
        clickListener1(card);
  }

    function clickListener1(card) {
        card.addEventListener("click", function () {
            
			var otherClicked = card.parentNode.querySelector(".card.effect_click.flipped");

            if (otherClicked !== null) {
                otherClicked.classList.remove("flipped");
                console.log(otherClicked);
            }

            var c = this.classList;
            //c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
            c.add("flipped");
			
			clicked_image = document.querySelector(".card.effect_click.flipped.card_back");
        });
    }


//결과 카드
var situation_result = document.querySelectorAll(".situation_result");
var content_result = document.querySelectorAll(".content_result");


//결과카드 선택하기
var btn_result = document.querySelector(".btn.btn-default.page-scroll.result");
clickListener2(btn_result);

	function clickListener2(btn_result){
		btn_result.addEventListener("click",function() {
			var result_cards = document.querySelectorAll(".card.effect_click.flipped .card_back");
			situation_result[0].style.backgroundImage = result_cards[0].style.backgroundImage;
			content_result[0].style.backgroundImage = result_cards[1].style.backgroundImage;
		});
	}

	
//날씨 카드

var temprature = document.querySelectorAll(".temprature");
temprature[0].style.backgroundImage = "url(good.png)";
temprature[1].style.backgroundImage = "url(good.png)";
