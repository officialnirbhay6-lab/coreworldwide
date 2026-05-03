const leadForm = document.querySelector("#leadForm");

if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(leadForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const message = `I am interested in The Core Ultra Wide. Name: ${name}. Phone: ${phone}. Please share investment details.`;
    window.open(`https://wa.me/919311958091?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  });
}
