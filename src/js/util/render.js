define(['Handlebars','jquery'],function(Handlebars,$){
    var fun = function(tplId,data,tplClass){
        var source = $(tplId).html();
        var template = Handlebars.compile(source);
        var html = template(data);
        $(tplClass).html(html);
    }
    return fun;
})