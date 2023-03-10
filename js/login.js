const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  // membuat objek FormData untuk mengambil data dari form
  const formData = new FormData(document.querySelector("form"));

  // mengubah objek FormData ke dalam bentuk JSON
  const jsonData = JSON.stringify(Object.fromEntries(formData));

  // menampilkan data yang telah diubah ke dalam bentuk JSON
  console.log(jsonData);
});
