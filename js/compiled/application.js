(function() {

  $(document).ready(function() {
    $('#github').mouseover(function() {
      return $('#mousing').text("GitHub");
    });
    $('#github').mouseout(function() {
      return $('#mousing').html("&nbsp;");
    });
    $('#twitter').mouseover(function() {
      return $('#mousing').text("Twitter");
    });
    $('#twitter').mouseout(function() {
      return $('#mousing').html("&nbsp;");
    });
    $('#rss').mouseover(function() {
      return $('#mousing').text("RSS");
    });
    return $('#rss').mouseout(function() {
      return $('#mousing').html("&nbsp;");
    });
  });

}).call(this);
