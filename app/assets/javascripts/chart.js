$(document).ready(function () {

  var show_chart = function () {
    var stock = $(this).attr('id'); //gets current clicked on activity and get json data via ajax,

    $.ajax({
      dataType: 'json',
      type: 'get',
      url: '/stocks/chart/' + stock
    }).done(process_stock);
  };


var process_stock = function (stocks) {

    $('#chart').empty();
    new Morris.Line({
      element: 'chart',
      data: stocks,
      xkey: 'symbol',
      ykeys: ['purchase_price'],
      labels: [stocks],
    });
  };





  $('.show_chart').change(show_chart) //trigger simulates the click on open (rather than needing it to open on dropdown)

});

