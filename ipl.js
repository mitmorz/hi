const firebaseConfig = {
    apiKey: "AIzaSyCh_lgRedjdhMjcqLwWdeakSFUvhDh_FfM",
    authDomain: "iplg-5a062.firebaseapp.com",
    databaseURL: "https://iplg-5a062-default-rtdb.firebaseio.com",
    projectId: "iplg-5a062",
    storageBucket: "iplg-5a062.appspot.com",
    messagingSenderId: "195411982425",
    appId: "1:195411982425:web:4e3a820dd1596f65d95948"
  };


  firebase.initializeApp(firebaseConfig);
 var UserInputsref = firebase.database().ref('user')
 document.getElementById(' ipl') .addEventListener('submit',submitForm)



function submitForm(e){
  e.preventDefault();
  var ipl =getInputVal('');
 
  

  
function getInputVal(id){
  return document.getElementById(id).value;
}

  return values;
}

function readResults(ipl){
var results=firebase.database().ref(ipl);
results.on('value',(data)=>{
var ranks= data.val();
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
document.getElementById(1).innerHTML="<br> 1."+ranks[1];
}
 