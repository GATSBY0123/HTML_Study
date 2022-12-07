$(document).ready(function(){

    // #ham을 눌렀을 때 이런일이 벌어질 것이다.
        // #backdrop을 서서히 나타나게하자.
        // #menu의 스타일중 right라는 속성의 값을 0으로 만들자.
        // body의 스크롤바를 삭제.
    $("#ham").click(function(){
        $("#backdrop").fadeIn();
        $("#menu").css("right", "0px");
        $("body").css("overflow", "hidden");
    });
    
    $("#close, #backdrop").click(function(){
        $("#backdrop").fadeOut();
        $("#menu").css("right", "-300px");
        $("body").css("overflow", "auto");
    });

    // .main을 눌렀을때 이런일이 벌어질 것이다.
        // 만약 방금 누른 그것의 자식(.sub)가 보여지고 있는 상황인가?(이번에 닫을차례)
            // 방금 누른 그것의 자식(.sub)를 작아지면서 사라지게
            // 방금 누른 그것의 자식(a)의 자식(i)에게서 "rev"라는 클래스를 뺏는다.
        // 그렇지 않은 상황인가?(이번에 열 차례)
            //방금 누른 그것의 자식(.sub)를 작아지면서 사라지게
            // 방금 누른 그것의 자식(a)의 자식(i)에게서 "rev" 라는 클래스를 준다
    
    // 방굼 누른 그것을 제외한 나머지 형제들(.main)의 자식(.sub)를
    // 세로로 작아지면서 사라지게하자.
    // 방금 누른 그것을 제외한 나머지 형제들(.main)의 자식(a)의 자식(i)에게서 "rev"라는 클래스를 뺏는다.

    $(".main").click(function(){
        var visi = $(this).children(".sub").is(":visible")
        if(visi)
        {
            $(this).children(".sub").slideUp();
            $(this).children("a").children("i").removeClass("rev");
        }
        else
        {
            $(this).children(".sub").slideDown();
            $(this).children("a").children("i").addClass("rev");
        }
        $(this).siblings().children(".sub").slideUp();
        $(this).siblings().children("a").children("i").removeClass("rev")
    });
})