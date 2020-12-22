var searchBtnEl = $('#searchBtn')
var authKey = "ae7e7778a471ece89c92ab1058f5558e"

var searchQuerry = ""

searchBtnEl.click(function (event) {
    event.preventDefault()
    searchQuerry = $(this).prev().val()
    console.log(searchQuerry)
})


var querryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQuerry + "&appid=ae7e7778a471ece89c92ab1058f5558e"

$.ajax({
    url: querryUrl,
    method: "GET"
}).then(function (response) {
    console.log(response)
})