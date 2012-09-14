/* recent commits widget */
$(function(){
	$.getJSON('http://query.yahooapis.com/v1/public/yql?q=%0A%20%20%20%20SELECT%20json%20FROM%20json%0A%0A%20%20%20%20WHERE%20url%20in%0A%20%20%20%20%20%20(%22https%3A%2F%2Fapi.github.com%2Frepos%2Fpresidential-innovation-fellows%2Fsowcomposer%2Fevents%22%2C%22https%3A%2F%2Fapi.github.com%2Frepos%2Fpresidential-innovation-fellows%2Frfpez-apis%2Fevents%22%2C%22https%3A%2F%2Fapi.github.com%2Frepos%2Fpresidential-innovation-fellows%2Fapidocs%2Fevents%22%2C%22https%3A%2F%2Fapi.github.com%2Frepos%2Fpresidential-innovation-fellows%2Frfpez-blog%2Fevents%22)%20AND%20(json.type%20%3D%20%22PushEvent%22%20OR%20json.type%20%3D%20%22PullRequestEvent%22%20OR%20json.type%20%3D%20%22CreateEvent%22)%0A%0A%0A%20%20%20%20%7C%20SORT(field%3D%22json.created_at%22%2C%20descending%3D%22true%22)%0A&format=json&maxage=600', function(data) {

    $(data.query.results.json).each(function(key, event){
      // Render the first 10 events
      if (key < 10){
        var html = $(githubSentences.convert(event.json))
        html.find(".timestamp").relatizeDate();
        $("#commits").append(html);
      }
    });

	});

});