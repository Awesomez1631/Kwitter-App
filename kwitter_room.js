
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB6VEqd3sf4fWPaJfSDHZamIBxIetDaUT8",
      authDomain: "kwitter-3a5f6.firebaseapp.com",
      databaseURL: "https://kwitter-3a5f6.firebaseio.com",
      projectId: "kwitter-3a5f6",
      storageBucket: "kwitter-3a5f6.appspot.com",
      messagingSenderId: "817461859478",
      appId: "1:817461859478:web:093e7659b6f534e79d5eb7",
      measurementId: "G-3PLSCRGKCS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //firebase.analytics();
    room_name = document.getElementById("add_room").value;
localStorage.setItem("room_name", room_name);
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "" ;
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("roomname- "+Room_names);
       row="<div class='room_name' id="+Room_names+"onclick='RedirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += row;
});});}
getData();
user_name = localStorage.getItem("username :");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function addroom(){
      room_name = document.getElementById("add_room").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function RedirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username :");
      localStorage.removeItem("room_name");
      window.location = "login_page.html";
}
