
var main = function()
{
	"use strict";

	$(".commentInput button").on("click", function(event)
									{
										var $newComment = $("<p>");
										var commentText = $(".commentInput input").val();

										$newComment.text(commentText);

										$(".previousComments").append($newComment);
										
									}
								);
};

$(document).ready(main);