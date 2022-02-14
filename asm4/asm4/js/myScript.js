
var url_token =["&token=5d01f0e26274723219f92cee0fe57032","&token=43b88736a34463fc9b1fae8ea30069d6"];
var url_type =["top-headlines?", "search?q="];
var url ="https://gnews.io/api/v4/";

//Default language
var lang = "&lang=en";

//Change language
function changLanguage(){
    lang = "&lang=" + document.getElementById("language").value;

fetch(url + url_type[0] + url_token[0] + lang)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    var mynews = data.articles;
    var out = "";
     console.log(data);

    let htmls = "";
    
    for (let index in mynews) {
        let title = mynews[index].title;
        let description = mynews[index].description;
        let content = mynews[index].content;
        let url = mynews[index].url;
        let image = mynews[index].image;
        let publishedAt = mynews[index].publishedAt;
        let source_name = mynews[index].source["name"];
        let source_url = mynews[index].source["url"];

        let html =
        "<div class=\"row\">\
          <div class=\"col-sm-4\";>"
          +  "<img src=\""+ image +"\"class=\"img-rounded img-responsive\" alt=\"\">\
          <\/div>\
          <div class=\"col-sm-8\">"
          +  "<h2 class=\"text-justify\"><a href=\""+ url +"\" target=\"_blank\">"+ title + "<\/a><\/h2>"
          +  "<h4 class=\"text-justify\"><em>"+ publishedAt +"<\/em><\/h4><br>"
          +  "<h3 class=\"text-justify\">"+ description +"<\/h3>"
          +
              
          "<\/div>\
        <\/div><br>";


        htmls += html;
    }
    document.getElementById("box-content").innerHTML = htmls;
    
});
}

//MyNews with default English language
fetch(url + url_type[0] + url_token[0] + lang)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    var mynews = data.articles;
    var out = "";
     console.log(data);

    let htmls = "";
    
    for (let index in mynews) {
        let title = mynews[index].title;
        let description = mynews[index].description;
        let content = mynews[index].content;
        let url = mynews[index].url;
        let image = mynews[index].image;
        let publishedAt = mynews[index].publishedAt;
        let source_name = mynews[index].source["name"];
        let source_url = mynews[index].source["url"];

        let html =
        "<div class=\"row\">\
          <div class=\"col-sm-4\";>"
          +  "<img src=\""+ image +"\"class=\"img-rounded img-responsive\" alt=\"\">\
          <\/div>\
          <div class=\"col-sm-8\">"
          +  "<h2 class=\"text-justify\"><a href=\""+ url +"\" target=\"_blank\">"+ title + "<\/a><\/h2>"
          +  "<h4 class=\"text-justify\"><em>"+ publishedAt +"<\/em><\/h4><br>"
          +  "<h3 class=\"text-justify\">"+ description +"<\/h3>"
          +
              
          "<\/div>\
        <\/div><br>";


        htmls += html;
    }
    document.getElementById("box-content").innerHTML = htmls;
    
});


//Search Feature 
function searchMyNews(){
    htmls ="";

    fetch(url + url_type[1] + document.getElementById("search").value + url_token[0] + lang)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var mynews = data.articles;
        var out = "";
         console.log(data);
    
        let htmls = "";
        
        for (let index in mynews) {
            let title = mynews[index].title;
            let description = mynews[index].description;
            let content = mynews[index].content;
            let url = mynews[index].url;
            let image = mynews[index].image;
            let publishedAt = mynews[index].publishedAt;
            let source_name = mynews[index].source["name"];
            let source_url = mynews[index].source["url"];
    
            let html =
            "<div class=\"row\">\
              <div class=\"col-sm-4\";>"
              +  "<img src=\""+ image +"\"class=\"img-rounded img-responsive\" alt=\"\">\
              <\/div>\
              <div class=\"col-sm-8\">"
              +  "<h2 class=\"text-justify\"><a href=\""+ url +"\" target=\"_blank\">"+ title + "<\/a><\/h2>"
              +  "<h4 class=\"text-justify\"><em>"+ publishedAt +"<\/em><\/h4><br>"
              +  "<h3 class=\"text-justify\">"+ description +"<\/h3>"
              +
                  
              "<\/div>\
            <\/div><br>";
    
    
            htmls += html;
        }
        document.getElementById("box-content").innerHTML = htmls;
    });

}

$(document).ready(function(){
    var default_h2 = 30;
    var default_h3 = 24;
    var default_h4 = 18;

    //Set default font-size
    $("#refresh-sbl").click(function(){
        $("h2.text-justify").css("font-size", "30px");
        $("h3.text-justify").css("font-size", "24px");
        $("h4.text-justify").css("font-size", "18px");
        default_h2 = 30;
        default_h3 = 24;
        default_h4 = 18;
    });

    //Increase font-size by 5
    $("#plus-sbl").click(function(){
        default_h2+=5;
        default_h3+=5;
        default_h4+=5;

        $("h2.text-justify").css("font-size", default_h2.toString() + "px");
        $("h3.text-justify").css("font-size", default_h3.toString() + "px");
        $("h4.text-justify").css("font-size", default_h4.toString() + "px");
    });

    //decrease font-size by 5
    $("#minus-sbl").click(function(){
        default_h2-=5;
        default_h3-=5;
        default_h4-=5;

        $("h2.text-justify").css("font-size", default_h2.toString() + "px");
        $("h3.text-justify").css("font-size", default_h3.toString() + "px");
        $("h4.text-justify").css("font-size", default_h4.toString() + "px");
    });
});