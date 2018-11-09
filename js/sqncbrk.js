function showContent(e) {
    var t = document.getElementById("load-more-holder"),
        n = document.getElementById("feed"),
        r = createRequestObject();
        t.className = t.className + "progress", r && (r.open("get", e), r.onreadystatechange = function() {
          if (4 == r.readyState) {
            t.remove(), n.innerHTML = n.innerHTML + r.responseText;
            new Blazy({
                breakpoints: [{
                    width: 375,
                    src: "data-src-small"
                }],
                offset: 400
            })
          }
        }, r.send(null))
};

function createRequestObject() {
    try {
        return new XMLHttpRequest
    } catch (e) {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {
                return null
            }
        }
    }
}! function() {
    new Blazy({
        breakpoints: [{
            width: 375,
            src: "data-src-small"
        }],
        offset: 400
    })
}();
