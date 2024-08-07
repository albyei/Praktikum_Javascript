// mendefinisikan suku pertama dan rasio
const sukuPertama = 4;   // suku pertama dari deret geometri
const rasio = 3;        // rasio antara suku-suku dalam deret geometri
const jumlahSuku = 10;  // jumlah suku yang ingin dihitung dalam deret

// variabel untuk menyimpan total jumlah suku
let totalJumlah = 0;

//perulangan untuk menghitung setiap suku dan menambahkannya ke total jumlah

for (let i = 0; i < jumlahSuku; i++) {
    // menghitung suku ke-1 dari deret geometri
    const sukuke1 = sukuPertama * Math.pow(rasio, i);
    // menambahkan suku ke-1 ke total jumlah
    totalJumlah += sukuke1

}
// menampilkan hasil akhir
console.log("Total jumlah 10 suku pertama dari deret geometri yaitu : ", totalJumlah); 