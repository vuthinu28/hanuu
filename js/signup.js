
        function kiemtra(){
            var firstname = document.dk.firstname.value;
            var dateofbirth =document.dk.dateofbirth.value;
            var emailid = document.dk.emailid.value;
            var msv = document.dk.msv.value;
            var mobilenumber = document.dk.mobilenumber.value;
            if (firstname=="") { //quy tắc 1
                alert('Bạn chưa nhập tên');
            }
            

            if (msv=="") {  //quy tắc 2
                alert('Bạn chưa nhập mã sinh viên');
                return false;
            }
            if (dateofbirth=="") {  //quy tắc 2
                alert('Bạn chưa nhập ngày sinh');
                return false;
            }
            var ngay_hop_le                    =    "khong";
            var thang_hop_le                =    "khong";
            var nam_hop_le                    =    "khong";
            var dinh_dang_hop_le            =    "khong";
            var m                            =    dateofbirth.split("/");
            if(m.length==3)
            {
                dinh_dang_hop_le            =    "co";
            }
            var ngay_sinh        =    parseInt(m[0]);
            var thang_sinh        =    parseInt(m[1]);
            var nam_sinh        =    parseInt(m[2]);
        
            if(dinh_dang_hop_le=="khong")
            {
                alert("Định dạng không hợp lệ : có thể bạn dùng hơn 2 dấu '/'");
            }
            if(ngay_sinh>=1 && ngay_sinh<=31 )
            {
                ngay_hop_le="co";
            }
            else
            {
                alert("Ngày sinh không hợp lệ : ngày sinh phải là giá trị từ 1 đến 31 ");
            }
            if(thang_sinh>=1 && thang_sinh<=12 )
            {
                thang_hop_le="co"
            }
            else
            {
                alert("Tháng sinh không hợp lệ : tháng sinh phải là giá trị từ 1 đến 12 ");
            }
        
            if(nam_sinh>=1900 && nam_sinh<=2022)
            {
                nam_hop_le="co";
            }
            else
            {
                alert("Năm sinh không hợp lệ : năm sinh phải là giá trị từ 1900 đến 2020 ");
            }
        
        

            if (emailid=="") {  //quy tắc 2
                alert('Bạn chưa nhập email')
                return false;
            }else if (!isEmail(emailid)) {
                alert('Email không đúng định dạng');
            }

            if (mobilenumber=="") {  //quy tắc 2
                alert('Bạn chưa nhập số điện thoại')
                return false;
            }else if (!isPhone(mobilenumber)) {
                    alert('Số điện thoại không đúng định dạng');
                }
        
            return true;
        }
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                email);
        }
        function isPhone(number) {
            return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
        }