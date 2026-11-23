//CATALOGO DE PRODUCTOS FILTRADO  
const products = [
  { id: 1, name: 'Lavabo',
    category: 'Accesorios de Cocina', 
    price: 8.5, oldPrice: 12.99, 
    note: 'Acabado en acero inoxidable 304',
    img: 'imgcat/lavabo.png',
    icon: 'lavabo' },

  { id: 2, name: 'Despensa de Cierre Lento', 
    category: 'Accesorios de Cocina', 
    price: 3.25, oldPrice: 4.5, 
    img: 'imgcat/dcl.png',
    note: 'Ancho: 385mm',
    note:'Profundidad: 530mm',
    note: 'Altura: 1320/1620mm' },

  { id: 3, name: 'Columna Extraible', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/ce.png',
    price: 49.9, oldPrice: 65, 
    note: 'Tres puntos de anclaje' },

  { id: 4, name: 'Despensa de Lujo de cierre lento', 
    category: 'Manijas', 
    price: 18.75, oldPrice: 24.99, 
    img: 'imgcat/dl.png',
    note: 'Acabado negro mate' },

  { id: 5, name: 'Esquinero Magic cierre lento', 
    category: 'Tornillería', 
    price: 6.9, oldPrice: 9.5, 
    img: 'imgcat/esquineros.png',
    note: '50 unidades · acero zincado' },

  { id: 6, name: 'Bandeja Oscilante de Cierre Lento', 
    category: 'Cerraduras', 
    price: 89.99, note: 'Clave numérica y tarjeta', 
    img: 'imgcat/bandeja.png',
    isNew: true },

  { id: 7, name: 'Super Magic', 
    category: 'Herraduras', 
    img: 'imgcat/sm.png',
    price: 14.5, 
    note: 'Cierre silencioso', isNew: true },

  { id: 8, name: 'Cesta Giratoria', 
    category: 'Bisagras', price: 27.9, 
    img: 'imgcat/cesta.png',

    note: 'Cierre automático suave', isNew: true },

  { id: 9, name: 'Mirilla digital con cámara', 
    category: 'Cerraduras', 
    price: 72, note: 'Visión nocturna · pantalla LCD', isNew: true },

  { id: 10, name: 'Pasador de embutir inoxidable', 
    category: 'Herraduras', 
    price: 11.2, note: 'Acero inoxidable satinado' },

  { id: 11, name: 'Tope de puerta de acero', 
    category: 'Bisagras', price: 5.4, 
    note: 'Protege paredes y puertas' },

  { id: 12, name: 'Candado de alta seguridad', 
    category: 'Cerraduras', 
    price: 22.3, 
    note: 'Arco templado · 50 mm' },

  { id: 13, name: 'Perchero de herradura', 
    category: 'Accesorios de Cocina', 
    price: 9.99, 
    note: 'Hierro forjado · 3 ganchos' },

  { id: 14, name: 'Manija redonda de latón', 
    category: 'Manijas', 
    price: 13.6, 
    note: 'Latón pulido · roseta 50 mm' },

  { id: 15, name: 'Bisagra de libro 3" (par)', 
    category: 'Bisagras', 
    price: 7.8, 
    note: 'Par de bisagras · 3 pulgadas' },

  { id: 16, name: 'Herradura de pared vintage', 
    category: 'Herraduras', 
    price: 12.4, 
    note: 'Estilo rústico envejecido' },
];

const priceFormatter = new Intl.NumberFormat('es-EC', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});

function formatPrice(value) {
  return priceFormatter.format(value);
}

function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
}

function cardTemplate(product) {
  let badge = '';
  if (product.isNew) {
    badge = '<span class="badge badge-new">Nuevo</span>';
  } else if (product.oldPrice) {
    const discount = Math.round((1 - product.price / product.oldPrice) * 100);
    badge = `<span class="badge badge-promo">-${discount}%</span>`;
  }

  return `
    <article class="product-card">
      <div class="product-media">
        ${badge}
        <img class="product-img" src="${product.img || 'imgcat/placeholder.png'}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-body">
        <span class="product-category">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-note">${product.note}</p>
        <div class="product-foot">
          <div class="price">
            <span class="price-now">${formatPrice(product.price)}</span>
            ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          </div>
        </div>
      </div>
    </article>
  `;
}

const promoProducts = products.filter((product) => product.oldPrice);
const newProducts = products.filter((product) => product.isNew);

document.getElementById('promoGrid').innerHTML = promoProducts.map(cardTemplate).join('');
document.getElementById('newGrid').innerHTML = newProducts.map(cardTemplate).join('');
document.getElementById('promoCount').textContent = `${promoProducts.length} ofertas`;
document.getElementById('newCount').textContent = `${newProducts.length} nuevos`;

const tabs = Array.from(document.querySelectorAll('[role="tab"]'));
const panels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function switchTab(name) {
  tabs.forEach((tab) => {
    const selected = tab.dataset.tab === name;
    tab.classList.toggle('active', selected);
    tab.setAttribute('aria-selected', String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  panels.forEach((panel) => {
    const selected = panel.id === `panel-${name}`;
    panel.hidden = !selected;
    panel.classList.toggle('active', selected);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => switchTab(tab.dataset.tab));

  tab.addEventListener('keydown', (event) => {
    const moves = { ArrowRight: 1, ArrowLeft: -1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const nextIndex = (index + moves[event.key] + tabs.length) % tabs.length;
    tabs[nextIndex].focus();
    switchTab(tabs[nextIndex].dataset.tab);
  });
});

document.getElementById('heroOffers').addEventListener('click', () => {
  document.getElementById('ofertas').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById('heroCatalog').addEventListener('click', () => {
  switchTab('catalogo');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const catalogGrid = document.getElementById('catalogGrid');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const sortSelect = document.getElementById('sortSelect');
const resultsInfo = document.getElementById('resultsInfo');
const emptyState = document.getElementById('emptyState');
const catalogCount = document.getElementById('catalogCount');

const categories = [...new Set(products.map((product) => product.category))].sort((a, b) =>
  a.localeCompare(b, 'es')
);

categorySelect.innerHTML = [
  '<option value="all">Todas las categorías</option>',
  ...categories.map((category) => `<option value="${category}">${category}</option>`),
].join('');

catalogCount.textContent = `${products.length} productos`;

function renderCatalog() {
  const term = normalize(searchInput.value);
  const category = categorySelect.value;
  const sort = sortSelect.value;

  let visible = products.filter((product) => {
    const matchesCategory = category === 'all' || product.category === category;
    const haystack = normalize(`${product.name} ${product.category} ${product.note}`);
    return matchesCategory && (!term || haystack.includes(term));
  });

  if (sort === 'price-asc') {
    visible = visible.slice().sort((a, b) => a.price - b.price);
  } else if (sort === 'price-desc') {
    visible = visible.slice().sort((a, b) => b.price - a.price);
  } else if (sort === 'name') {
    visible = visible.slice().sort((a, b) => a.name.localeCompare(b.name, 'es'));
  }

  catalogGrid.innerHTML = visible.map(cardTemplate).join('');
  emptyState.hidden = visible.length > 0;
  resultsInfo.textContent = `Mostrando ${visible.length} de ${products.length} productos`;
}

searchInput.addEventListener('input', renderCatalog);
categorySelect.addEventListener('change', renderCatalog);
sortSelect.addEventListener('change', renderCatalog);

document.getElementById('clearFilters').addEventListener('click', () => {
  searchInput.value = '';
  categorySelect.value = 'all';
  sortSelect.value = 'relevance';
  renderCatalog();
});

renderCatalog();

const chatLauncher = document.getElementById('chatLauncher');
const chatPanel = document.getElementById('chatPanel');
const closeChatBtn = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatQuick = document.getElementById('chatQuick');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

const defaultSuggestions = ['Ver promociones', 'Ver catálogo', 'Horario', 'Precios'];
let chatStarted = false;

//CHATBOT RULES

const chatRules = [
  {
    keywords: ['promocion', 'promociones', 'oferta', 'ofertas', 'descuento', 'descuentos', 'rebaja', 'rebajas'],
    reply:
      'Tenemos ofertas activas con hasta 30% de descuento en herraduras decorativas, bisagras de acero y cerraduras multipunto. Te llevo a la pestaña de promociones.',
    suggestions: ['Ver catálogo', 'Horario', 'Precios'],
    action: 'promos',
  },

  {keywords : ['herrajes', 'dispone', 'tienen', 'venden', 'productos'], reply : 'Que no vez la pagina?.', suggestions : ['Ver catálogo', 'Promociones', 'Precios']},
  {
    keywords: ['bisagra', 'bisagras'],
    reply:
      'Tenemos bisagras de acero inoxidable desde $3,25, bisagras de libro desde $7,80 y bisagras hidráulicas desde $27,90. También vendemos kits de tornillos para instalación.',
    suggestions: ['Ver catálogo', 'Promociones', 'Precios'],
  },
  {
    keywords: ['cerradura', 'cerraduras', 'candado', 'candados', 'llave', 'seguridad'],
    reply:
      'En cerraduras tienes opciones desde $22,30 (candado de alta seguridad), la cerradura multipunto a $49,90 y la cerradura electrónica con teclado a $89,99.',
    suggestions: ['Ver catálogo', 'Promociones', 'Garantía'],
  },
  {
    keywords: ['manija', 'manijas', 'picaporte', 'tirador'],
    reply:
      'Nuestras manijas van desde $13,60 (redonda de latón) y $18,75 (palanca negra mate, en promoción). Todas incluyen tornillos de instalación.',
    suggestions: ['Ver catálogo', 'Promociones', 'Precios'],
  },
  {
    keywords: ['herradura', 'herraduras'],
    reply:
      'Las herraduras decorativas están desde $8,50 con descuento. También tenemos herradura magnética, de pared vintage y pasadores de embutir. Son ideales para puertas y decoración.',
    suggestions: ['Ver catálogo', 'Promociones', 'Horario'],
  },
  {
    keywords: ['tornillo', 'tornillos', 'tornilleria'],
    reply:
      'El kit de 50 tornillos para bisagras cuesta $6,90 (antes $9,50). También contamos con tornillería suelta; dime qué medida necesitas y te asesoramos.',
    suggestions: ['Ver catálogo', 'Precios', 'Asesor'],
  },
  {
    keywords: ['precio', 'precios', 'cuanto cuesta', 'cuanto vale', 'costo', 'costos', 'valor'],
    reply:
      'Nuestros precios van desde $3,25 hasta $89,99 según el producto. Todos incluyen IVA y tienen garantía de 6 meses. Puedes ver cada precio en la pestaña Catálogo.',
    suggestions: ['Ver catálogo', 'Promociones', 'Métodos de pago'],
  },
  {
    keywords: ['horario', 'horarios', 'abierto', 'abren', 'cierran', 'atienden', 'atencion'],
    reply:
      'Atendemos de lunes a viernes de 8:00 a 18:00 y los sábados de 8:00 a 13:00. Los domingos permanecemos cerrados.',
    suggestions: ['Ubicación', 'Precios', 'Ver catálogo'],
  },
  {
    keywords: ['ubicacion', 'direccion', 'donde estan', 'donde queda', 'local', 'sucursal', 'como llego'],
    reply:
      'Estamos en Calle 10 de Agosto y Bolívar, Local 4, frente al parque central. Puedes llamarnos al +593 99 123 4567 si necesitas indicaciones.',
    suggestions: ['Horario', 'Contacto', 'Ver catálogo'],
  },
  {
    keywords: ['pago', 'pagos', 'tarjeta', 'tarjetas', 'efectivo', 'transferencia', 'transferencias', 'paypal'],
    reply:
      'Aceptamos efectivo, tarjetas de débito y crédito, y transferencias bancarias. Para compras por WhatsApp coordinamos el pago de tu compra.',
    suggestions: ['Horario', 'Contacto', 'Ver catálogo'],
  },
  {
    keywords: ['garantia', 'garantias', 'devolucion', 'devoluciones', 'cambio', 'cambios'],
    reply:
      'Todos nuestros herrajes tienen 6 meses de garantía por defectos de fabricación. Si algo no funciona, acércate al local con tu comprobante y lo revisamos sin costo.',
    suggestions: ['Contacto', 'Horario', 'Ver catálogo'],
  },
  {
    keywords: ['catalogo', 'productos', 'que venden', 'que tienen', 'inventario', 'modelos'],
    reply:
      'En el catálogo encontrarás bisagras, cerraduras, manijas, herraduras decorativas, tornillería y accesorios. Puedes filtrar por categoría, buscar por nombre y ordenar por precio.',
    suggestions: ['Promociones', 'Precios', 'Horario'],
    action: 'catalogo',
  },
  {
    keywords: ['asesor', 'asesora', 'humano', 'persona', 'whatsapp', 'telefono', 'contacto', 'llamar', 'correo'],
    reply:
      'Puedes hablar con un asesor por WhatsApp al +593 99 123 4567 o escribir a ventas@herraduras.com. Respondemos en horario de atención: L-V de 8:00 a 18:00 y sábados hasta las 13:00.',
    suggestions: ['Horario', 'Ubicación', 'Ver catálogo'],
  },
  {
    keywords: ['hola', 'buenas', 'buenos dias', 'buenas tardes', 'buenas noches', 'que tal', 'saludos', 'hey'],
    reply:
      '¡Hola! Soy Herra, tu asistente virtual. Puedo ayudarte con productos, precios, promociones y horarios. ¿Qué deseas saber?',
    suggestions: defaultSuggestions,
  },
  {
    keywords: ['gracias', 'muchas gracias', 'perfecto', 'excelente'],
    reply: '¡Con gusto! Si necesitas algo más, aquí estoy para ayudarte.',
    suggestions: defaultSuggestions,
  },
  {
    keywords: ['adios', 'chao', 'hasta luego', 'nos vemos', 'bye'],
    reply: '¡Hasta pronto! Gracias por visitar Herraduras. Que tengas un buen día.',
    suggestions: ['Ver promociones', 'Ver catálogo'],
  },
];

function findReply(text) {
  const normalized = normalize(text);
  return chatRules.find((rule) => rule.keywords.some((keyword) => normalized.includes(keyword)));
}

function addMessage(text, sender) {
  const wrapper = document.createElement('div');
  wrapper.className = `msg msg-${sender}`;

  if (sender === 'bot') {
    const avatar = document.createElement('span');
    avatar.className = 'msg-avatar';
    avatar.textContent = 'H';
    avatar.setAttribute('aria-hidden', 'true');
    wrapper.appendChild(avatar);
  }

  const bubble = document.createElement('div');
  bubble.className = 'msg-bubble';
  bubble.textContent = text;
  wrapper.appendChild(bubble);
  chatMessages.appendChild(wrapper);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showTyping() {
  const typing = document.createElement('div');
  typing.className = 'msg msg-bot typing';
  typing.id = 'typingIndicator';
  typing.innerHTML =
    '<span class="msg-avatar" aria-hidden="true">H</span><div class="msg-bubble" aria-label="Herra está escribiendo"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>';
  chatMessages.appendChild(typing);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTyping() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

function setQuickReplies(suggestions) {
  chatQuick.innerHTML = '';
  suggestions.forEach((suggestion) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'quick-btn';
    button.textContent = suggestion;
    button.addEventListener('click', () => sendChatMessage(suggestion));
    chatQuick.appendChild(button);
  });
}

let replyTimeout;

function sendChatMessage(rawText) {
  const text = rawText.trim();
  if (!text) return;

  addMessage(text, 'user');
  chatInput.value = '';
  setQuickReplies([]);
  showTyping();

  const rule = findReply(text);
  clearTimeout(replyTimeout);

  replyTimeout = setTimeout(() => {
    hideTyping();
    const reply = rule
      ? rule.reply
      : 'No estoy seguro de haber entendido. Puedo ayudarte con horarios, precios, productos y promociones. También puedes pedir hablar con un asesor.';
    addMessage(reply, 'bot');
    setQuickReplies(rule && rule.suggestions ? rule.suggestions : defaultSuggestions);

    if (rule && rule.action === 'promos') {
      switchTab('promos');
    } else if (rule && rule.action === 'catalogo') {
      switchTab('catalogo');
    }
  }, 700);
}

function openChat() {
  chatPanel.classList.add('open');
  chatPanel.setAttribute('aria-hidden', 'false');
  chatLauncher.setAttribute('aria-expanded', 'true');

  if (!chatStarted) {
    chatStarted = true;
    addMessage(
      '¡Hola! Soy Herra, tu asistente virtual de Herraduras. Puedo ayudarte con productos, precios, horarios y promociones. ¿Qué necesitas?',
      'bot'
    );
    setQuickReplies(defaultSuggestions);
  }

  setTimeout(() => chatInput.focus(), 180);
}

function closeChat() {
  chatPanel.classList.remove('open');
  chatPanel.setAttribute('aria-hidden', 'true');
  chatLauncher.setAttribute('aria-expanded', 'false');
  chatLauncher.focus();
}

chatLauncher.addEventListener('click', () => {
  if (chatPanel.classList.contains('open')) {
    closeChat();
  } else {
    openChat();
  }
});

closeChatBtn.addEventListener('click', closeChat);

chatForm.addEventListener('submit', (event) => {
  event.preventDefault();
  sendChatMessage(chatInput.value);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && chatPanel.classList.contains('open')) {
    closeChat();
  }
});

document.getElementById('year').textContent = String(new Date().getFullYear());
