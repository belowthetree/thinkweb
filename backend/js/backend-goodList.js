var tableBody = document.getElementById("dataTableBody")
$.get( "https://thinkpad.utools.club/index.php/thinkpad/index/get_item_list", function( data ) {
	var i = 0
	$( "#dataTableBody" ).empty()
	for ( var x in data ){
		$( "#dataTableBody" ).append( '<tr id="sheet_item_' + i + '"></tr>')
		var sheet_item_name = "#sheet_item_" + i
		var drop_item_name = "#drop_item_" + i
		var drop_item_name1 = ' id="drop_item_' + i + '"'
		var drop_label_name = "#drop_label_" + i
		var params = "?product_name="+data[x].product_name+"&product_type="+data[x].product_type + "&desc="+data[x].desc + "&product_id="+data[x].product_id + "&now_price="+data[x].now_price + "&pre_price="+data[x].pre_price + "&image="+data[x].image
		$(sheet_item_name)
			.append( "<td " + drop_item_name1 + ">" + '<a href="blank.html'+params+'">' +  data[x].product_name + "</a></td>")
			//.append( "<td " + drop_item_name1 + ">" +'<a href="blank.html'+params+'>'+ data[x].product_name + "</a>"+ "</td>")
			.append( "<td>" + data[x].product_type + "</td>")
			.append( "<td>" + data[x].desc + "</td>")
			.append( "<td>" + data[x].product_id + "</td>")
			.append( "<td>" + data[x].now_price + "</td>")
			.append( "<td>" + data[x].pre_price + "</td>")
		//$(drop_item_name).append('<a href="blank.html'+params+'>'+ data[x].product_name + "</a>")
		
		++i
	}
}, "json" )

