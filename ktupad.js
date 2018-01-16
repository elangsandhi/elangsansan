	// JavaScript Document

function na(){}

var ktupad = new function (){ var app,out,x,i,key,c=1, page=1, os=0; 

this.get = {
	id : function(id){ return document.getElementById(id) },
	name : function(id){ return document.getElementsByName(id) },
	class : function(id){ return document.getElementsByClassName(id) }
	}
	
this.e = {
	atas  : this.get.id('atas'),
	kanan : this.get.id('kanan'),
	bawah : this.get.id('bawah'),
	kiri : this.get.id('kiri'),
	depan : this.get.id('depan'),
	belakang : this.get.id('belakang')
	}
	
this.set = {
	konten : function(arr){ 
		x=ktupad.get.id(arr.id);
		x.style.width = arr.width ; 
		x.style.display = arr.display ;	
		},
	depan : function(callback){ 
		x=ktupad.e.depan;
		x.innerHTML = callback; 
		x.style.display='block'; 
//		x.onclick = function() {ktupad.set.display('layer','none')};
		x.onclick = function() {ktupad.set.konten({id:'depan',display:'none'}); }
		
		},
	bawah : function(callback){ 
		x=ktupad.e.bawah;
		x.innerHTML=callback;
		x.className = 'show';
		setTimeout(function(){ x.className = x.className.replace('show', ''); }, 3000);
		},
	modal : function(callback){ 
		out  = '<div class="modal" id="modal"> \
		<button class="btn ico-close close" onClick=ktupad.set.konten({id:\'depan\',display:\'none\'});></button>';
		out += callback;
		out +='<div class="clear"></div> </div>';
		x=ktupad.e.depan;
		x.innerHTML=out;
		x.onclick = function() {};
		ktupad.set.konten({id:'depan',display:'block'});
		},	
	belakang : function(callback){ 
		x=ktupad.e.belakang;
		x.innerHTML=callback;
		}
	}

this.ex = {
	Setting : function(callback){ 
		val  = localStorage.getItem("dbParam");
		out  = '<div class="row"> \
		<H2>Setting</H2> \
		<form id="Form" action=""  method="post"> \
		<label>URL app</label><input type="text" id="app" name="app" value="'+val+'"> \
		</form> \
		<input type="submit" value="Simpan" id="update"> \
		</div>';
		callback(out);
		ktupad.get.id('update').addEventListener("click", function(){ 
		localStorage.setItem("dbParam", ktupad.get.id('app').value);
		ktupad.set.bawah('Berhasil simpan URL app');
		});
		},
	Loader : function(id){ 
		out ='<div class="sk-cube-grid">';
		for(  i=1; i <= 9; i++)	{ 
		out +='<div class="sk-cube sk-cube'+i+'"></div>'; }
		out +='@ktupad </div>';
		return out;
		},
	Login : function(){ 
		out = '<H2>Signin</H2> \
		<form id="Form" action=""  method="post"> \
		<label>Nama</label><input type="text" name="nama" value="Umar"> \
		<label>Sandi</label><input type="password" id="sandi" name="nama" value="Khatab"> \
		</form> \
		<input type="submit" value="Login" onclick="ktupad.set.bawah(\'Hello Umar\')";>';
		return out;
		},
	Printer: function(){ 
		 out = '<H2>Printer</H2> \
		<input type="submit" value="Datecs Printer" onClick="printDetect();">';
		return out;
		},
	Float: function(){ 
		return '<a href="#" class="float" id="bAdd" ><i class="ico-pencil ico"></i></a>';
		},
	Tabs: function(){ 
		var seta;
		arr={ satu:'satu', dua:'dua'};		 
		ktupad.Tabbed(arr,function(data){ seta=data });
		return	seta;
//	return 	ktupad.Tabbed(arr);
		}
	}
 
this.Menu=function(arr){ console.log('Menu');
	function recurseMenu(parent) {
	out = '<li>';
	for (var x in arr) {node=arr[x];
	if (node.induk == parent) {
	out += '<input type="checkbox"  id="' + node.nama + '" > \
	<label class="btn" for="'+ node.nama + '" onClick="'+node.url+'" >' + node.nama + '</label>';
	if (node.id > 0) { out += '<ul class="sm">'+recurseMenu(node.id)+'</ul>';	}
	out += '</li>';
	}
	}
	return out ;
	}
	return '<ul class="am">'+recurseMenu(0)+ '</ul>';
	}

this.Tabbed = function(arr,callback) { console.log('Tabbed');
//	arr={ satu:'satu', dua:'dua'};
	out  = '<div class="row">';
//	out  += '<h2>Tabs</h2>';
	out  += '<div class="tabbed">';
	for (key in arr) { 
	out += '<input name="tabs" id="'+ key +'" type="radio" checked>';
	out += '<section>';
	out += '<h1> <label for="'+ key +'">'+ key +'</label>  </h1>';
	out += '<div>'+ arr[key] +'</div>';
	out += '</section>';
	}
	out += '</div></div>';
	callback(out);
//	return out;
	}
	
this.Code=function(){ console.log('Code');
	out = "var masterMenu= new function() {\n\
	this.DB = [\n\
		{'id':1,'nama':'Dev'},\n\
		{'id':2,'nama':'Dev'},\n\
		{'id':3,'nama':'Dev'}]\n\
	this.key= 'masterMenu';\n\
	\n\
	\n\
	this.Awal = function() {\n\
		crud.Awal=this.Awal;\n\
		crud.DB=this.DB;\n\
		crud.Form=this.Form;\n\
		crud.key=this.key;\n\
		document.getElementById('pages').innerHTML=crud.Table();\n\
		}\n\n\
	this.Form = function() {\n\
		out  = '';\n\
		out += '<label>ID</label><input type=\"text\" id=\"id\" name=\"id\" >';\n\
		out += '<label>Nama</label><input type=\"text\" id=\"nama\" name=\"nama\">';\n\
		out += '<button  id=\"create\">Create</button>';\n\
		out += '<button  id=\"update\">Update</button>';\n\
		out += '<button  id=\"delete\">Delete</button>';\n\
		document.getElementById('pages').innerHTML=out;\n\
		}\n\
	}\n";	
	return out;	
	}
	
this.PostAJAX = function(url, obj, success){  console.log('PostAjax');

	var http = new XMLHttpRequest();
	http.open("POST", url, true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.onreadystatechange = function() {
	if(http.readyState == 4 && http.status == 200) { success(http.responseText); }
	}
	http.send(obj);
	}
	
this.El= function (el) { console.log('El');
	frm = ktupad.get.id(el);
	obj={};
	for ( var i = 0; i < frm.elements.length; i++ ) { e = frm.elements[i];
	obj[e['name']] = e['value'];
	}
	return obj;
	}
	
this.getSel=function(opt) { console.log('getSel');
	var s=['input','img']
	var c=['app']
	apps=this.Code();
	var txtarea = ktupad.get.id("dev");
	var start = txtarea.selectionStart;
	var finish = txtarea.selectionEnd;
	var allText = txtarea.value;
	var sel = allText.substring(start, finish);
	var newText=allText.substring(0, start)+"<"+opt+">"+sel+"</"+opt+">"+allText.substring(finish, allText.length);
	if(s.includes(opt)){ 
	var newText=allText.substring(0, start)+"<"+opt+">"+sel+allText.substring(finish, allText.length);}
	if(c.includes(opt)){ 
	var newText=allText.substring(0, start)+apps+sel+allText.substring(finish, allText.length);}
	txtarea.value=newText;
	}	
	
this.Table = function(mod,callback) { console.log('Table');
	arr=mod.Init.DB;
	col=arr[0];
	if(arr.lenght==0){ arr={"Kosong":""} }
	out  = '<table id="table"> \
	<tr> \
	<td><input type="checkbox" value="" id="Cek"/> edit</td>';
	for (key in col) { out += '<td>'+ key +'</td>'; }
	out += '</tr>';
	i=0;
	for (key in arr) { col=arr[key];
	out += '<tr > \
	<td><input type="checkbox" name="checkbox" value="'+i+'" /> <a name="meh"> edit</a></td>';
	for (key in col) { 
	out += '<td>'+ col[key].substring(0,20) +'</td>'; 
	}
	out += '</tr>';
	i++;
	}	
	out += '</table> \
	</div><br/>';
	callback(out);

	var p=ktupad.get.name('meh');
	for(var i=0; i<p.length; i++) { p[i].id='x'+i; p[i].onclick=function() { mod.i=this.id.replace('x',''); crud.Read(mod); } }	
	
	e = ktupad.get.id('Cek');
	e.addEventListener("click", function(){ cb = ktupad.get.name('checkbox'); for(var i=0; i < cb.length; i++) {	cb[i].checked = e.checked; } });
	}
	
this.Cari= function(mod,callback) { console.log('Cari');
	out  = '<div class="row"> \
	<input type="text" value="" id="txtCari" > \
	</div >';
	
	callback(out);
	
	function getCari(mod) { console.log('getCari');
	fld=mod.Init.fld.split(',');
	out = 'WHERE ';
	for(i=0; i < fld.length; i++)	{ 
	out += fld[i]+' LIKE \'%' +ktupad.get.id('txtCari').value +'%\'';
	if (i < fld.length-1){out+= " OR ";}
	}
	mod.Init.cari=out;
	console.log(out);
	}
	ktupad.get.id('txtCari').addEventListener("keypress", function(e){ key = e.which || e.keyCode; if (key === 13) { getCari(mod); ws.Data(mod); } });
	}
	
this.Pager = function(mod,callback) {  console.log('Pager');
	out  = '<div class="row"> \
	<input type="submit" value="<" id="p" > \
	<input type="submit" value=">" id="n" > \
	Page(s): <span id="page"></span> \
	</div >';
	
	callback(out);
	
	tp= Math.ceil(mod.qc / mod.Init.lmt);
	if (page < 1) page = 1;
	if (page > tp) page = tp;
	
	var page_span = ktupad.get.id("page");
	var p = ktupad.get.id("p");
	var n = ktupad.get.id("n");
	
	page_span.innerHTML = c +' | '+ tp +' Record(s): '+ mod.qc;
	p.style.display = c == 1 ? 'none' : 'initial';
	n.style.display = c == tp ? 'none': 'initial';
	
	p.addEventListener("click", function(){ if (c > 1 ) {c--; mod.Init.os=(c-1)*mod.Init.lmt;}; ws.Data(mod); });
	n.addEventListener("click", function(){ if (c < tp) {c++; mod.Init.os=(c-1)*mod.Init.lmt;}; ws.Data(mod); });
	}
	
this.Filter= function(arr,callback) { console.log('Filter');
	arr1 = 'LIKE,NOT LIKE,=,!=,>=,<=,IN,NOT IN'.split(',');
	arr  = arr.split(',');
	out  = '<input type="submit" value="+" id="getAdd"/> \
	<form id="filterForm" method="post"> \
	<div id="newlinktpl"> \
	<div class="clear"> \
	<div class="l-2"> \
	<select name="ope[]" > \
	<option value=" AND " >AND</option>  \
	<option value=" OR " >OR</option>  \
	</select> \
	</div> \
	<div class="l-3"><select  name="fld[]" id="fld">';
	for ( i in arr) { out+='<option value=" '+arr[i]+' " >'+arr[i]+'</option>'; }
	out += '</select></div> \
	<div class="l-2"> \
	<select name="ope1[]" >';
	for ( i in arr1) { out+='<option value=" '+arr1[i]+' " >'+arr1[i]+'</option>'; }
	out += '</select> \
	</div> \
	<div class="l-5"><input type="text" name="key[]" ></div> \
	</div> \
	</div> \
	<div id="newlink"></div> \
	<div class="clear"> \
	<input type="hidden" name="order1" id="order1" value="ORDER BY"> \
	ORDER BY: <select  name="sortir" id="fld1">';
	for ( i in arr) { out+='<option value=" '+arr[i]+' " >'+arr[i]+'</option>'; }
	out += '</select> \
	</div> \
	</form> \
	<input type="submit" name="submit1" value="Filter" id="getFilter">';
	
	ktupad.set.modal(out);
	
	ktupad.get.id('getAdd').addEventListener("click", function(){ 
	var div1 = document.createElement('div');
	div1.innerHTML = ktupad.get.id('newlinktpl').innerHTML;
	ktupad.get.id('newlink').appendChild(div1);
	} );
	
	ktupad.get.id('getFilter').addEventListener("click", function(){ 
	obj  = 'WHERE id !=0' ;
	var ope1= ktupad.get.name('ope1[]');
	var ope = ktupad.get.name('ope[]');
	var fld = ktupad.get.name('fld[]');
	var key = ktupad.get.name('key[]');
	
	for ( var i = 0; i < ope1.length; i++ ) {
	if(ope1[i].value ==' LIKE '){ 
	obj + '%'+key[i]+'%';}
	obj += ope[i].value + fld[i].value + ope1[i].value;
	
	if(ope1[i].value ==' LIKE '||ope1[i].value ==' NOT LIKE '){ 
	obj += '"%'+key[i].value+'%"';}
	else if(ope1[i].value ==' IN '||ope1[i].value ==' NOT IN '){ 
	obj += '('+key[i].value+')';}
	else {
	obj += key[i].value;}
	}
	ktupad.set.bawah(obj);
	callback(obj);
	} );
	}

this.Float=function() { console.log('Float');
	return '<a href="#" class="float" id="bAdd" ><i class="ico-pencil ico"></i></a>';
	}

this.TableData= function(mod,callback) { console.log('TableData');
	out  = '<H2>'+mod.Init.ttl+'</H2> <div class="bar" id="bar"></div> \
	<div id="car"></div> \
	<div id="tbl"></div> \
	<div id="pag"></div>';
	out += ktupad.Float();
	callback(out);
	ktupad.DropTable(mod);
	ktupad.Cari(mod,function(data){ ktupad.get.id('car').innerHTML = data; });
	ktupad.Table(mod,function(data){ ktupad.get.id('tbl').innerHTML = data; });
	ktupad.Pager(mod,function(data){ ktupad.get.id('pag').innerHTML = data; });
	ktupad.get.id('bAdd').addEventListener("click", function(){  console.log('hi'); mod.Form(); });
	}
	
this.FormData = function(mod,callback) { console.log('FormData');
	out  = '<H2>'+mod.Init.ttl+'</H2> <div class="bar" id="bar"></div> \
	<form id="Form" action="" class="clear">';
	arr=mod.Init.fld.split(',');
	for (key in arr) { out += '<label>'+arr[key]+'</label><input type="text" id="'+arr[key]+'" name="'+arr[key]+'" > '; }
	out += '</form>';
	callback(out);
	ktupad.DropForm(mod);
	}

this.Bar= function(arr,callback) { console.log('Bar');
	out = '<div class="bar" id="bar"></div>';
	callback(out);
	}

this.gets = {
	Add : function(mod){mod.Form(); },
	Create : function(mod){crud.Create(mod); },
	Read : function(mod){ crud.Read(mod); },
	Update : function(mod){ crud.Update(mod); },
	Delete : function(mod){ crud.Delete(mod); },
	Deletes : function(mod){ crud.Deletes(mod); },
	Filter : function(mod){ ktupad.Filter(mod.Init.fld, function(data) { mod.Init.cari=data; ws.Data(mod); console.log(data) }); },
	Export: function(mod){ ktupad.CSV(mod.Init.DB); },
	Import : function(mod){ ktupad.Import(mod); },
	Print : function(mod){ ktupad.Print(mod); }
	}

this.Drops = function(mod2,arr,callback) { console.log('Drops');
	mod=mod2;
	out = '';
	for(var i=0; i<arr.length; i++) { out += '<a href="#" class="btn" onClick="ktupad.gets.'+arr[i]+'(mod);" >'+arr[i]+'</a>'; }
	callback(out);
	}
  
this.DropForm = function(mod) { console.log('DropFrom');
	arr=['Create','Update','Delete'];	
	this.Drops(mod,arr,function(data) { 
	ktupad.get.id('bar').innerHTML = data; 
	ktupad.e.kanan.innerHTML = data; 
	});
	}	

this.DropTable = function(mod) { console.log('DropTable');
	arr=['Add','Deletes','Filter','Export', 'Import', 'Print' ];	
	this.Drops(mod,arr,function(data) { 
	ktupad.get.id('bar').innerHTML = data; 
	ktupad.e.kanan.innerHTML = data; 
	});
	}

this.Cetak= function(mod) { console.log('Cetak');
	ktupad.Table(arr,function(data){ ktupad.e.belakang.innerHTML = data; });
	}

this.Print = function(mod) { console.log('MenuPrint');
	ktupad.Table(arr,function(data){ ktupad.e.belakang.innerHTML = data; });
	}

this.Import= function(mod) { console.log('Import');
	out  = '<form method=post enctype="multipart/form-data" > \
	Pilih File CSV: <input type="file" name="afile" id="afile" > \
	</form> \
	<input type=submit name=upload id="import" value=Import>'; 
 	ktupad.set.modal(out);
	
	document.querySelector('#afile').addEventListener('change', function(e) {
	var file = this.files[0];
	var fd = new FormData();
	fd.append("afile", file);
	fd.append("tbl", mod.Init.tbl);
	
//	ktupad.PostAJAX('http://localhost/ktupad/app/ws/csv.php',fd,function(data){console.log(data); ws.Data(mod)   });
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost/ws/csv.php', true);
	xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) { console.log(xhr.responseText); ws.Data(mod)  }
	}
	xhr.send(fd);
	}, false);
	}

this.CSV = function(arr) { console.log('CSV');
	function convertArrayOfObjectsToCSV(args) {  
	var result, ctr, keys, columnDelimiter, lineDelimiter, data;
	data = args.data || null;
	if (data == null || !data.length) { return null; }
	
	columnDelimiter = args.columnDelimiter || ',';
	lineDelimiter = args.lineDelimiter || '\n';
	keys = Object.keys(data[0]);
	result = '';
	result += keys.join(columnDelimiter);
	result += lineDelimiter;
	data.forEach(function(item) {
	ctr = 0;
	keys.forEach(function(key) {
	if (ctr > 0) result += columnDelimiter;
	result += item[key];
	ctr++;
	});
	result += lineDelimiter;
	});
	return result;
	}
	
	function downloadCSV(args) {  
	var data, filename, link;
	var csv = convertArrayOfObjectsToCSV({data: arr });
	if (csv == null) return;
	filename = args.filename || 'export.csv';
	if (!csv.match(/^data:text\/csv/i)) {
	csv = 'data:text/csv;charset=utf-8,' + csv;
	}
	data = encodeURI(csv);
	link = document.createElement('a');
	link.setAttribute('href', data);
	link.setAttribute('download', filename);
	link.click();
	}
	downloadCSV({ filename: "export.csv" });
	}
	
}// end class ktupad


var crud = new function() { var col,key,arr,ind2,ind3,cb,i;

this.Create= function (mod) {  console.log('Create');
	frm = ktupad.El('Form');
	mod.Init.frm = frm;
	mod.Init.DB.push(frm); 
	ws.Aksi(mod,'create', function(data){ mod.Awal() });
	}

this.Read= function (mod) { console.log('Read');
	mod.Form();
	col = mod.Init.DB[mod.i];
	mod.Init.id  = col.id;
	for (key in col) { ktupad.get.id(key).value = col[key]; }
	}

this.Update= function (mod) { console.log('Update');
	frm = ktupad.El('Form');
	mod.Init.frm = frm; 
	mod.Init.DB.splice(mod.i, 1, frm); 
	ws.Aksi(mod,'update', function(data){ mod.Awal() });
	}

this.Delete = function (mod) { console.log('Delete');
	mod.Init.DB.splice(mod.i, 1);
	ws.Aksi(mod,'delete', function(data){ mod.Awal() });
	}

this.Deletes= function(mod) { console.log('Deletes');
	arr = mod.Init.DB;
		ind2 = [], ind3 = [], cb = ktupad.get.name('checkbox');
		for(i=0; i < cb.length; i++) {
		if(cb[i].checked == true) { 
		ind2.push(arr[cb[i].value].id); 
		ind3.push(cb[i].value); 
		}
		}
	for (i = ind3.length -1; i >= 0; i--){ arr.splice(ind3[i],1); }
	mod.Init.id = ind2.join();
	ws.Aksi(mod,'deletes', function(data){ mod.Awal() });
	}
} // end class crud


var ws = new function() { var obj,arr;
this.Aksi= function(mod,crud,callback) { console.log('Aksi');
	mod.Init.mod = crud;
	obj = JSON.stringify(mod.Init);
	ktupad.PostAJAX(mod.Init.url,obj,function(data){ callback(data) });
	}
this.Data2 = function(mod,callback) { console.log('Data2');
	ws.Aksi(mod,'Data',function(data){ 
		arr=JSON.parse(data); 
		mod.Init.DB=arr['table']; 
		mod.qc=arr['pager']; 
		callback(data); });
	}
this.Data = function(mod) {  console.log('Data');
	ws.Data2(mod, function(data){ 
		mod.Awal(); });
	}
}// end class ws