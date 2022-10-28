const tienKW1 = 500;
const tienKW2 = 650;
const tienKW3 = 850;
const tienKW4 = 1100;
const tienKW5 = 1300;
var tienm1 = "";
var tienm2 = "";
var tienm3 = "";
var tienm4 = "";
var tienm5 = "";
document.getElementById("btnTongtien").onclick = function () {
  var hoTen = document.getElementById("hoTen").value;
  var soKW = document.getElementById("soKW").value * 1;
  var tongTien = "";
  var currentFormat = Intl.NumberFormat("VN-vn");
  if (0 < soKW && soKW <= 50) {
    tienm1 = soKW * tienKW1;
    tongTien = tienm1;
  } else if (50 < soKW && soKW <= 100) {
    tienm1 = 50 * tienKW1;
    tienm2 = (soKW - 50) * tienKW2;
    tongTien = tienm1 + tienm2;
  } else if (100 < soKW && soKW <= 200) {
    tienm1 = 50 * tienKW1;
    tienm2 = 100 * tienKW2;
    tienm3 = (soKW - 100) * tienKW3;
    tongTien = tienm1 + tienm2 + tienm3;
  } else if (200 < soKW && soKW <= 350) {
    tienm1 = 50 * tienKW1;
    tienm2 = 100 * tienKW2;
    tienm3 = 200 * tienKW3;
    tienm4 = (soKW - 200) * tienKW4;
    tongTien = tienm1 + tienm2 + tienm3 + tienm4;
  } else if (soKW > 350) {
    tienm1 = 50 * tienKW1;
    tienm2 = 100 * tienKW2;
    tienm3 = 200 * tienKW3;
    tienm4 = 350 * tienKW4;
    tienm5 = (soKW - 350) * tienKW5;
    tongTien = tienm1 + tienm2 + tienm3 + tienm4 + tienm5;
  }
  var ketQua = "Họ và tên: " + hoTen +
    "  Tổng tiền trả: " + currentFormat.format(tongTien)
  document.getElementById(" infoTien").innerHTML = ketQua;
}


var btn = document.getElementById("btn");
var ketqua = document.getElementById("ketqua");

btn.onclick = function () {
  var diem_toan = +document.getElementById("diem_toan").value;
  var diem_ly = +document.getElementById("diem_ly").value;
  var diem_hoa = +document.getElementById("diem_hoa").value;
  var doituong = +document.getElementById("doituong").value;
  var khuvuc = document.getElementById("khuvuc").value;


  var tb = (diem_hoa + diem_ly + diem_toan);

  function kv(value) {
    switch (value) {
      case "a":
        return 2;
        break;

      case "b":
        return 1;
        break;
      case "c":
        return 0.5;
        break;

      default:
        return 0;
    }
  }


  function dt(value) {
    switch (value) {
      case 1:
        return 2.5;
        break;
      case 2:
        return 1.5;
        break;
      case 3:
        return 1;
        break;

      default:
        return 0;
    }
  }
  ketqua.innerHTML = (Tổng điểm:  ${ tb + kv(khuvuc) + dt(doituong) });

  if (tb + kv(khuvuc) + dt(doituong) >= 20) {
    ketqua.innerHTML = Điểm chuẩn của trường là: 20 điểm < br > Thí sinh đạt:  ${ (tb + kv(khuvuc) + dt(doituong)) };
  } else {
    ketqua.innerHTML = Điểm chuẩn của trường là: 20 điểm < br > Thí sinh rớt:  ${ (tb + kv(khuvuc) + dt(doituong)) };
  }
}

