const appointmentButtons = document.querySelectorAll(".appointment-button");
const appointmentStatus = document.querySelector("#appointment-status");

for (const button of appointmentButtons) {
  button.addEventListener("click", () => {
    const selectedDate = button.dataset.appointmentDate;
    if (!selectedDate || !appointmentStatus) return;

    appointmentStatus.textContent = `${selectedDate} için randevu seçeneğini işaretledin. Bu örnek sitede talep gönderimi etkin değil.`;
  });
}
