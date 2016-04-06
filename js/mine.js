(function() {
	var cards = document.querySelectorAll(".card.effect_click");
	for(var i = 0, len = cards.length; i<len; i++){
		var card = cards[i];
		clickListener(card);
		
		//card.style.backgroundImage = "url(name)";
	}
	
	function clickListener(card){
		card.addEventListener("click",function() {
			var otherClicked = card.parentNode.querySelector(".card.effect_click.flipped");
			
			if(otherClicked !== null) {
				otherClicked.classList.remove("flipped");
				console.log(otherClicked);
			}
			
			var c=this.classList;
			//c.contains("flipped") === true ? c.remove("flipped") : c.add("flipped");
			c.add("flipped");
		});
	}
	
})();