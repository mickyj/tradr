$(document).ready(function () {

  var show_chart = function (charts) {

  $.each(charts, function (i, chartName) {
    $.ajax({
        url: '/stocks/charts/' + chartName,
        dataType: 'json',
        type: 'GET'
    }).done(process_stock);
  });
};




var process_stock = function (stocks) {
    console.log('process stock');
    // $('#chart').empty();
    new Morris.Line({
      element: 'chart_' + stocks[0].symbol,
      data: stocks,
      xkey: 'date',
      ykeys: ['close'],
      labels: ['close'],
    });




  };


 $('#stocks').on('change','.show_chart', function () {

    var $stocks = $(this).closest('#stocks');

    var $checked = $stocks.find(':checked');

    var charts = $checked.map(function () {
        return $(this).attr('name');
    }).get();
    show_chart (charts);
    console.log(charts);
 });


});

