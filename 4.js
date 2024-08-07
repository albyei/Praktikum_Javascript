// mendefinisikan suku pertama dan rasio
const sukuPertama =4;
const rasio = 3;
const jumlahSuku = 10;

// 
let totalJumlah = 0;

//

for (let i = 0; i < jumlahSuku; i++) {
    // menghitung suku ke-1 dari deret geometri
    const sukuke1 = sukuPertama * Math.pow(rasio, i);
// menambahkan suku ke-1 ke total jumlah
totalJumlah += sukuke1
   
}
// menampilkan hasil
console.log("Total jumlah 10 suku pertama dari deret geometri yaitu : ", totalJumlah);