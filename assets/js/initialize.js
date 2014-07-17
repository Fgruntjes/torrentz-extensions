$(function(){
    $('head').append('<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">');

    $('.results dl dt a').each(function(){
        var link = $(this);

        var dht = {
            'dn': link.html().replace(/(<([^>]+)>)/ig, '')
        };
        
        $('<a />')
            .attr('href', 'magnet:?xt=urn:btih:' + link.attr('href').substr(1) + '&' + $.param(dht, true))
            .addClass('magnet-link')
            .html('<i class="fa fa-magnet"></i>')
            .insertBefore(link);
    });
});