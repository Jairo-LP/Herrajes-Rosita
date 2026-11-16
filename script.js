const ICONS = {
  horseshoe: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10C14 16 11 24 11 33c0 12 9 21 21 21s21-9 21-21c0-9-3-17-10-23"/><circle cx="17" cy="29" r="1.6" fill="currentColor" stroke="none"/><circle cx="15" cy="38" r="1.6" fill="currentColor" stroke="none"/><circle cx="20" cy="48" r="1.6" fill="currentColor" stroke="none"/><circle cx="47" cy="29" r="1.6" fill="currentColor" stroke="none"/><circle cx="49" cy="38" r="1.6" fill="currentColor" stroke="none"/><circle cx="44" cy="48" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  hinge: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="12" y="9" width="14" height="46" rx="3"/><rect x="38" y="9" width="14" height="46" rx="3"/><path d="M26 15h12M26 49h12"/><circle cx="19" cy="20" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="32" r="1.5" fill="currentColor" stroke="none"/><circle cx="19" cy="44" r="1.5" fill="currentColor" stroke="none"/><circle cx="45" cy="20" r="1.5" fill="currentColor" stroke="none"/><circle cx="45" cy="32" r="1.5" fill="currentColor" stroke="none"/><circle cx="45" cy="44" r="1.5" fill="currentColor" stroke="none"/></svg>`,
  lock: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="28" width="32" height="27" rx="5"/><path d="M23 28v-7a9 9 0 0 1 18 0v7"/><circle cx="32" cy="40" r="3"/><path d="M32 43v5"/></svg>`,
  handle: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="32" r="8"/><circle cx="18" cy="32" r="2"/><path d="M26 32h20a6 6 0 0 0 6-6v-4"/><path d="M46 22h10"/></svg>`,
  screw: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M24 8h16l-2.5 34h-11L24 8Z"/><path d="M27 15h10M28 23h8M29 31h6"/><path d="M28 42h8l-4 14-4-14Z"/></svg>`,
  keypad: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="15" y="8" width="34" height="48" rx="5"/><circle cx="24" cy="20" r="2" fill="currentColor" stroke="none"/><circle cx="32" cy="20" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="20" r="2" fill="currentColor" stroke="none"/><circle cx="24" cy="30" r="2" fill="currentColor" stroke="none"/><circle cx="32" cy="30" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="30" r="2" fill="currentColor" stroke="none"/><circle cx="24" cy="40" r="2" fill="currentColor" stroke="none"/><circle cx="32" cy="40" r="2" fill="currentColor" stroke="none"/><circle cx="40" cy="40" r="2" fill="currentColor" stroke="none"/><path d="M22 48h20"/></svg>`,
  hydraulic: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="21" cy="32" r="10"/><circle cx="21" cy="32" r="3"/><path d="M31 32h17"/><path d="M48 21v22"/><rect x="53" y="17" width="4" height="30" rx="2"/></svg>`,
  peephole: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="32" cy="32" r="20"/><circle cx="32" cy="32" r="11"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/><path d="M32 4v4M32 56v4M4 32h4M56 32h4"/></svg>`,
  bolt: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="28" width="44" height="11" rx="5.5"/><path d="M46 28v-8a4 4 0 0 0-4-4H30"/><circle cx="26" cy="16" r="3"/><path d="M18 39v9M46 39v9"/></svg>`,
  stop: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 54h32"/><path d="M20 54V40a12 12 0 0 1 24 0v14"/><circle cx="32" cy="24" r="4"/></svg>`,
  padlock: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="14" y="28" width="36" height="28" rx="6"/><path d="M22 28v-8a10 10 0 0 1 20 0v8"/><circle cx="32" cy="40" r="3"/><path d="M32 43v6"/><path d="M14 38h36"/></svg>`,
  hook: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 10v26a12 12 0 0 0 24 0v-6"/><circle cx="16" cy="8" r="3"/><path d="M40 30a6 6 0 0 0 12 0v-6"/></svg>`,
};

const products = [
  { id: 1, name: 'Herradura decorativa para puerta', category: 'Herraduras', price: 8.5, oldPrice: 12.99, note: 'Acabado forjado a mano' },
  { id: 2, name: 'Bisagra de acero inoxidable 4"', category: 'Bisagras', price: 3.25, oldPrice: 4.5, note: 'Acero inoxidable · 4 pulgadas' },
  { id: 3, name: 'Cerradura de seguridad multipunto', category: 'Cerraduras', price: 49.9, oldPrice: 65, note: 'Tres puntos de anclaje' },
  { id: 4, name: 'Manija de palanca negra mate', category: 'Manijas', price: 18.75, oldPrice: 24.99, note: 'Acabado negro mate' },
  { id: 5, name: 'Kit de tornillos para bisagras', category: 'Tornillería', price: 6.9, oldPrice: 9.5, note: '50 unidades · acero zincado' },
  { id: 6, name: 'Cerradura electrónica con teclado', category: 'Cerraduras', price: 89.99, note: 'Clave numérica y tarjeta', isNew: true },
  { id: 7, name: 'Herradura magnética para puerta', category: 'Herraduras', price: 14.5, note: 'Cierre silencioso', isNew: true },
  { id: 8, name: 'Bisagra hidráulica invisible', category: 'Bisagras', price: 27.9, note: 'Cierre automático suave', isNew: true },
  { id: 9, name: 'Mirilla digital con cámara', category: 'Cerraduras', price: 72, note: 'Visión nocturna · pantalla LCD', isNew: true },
  { id: 10, name: 'Pasador de embutir inoxidable', category: 'Herraduras', price: 11.2, note: 'Acero inoxidable satinado' },
  { id: 11, name: 'Tope de puerta de acero', category: 'Accesorios', price: 5.4, note: 'Protege paredes y puertas' },
  { id: 12, name: 'Candado de alta seguridad', category: 'Cerraduras', price: 22.3, note: 'Arco templado · 50 mm' },
  { id: 13, name: 'Perchero de herradura', category: 'Accesorios', price: 9.99, note: 'Hierro forjado · 3 ganchos' },
  { id: 14, name: 'Manija redonda de latón', category: 'Manijas', price: 13.6, note: 'Latón pulido · roseta 50 mm' },
  { id: 15, name: 'Bisagra de libro 3" (par)', category: 'Bisagras', price: 7.8, note: 'Par de bisagras · 3 pulgadas' },
  { id: 16, name: 'Herradura de pared vintage', category: 'Herraduras', price: 12.4, note: 'Estilo rústico envejecido' },
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
        <span class="product-icon">${ICONS[product.icon] || ICONS.horseshoe}</span>
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

const chatRules = [
  {
    keywords: ['promocion', 'promociones', 'oferta', 'ofertas', 'descuento', 'descuentos', 'rebaja', 'rebajas'],
    reply:
      'Tenemos ofertas activas con hasta 30% de descuento en herraduras decorativas, bisagras de acero y cerraduras multipunto. Te llevo a la pestaña de promociones.',
    suggestions: ['Ver catálogo', 'Horario', 'Precios'],
    action: 'promos',
  },
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
