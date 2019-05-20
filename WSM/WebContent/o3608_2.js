window.onload = function() {
    handleRefresh();
}

function handleRefresh() {

	var url = "http://openapi.seoul.go.kr:8088/416565744d6d657036374e536e4141/xml/TB_PUBLIC_BCYCL_LEND_USE/2/10/";

	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		updateRent(this);
    	}
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

/*
1	LEND_LC	대여소위치
2	LEND_NM	대여소명
3	BASIC_DT	기준일자
4	LEND_CNT	대여건수
5	RTURN_CNT	반납건수
*/

function updateRent(xml) {
	var xmlDoc = xml.responseXML;
	var bicycleDiv = document.getElementById("bicyclerent");
	bicyclerent = xmlDoc.getElementsByTagName("row");

	for (var i = 0; i < bicyclerent.length; i++) {
		var row = bicyclerent[i];
		var div = document.createElement("div");
		div.setAttribute("class", "rent");
		div.innerHTML = "대여소위치:" + row.getElementsByTagName("LEND_LC")[0].childNodes[0].nodeValue + "은 "
        + " 대여소명:" + row.getElementsByTagName("LEND_NM")[0].childNodes[0].nodeValue 
        + " 기준일자:" + row.getElementsByTagName("BASIC_DT")[0].childNodes[0].nodeValue 
        + " 대여건수:" + row.getElementsByTagName("LEND_CNT")[0].childNodes[0].nodeValue 
        + " 반납건수:" + row.getElementsByTagName("RTURN_CNT")[0].childNodes[0].nodeValue;

		bicycleDiv.appendChild(div);
	}
}

var bgcolor = [ 'white', '#ccffcc' ];
var cnt=0;

function btnBg() {
	document.getElementById('bicyclerent').style.backgroundColor = bgcolor[cnt];
	if (cnt == 0) {
		cnt++;
	}
	else {
		cnt--;
	}
}