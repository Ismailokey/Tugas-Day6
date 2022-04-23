const buku = [
     { judul: "Javascript", stok: 2 },
     { judul: "PHP", stok: 0 },
     { judul: "Golang", stok: 3 },
     { judul: "Java", stok: 1 },
     { judul: "Python", stok: 0 },
   ];
   
   function stokBuku(buku) {
        if (buku.stok < 1){
             return " Sedang Habis";
        } else {
             return " Tersedia " + buku.stok;
        }
   }

   for (let i = 0; i < buku.length; i++) {
       const status = stokBuku(buku[i]);
       console.log("Buku " + buku[i].judul + status);
   }
   