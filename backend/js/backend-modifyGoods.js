function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

//var qs = new Querystring()
var default_product_name = getParameterByName("product_name")
var default_product_type = getParameterByName("product_type")
var default_desc = getParameterByName("desc")
var default_product_id = getParameterByName("product_id")
var default_now_price = getParameterByName("now_price")
var default_pre_price = getParameterByName("pre_price")
var default_image = getParameterByName("image")
$("#ModifiedName").attr("value",default_product_name)
$("#ModifiedType").attr("value",default_product_type)
$("#ModifiedDescription").attr("value",default_desc)
$("#ModifiedId").attr("value",default_product_id)
$("#ModifiedNowPrice").attr("value",default_now_price)
$("#ModifiedPrePrice").attr("value",default_pre_price)


$('#submitButton').click(function(){
	var img = $('#uploadImage').prop('files')
	var product_name = document.forms["ModifyingForm"]["ModifiedName"].value
	var product_type = document.forms["ModifyingForm"]["ModifiedType"].value
	var desc = document.forms["ModifyingForm"]["ModifiedDescription"].value
	var product_id = document.forms["ModifyingForm"]["ModifiedId"].value
	var now_price = document.forms["ModifyingForm"]["ModifiedNowPrice"].value
	var pre_price = document.forms["ModifyingForm"]["ModifiedPrePrice"].value

	var data = new FormData();
	data.append('product_name', product_name)
	data.append('product_id', product_id)
	data.append('product_type', product_id)
	data.append('desc', product_id)
	data.append('product_id', product_id)
	data.append('pre_price', product_id)
	
	var img_data = new FormData()
	img_data.append('image', img[0])
	img_data.append('product_id', product_id)

	$.ajax({
	  url: 'https://thinkpad.utools.club/static/uploads/',
	  type: 'POST',
	  data: data,
	  cache: false,
	  processData: false,
	  contentType: false,
	  success:function (data){
		console.log(data)
		if (data == 'success')
			search();
		else
			alert("失败")
	  }
	})
	
	$.ajax({
	  url: 'https://thinkpad.utools.club/index.php/thinkpad/manager/upload_image',
	  type: 'POST',
	  data: img_data,
	  cache: false,
	  processData: false,
	  contentType: false,
	  success:function (data){
	  console.log(data)
		if (data == 'success')
			search();
		else
			alert("失败")
	  }
	})
})
