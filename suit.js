var tanya = true;
while (taya){

//menangkap pilihan player
var p = prompt('pilih : gajah,semut,orang');
//mengangkap pilihan computer

//membangkitkan ilangan random 
var comp = match.random();
console.log

if (comp < 0.34){
    comp ='gajah';
}else if ( comp >= 0.34 && comp < 0.67){
        comp='orang';
} else{
    comp='semut';
}

//menentukan rules
if (p == comp){
    hasil = 'seri';
// }else if (p == 'gajah'){
//     if(comp == 'orang'){
//         hasil='Menang';
//     }else {
//         hasil='kalah';
//     }


hasil = (comp =='orang')? 'menang': 'kalah';
}else if (p='orang'){
hasil=(comp=='gajah')? 'kalah' : 'menang';
}else if(p='semut'){
hasil=(comp=='orang')?'kalah':'menang';
}else{
    hasil='memasukkan pilihan yang salah';
}
// else if (p =='orang'){
//     if(comp == 'gajah'){
//         hasil = 'kalah';
//     }else{
//         hasil='menang';
//     }
// }
//tampilkan hasilnya
alert ('kamu memilih: '+ p + 'dan komputer memilih :'+ comp +'maka hasilnya: kamu'+ hasil );

}
