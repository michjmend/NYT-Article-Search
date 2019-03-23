//$("searchbutton").click(function(){
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=4KmbWZwzhyG0ydclnq95wdqHEjYJYz2O" //whatever
    var articleTitle = []
    var articleAuthor = []
    var articleDate = []
function grabjson(searchterm) {
var searchterm = "donald trump"

$.ajax({
    url: queryURL + "&q=" + searchterm,
    method: "GET"
    })
    .then(function(response) {
        for (i=0; i<10; i++){
       console.log(response.response.docs[i].headline.main)
        articleTitle.push(response.response.docs[i].headline.main)
        articleAuthor.push(response.response.docs[i].byline.original)
        console.log(response.response.docs[i].byline.original)
        articleDate.push(response.response.docs[i].pub_date)
        console.log(response.response.docs[i].pub_date)
    }
    console.log(response.response)
    })

}






//})