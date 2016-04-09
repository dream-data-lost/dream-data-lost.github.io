var last_score = 4; //최종 점수(불쾌지수 점수 미리 포함)

var situationUrl = ["trip.png", "picnic.png", "date.png", "concert.png"];
var contentUrl = ["bag.png", "jewelry.png", "credit_card.png", "computer.png","cellphone.png", "cloth.png", "wallet.png"];

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

//요일 점수 넣기
switch(weekday) {
    case 0: last_score = last_score + 14;	break;
    case 1:	last_score = last_score + 5;	break;
    case 2:	last_score = last_score + 6;	break;
    case 3:	last_score = last_score + 8;	break;
    case 4:	last_score = last_score + 10;	break;
    case 5:	last_score = last_score + 16;	break;
    case 6:	last_score = last_score + 17;	break;
    default:
        break;
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

//계절 점수 넣기
switch(month) {
    case 1:
    case 2:
    case 12:
        last_score = last_score + 4;
		break;
    case 3:
    case 4:
    case 5:
         last_score = last_score + 6;
		 break;
    case 6:
    case 7:
	case 8:
         last_score = last_score + 8;
		 break;
    case 9:
    case 10:
    case 11:
         last_score = last_score + 8;
		 break;
    default:
        break;
} 

//--------------------------카드 구현 부분-----------------------------

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
            card_backs[i].style.backgroundImage = "url(" + situationUrl[0] + ")";
        }
        else if (randnums[i] == 2) {
            card_backs[i].style.backgroundImage = "url(" + situationUrl[1] + ")";
        }
        else if (randnums[i] == 3) {
            card_backs[i].style.backgroundImage = "url(" + situationUrl[2] + ")";
        }
        else if (randnums[i] == 4) {
            card_backs[i].style.backgroundImage = "url(" + situationUrl[3] + ")";
        }
        else if (randnums[i] == 5) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[0] + ")";
        }
        else if (randnums[i] == 6) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[1] + ")";
        }
        else if (randnums[i] == 7) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[2] + ")";
        }
        else if (randnums[i] == 8) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[3] + ")";
        }
        else if (randnums[i] == 9) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[4] + ")";
        }
        else if (randnums[i] == 10) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[5] + ")";
        }
        else if (randnums[i] == 11) {
            card_backs[i].style.backgroundImage = "url(" + contentUrl[6] + ")";
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


//결과카드 보여주기
var btn_result = document.querySelector(".btn.btn-default.page-scroll.result");
clickListener2(btn_result);

	function clickListener2(btn_result){
		btn_result.addEventListener("click",function() {
			var result_cards = document.querySelectorAll(".card.effect_click.flipped .card_back");
			situation_result[0].style.backgroundImage = result_cards[0].style.backgroundImage;
			content_result[0].style.backgroundImage = result_cards[1].style.backgroundImage;
			
			//상황 점수 부여
			if(result_cards[0].style.backgroundImage == "url(\"" + situationUrl[0] + "\")")  last_score = last_score + 12;
			else if(result_cards[0].style.backgroundImage == "url(\"" + situationUrl[1] + "\")") last_score = last_score + 16;
			else if(result_cards[0].style.backgroundImage == "url(\"" + situationUrl[2] + "\")") last_score = last_score + 12;
			else if(result_cards[0].style.backgroundImage == "url(\"" + situationUrl[3] + "\")")    last_score = last_score + 20;
			else  last_score = last_score;
			
			//물품 점수 부여
			if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[0] + "\")")  last_score = last_score + 15;
			else if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[1] + "\")") last_score = last_score + 10;
			else if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[2] + "\")") last_score = last_score + 8;
			else if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[3] + "\")")    last_score = last_score + 10;
			else if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[4] + "\")") last_score = last_score + 40;
			else if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[5] + "\")") last_score = last_score + 5;
			else if(result_cards[1].style.backgroundImage == "url(\"" + contentUrl[6] + "\")")    last_score = last_score + 35;
			else  last_score = last_score;
			
			if((last_score >= 30)&&(last_score<=38)){last_score="그대여~ 아무 걱정하지 말아요 당신의 오늘의 분실 운명은 잔잔한 호수와도 같습니다. 그대의 무의식이 그대에게 넌지시 알려줄거에요.  매우 안전하니 안심하세요";}
			else if((last_score >= 39)&&(last_score<=47)){last_score="어머, 분실을 걱정하고 계신 당신! 당신의 분실 운명은 잔잔한 호수에 돌 하나 던져진 정도~? 그렇지만 너무 마음을 놓고 긴장하지 않으면  자신도 모르게 돌이 바위가 되어 돌아올거에요.";}
			else if((last_score >= 48)&&(last_score<=56)){last_score="웁~스! 대체적으로 안전하지만 먹구름이 서서히 다가오고있어요. 잠깐 한눈을 팔면 언제 당신의 물건을 털어갈지도 몰라요";}
			else if((last_score >= 57)&&(last_score<=65)){last_score="what the hell!! 상황이나 환경이 변하기 쉬울 때입니다. 정신줄을 놓지 마세요 화목했던 나날이 갑작스런 파국을 맞이하게 될 수 도 있습니다. 긴장감 조절이 중요합니다.";}
			else if((last_score >= 66)&&(last_score<=74)){last_score="끄아아악 어두운 밤에 무엇을 떨어뜨리는지도 모른채 걸어가게 됩니다. 낮의 햇빛이 점점 약해져 가는 상황입니다. 늘 Be careful! 잊지마세요.";}
			else if((last_score >= 75)&&(last_score<=83)){last_score="띠-로리 마음의 준비가 단단히 필요합니다. 당신의 분실 운명은 휘몰아치는 소용돌이 안에 있습니다. 매우 위험합니다. Danger! Danger! Danger!";}
			else if((last_score >= 84)&&(last_score<=92)){last_score="인생사 새옹지마 해탈의 시간입니다. 이미 잃어버릴 것. 고민해도 소용없습니다. 옛 것이 떠나가야 새로운 것을 맞이하는 기쁨을 얻을 수 있어요! 그냥...놓으세요.";}
			else {last_score="이럴리가 없어요. 이게 바로 오류라는거야...";}

			document.getElementById("score").innerHTML = last_score;
		});
	}
	

	
//날씨 카드

var temprature = document.querySelectorAll(".temprature");
temprature[0].style.backgroundImage = "url(good.png)";
temprature[1].style.backgroundImage = "url(good.png)";

//최종 점수 미리보기
