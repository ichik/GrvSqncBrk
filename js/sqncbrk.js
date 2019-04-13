function showContent(e) {
    var t = document.getElementById("load-more-holder"),
        n = document.getElementById("feed"),
        r = createRequestObject();
        t.className = t.className + " progress", r && (r.open("get", e), r.onreadystatechange = function() {
          if (4 == r.readyState) {
            t.remove(), n.innerHTML = n.innerHTML + r.responseText;
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
};

;(function(window) {

	'use strict';

	var openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.getElementById('sqncbrk-search'),
		inputSearch = searchContainer.querySelector('input');

	function init() {
		initEvents();
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
	searchContainer.classList.add('search--open');
    openCtrl.classList.add('closed');
		setTimeout(function() {
			inputSearch.focus();
		}, 600);
	}

	function closeSearch() {
		searchContainer.classList.remove('search--open');
        openCtrl.classList.remove('closed');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);
