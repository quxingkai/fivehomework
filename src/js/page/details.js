define(['jquery','render','text!headertpl'],function($,render,headertpl){
    var details = function(){
        var favicon_id = location.search.split('?')[1].split('=')[1];
        
        getAjax()
        function getAjax(){
            $.ajax({
                url:"/api/details?favicon_id="+favicon_id,
                success: function(res){
                 var data = JSON.parse(res);
                 getList(data);
                 getHeaderTpl(data);
                }
            })
        }
        function getList(data){
            render('#details-tpl',data,'.list');
        }
        

        function getHeaderTpl(data){
            $('.header-tpl').html(headertpl);
            render('#header-tpl',data,'.header-tpl');
        }
    }
    return details;
})