/* recent commits widget */
$(function(){
  var yql = 'SELECT json FROM json'
          + ' WHERE url in ("https://api.github.com/repos/presidential-innovation-fellows/sowcomposer/events",'
          + '"https://api.github.com/repos/presidential-innovation-fellows/rfpez-apis/events",'
          + '"https://api.github.com/repos/presidential-innovation-fellows/apidocs/events",'
          + '"https://api.github.com/repos/presidential-innovation-fellows/rfpez-blog/events")'
          + ' AND (json.type = "CreateEvent" OR json.type = "PullRequestEvent" OR json.type = "PushEvent")'
          + ' | SORT(field="json.created_at", descending="true") | truncate(count=10)';

	$.getJSON('http://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(yql)+'&format=json', function(data) {

    $(data.query.results.json).each(function(key, event){
      var html = $(githubSentences.convert(event.json))
      html.find(".timestamp").relatizeDate();
      $("#commits").append(html);
    });

	});

});