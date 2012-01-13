window.chrome = function() {
	var menu_handlers = {
		'read-in': function() { languageLinks.showAvailableLanguages(); },
		'near-me': function() { getCurrentPosition(); },
		'view-history': function() { getHistory(); } ,
		'save-page': function() { savedPages.saveCurrentPage() },
		'view-saved-pages': function() { savedPages.showSavedPages(); },
		'share-page': function() { sharePage(); },
		'go-forward': function() { goForward(); },
		'select-text': function() { selectText(); },
		'view-settings': function() { getSettings(); },
		'view-about': function() { aboutPage(); }
	};

	function showSpinner() {
		$('.titlebar .spinner').css({display:'block'});
		$('#clearSearch').css({height:0});
	}

	function hideSpinner() {
		$('.titlebar .spinner').css({display:'none'});	
		$('#clearSearch').css({height:30});
	}
	return {
		menu_handlers: menu_handlers,
		chrome.showSpinner: showSpinner,
		hideSpinner: hideSpinner
	};
}();