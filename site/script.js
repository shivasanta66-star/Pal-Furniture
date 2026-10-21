/* =====================================================================
   PHONE / WHATSAPP NUMBER: CHANGE IT HERE
   Every Call and WhatsApp button and every number shown on the page
   is set from these lines. Write numbers with country code, no spaces.
   ===================================================================== */
var CONFIG = {
  phone: '+919777741135',          // used for "Call" buttons (tel: links)
  phoneDisplay: '097777 41135',    // how the phone number is written on the page
  whatsapp: '919777741135',        // WhatsApp number: country code + number, no "+"
  whatsappDisplay: '097777 41135'  // how the WhatsApp number is written on the page
};

(function () {
  // Call buttons
  document.querySelectorAll('[data-call]').forEach(function (a) {
    a.href = 'tel:' + CONFIG.phone;
  });

  // WhatsApp buttons (keeps any pre-filled message after "?text=")
  document.querySelectorAll('[data-whatsapp]').forEach(function (a) {
    var q = a.getAttribute('href').split('?')[1];
    a.href = 'https://wa.me/' + CONFIG.whatsapp + (q ? '?' + q : '');
  });

  // Numbers written on the page
  document.querySelectorAll('[data-phone-text]').forEach(function (el) {
    el.textContent = CONFIG.phoneDisplay;
  });
  document.querySelectorAll('[data-whatsapp-text]').forEach(function (el) {
    el.textContent = CONFIG.whatsappDisplay;
  });

  // Keep the Google schema phone in step with CONFIG
  var schema = document.getElementById('business-schema');
  if (schema) {
    try {
      var data = JSON.parse(schema.textContent);
      data.telephone = CONFIG.phone;
      schema.textContent = JSON.stringify(data);
    } catch (e) {}
  }

  // Footer year
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // If a photo file is missing, show a warm placeholder block with its file name
  document.querySelectorAll('.ph img').forEach(function (img) {
    function markMissing() { img.parentNode.classList.add('missing'); }
    if (img.complete && img.naturalWidth === 0) markMissing();
    else img.addEventListener('error', markMissing, { once: true });
  });
})();
