function sendMessage() {
  const urlToWhatsapp = `https://wa.me/6281931297828?text=Nama saya, ${nama.value}, ${pesan.value}`;
  window.open(urlToWhatsapp, "_blank");
}

