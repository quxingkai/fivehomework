require(['jquery','BScroll','swiper','text!banTpl','render','text!tbtpl','Handlebars'],function($,BScroll,Swiper,banTpl,render,tbtpl,Handlebars){
    new BScroll('.nav',{
        scrollX:true,
        scrollY:false,
        click: true
    });

    $('.footer').on('touchend','dl',function(){
        $(this).addClass('bg').siblings().removeClass('bg');
        var ind = $(this).index();
        $('.scroll>div').eq(ind).show().siblings().hide();
    });
   
    var type = 'select';
    $('.nav ul').on('click','li',function(){
        $(this).addClass('bg').siblings().removeClass('bg');
        type = $(this).data('type');
        //console.log(type);
        getAjax(type);
    });
 
    getAjax(type);
    function getAjax(type){
        $.ajax({
            url:"/api/index?type="+type,
            dataType:'json',
            success:function(res){
                if(res.length ==1){
                    getBan(res)
                }else{
                    $('.ban').html('');
                    getSelected(res)
                }
               
            }
        })
    }
    $('.selected').on('click','dl',function(){
        var favicon_id = $(this).data('id');
        location.href = 'page/details.html?favicon_id='+favicon_id;
    });
    function getSelected(data){
       // console.log(data);
        $('.selected').html(tbtpl);
        render('#tbtpl',data,'.selected');
    }

    function getBan(data){
       var arr =[];
       data.forEach(function(v,i){
           $.each(v,function(y,val){
               if(y =='banner'){
                   arr.push(val);
               }else{
                 getSelected(val)
               }
           })
       });
       // console.log(arr);
       $('.ban').html(banTpl);
       render('#ban-tpl',arr,'.ban');
       new Swiper('.banner',{
           autoplay:1000,
           loop:true,
           pagination:'.pagination'
       });
    }
    
})