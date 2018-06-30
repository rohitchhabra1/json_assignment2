$(function(){
	var person = [
		{"firstname":"A","lastname":"D","dob":"1/1/1111"},
		{"firstname":"B","lastname":"C","dob":"2/2/2222"},
		{"firstname":"C","lastname":"B","dob":"3/3/3333"},
		{"firstname":"D","lastname":"A","dob":"4/4/4444"}
	];
	$.each(person,function(){
		$('table').append('<tr></tr>');
		$.each(this,function(name,value){
			$('tr:last').append('<td>' + value + '</td>');
		});
	});
})
