
function kiemtra(){  
    var msv = document.dk.msv.value;
    var mk = document.dk.mk.value; 

if(msv=="" || mk ==""){
    alert("Bạn chưa nhập dữ liệu")
    return false;
}
if (msv==null || msv==""){  
  alert("Bạn chưa nhập mã sinh viên");  
  return false;  
}else if(mk.length<6 && mk.length>=1){  
  alert("Mật khẩu sai. Vui lòng nhập lại.");  
  return false;  
  }  
  if(mk==null || mk==""){
    alert("Bạn chưa nhập mật khẩu");  
    return false; 
  }
return true("index.html");
}  
