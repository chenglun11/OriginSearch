function sel_check(){
    var rev_ques = document.getElementById("ques").value;

    var sel = document.getElementById('sel');
    var index = sel.selectedIndex;    //索引
    var op_value = sel.options[index].value;    //value
    //console.log(index);
    var arr_1 = {rev_ques,index,op_value};

    var baidu_url = 'http://www.baidu.com/s?tn=baidulocal&wd=';
    var bing_url = 'https://cn.bing.com/search?q=';
    var wiki_url = 'https://ws.wiki.fallingwaterdesignbuild.com/wiki/';
    var google_url = 'https://www.google.com/search?q=';
    var fin_url = null;
    var con_va;

    //console.log(arr_1);
    
    switch(op_value)
    {
        case '0':
            con_va=window.confirm("请注意是否可以连接到google服务器");
            if(con_va == true){
                console.log("locating");
                fin_url = google_url+rev_ques;
                window.location.href=fin_url;
            }
            else if(con_va == false){
                sel.options[1].text = "为响应政策，Google搜索暂不提供服务";
                document.getElementById('sel').value=-1;
            }
            break;
        case '1':
            fin_url = baidu_url+rev_ques;
            window.location.href=fin_url;
            // window.open.href(fin_url);
            break;
        case '2': 
            fin_url = bing_url+rev_ques;
            window.location.href=fin_url;
            // window.open(fin_url);
            break;
        case '3':
            fin_url = wiki_url+rev_ques;
            window.location.href=fin_url;
            // window.open(fin_url);
            break;
        default:
            fin_url = bing_url+rev_ques;
            //window.open(fin_url);        //for test
            window.location.href=fin_url;
            console.log("error");
            fin_url = null;
    }
    
    console.log(fin_url);
    // var back = document.getElementById("ques");
    // back.addEventListener("keyup", function(event) {
    // event.preventDefault();
    // if (event.keyCode === 13) {
    //     document.getElementById("submit").click();
    // }
    // });
}

function bin(){
    var input = document.getElementById("ques");
    
    var select_input = document.getElementById("sel");

    input.addEventListener("keydown", function(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("submit").click();
            console.log("1");
            }
        });

    // if(select_input.value !=null){
    //     select_input.addEventListener("keydown", function(event) {
    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         document.getElementById("submit").click();
    //         }
    //     });
    // }
    // if(input.value != null){
    //     input.addEventListener("keyup", function(event) {
    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         document.getElementById("submit").click();
    //         }
    //     });
    // }
    
}