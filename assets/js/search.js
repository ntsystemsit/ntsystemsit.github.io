(function() {

  function displaySearchResults(results, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<h2 class="post-title"><a href="' + item.url + '">' + item.title + '</a></h2>';
        appendString += '<p>' + item.content.substring(0, 150) + '...</p>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<h2>No results found.</h2>';
    }
  }

  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');

    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  var searchTerm = getQueryVariable('query');

  if (searchTerm) {
    document.getElementById('search-box').setAttribute("value", searchTerm);
    fetch('/assets/js/index.json')
    .then(function(u){ return u.json();})
    .then(function(json){data_function(json);})
    function data_function(data){
      console.log('index is: ' + data);
      var idx = lunr.Index.load(data);
      var results = idx.search(searchTerm); // Get lunr to perform a search
      results.forEach(e => console.log(e));
      displaySearchResults(results, window.store); // We'll write this in the next section
    }
  }
})();
