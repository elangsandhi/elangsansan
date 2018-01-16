	// JavaScript

var app = new function() { 

this.printDetect=function() {
	window.DatecsPrinter.listBluetoothDevices(
	function (devices) {
	window.DatecsPrinter.connect(devices[0].address, 
	function() {
	alert('Koneksi Printer Berhasil!');
	},
	function() {
	alert(JSON.stringify(error));
	}
	);
	},
	function (error) {
	alert(JSON.stringify(error));
	}
	);
}

this.cetak=function() {
	out = 'Cetak';
	window.DatecsPrinter.printText(out, 'ISO-8859-1');
	}
	
	
this.scancode=function() {
	cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          preferFrontCamera : true, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: true, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Place a barcode inside the scan area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : true, // iOS
          disableSuccessBeep: false // iOS and Android
      }
   );
	} // function
	
	
	
this.Awal=function(){
out='';
	out+='<input type="submit" onClick="andro.Browser();" value="Browser"> ';
	out+='<input type="submit" onClick="andro.Geo();" value="Geo"> ';
	out+='<input type="submit" onClick="andro.Dialog();" value="Dialog"> ';
	out+='<input type="submit" onClick="andro.Device();" value="Device"> ';
	out+='<input type="submit" onClick="andro.Camera();" value="Camera"> ';
	out+='<input type="submit" onClick="andro.onBatteryStatus();" value="Battery"> ';
	out+='<input type="submit" onClick="andro.Cetak();" value="cetak"> ';
	out+='<input type="submit" onClick="app.cetak();" value="cetak app"> ';
	out+='<input type="submit" onClick="andro.Push();" value="Push"> ';
	out+='<input type="submit" onClick="andro.Scan();" value="Scann "><br/>';
	out+='<input type="submit" onClick="app.scancode();" value="ScannCode"><br/>';
	out+='<img src="icon.png"  onClick="location.reload();" id="myImage"><br/>';
	document.getElementById("belakang").innerHTML=out;	
	
	}
	
}//	end class

// app.Awal();

function lPush() {
	var now = new Date().getTime(),
	_60_seconds_from_now = new Date(now + 10*1000);
	
	window.plugin.notification.local.add({
	id:      1,
	title:   'Push Ktupad',
	message: 'Wakunya sholat malam.',
	repeat:  'weekly',
	//date:    _60_seconds_from_now,
	icon: 'file://icon.png'
	});
	}
	
function cetak() {
	//var nfcid= document.getElementById("info").innerHTML;
	window.DatecsPrinter.printText(" Ktupad Test Print: ", 'ISO-8859-1');
	//	lPush();
	}
	
function getPrinter() {
	window.DatecsPrinter.listBluetoothDevices(
	function (devices) {
	window.DatecsPrinter.connect(devices[0].address, 
	function() {
	//  printSomeTestText();
	alert('Hello Ktupad');
	},
	function() {
	alert(JSON.stringify(error));
	}
	);
	},
	function (error) {
	alert(JSON.stringify(error));
	}
	);
	}
	
function scancode() {
	// barcode
	cordova.plugins.barcodeScanner.scan(
	function (result) {
	          alert("We got a barcode\n" +
	                "Result: " + result.text + "\n" +
	                "Format: " + result.format + "\n" +
	                "Cancelled: " + result.cancelled);
	
	document.getElementById("pages").innerHTML += result.text + "\n";
	//  scancode();
	}, 
	function (error) {
	alert("Scanning failed: " + error);
	}
	);
	}
	

	
function printSomeTestText() {
	window.DatecsPrinter.printText("Print Test!", 'ISO-8859-1', 
	function() {
	// printMyImage();
	}
	);
	}
	
function printMyImage() {
	var image = new Image();
	image.src = 'icon.png';
	image.onload = function() {
	var canvas = document.createElement('canvas');
	canvas.height = 100;
	canvas.width = 100;
	var context = canvas.getContext('2d');
	context.drawImage(image, 0, 0);
	var imageData = canvas.toDataURL('image/jpeg').replace(/^data:image\/(png|jpg|jpeg);base64,/, ""); //remove mimetype 
	window.DatecsPrinter.printImage(
	imageData, //base64 
	canvas.width, 
	canvas.height, 
	1, 
	function() {
	printMyBarcode();
	},
	function(error) {
	alert(JSON.stringify(error));
	}
	)
	};
	}
	
function printMyBarcode() {
	window.DatecsPrinter.printBarcode(
		75, //here goes the barcode type code 
		'13132498746313210584982011487', //your barcode data 
		function() { alert('success!'); }, 
		function() { alert(JSON.stringify(error));
		}
	);
	}
	
function nfcTagDetected(reading){ 
	alert(JSON.stringify(reading.tag));
	//  alert(reading.tag.id); // alert the id of the NFC reading
	
	out='<input type="submit" onClick="cetak();" value="cetak"><br/>';
	out+='NFC ID didapat: '+ reading.tag.id;
	
	document.getElementById("pages").innerHTML=out;
	//nfc.addNdefListener(onNfc, success, failure);
	} 
	


function onBatteryStatus(status){ 
    alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
}

function kCamera() {
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
		destinationType: Camera.DestinationType.FILE_URI });
	
	function onSuccess(imageURI) {
		var image = document.getElementById('myImage');
		image.src = imageURI;
	}
	
	function onFail(message) {
		alert('Failed because: ' + message);
	}
}

function kDevice() {
	alert(device.serial);
}

function kDialog() {
	function onConfirm(buttonIndex) {
	alert('You selected button ' + buttonIndex);
	}
	
	navigator.notification.confirm(
	'You are the winner!', // message
	onConfirm,            // callback to invoke with index of button pressed
	'Game Over',           // title
	['Restart','Exit']     // buttonLabels
	);
}

function kGlobe() {
navigator.globalization.getLocaleName(
    function (locale) {alert('locale: ' + locale.value + '\n');},
    function () {alert('Error getting locale\n');}
);
}

function kGeo() {
	alert('Geo 1');
	 var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };
 
    // onError Callback receives a PositionError object 
    // 
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
 
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
		
}

function kBrowser() {
	var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
	

}


function onDeviceReady() {
alert('Hello');	
	navigator.vibrate(300);
	nfc.addTagDiscoveredListener(nfcTagDetected); // add NFC listener // berhasil
	getPrinter();
	scancode();
	kGlobe();
	var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');

	}

	out='';
	out+='<input type="submit" onClick="kBrowser();" value="Browser"> ';
	out+='<input type="submit" onClick="kGeo();" value="Geo"> ';
	out+='<input type="submit" onClick="kDialog();" value="Dialog"> ';
	out+='<input type="submit" onClick="kDevice();" value="Device"> ';
	out+='<input type="submit" onClick="kCamera();" value="Camera"> ';
	out+='<input type="submit" onClick="onBatteryStatus();" value="Battery"> ';
	out+='<input type="submit" onClick="cetak();" value="cetak"> ';
	out+='<input type="submit" onClick="lPush();" value="Push"> ';
	out+='<input type="submit" onClick="scancode();" value="Scann Code"><br/>';
	out+='<img src="icon.png"  onClick="location.reload();" id="myImage"><br/>';
	document.getElementById("belakang").innerHTML=out;	

	document.addEventListener('deviceready', onDeviceReady, true);
	window.addEventListener("batterystatus", onBatteryStatus, false);