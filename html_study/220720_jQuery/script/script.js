$(document).ready(function(){

    $("#dish li").click(function(){
        $(this).hide();
    });

    // btn1을 눌렀을때 이런일이 벌어질 것이다.
    // #dish li들을 모두 보여준다.

    $("#btn1").click(function(){
        $("#dish li").show();
    });

    // #box1에 마우스를 올렸을때 이런일이 벌어질 것이다(방금 마우스를 올린)그것의
    // 내용을 "이제 마우스 치우세요."로 바꾼다.

    $("#box1").mouseenter(function(){
        $(this).text("이제 마우스 치우세요.");
    });

    // #box1에 마우스를 치웠을때 이런일이 벌어질 것이다(방금 마우스를 올린)그것의
    // 내용을 "마우스를 올려보세요."로 바꾼다.

    $("#box1").mouseleave(function(){
        $(this).text("마우스를 올려보세요.")
    });
    $("#btn2").click(function(){
        $("#box3").slideUp(2000);
    });
    $("#btn3").click(function(){
        $("#box3").slideDown(2000);
    });
    $("#btn4").click(function(){
        $("#box3").text("람보르기니 무르시엘라고");
    });
    $("#btn5").click(function(){
        $("#box3").text("테슬라");
    });

    //.main에 마우스를 올렸을때 이런일이 벌어질 것이다.
        // 방금 마우스를 올린 그것(.main)의 자식(.sub)가 잠깐 멈추고 나타난다.
    $(".main").mouseenter(function(){
        $(this).children(".sub").stop().slideDown();
    });

    //.main에 마우스를 치웠을때 이런일이 벌어질 것이다.
        // 방금 마우스를 올린 그것(.main)의 자식(.sub)가 잠깐 멈추고 숨겨준다.

    $(".main").mouseleave(function(){
        $(this).children(".sub").stop().slideUp();
    });
        // #btn6을 눌렀을때 이런일이 벌어질 것이다.
            // #box4이 사라진다.
            // #box4이 사라진후에 경고창(사라짐)을 띄운다.
    $("#btn6").click(function(){
        $("#box4").slideUp(3000, "linear", function(){
            alert("박스가 사라짐");
         });
     });
    
    $("#para1").html("Guten <b>tag</b>");
    
     // name이 "car"인 input들을 눌렀을 때 이런일이 벌어질 것이다.
        // 방금 눌린 그것의 값이 무엇이냐?
        // 만약 그 값이 1이라면
            //#car_price을 보여준다
        // 그렇지 않다면
            //#car_price을 숨겨준다
     $("input[name='car']").click(function(){
        var car = $(this).val();
        if(car == 1)
        {
            $("#car_price").show();
        }
        else
        {
            $("#car_price").hide();
        }
     });

    // #pw1에서 키가 눌렸다가 떼질 때 이런일이 벌어질 것이다.
        // 방금 키 누른 그것의 value의 글자수를 len이라고 하자.
        // 만약 그 len의 값이 0이라면(글자를 입력하지 않았다면)
            // #pw2를 잠근다.
        // 그렇지 않다면
            // #pw2를 풀어준다.
    
    $("#pw1").keyup(function(){
        var len = $(this).val().length
        if(length == 0)
        {
            $("#pw2").attr("disabled", "disabled");
        }
        else(length == 1)
        {
            $("#pw2").removeAttr("disabled");
        }
    });

    // #pw2에서 키가 눌렀다가 떼어질때마다 이런일이 벌어질 것이다.
        // #pw1의 값과 #pw2의 값을 알아내서
        // 만약 그 두값이 같다면
            // #pw_chk에 "비밀번호가 일치합니다."라는 글을 쓰기
            // #pw_chk의 속성 중 style이라는 속성의 내용을 "color:green"으로 바꾸기.
        // 그것이 아니라면(두값이 다르다면)
            // #pw_chk에 "비밀번호가 틀립니다."라는 글을 쓰기.
            // #pw_chk의 속성 중 style이라는 속성의 내용을 "color:red"으로 바꾸기.
    
    $("#pw2").keyup(function(){
        var pw1 = $("#pw1").val();
        var pw2 = $("#pw2").val();
        if (pw1 == pw2)
        {
            $("#pw_chk").text("비밀번호가 일치합니다.").css({color:"green", fontWeight:"normal"});
        }
        else
        {
            $("#pw_chk").text("비밀번호가 틀립니다.").css({color:"red", fontWeight: "bold"});
        }
    });

    // #btn7을 눌렀을 때 이런일이 벌어질 것이다.
        // #list1의 안쪽에 마지막 부분에"<li>탕수육</li>"을 추가한다.
    
    var num = 0;
    $("#btn7").click(function(){
        num++;
        $("#list1").append("<input type='text' placeholder='참가자성명" + num +"' />");
    });
    $("#btn8").click(function(){
        $("#list1 input:last-of-type").remove();
    });

    $("#btn9").click(function(){
        $("#box5").removeClass("blue");
    });
    $("#btn10").click(function(){
        $("#box5").addClass("blue");
    });

    /* #box6을 눌렀을 때 이와 같은 일이 벌어질 것이다
        방금 클릭한 그것의 가로,세로 길이를 측정해서 경고창으로 알려주자 */
    $("#box6").click(function(){
        // var w = $(this).width();
        // var h = $(this).height();
        // alert(w + "," + h)
        $(this).width(500);
        $(this).height(100);
    });

    // 브라우저의 크기가 바뀌었을때마다 이와같은 일을 할 것이다.
    // 브라우저의 가로, 세로 크기를 알아내서 #para2에 내용으로 써넣기
    // $(window).resize(function(){
    //     var w = $(this).width();
    //     var h = $(this).height();
    //     $("#para2").text(w + "," + h);
    // });

    // function chk_win()
    // {
    //     var h = $(window).height();
    //     $("#box7").height(h);
    // }

    // chk_win();

    // $(window).resize(function(){
    //    chk_win();
    // });

    // #roha의 부모님의 부모님
    $("#roha").parent().parent();

    // #sunjae의 자식들 : #junha, #minyoung
    $("#sunjae").children();

    // #sunjae의 자식들중 #junha
    $("#sunjae").children("#junha");

    // #sunjae의 자식의 자식 #roha
    $("#sunjae").children().children();

    // #roha가 삼촌을 부르기
    // #roha의 부모의 형제
    $("#roha").parent.siblings();

    // #junha의 바로 아랫동생 : #minyoung
    $("#junha").next();
    // #junha의 바로 윗형 : #jaesuk
    $("#junha").prev();

    // #sunjae의 자식(div)중 둘째 #junha
    $("#sunjae>div:nth-of-type(2)");
    $("#sunjae>div").eq(2);
});