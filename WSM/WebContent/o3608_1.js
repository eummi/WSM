window.onload = function() {
	var interval = setInterval(handleRefresh, 3000);
    handleRefresh();
}

function handleRefresh() {
    console.log("here");

	var url = "http://openapi.seoul.go.kr:8088/416565744d6d657036374e536e4141/json/TB_PUBLIC_BCYCL_LEND_USE/1/10/";
	$.getJSON(url, updateRent);
}

/*
1	LEND_LC	대여소위치
2	LEND_NM	대여소명
3	BASIC_DT	기준일자
4	LEND_CNT	대여건수
5	RTURN_CNT	반납건수
*/

function updateRent(bicyclerent) {
	var bicycleDiv = document.getElementById("bicyclerent");
	bicyclerent = bicyclerent.TB_PUBLIC_BCYCL_LEND_USE.row;

	for (var i = 0; i < bicyclerent.length; i++) {
		var rent = bicyclerent[i];
		var div = document.createElement("div");
		div.setAttribute("class", "rent");
		div.innerHTML = "대여소위치:"+rent.LEND_LC
		 +" 대여소명:"+rent.LEND_NM + " "
		 +" 기준일자:"+rent.BASIC_DT + " "
		 +" 대여건수:"+rent.LEND_CNT + " "
		 +" 반납건수:"+rent.RTURN_CNT;

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