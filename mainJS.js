		var num_li = $("li").length
		n = 1
		moving = 0
		$(document).ready(function()
			{	
				 
				$(".nav li:eq(0)").click(function() {
					$(".nav li").css("background-color","white")
					
					$("html,body").animate({"scrollTop":$(".jp01").offset().top})
					$(".nav li:eq(0)").css("background-color","	#444444")
				})
				$(".nav li:eq(1)").click(function() {
					$(".nav li").css("background-color","white")
					$("html,body").animate({"scrollTop":$(".jp02").offset().top})
					$(".nav li:eq(1)").css("background-color","	#444444")
				})
				$(".nav li:eq(2)").click(function() {
					$(".nav li").css("background-color","white")
					$("html,body").animate({"scrollTop":$(".jp03").offset().top})
					$(".nav li:eq(2)").css("background-color","	#444444")
				})

				//關於我與作品集字樣的方法
				$("nara01").click(function() {
					$("html,body").animate({"scrollTop":$(".jp02").offset().top})
				})
				$("nara02").click(function() {
					$("html,body").animate({"scrollTop":$(".jp03").offset().top})
				})

				//圖片變換
				$(".p001").click(function(){
		            $("#img").attr("src","images/p001.jpg");
		            $
		     	 });
				$(".p002").click(function(){
		            $("#img").attr("src","images/p002.jpg");
		     	 });
				$(".p003").click(function(){
		            $("#img").attr("src","images/p003.jpg");
		     	 });

			
		})		 
		$(window).scroll(function(){
                 if($(window).scrollTop()>=$(".jp01").offset().top && $(window).scrollTop()<$(".jp02").offset().top){
                    $(".nav li").css("background-color","white")
                    //除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(0)").css("background-color","#444444")
                }else if($(window).scrollTop()>=$(".jp02").offset().top && $(window).scrollTop()<$(".jp03").offset().top){
                    $(".nav li").css("background-color","white")
                    //除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(1)").css("background-color","#444444")
                }else if($(window).scrollTop()>=$(".jp03").offset().top){
                    $(".nav li").css("background-color","white")
                    //除了被點擊到的游標，其他都恢復成原來的顏色
                    $(".nav li:eq(2)").css("background-color","#444444")
				}
				
            })
		  
		  
			 var num_li=$("li").length
			 n=1
			 moving=0
			 $(window).mousewheel(function(e)
			 {
				$("html,body").stop()
				if(moving==0){
					moving=1
					if(e.deltaY==-1)
					{	
						if(n<3)
						{
							n++
						}
					}else{
						if(n>1)
						{
							n--
						}
					}
				}
				$("html,body").animate({"scrollTop":$(".jp0"+n).offset().top},function(){moving=0})
				console.log(n)
            
			})
