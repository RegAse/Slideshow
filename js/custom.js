//Nemandi: Guðmundur Axel
$(document).ready(function(){
	var curpos = 0;
	var busy = false;
	var slides = $(".slide").length;
	//Hér set ég inn fyrstu caption
	$(".caption").html($(".active").data("caption"));
	//Vinstri ör
	$(".left-arrow").on('click',function(){
		//Checka ef ég er í animation ef ekki þá má fara á næstu mynd
		if (busy == false) 
		{
			//Set busy í true thannig ad thad getur ekki fireast tvö animation á sama tíma
			busy = true;
			curpos--;
			if (curpos < 0)
			{
				var cur = $(".active");
				//Hér byrja ég að animation með að toggla opacity
				$(".active").animate({ opacity: "toggle" },400,function(){
					cur.removeClass("active");
					$(".slide").last().addClass("active");
					//Hér breyti ég um caption
					$(".caption").html($(".active").data("caption"));
					//Hér set ég busy í false thannig notandin má núna skipta aftur um mynd
					busy = false;
				});
				curpos = slides - 1;
			}
			else
			{
				var cur = $(".active");
				//Hér byrja ég að animation með að toggla opacity
				$(".active").animate({ opacity: "toggle" },400,function(){
					cur.removeClass("active");
					cur.prev(".slide").addClass("active");
					//Hér breyti ég um caption
					$(".caption").html($(".active").data("caption"));
					//Hér set ég busy í false thannig notandin má núna skipta aftur um mynd
					busy = false;
				});
			}
		};
	});
	//Hægri ör
	$(".right-arrow").on('click',function(){
		RightArrow();
	});
	setInterval(RightArrow, 5000);

	function RightArrow()
	{
		//Checka ef ég er í animation ef ekki þá má fara á næstu mynd
		if (busy == false) 
		{
			//Set busy í true thannig ad thad getur ekki fireast tvö animation á sama tíma
			busy = true;
			curpos++;
			//Checka ef slides er stærri en curpos 
			if (slides > curpos) 
			{
				var cur = $(".active");
				//Hér byrja ég að animation með að toggla opacity
				$(".active").animate({ opacity: "toggle" },400,function(){
					cur.removeClass("active");
					cur.next(".slide").addClass("active");
					//Hér breyti ég um caption
					$(".caption").html($(".active").data("caption"));
					//Hér set ég busy í false thannig notandin má núna skipta aftur um mynd
					busy = false;
				});
				
			}
			else
			{
				var cur = $(".active");
				$(".active").animate({ opacity: "toggle" },400,function(){
					cur.removeClass("active");
					$(".slide").first().addClass("active");
					//Hér breyti ég um caption
					$(".caption").html($(".active").data("caption"));
					//Hér set ég busy í false thannig notandin má núna skipta aftur um mynd
					busy = false;
				});
				//Reseta curpos í 0
				curpos = 0;
			}
		};
	}
});