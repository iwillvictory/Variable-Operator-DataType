function diemTrungBinh(){
    let ly= parseFloat(document.getElementById("ly").value);
    let hoa= parseFloat(document.getElementById("hoa").value);
    let sinh= parseFloat(document.getElementById("sinh").value);
    let diemTB= (ly+hoa+sinh)/3;
    document.getElementById("ketqua").value=diemTB;
}

function convertTemp(celsius){
    let cel= parseFloat(celsius);
    let fahrenheit= (cel*9)/5 +32;
    document.getElementById("fahrenheit").value= fahrenheit;
}

function circleArea(){
    let banKinh= document.getElementById("banKinh").value;
    let area;
    if(banKinh.trim()!="") {
        area=banKinh * banKinh * 3.14;
    }else{
        area="";
    }
    document.getElementById("result").value=area;

}

function circleChuVi(){
    let banKinh= document.getElementById("banKinh").value;
    let chuvi;
    if(banKinh.trim()!="") {
        chuvi=banKinh * 2 * 3.14;
    }else{
        chuvi="";
    }
    document.getElementById("result").value=chuvi;
}
