// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Drawn stand-in pictures, shown only while the real photo file is missing.
// Drop a real photo into images/ with the same name and it replaces the drawing.
(function () {
  var W = '#efe2d2', F = '#d9bf9f', WD = '#7a4a2a', WD2 = '#5e381f', R = '#9e1b1b', R2 = '#7d1414', C = '#fbf7f0', K = '#2a1d15';
  function room(wall, inner) {
    return '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<rect width="400" height="300" fill="' + wall + '"/><rect y="220" width="400" height="80" fill="' + F + '"/>' +
      '<rect y="218" width="400" height="4" fill="' + WD + '" opacity=".35"/>' + inner + '</svg>';
  }
  var bed = '<rect x="70" y="110" width="260" height="90" rx="4" fill="' + WD + '"/><rect x="80" y="120" width="240" height="70" rx="3" fill="' + WD2 + '" opacity=".35"/>' +
    '<rect x="60" y="175" width="280" height="35" rx="6" fill="' + C + '"/><rect x="60" y="185" width="280" height="30" rx="4" fill="' + R + '"/>' +
    '<rect x="95" y="155" width="80" height="26" rx="10" fill="' + C + '"/><rect x="225" y="155" width="80" height="26" rx="10" fill="' + C + '"/>' +
    '<rect x="62" y="210" width="10" height="20" fill="' + WD2 + '"/><rect x="328" y="210" width="10" height="20" fill="' + WD2 + '"/>';
  var mattress = '<rect x="70" y="150" width="260" height="40" rx="10" fill="' + C + '" stroke="' + WD + '" stroke-width="3"/>' +
    '<rect x="70" y="190" width="260" height="30" rx="8" fill="' + C + '" stroke="' + WD + '" stroke-width="3"/>' +
    '<path d="M100 170h200M100 205h200" stroke="' + WD + '" stroke-width="2" stroke-dasharray="6 8"/>' +
    '<rect x="70" y="140" width="260" height="14" rx="6" fill="' + R + '"/>';
  var sofa = '<rect x="80" y="120" width="240" height="60" rx="14" fill="' + R2 + '"/><rect x="60" y="150" width="40" height="65" rx="12" fill="' + R + '"/>' +
    '<rect x="300" y="150" width="40" height="65" rx="12" fill="' + R + '"/><rect x="95" y="170" width="105" height="40" rx="8" fill="' + R + '"/>' +
    '<rect x="200" y="170" width="105" height="40" rx="8" fill="' + R + '"/><rect x="230" y="135" width="40" height="34" rx="8" fill="' + C + '"/>' +
    '<rect x="75" y="212" width="8" height="14" fill="' + WD2 + '"/><rect x="317" y="212" width="8" height="14" fill="' + WD2 + '"/>';
  var wardrobe = '<rect x="110" y="40" width="180" height="180" rx="3" fill="' + WD + '"/><rect x="110" y="40" width="180" height="14" fill="' + WD2 + '"/>' +
    '<path d="M170 58v156M230 58v156" stroke="' + WD2 + '" stroke-width="3"/><rect x="160" y="125" width="4" height="22" fill="' + C + '"/>' +
    '<rect x="176" y="125" width="4" height="22" fill="' + C + '"/><rect x="236" y="125" width="4" height="22" fill="' + C + '"/>' +
    '<rect x="186" y="68" width="38" height="90" fill="' + C + '" opacity=".35"/>';
  var chair = function (x, flip) {
    var bx = flip ? x + 28 : x;
    return '<rect x="' + bx + '" y="120" width="8" height="105" fill="' + WD2 + '"/><rect x="' + x + '" y="165" width="36" height="8" fill="' + WD2 + '"/>' +
      '<rect x="' + (flip ? x : x + 28) + '" y="165" width="8" height="60" fill="' + WD2 + '"/>';
  };
  var dining = '<rect x="110" y="140" width="180" height="12" fill="' + WD + '"/><rect x="125" y="152" width="10" height="72" fill="' + WD + '"/>' +
    '<rect x="265" y="152" width="10" height="72" fill="' + WD + '"/>' + chair(62, false) + chair(302, true) +
    '<circle cx="200" cy="130" r="10" fill="' + R + '"/><rect x="160" y="133" width="22" height="7" rx="3" fill="' + C + '"/><rect x="218" y="133" width="22" height="7" rx="3" fill="' + C + '"/>' +
    '<path d="M200 0v70" stroke="' + K + '" stroke-width="2"/><path d="M175 90h50l-10-20h-30z" fill="' + R2 + '"/>';
  var tables = '<rect x="80" y="135" width="170" height="10" fill="' + WD + '"/><rect x="90" y="145" width="8" height="80" fill="' + WD + '"/>' +
    '<rect x="232" y="145" width="8" height="80" fill="' + WD + '"/><rect x="180" y="145" width="60" height="35" fill="' + WD2 + '"/>' +
    '<rect x="205" y="160" width="10" height="3" fill="' + C + '"/>' + chair(282, true) +
    '<rect x="110" y="110" width="40" height="25" fill="' + C + '"/><path d="M175 135v-30l15-10" stroke="' + K + '" stroke-width="3" fill="none"/><path d="M182 92l18-4 2 14z" fill="' + R + '"/>';
  var lamp = '<path d="M330 220v-120" stroke="' + K + '" stroke-width="3"/><path d="M308 100h44l-8-30h-28z" fill="' + C + '" stroke="' + WD + '" stroke-width="2"/><rect x="318" y="218" width="24" height="5" fill="' + K + '"/>';
  var hero = '<g transform="translate(-30 0)">' + sofa + '</g>' + lamp + '<rect x="30" y="60" width="70" height="50" fill="' + C + '" stroke="' + WD + '" stroke-width="4"/><rect x="200" y="60" width="60" height="44" fill="' + WD + '" opacity=".3"/>';
  var shop = '<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
    '<rect width="400" height="300" fill="#e6d3bd"/><rect y="250" width="400" height="50" fill="#bfa585"/>' +
    '<rect x="50" y="60" width="300" height="190" fill="' + C + '"/><rect x="50" y="60" width="300" height="50" fill="' + R + '"/>' +
    '<text x="200" y="94" text-anchor="middle" font-family="Georgia,serif" font-weight="700" font-size="26" fill="' + C + '" letter-spacing="2">PAL FURNITURE</text>' +
    '<rect x="70" y="125" width="120" height="125" fill="' + WD + '" opacity=".25"/><path d="M70 140h120M70 155h120M70 170h120M70 185h120M70 200h120M70 215h120M70 230h120" stroke="' + WD + '" stroke-width="2" opacity=".5"/>' +
    '<rect x="210" y="125" width="120" height="125" fill="' + WD + '" opacity=".15"/><rect x="225" y="190" width="90" height="35" rx="8" fill="' + R2 + '"/><rect x="225" y="175" width="90" height="22" rx="8" fill="' + R + '"/>' +
    '<rect x="40" y="110" width="320" height="8" fill="' + WD2 + '"/></svg>';
  var art = {
    'hero': room(W, hero),
    'category-beds': room(W, bed),
    'category-mattresses': room('#f3e7d8', mattress),
    'category-sofas': room(W, sofa),
    'category-wardrobes': room('#f3e7d8', wardrobe),
    'category-dining': room(W, dining),
    'category-tables-chairs': room('#f3e7d8', tables),
    'gallery-1': room(W, hero),
    'gallery-2': room('#f3e7d8', bed),
    'gallery-3': room('#ead8c3', wardrobe),
    'gallery-4': room(W, dining),
    'gallery-5': room('#f3e7d8', sofa + lamp),
    'gallery-6': room('#ead8c3', tables),
    'shop-front': shop
  };
  document.querySelectorAll('.ph img').forEach(function (img) {
    var key = (img.getAttribute('src') || '').replace(/^.*\//, '').replace(/\.\w+$/, '');
    if (art[key]) {
      var d = document.createElement('div');
      d.className = 'ph-art';
      d.innerHTML = art[key];
      img.parentNode.insertBefore(d, img.nextSibling);
    }
    if (img.complete && img.naturalWidth === 0) img.parentNode.classList.add('missing');
  });
})();
