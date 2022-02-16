$(function() {
	$("#add").on("click",function(){
		var val = $("input").val();
		if(val !==""){
			var ntem = $("<li></li>").text(val);
			$(ntem).append("<button class=butnew>Completed</button>");
			$("#myList").append(ntem);
			// $(".butnew").before("<button class=fordelete>DELETE</button>");
			$("input").val("");
			// $(".fordelete").click(function(){
			// 	$(this).parent().remove();
			// });
			$(".butnew").click(function(){
				$(this).parent().css("text-decoration","line-through");
			});
		};
	});
});