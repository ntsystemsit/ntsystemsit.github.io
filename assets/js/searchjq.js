---
---

window.store = {
{% for post in site.documents %}
    "{{ post.url | slugify }}": {
    "title": "{{ post.title | xml_escape }}",
    "date": {{ post.date | date: '%B %-d, %Y' | jsonify }},
    "author": "{{ post.author | xml_escape }}",
    "tags": "{{ post.tags | xml_escape }}",
    "content": {{ post.content | strip_html | strip_newlines | jsonify }},
    "url": "{{ post.url | xml_escape }}"
    }
    {% unless forloop.last %},{% endunless %}
{% endfor %}
};


fetch('/assets/js/index.json')
.then(function(u){ return u.json();})
.then(function(json){data_function(json);})

function data_function(data){
    var idx = lunr.Index.load(data);
    $('input#search-box').on('keyup', function () {
        var resultdiv = $('#search-results');
        var query = $(this).val();
        var result = idx.search(query);
        resultdiv.empty();
        resultdiv.prepend('<p>Found '+result.length+' result(s)</p>');
        // Loop through, match, and add results
        for (var item in result) {
        var ref = result[item].ref;
        var searchitem = '<h2 class="post-title"><a href="'+window.store[ref].url +'" class="post-link">'+window.store[ref].title+'</a></h2><p class="post-meta">'+window.store[ref].author+' | '+window.store[ref].date+'</p>';
        resultdiv.append(searchitem);
        }
    });
}