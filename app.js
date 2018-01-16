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

app.Awal();


function onDeviceReady() {
app.printDetect();
alert('Hello Ktupad');	
navigator.vibrate(300);
nfc.addTagDiscoveredListener(nfcTagDetected); // add NFC listener // berhasil
andro.getPrinter();
andro.Scann();
andro.Globe();
var ref = cordova.InAppBrowser.open('http://apache.org', '_blank', 'location=yes');
}

function onBatteryStatus(status){ 
	alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
	}

document.addEventListener('deviceready', onDeviceReady, true);
window.addEventListener("batterystatus", onBatteryStatus, false);
