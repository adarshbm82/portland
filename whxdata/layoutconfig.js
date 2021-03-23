(function() {
var config = {"type":"layout-config", html:{"search_highlight_bg_color":"#ffff00","search_highlight_text_color":"#000000","tocImageDataSet":["tocimg1.png","tocimg2.png","tocimg3.png","tocimg4.png","tocimg5.png","tocimg6.png","tocimg7.png","tocimg8.png"],"showBreadcrumbs":true,"minitoc_levelFrom":"2","minitoc_levelTo":"4","minitoc_caption":"","hpmasterpage":"homepagefooter.htm","tpmasterpage":"topicfooter.htm","gdprCompliant":false,"showOnlyDesktopView":true,"drillDownTOC":true,"showName":false,"toTop":true,"fullScreen":true,"page_font_family":"sans-serif","show_toc":true,"show_index":true,"show_glossary":true,"show_filter":true,"default_pane":"toc","assets":[],"custom_buttons":[{"image":"expand_all.svg","name":"Expand/Collapse All","tabId":"Expand","title":"Expand All","onclick":"rh.model.publish(rh.consts('EVT_EXPAND_COLLAPSE_ALL'), 'Expand');","toggledTitle":"Collapse All"},{"image":"unsaved.svg","name":"Saved","tabId":"Saved","title":"Favorites","onclick":"rh.model.publish(rh.consts('EVT_SHOW_FAVORITES'), 'Saved');","show":"@showFav"},{"image":"filter.svg","name":"Filter","tabId":"Filter","title":"Filter","onclick":"rh.model.publish(rh.consts('EVT_SHOW_FILTERS'), 'Filter');","show":"@showFilter"},{"image":"filter.svg","name":"Select Bookmark","tabId":"BmrkSelect","title":"Select Bookmark","onclick":"rh.model.publish(rh.consts('EVT_SHOW_BOOKMARKS'), 'BmrkSelect');","show":"@showBmrkSelect"},{"image":"download_pdf.svg","name":"Download PDF","tabId":"Pdf","title":"Download PDF","onclick":"rh.model.publish(rh.consts('EVT_DOWNLOAD_PDF'), 'Pdf');","show":"@showPdf"},{"image":"search.svg","name":"Search","tabId":"Search","title":"Search","onclick":"rh.model.publish(rh.consts('EVT_PROJ_SEARCH'), 'Search');","show":"@showSearchIcon"}],"max_width_mobile":"1000","max_width_tablet":"1000","search_results_highlight_bgcolor":"#FCFF00","search_results_highlight_color":"#000000","search_results_in_content_area":false,"show_header_on_mobile":false,"sidebar_open_by_default":true,"use_and_search":true,"use_facebook":false,"use_twitter":false}};
window.rh.model.publish(rh.consts('KEY_LAYOUT_CONFIG'), config, { sync:true });
})();