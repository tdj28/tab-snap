//<!-- yalllinks, an example of a google chrome extension -->
//<!-- (C) Timothy Jones, October 2013 -->
//<!-- GNU Public license applies -->

//back = chrome.extension.getBackgroundPage();

var myCsv='';
var contents;
var openthistab=false;
var openthese=[];
jQuery(function($){
	clipboardBuffer = $('<textarea id="clipboardBuffer"></textarea>');
	clipboardBuffer.appendTo('body');
});

function geturls(){

  var favorite1 = localStorage["output_choice1"];
  if (!favorite1) {
    var favorite1="text";
  }

var favorite2 = localStorage["output_choice2"];
  if (!favorite2) {
    var favorite2="screen";
  }

var emailadd = localStorage["output_emailadd"];
  if(!emailadd) {
      var emailadd="";
}

if(favorite1=="clipa"){
window.myCsv='';
chrome.tabs.query({'currentWindow': true}, function(tabs) {
                         
                             tabs.forEach(function(tab){
                                 var temptest=tab.url.split(":");

                                 if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
				     window.myCsv+=tab.url+'\n'; 
                                 }
                });
       	clipboardBuffer.val(window.myCsv);
	clipboardBuffer.select();
	document.execCommand('copy');
	jQuery('#getgone').html("URLs copied!");
                });
}


///////////////////////////////// End clipboard


if(favorite1=="clipb"){
window.myCsv='';
chrome.tabs.query({'currentWindow': true}, function(tabs) {
                           
                             var curDate = new Date(); 
                             var currentTime = new Date();
                             var month = currentTime.getMonth() + 1;
                             var day = currentTime.getDate();
                             var wday = currentTime.getDay();
                             var year = currentTime.getFullYear();
                             var hours = currentTime.getHours();
                             var minutes = currentTime.getMinutes();
                             if (minutes < 10){minutes = "0" + minutes;}
                             var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
			     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    
                   
				    window.myCsv="URL list from ";
				    window.myCsv+=weekday[wday]+ ", " + monthname[currentTime.getMonth()] + ". " + day + " " + year + " " + hours + ":" + minutes + " "; 
                                    if(hours > 11){
				   
					window.myCsv+="PM\n\n";
				    } else {
				    
				     window.myCsv+="AM\n\n";
				    }
		

		
                             tabs.forEach(function(tab){
                                 var temptest=tab.url.split(":");

                                 if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
                                		
				     window.myCsv+=tab.title+':\n'+tab.url+'\n\n'; 
			
                                 }

                });


       	clipboardBuffer.val(window.myCsv);
	clipboardBuffer.select();
	document.execCommand('copy');
       
	jQuery('#getgone').html("URLs copied!");
       

                });


}


///////////////////////////////// End clipboard



 
if(favorite1=="text"){
window.myCsv='';
chrome.tabs.query({'currentWindow': true}, function(tabs) {
                             
                             var curDate = new Date(); 
                             var currentTime = new Date();
                             var month = currentTime.getMonth() + 1;
                             var day = currentTime.getDate();
                             var wday = currentTime.getDay();
                             var year = currentTime.getFullYear();
                             var hours = currentTime.getHours();
                             var minutes = currentTime.getMinutes();
                             if (minutes < 10){minutes = "0" + minutes;}
                             var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
			     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    
                              if(favorite2=="file"){
				    window.myCsv="URL list from ";
				    window.myCsv+=weekday[wday]+ ", " + monthname[currentTime.getMonth()] + ". " + day + " " + year + " " + hours + ":" + minutes + " "; 
                                    if(hours > 11){
				   
					window.myCsv+="PM\n\n";
				    } else {
				    
				     window.myCsv+="AM\n\n";
				    }
				}

			       if(favorite2=="screen"){

				 document.write("<h3>URL list from ");
				 document.write(weekday[wday] + ", " + monthname[currentTime.getMonth()] + ". ");
                            
				 document.write(day + " " + year);  
				 document.write(" ");
				 document.write(hours + ":" + minutes + " ");
				 if(hours > 11){
				     document.write("PM");
				    
				 } else {
				     document.write("AM");
				    
				 }
				 document.write("</h3>");
				 document.write("To copy this list, type [Ctrl] A, then type [Ctrl] C. <br/><br/>");
				 }
                             tabs.forEach(function(tab){
                                 var temptest=tab.url.split(":");

                                 if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
                                
				 if(favorite2=="screen"){ 
				     document.write("<b>" + tab.title + "</b>" + "<br/><a href='" + tab.url + "'>" + tab.url + "</a><br/><br/>");
				 }//}

				 if(favorite2=="file"){
				     window.myCsv+=tab.title+':\n'+tab.url+'\n\n'; 
				 }
                                 }

                });

    if(favorite2=="file"){
	var csvContent='data:text/txt;charset=utf-8,'+window.myCsv;
	var encodedUri = encodeURI(csvContent);
	var link = document.createElement("a");
	link.setAttribute("href", encodedUri);    
	var datafilename="Tab_Snap_"+weekday[wday] + "_" + monthname[currentTime.getMonth()] + "_"+day + "_" + year+"_"+hours + "_" + minutes;
	if(hours > 11){
	   datafilename+="_PM.txt";
	} else {
	    datafilename+="_AM.txt";
	}

     link.setAttribute("download", datafilename);

     link.click();

	//          window.open(encodedUri);
	//         window.myCsv='';
      
    }

                });


}


///////////////////////////////// End text begin gmail

if(favorite1=="gmail"){

chrome.tabs.query({'currentWindow': true}, function(tabs) {
                             
                             var curDate = new Date(); 
                             var currentTime = new Date();
                             var month = currentTime.getMonth() + 1;
                             var day = currentTime.getDate();
                             var wday = currentTime.getDay();
                             var year = currentTime.getFullYear();
                             var hours = currentTime.getHours();
                             var minutes = currentTime.getMinutes();
                             if (minutes < 10){minutes = "0" + minutes;}
                             var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
			     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    
                             var subjectall="URL List from ";
                             subjectall+=weekday[wday] + ", " + monthname[currentTime.getMonth()] + ". "+day + " " + year+" "+hours + ":" + minutes + " ";
                             

			     
				 if(hours > 11){
				     subjectall+="PM";
				    
				 } else {
				     subjectall+="AM";}

                            // var action_url = "mailto:?"+"subject="+encodeURIComponent(subjectall)+"&"+"body=";
		             var action_url = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to="+emailadd+"&su="+encodeURIComponent(subjectall)+"&"+"body=";
                             tabs.forEach(function(tab){
                                 var temptest=tab.url.split(":");
                                 
                                 // exclude chrome links   
                                 if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
                                
                                // action_url+=encodeURIComponent(tab.title)+"+"+encodeURIComponent("\n\n")+"+"+encodeURIComponent(tab.url)+"+"+encodeURIComponent("\n\n")+"+";
                                 action_url+=encodeURIComponent(tab.url)+"+"+encodeURIComponent("\n\n")+"+";
				}

                });

// var gmaillink = "https://mail.google.com/mail/?extsrc=mailto&url=%s"
// action_url = gmaillink.replace("%s",encodeURIComponent(action_url));
 chrome.tabs.create({ url: action_url });

                });

}



if(favorite1=="gmail2"){
window.myCsv='';
chrome.tabs.query({'currentWindow': true}, function(tabs) {
                             
                             var curDate = new Date(); 
                             var currentTime = new Date();
                             var month = currentTime.getMonth() + 1;
                             var day = currentTime.getDate();
                             var wday = currentTime.getDay();
                             var year = currentTime.getFullYear();
                             var hours = currentTime.getHours();
                             var minutes = currentTime.getMinutes();
                             if (minutes < 10){minutes = "0" + minutes;}
                             var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
			     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    
                             var subjectall="URL List from ";
                             subjectall+=weekday[wday] + ", " + monthname[currentTime.getMonth()] + ". "+day + " " + year+" "+hours + ":" + minutes + " ";
                             

			     
				 if(hours > 11){
				     subjectall+="PM";
				    
				 } else {
				     subjectall+="AM";}

                            // var action_url = "mailto:?"+"subject="+encodeURIComponent(subjectall)+"&"+"body=";
		             var action_url = "https://mail.google.com/mail/?view=cm&fs=1&tf=1&source=mailto&to="+emailadd+"&su="+encodeURIComponent(subjectall)+"&"+"body=";
                            // tabs.forEach(function(tab){
                          //       var temptest=tab.url.split(":");
                                 
                                 // exclude chrome links   
                          //       if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
                                
                                // action_url+=encodeURIComponent(tab.title)+"+"+encodeURIComponent("\n\n")+"+"+encodeURIComponent(tab.url)+"+"+encodeURIComponent("\n\n")+"+";
                            //     action_url+=encodeURIComponent(tab.url)+"+"+encodeURIComponent("\n\n")+"+";
			//	}

              //  });

// var gmaillink = "https://mail.google.com/mail/?extsrc=mailto&url=%s"
// action_url = gmaillink.replace("%s",encodeURIComponent(action_url));

         tabs.forEach(function(tab){
                                 var temptest=tab.url.split(":");

                                 if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
                                		
				     window.myCsv+=tab.title+':\n'+tab.url+'\n\n'; 
			
                                 }

                });


       	clipboardBuffer.val(window.myCsv);
	clipboardBuffer.select();
	document.execCommand('copy');
       
	jQuery('#getgone').html("URLs copied!");
       

              

 chrome.tabs.create({ url: action_url });

             });

}

if(favorite1=="simple"){
window.myCsv='';
  chrome.tabs.query({'currentWindow': true}, function(tabs) {
                          
                             tabs.forEach(function(tab){
  var temptest=tab.url.split(":");

  if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
  
  if(favorite2=="screen"){                                 
    document.write("<a href='" + tab.url + "'>" + tab.url + "</a><br/>");
    }
      
  if(favorite2=="file"){
    window.myCsv+=tab.url+'\n'; 
    }
    }
   
   });

  
if(favorite2=="file"){
     var csvContent='data:text/txt;charset=utf-8,'+window.myCsv;
     var encodedUri = encodeURI(csvContent);
     var link = document.createElement("a");
     link.setAttribute("href", encodedUri);
     var curDate = new Date(); 
     var currentTime = new Date();
     var month = currentTime.getMonth() + 1;
     var day = currentTime.getDate();
     var wday = currentTime.getDay();
     var year = currentTime.getFullYear();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     if (minutes < 10){
	 minutes = "0" + minutes;
     }
     var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");		    
     var datafilename="Tab_Snap_"+weekday[wday] + "_" + monthname[currentTime.getMonth()] + "_"+day + "_" + year+"_"+hours + "_" + minutes;
     if(hours > 11){
	 datafilename+="_PM.txt";
     } else {
	 datafilename+="_AM.txt";
     }

     link.setAttribute("download", datafilename);

     link.click();

//          window.open(encodedUri);
 //         window.myCsv='';
      
    }

  });



}

//////////////////////////////////////////////

if(favorite1=="csv1"){

  chrome.tabs.query({'currentWindow': true}, function(tabs) {
 window.myCsv='';
                             tabs.forEach(function(tab){
                              
  var temptest=tab.url.split(":");

  if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
   if(favorite2=="screen"){
   document.write('<b>"'+tab.title+'"</b>,"<a href="' + tab.url + '">' + tab.url + '</a>"<br/>');
   }

   if(favorite2=="file"){
   window.myCsv+='"'+tab.title+'","'+tab.url+'"\n'; 
   }
  
  }
               
   });

 if(favorite2=="file"){
     var csvContent='data:text/csv;charset=utf-8,'+window.myCsv;
     var encodedUri = encodeURI(csvContent);
     var link = document.createElement("a");
     link.setAttribute("href", encodedUri);
     var curDate = new Date(); 
     var currentTime = new Date();
     var month = currentTime.getMonth() + 1;
     var day = currentTime.getDate();
     var wday = currentTime.getDay();
     var year = currentTime.getFullYear();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     if (minutes < 10){
	 minutes = "0" + minutes;
     }
     var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");		    
     var datafilename="Tab_Snap_"+weekday[wday] + "_" + monthname[currentTime.getMonth()] + "_"+day + "_" + year+"_"+hours + "_" + minutes;
     if(hours > 11){
	 datafilename+="_PM.csv";
     } else {
	 datafilename+="_AM.csv";
     }

     link.setAttribute("download", datafilename);

     link.click();

//          window.open(encodedUri);
 //         window.myCsv='';
      
    }
   });

  

}

/////////////////////////////////////////////////

if(favorite1=="csv2"){



  chrome.tabs.query({'currentWindow': true}, function(tabs) {
                             window.myCsv='';
                             var curDate = new Date(); 
                             var currentTime = new Date();
                             var month = currentTime.getMonth() + 1;
                             var day = currentTime.getDate();
                             var wday = currentTime.getDay();
                             var year = currentTime.getFullYear();
                             var hours = currentTime.getHours();
                             var minutes = currentTime.getMinutes();
                             if (minutes < 10){minutes = "0" + minutes;}
                             var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
                             var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");		    
                             tabs.forEach(function(tab){
                                     
 
 
    var temptest=tab.url.split(":");

    if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
    
    if(favorite2=="screen"){
       document.write('"'+ monthname[currentTime.getMonth()] + '. '+day + ' ' + year+'", <b>"'+tab.title+'"</b>,"<a href="' + tab.url + '">' + tab.url + '</a>"<br/>');
    }

   if(favorite2=="file"){
     window.myCsv+='"'+ monthname[currentTime.getMonth()] + '. '+day + ' ' + year+'","'+tab.title+'","'+tab.url+'"\n'; 
   }  

   }
       
   });

if(favorite2=="file"){
     var csvContent='data:text/csv;charset=utf-8,'+window.myCsv;
     var encodedUri = encodeURI(csvContent);
     var link = document.createElement("a");
     link.setAttribute("href", encodedUri);
     var datafilename="Tab_Snap_"+weekday[wday] + "_" + monthname[currentTime.getMonth()] + "_"+day + "_" + year+"_"+hours + "_" + minutes;
     if(hours > 11){
	 datafilename+="_PM.csv";
     } else {
	 datafilename+="_AM.csv";
     }

     link.setAttribute("download", datafilename);

     link.click();
    }

  });

}

///////////////////////////////////////////////////////////

if(favorite1=="csv3"){

  chrome.tabs.query({'currentWindow': true}, function(tabs) {
                   
                             window.myCsv='';
                             var curDate = new Date(); 
                             var currentTime = new Date();
                             var month = currentTime.getMonth() + 1;
                             var day = currentTime.getDate();
                             var wday = currentTime.getDay();
                             var year = currentTime.getFullYear();
                             var hours = currentTime.getHours();
                             var minutes = currentTime.getMinutes();
                             if (minutes < 10){minutes = "0" + minutes;}
                             var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
                             var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");		    
                             tabs.forEach(function(tab){
                                     
                                 var temptest=tab.url.split(":");

                                 if(temptest[0]!="chrome" && temptest[0]!="chrome-extension"){
				     if(favorite2=="screen"){
					 document.write('"'+ monthname[currentTime.getMonth()] + '. '+day + ' ' + year+'", "<a href="' + tab.url + '">' + tab.url + '</a>"<br/>');
				     }   

				     if(favorite2=="file"){
					 window.myCsv+='"'+ monthname[currentTime.getMonth()] + '. '+day + ' ' + year+'","'+tab.url+'"\n'; 
				     }
                                  } 
         
   });


if(favorite2=="file"){
     var csvContent='data:text/txt;charset=utf-8,'+window.myCsv;
     var encodedUri = encodeURI(csvContent);
     var link = document.createElement("a");
     link.setAttribute("href", encodedUri);
     var curDate = new Date(); 
     var currentTime = new Date();
     var month = currentTime.getMonth() + 1;
     var day = currentTime.getDate();
     var wday = currentTime.getDay();
     var year = currentTime.getFullYear();
     var hours = currentTime.getHours();
     var minutes = currentTime.getMinutes();
     if (minutes < 10){
	 minutes = "0" + minutes;
     }
     var monthname=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
     var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")		    
     var datafilename="Tab_Snap_"+weekday[wday] + "_" + monthname[currentTime.getMonth()] + "_"+day + "_" + year+"_"+hours + "_" + minutes;
     if(hours > 11){
	 datafilename+="_PM.csv";
     } else {
	 datafilename+="_AM.csv";
     }

     link.setAttribute("download", datafilename);

     link.click();
      
    }

   });
 }

}  //ends getURLs

/*
function testResults(){

  clipboardBuffer.val('');
  clipboardBuffer.select();
  document.execCommand('paste')
		
 window.contents=clipboardBuffer.val();
// jQuery('#getgone').html(window.contents);

 // window.contents = this.form.inputbox.value;
  chrome.tabs.query({'currentWindow': true}, function(tabs) { 
 
  var lines = window.contents.split(/[\r\n|\n]+/);
               var firstr=[];
              var secstr=[];
                window.openthistab=false;
                for(i=0;i<lines.length;i++) {
                     
                      lines[i]=lines[i].replace(/["']/g,' ');
                      lines[i]=lines[i].replace(/(\r\n|\n|\r)/gm," ");;
                                           
                      firstr = lines[i].split(/\s+/g);
		      window.openthistab=false;
                      // Useful rows now:
                      for(j=0;j<firstr.length;j++){
                          
                           secstr=firstr[j].split(":");
                           var tempo=firstr[j];
                           if(secstr[0]=="http" || secstr[0]=="https" || secstr[0]=="ftp"){
                                window.openthistab=true;
                              // console.log("test");
                                //   console.log(window.openthistab);	
                               tabs.forEach(function(tab){ if(tab.url == tempo){window.openthistab = false;}});
                               //console.log(window.openthistab);
                                     						                                           
			       if(window.openthistab){window.openthese.push(firstr[j]); console.log("pushed");}//chrome.tabs.create({'url': firstr[j]},function(){});}  //firstr[j]
                       }
		      }
		}
     gogo()
  });
  
   // console.log("hey");
}
*/

function testResults(){

  window.contents = this.form.inputbox.value;
  chrome.tabs.query({'currentWindow': true}, function(tabs) { 
 
  var lines = window.contents.split(/[\r\n|\n]+/);
               var firstr=[];
              var secstr=[];
                window.openthistab=false;
                for(i=0;i<lines.length;i++) {
                     
                      lines[i]=lines[i].replace(/["']/g,' ');
                      lines[i]=lines[i].replace(/(\r\n|\n|\r)/gm," ");;
                                           
                      firstr = lines[i].split(/\s+/g);
		      window.openthistab=false;
                      // Useful rows now:
                      for(j=0;j<firstr.length;j++){
                          
                           secstr=firstr[j].split(":");
                           var tempo=firstr[j];
                           if(secstr[0]=="http" || secstr[0]=="https" || secstr[0]=="ftp"){
                                window.openthistab=true;
                              // console.log("test");
                                //   console.log(window.openthistab);	
                               tabs.forEach(function(tab){ if(tab.url == tempo){window.openthistab = false;}});
                               //console.log(window.openthistab);
                                     						                                           
			       if(window.openthistab){window.openthese.push(firstr[j]); console.log("pushed");}//chrome.tabs.create({'url': firstr[j]},function(){});}  //firstr[j]
                           }
		      }
		}
     gogo()
  });
  
    console.log("hey");
}
	
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function gogo(){

 console.log(window.openthese.length);
    var j=0;
    while(j<window.openthese.length){
        for(k=j;k<(j+1);k++){
            chrome.tabs.create({'url': window.openthese[k]},function(){});
        }
        j=j+1;
    }
}



function testResults(){

  window.contents = this.form.inputbox.value;
  chrome.tabs.query({'currentWindow': true}, function(tabs) { 
 
  var lines = window.contents.split(/[\r\n|\n]+/);
               var firstr=[];
              var secstr=[];
                window.openthistab=false;
                for(i=0;i<lines.length;i++) {
                     
                      lines[i]=lines[i].replace(/["']/g,' ');
                      lines[i]=lines[i].replace(/(\r\n|\n|\r)/gm," ");;
                                           
                      firstr = lines[i].split(/\s+/g);
		      window.openthistab=false;
                      // Useful rows now:
                      for(j=0;j<firstr.length;j++){
                          
                           secstr=firstr[j].split(":");
                           var tempo=firstr[j];
                           if(secstr[0]=="http" || secstr[0]=="https" || secstr[0]=="ftp"){
                                window.openthistab=true;
                              // console.log("test");
                                //   console.log(window.openthistab);	
                               tabs.forEach(function(tab){ if(tab.url == tempo){window.openthistab = false;}});
                               //console.log(window.openthistab);
                                     						                                           
			       if(window.openthistab){window.openthese.push(firstr[j]); console.log("pushed");}//chrome.tabs.create({'url': firstr[j]},function(){});}  //firstr[j]
                           }
		      }
		}
     gogo()
  });
  
    console.log("hey");
}
		
function handleFileSelect(evt) {
 chrome.tabs.query({'currentWindow': true}, function(tabs) { 
  console.log("here");
  var f = evt.target.files[0]; 
   // back.dothis.try(evt);//evt.target.files[0]; 
  console.log("there");
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
              var lines = contents.split(/[\r\n|\n]+/);
             // window.openthistab=false;
              var firstr;
              var secstr;
               console.log("here");
                for(i=0;i<lines.length;i++) {
                console.log("there");
                      lines[i]=lines[i].replace(/["']/g,' ');
                      lines[i]=lines[i].replace(/(\r\n|\n|\r)/gm," ");;
                      firstr = lines[i].split(/\s+/g);
                    //  window.openthistab=false;
                         for(j=0;j<firstr.length;j++){
                            secstr=firstr[j].split(":");
                            var tempo=firstr[j];
                            if(secstr[0]=="http" || secstr[0]=="https" || secstr[0]=="ftp"){
                                     window.openthistab=true;
                                     tabs.forEach(function(tab){ if(tab.url == tempo){window.openthistab = false;}});
                                   // chrome.tabs.create({'url': firstr[j]},function(){});
                                     if(window.openthistab){window.openthese.push(firstr[j]); console.log("pushed");}
                            }                
  
    
             }
            }

       gogo();
  
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }

});
 
}



function gogo(){
  
 console.log(window.openthese.length);
    var j=0;
    while(j<window.openthese.length){
        for(k=j;k<(j+1);k++){
            chrome.tabs.create({'url': window.openthese[k]},function(){});
        }
        j=j+1;
    }
}



document.addEventListener('DOMContentLoaded', function(){
console.log("sup");
document.getElementById("getem").addEventListener('click', geturls);
//document.getElementById("pastem").addEventListener('click',testResults);
document.getElementById("button1").addEventListener('click',testResults);
document.getElementById('file').addEventListener('change',handleFileSelect);

});

