/*
 * 监听Android返回键
 */
pushHistory();
window.addEventListener("popstate", function(e) {
	window.location.href = '../../../index.html';
}, false);

function pushHistory() {
	var state = {
		title: "title",
		url: "#"
	};
	window.history.pushState(state, "title", "#");
}

//监听clear清除事件
mui("body").on("tap", ".mui-icon-clear", function() {
	drawHtml();
});

