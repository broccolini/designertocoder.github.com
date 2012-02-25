#
# It's JavaScript for this blog.
#

$(document).ready () ->
  $('#github').mouseover () ->
    $('#mousing').text("GitHub")

  $('#github').mouseout () ->
    $('#mousing').html("&nbsp;")

  $('#twitter').mouseover () ->
    $('#mousing').text("Twitter")

  $('#twitter').mouseout () ->
    $('#mousing').html("&nbsp;")

  $('#rss').mouseover () ->
    $('#mousing').text("RSS")

  $('#rss').mouseout () ->
    $('#mousing').html("&nbsp;")