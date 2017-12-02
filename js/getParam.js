//接收打开页面传递的参数
function getParam(paramName) {
	paramValue = "", isFound = !1;
	if(this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) {
		arrSource = this.location.search.substring(1, this.location.search.length).split("&"), i = 0;
		while(i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = decodeURI(arrSource[i].split("=")[1]), isFound = !0), i++
	}
	return paramValue == "" && (paramValue = null), paramValue
}

//加入中文转换