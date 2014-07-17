$(function(){
    $('head').append('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">');

    $('.results dl dt a').each(function(){
        var link = $(this);
        var dht = 'magnet:?xt=urn:btih:' + link.attr('href').substr(1) + 'dn=' + encodeURI(link.html().replace(/(<([^>]+)>)/ig, ''));

        $('<a />')
            .attr('href', dht)
            .addClass('magnet-link')
            .html('<i class="fa fa-magnet"></i>')
            .insertBefore(link);
    });
});