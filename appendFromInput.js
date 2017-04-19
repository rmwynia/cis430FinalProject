
var main = function()
{
	"use strict";

	$(".commentInput button").on("click", function(event)
									{
										var $newComment = $("<p>");
										var commentText = $(".commentInput input").val();
										var $time = $("<p>");
										var dt = new Date();
										var minutes =dt.getMinutes();
										var hours = dt.getHours();

										var offTime = hours + ":"+ minutes;


										$newComment.text(commentText);
										$time.text(minutes);

										$(".previousComments").append(offTime);
										$(".previousComments").append($newComment);
										
										
									}
								);
};

$(document).ready(main);