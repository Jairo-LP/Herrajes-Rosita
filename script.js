//CATALOGO DE PRODUCTOS FILTRADO  
const products = [
  { id: 1, name: 'Lavabo',
    category: 'Accesorios de Cocina', 
    price: 8.5, oldPrice: 12.99, 
    note: 'Acabado en acero inoxidable 304',
    img: 'imgcat/lavabo.jpg',
    icon: 'lavabo' },

  { id: 2, name: 'Despensa de Cierre Lento', 
    category: 'Accesorios de Cocina', 
    price: 3.25, oldPrice: 4.5, 
    img: 'imgcat/dcl.jpg',
    note: 'Ancho: 385mm',
    note:'Profundidad: 530mm',
    note: 'Altura: 1320/1620mm' },

  { id: 3, name: 'Columna Extraible', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/ce.jpg',
    price: 49.9, oldPrice: 65, 
    note: 'Tres puntos de anclaje' },

  { id: 4, name: 'Despensa de Lujo de cierre lento', 
    category: 'Accesorios de Cocina', 
    price: 18.75, oldPrice: 24.99, 
    img: 'imgcat/dl.jpg',
    note: 'Acabado negro mate' },

  { id: 5, name: 'Esquinero Magic cierre lento', 
    category: 'Accesorios de Cocina', 
    price: 6.9, oldPrice: 9.5, 
    img: 'imgcat/esquineros.jpg',
    note: '50 unidades · acero zincado' },

  { id: 6, name: 'Bandeja Oscilante de Cierre Lento', 
    category: 'Accesorios de Cocina', 
    price: 89.99, note: 'Clave numérica y tarjeta', 
    img: 'imgcat/bandeja.jpg',
    isNew: true },

  { id: 7, name: 'Super Magic', 
    category: 'Herraduras', 
    img: 'imgcat/sm.jpg',
    price: 14.5, 
    note: 'Cierre silencioso', isNew: true },

  { id: 8, name: 'Cesta Giratoria', 
    category: 'Bisagras', price: 27.9, 
    img: 'imgcat/cesta.jpg',

    note: 'Cierre automático suave', isNew: true },

  { id: 9, name: 'Despensa Abatible', 
    category: 'Accesorios de Cocina', 
    price: 72,
    img: 'imgcat/dab.png',
    note: 'Modulo Bajo',
     isNew: true },

  { id: 10, name: 'Cesta Extraible Lateral', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/cel.png',
    price: 11.2, note: 'Acero inoxidable satinado' },

  { id: 11, name: 'Cesta Portabotellas', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/cpb.png',
    price: 5.4, 
    note: 'Protege paredes y puertas' },

  { id: 12, name: 'Cesta Multiusos', 
    category: 'Accesorios de Cocina', 
    price: 22.3, 
    img: 'imgcat/cmu.png',
    note: 'Arco templado · 50 mm' },

  { id: 13, name: 'Cesto de Cierre Lento', 
    category: 'Accesorios de Cocina', 
    price: 9.99, 
    img: 'imgcat/cc.png',
    note: 'Hierro forjado · 3 ganchos' },

  { id: 14, name: 'Cesto Dos Niveles', 
    category: 'Accesorios de Cocina', 
    price: 13.6, 
    img: 'imgcat/cdn.png',
    note: 'Latón pulido · roseta 50 mm' },

  { id: 15, name: 'Lumbrero', 
    category: 'Accesorios de Cocina', 
    price: 7.8, 
    img: 'imgcat/lumbrero.png',
    note: 'Par de bisagras · 3 pulgadas' },

  { id: 16, name: 'Condimentero PortaPlatos', 
    category: 'Accesorios de Cocina', 
    price: 12.4, 
    img: 'imgcat/cpp.png',
    note: 'Estilo rústico envejecido' },

  { id: 17, name: 'Cesta de cierre lento', 
    category: 'Accesorios de Cocina', 
    price: 15.9, 
    img: 'imgcat/ca.png',
    note: 'Acero inoxidable satinado' },

  { id: 18, name: 'Cesta de cierre lento en U', 
    category: 'Accesorios de Cocina', 
    price: 19.9, 
    img: 'imgcat/clu.png',
    note: 'Acero inoxidable satinado' },
  
  { id: 19, name: 'Basuero Simple',
    category: 'Basureros de Cocina',
    price: 12.5,
    img: 'imgcat/basurero.png',
    note: 'Material resistente y fácil de limpiar' },

  { id: 20, name: 'Basuero Doble',
    category: 'Basureros de Cocina',
    price: 18.75,
    img: 'imgcat/bd.png',
    note: 'Diseño moderno y funcional' },

  { id: 21, name: 'Basuero Doble Premium',
    category: 'Basureros de Cocina',
    price: 24.99,
    img: 'imgcat/basdp.png',
    note: 'Material de alta calidad y acabado premium' },

  { id: 22, name: 'Basuero Doble con Tapa',
    category: 'Basureros de Cocina',
    price: 22.5,
    img: 'imgcat/bdt.png',
    note: 'Diseño moderno y funcional' },

  { id: 23, name: 'Cesta Abatible Ajustable',
    category: 'Accesorios de Mueble Alto',
    price: 29.99,
    img: 'imgcat/caa.png',
    note: 'Ajustable a diferentes tamaños de gabinetes' },

  { id: 24, name: 'Bandeja de Platos',
    category: 'Accesorios de Mueble Alto',
    price: 14.5,
    img: 'imgcat/bdplatos.png',
    note: 'Diseño elegante y funcional' },
  
  { id: 25, name: 'Accesorio Abrir Cierre Lento',
    category: 'Accesorios',
    price: 19.9,
    img: 'imgcat/aacl.png',
    note: 'Acabado: Cromado' },
  
  {id: 26, name: 'Avento Cierre Lento',
    category: 'Accesorios',
    price: 27.9,
    img: 'imgcat/avcl.png',
    note: 'Acabado: plastico' },

  { id: 27, name: 'Avento Puerta Doble',
    category: 'Accesorios',
    price: 49.9,
    img: 'imgcat/avpd.png',
    note: 'Acabado: Plastico' },

  { id: 28, name: 'Avento Puerta Simple',
    category: 'Accesorios',
    price: 39.9,
    img: 'imgcat/avps.png',
    note: 'Acabado: Plastico' },

  { id: 29, name: 'Avento Emportable',
    category: 'Accesorios',
    price: 59.9,
    img: 'imgcat/ave.png',
    note: 'Acabado: Negro Mate' },

  { id: 30, name: 'Escurridor Exterior',
    category: 'Accesorios',
    price: 24.9,
    img: 'imgcat/ese.png',
    note: 'Acabado: Cromado' },
  
  { id: 31, name: 'Accesorio SS-304',
    category: 'Accesorios',
    price: 19.9,
    img: 'imgcat/ass304.png',
    note: 'Acero inoxidable' },

  { id: 32, name: 'Tuvo de Acero Inoxidable',
    category: 'Accesorios',
    price: 29.9,
    img: 'imgcat/tai.png',
    note: 'Acero inoxidable' },

  { id: 33, name: 'Porta Cubiertos',
    category: 'Accesorios',
    price: 14.9,
    img: 'imgcat/pc.png',
    note: 'Material resistente y fácil de limpiar' },

  { id: 34, name: 'Torre Space Extraible',
    category: 'Línea Premium',
    price: 39.9,
    img: 'imgcat/tosex.png',
    note: 'Diseño moderno y funcional' },

  { id: 35, name: 'Torre Extraible',
    category: 'Línea Premium',
    price: 49.9,
    img: 'imgcat/tex.png',
    note: 'Aluminio Antideslizante' },

  { id: 36, name: 'Platero',
    category: 'Línea Premium',
    price: 59.9,
    img: 'imgcat/platero.png',
    note: 'Aluminio y Vidriox' },

  { id: 37, name: 'Ollero',
    category: 'Línea Premium',
    price: 69.9,
    img: 'imgcat/ollero.png',
    note: 'Aluminio y Vidrio' },

  { id: 38, name: 'Condimentero Lateral',
    category: 'Línea Premium',
    price: 79.9,
    img: 'imgcat/condl.png',
    note: 'Acero Inoxidable y Vidrio' },

  { id: 39, name: 'Condimentero Central',
    category: 'Línea Premium',
    price: 89.9,
    img: 'imgcat/condc.png',
    note: 'Acero Inoxidable y Vidrio' },

  { id: 40, name: 'Despensa Abatible',
    category: 'Línea Premium',
    price: 99.9,
    img: 'imgcat/desabat.png',
    note: 'Aluminio Antideslizante' },

  { id: 41, name: 'Magic Corner (derecho)',
    category: 'Línea Premium',
    price: 109.9,
    img: 'imgcat/mcd.png',
    note: 'Aluminio y Vidrio' },

  { id: 42, name: 'Magic Corner (izquierdo)',
    category: 'Línea Premium',
    price: 109.9,
    img: 'imgcat/mci.png',
    note: 'Aluminio y Vidrio' },

  { id: 43, name: 'Super Magic Corner (De Vidrio)',
    category: 'Línea Premium',
    price: 119.9,
    img: 'imgcat/supmc.png',
    note: 'Aluminio y Vidrio' },

  { id: 44, name: 'Cesta Abtible (aluminio)',
    category: 'Línea Premium',
    price: 129.9,
    img: 'imgcat/cestaabt.png',
    note: 'Aluminio y Vidrio' }, 

  { id: 45, name: 'Porta Copas',
    category: 'Línea Premium',
    price: 139.9,
    img: 'imgcat/portacopas.png',
    note: 'Aluminio y Vidrio' },

  { id: 46, name: 'Columna Extraible (de Vidrio)',
    category: 'Línea Premium',
    price: 149.9,
    img: 'imgcat/colexvr.png',
    note: 'Aluminio y Vidrio' },

  { id: 47, name: 'Despensa Abatible (de Vidrio)',
    category: 'Línea Premium',
    price: 159.9,
    img: 'imgcat/desabatv.png',
    note: 'Aluminio y Vidrio' },

  { id: 48, name: 'Cesta Abatible (de Vidrio)',
    category: 'Línea Premium',
    price: 169.9,
    img: 'imgcat/cestaabtv.png',
    note: 'Aluminio y Vidrio' },

  { id: 49, name: 'Riel Cajon S',
    category: 'Línea Premium',
    price: 179.9,
    img: 'imgcat/rielcajon.png',
    note: 'Metal y Vidrio' },

  {id: 50, name: 'Riel Cajon L',
    category: 'Línea Premium',
    price: 189.9,
    img: 'imgcat/rielcajonl.png',
    note: 'Metal y Vidrio' },

  {id: 51, name: 'Dream Box S Front',
    category: 'Línea Premium',
    price: 199.9,
    img: 'imgcat/dreamboxs.png',
    note: 'Aluminio y Vidrio' },

  {id: 52, name: 'Dream Box L Front',
    category: 'Línea Premium',
    price: 209.9,
    img: 'imgcat/dreamboxl.png',
    note: 'Aluminio y Vidrio' },

  {id: 53, name: 'Riel Sincronizada',
    category: 'Línea Premium',
    price: 219.9,
    img: 'imgcat/rielsincronizada.png',
    note: 'Push Open y Soft Close' },
    //ACCESORIOS DE DORMITORIO
  {id: 54, name: 'Soporte Abatible',
    category: 'Accesorios de Dormitorio',
    price: 229.9,
    img: 'imgcat/soporteabatible.png',
    note: 'Aluminio y Vidrio' },

  {id: 55, name: 'Esquinero Alfa Giratorio',
    category: 'Accesorios de Dormitorio',
    price: 239.9,
    img: 'imgcat/esquinerogiratorio.png',
    note: 'Aluminio' },

  {id: 56, name: 'Soporte Extraible de Armadores',
    category: 'Accesorios de Dormitorio',
    price: 249.9,
    img: 'imgcat/soporteextraible.png',
    note: 'Aluminio' },

  {id: 57, name: 'Colgador Doble para Pantalones',
    category: 'Accesorios de Dormitorio',
    price: 259.9,
    img: 'imgcat/colgadordoble.png',
    note: 'Aluminio'},

  {id: 58, name: 'Colgador Simple para Pantalones',
    category: 'Accesorios de Dormitorio',
    price: 269.9,
    img: 'imgcat/colgadorsimple.png',
    note: 'Aluminio'},

  {id: 59, name: 'Cesta Extraible Para Closet (Alambre)',
    category: 'Accesorios de Dormitorio',
    price: 279.9,
    img: 'imgcat/cestaextraible.png',
    note: 'Aluminio'},

  {id: 60, name: 'Porta Pantalones Extraible',
    category: 'Accesorios de Dormitorio',
    price: 289.9,
    img: 'imgcat/portapantalones.png',
    note: 'Aluminio'},

  {id: 61, name: 'Joyero Perla',
    category: 'Accesorios de Dormitorio',
    price: 299.9,
    img: 'imgcat/joyeroperla.png',
    note: 'Aluminio y Gamusa' }

]
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
        <img class="product-img" src="${product.img || 'imgcat/placeholder.jpg'}" alt="${product.name}" loading="lazy">
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
      'Tenemos ofertas activas con hasta 30% de descuento en herraduras decorativas, bisagras de acero y cerraduras multipunto. Puedes verlas en la pestaña Catálogo.',
    suggestions: ['Ver catálogo', 'Horario', 'Precios'],
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
      'Puedes hablar con un asesor por WhatsApp al +593 99 752 5832 o escribir a herrajes_rosita@hotmail.com. Respondemos en horario de atención: L-V de 8:00 a 18:00 y sábados hasta las 13:00.',
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

    if (rule && rule.action === 'catalogo') {
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
