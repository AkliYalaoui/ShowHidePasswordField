var eye = document.getElementById('eye'),
    input = document.getElementById('inputPassword'),
    show = true;

if(navigator.userAgent.indexOf("Edg") === -1){
  eye.onclick = function(){
    if(show){
      eye.classList.remove('fa-eye');
      eye.classList.add('fa-eye-slash');
      input.setAttribute('type','text');
      show = false;
    }else{
       eye.classList.remove('fa-eye-slash');
       eye.classList.add('fa-eye');
       input.setAttribute('type','password');
       show = true;
    }
  }
}else {
  eye.style.display = "none";
}
