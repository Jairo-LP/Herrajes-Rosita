//CATALOGO DE PRODUCTOS FILTRADO  
const products = [
  { id: 1, name: 'Lavabo',
    category: 'Accesorios de Cocina', 
    price: 8.5, 
    note: 'Acabado en acero inoxidable 304',
    img: 'imgcat/lavabo.jpg',
    icon: 'lavabo' },

  { id: 2, name: 'Despensa de Cierre Lento', 
    category: 'Accesorios de Cocina', 
    price: 3.25, 
    img: 'imgcat/dcl.jpg',
    note: 'Ancho: 385mm',
    note:'Profundidad: 530mm',
    note: 'Altura: 1320/1620mm' },

  { id: 3, name: 'Columna Extraible', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/ce.jpg',
    price: 49.9, 
    note: 'Tres puntos de anclaje' },

  { id: 4, name: 'Despensa de Lujo de cierre lento', 
    category: 'Accesorios de Cocina', 
    price: 18.75, 
    img: 'imgcat/dl.jpg',
    note: 'Acabado negro mate' },

  { id: 5, name: 'Esquinero Magic cierre lento', 
    category: 'Accesorios de Cocina', 
    price: 6.9, 
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
    img: 'imgcat/dab.jpg',
    note: 'Modulo Bajo',
     isNew: true },

  { id: 10, name: 'Cesta Extraible Lateral', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/cel.jpg',
    price: 11.2, note: 'Acero inoxidable satinado' },

  { id: 11, name: 'Cesta Portabotellas', 
    category: 'Accesorios de Cocina', 
    img: 'imgcat/cpb.jpg',
    price: 5.4, 
    note: 'Protege paredes y puertas' },

  { id: 12, name: 'Cesta Multiusos', 
    category: 'Accesorios de Cocina', 
    price: 22.3, 
    img: 'imgcat/cmu.jpg',
    note: 'Arco templado · 50 mm' },

  { id: 13, name: 'Cesto de Cierre Lento', 
    category: 'Accesorios de Cocina', 
    price: 9.99, 
    img: 'imgcat/cc.jpg',
    note: 'Hierro forjado · 3 ganchos' },

  { id: 14, name: 'Cesto Dos Niveles', 
    category: 'Accesorios de Cocina', 
    price: 13.6, 
    img: 'imgcat/cdn.jpg',
    note: 'Latón pulido · roseta 50 mm' },

  { id: 15, name: 'Lumbrero', 
    category: 'Accesorios de Cocina', 
    price: 7.8, 
    img: 'imgcat/lumbrero.jpg',
    note: 'Par de bisagras · 3 pulgadas' },

  { id: 16, name: 'Condimentero PortaPlatos', 
    category: 'Accesorios de Cocina', 
    price: 12.4, 
    img: 'imgcat/cpp.jpg',
    note: 'Estilo rústico envejecido' },

  { id: 17, name: 'Cesta de cierre lento', 
    category: 'Accesorios de Cocina', 
    price: 15.9, 
    img: 'imgcat/ca.jpg',
    note: 'Acero inoxidable satinado' },

  { id: 18, name: 'Cesta de cierre lento en U', 
    category: 'Accesorios de Cocina', 
    price: 19.9, 
    img: 'imgcat/clu.jpg',
    note: 'Acero inoxidable satinado' },
  
  { id: 19, name: 'Basuero Simple',
    category: 'Basureros de Cocina',
    price: 12.5,
    img: 'imgcat/basurero.jpg',
    note: 'Material resistente y fácil de limpiar' },

  { id: 20, name: 'Basuero Doble',
    category: 'Basureros de Cocina',
    price: 18.75,
    img: 'imgcat/bd.jpg',
    note: 'Diseño moderno y funcional' },

  { id: 21, name: 'Basuero Doble Premium',
    category: 'Basureros de Cocina',
    price: 24.99,
    img: 'imgcat/basdp.jpg',
    note: 'Material de alta calidad y acabado premium' },

  { id: 22, name: 'Basuero Doble con Tapa',
    category: 'Basureros de Cocina',
    price: 22.5,
    img: 'imgcat/bdt.jpg',
    note: 'Diseño moderno y funcional' },

  { id: 23, name: 'Cesta Abatible Ajustable',
    category: 'Accesorios de Mueble Alto',
    price: 29.99,
    img: 'imgcat/caa.jpg',
    note: 'Ajustable a diferentes tamaños de gabinetes' },

  { id: 24, name: 'Bandeja de Platos',
    category: 'Accesorios de Mueble Alto',
    price: 14.5,
    img: 'imgcat/bdplatos.jpg',
    note: 'Diseño elegante y funcional' },
  
  { id: 25, name: 'Accesorio Abrir Cierre Lento',
    category: 'Accesorios',
    price: 19.9,
    img: 'imgcat/aacl.jpg',
    note: 'Acabado: Cromado' },
  
  {id: 26, name: 'Avento Cierre Lento',
    category: 'Accesorios',
    price: 27.9,
    img: 'imgcat/avcl.jpg',
    note: 'Acabado: plastico' },

  { id: 27, name: 'Avento Puerta Doble',
    category: 'Accesorios',
    price: 49.9,
    img: 'imgcat/avpd.jpg',
    note: 'Acabado: Plastico' },

  { id: 28, name: 'Avento Puerta Simple',
    category: 'Accesorios',
    price: 39.9,
    img: 'imgcat/avps.jpg',
    note: 'Acabado: Plastico' },

  { id: 29, name: 'Avento Emportable',
    category: 'Accesorios',
    price: 59.9,
    img: 'imgcat/ave.jpg',
    note: 'Acabado: Negro Mate' },

  { id: 30, name: 'Escurridor Exterior',
    category: 'Accesorios',
    price: 24.9,
    img: 'imgcat/ese.jpg',
    note: 'Acabado: Cromado' },
  
  { id: 31, name: 'Accesorio SS-304',
    category: 'Accesorios',
    price: 19.9,
    img: 'imgcat/ass304.jpg',
    note: 'Acero inoxidable' },

  { id: 32, name: 'Tuvo de Acero Inoxidable',
    category: 'Accesorios',
    price: 29.9,
    img: 'imgcat/tai.jpg',
    note: 'Acero inoxidable' },

  { id: 33, name: 'Porta Cubiertos',
    category: 'Accesorios',
    price: 14.9,
    img: 'imgcat/pc.jpg',
    note: 'Material resistente y fácil de limpiar' },

  { id: 34, name: 'Torre Space Extraible',
    category: 'Línea Premium',
    price: 39.9,
    img: 'imgcat/tosex.jpg',
    note: 'Diseño moderno y funcional' },

  { id: 35, name: 'Torre Extraible',
    category: 'Línea Premium',
    price: 49.9,
    img: 'imgcat/tex.jpg',
    note: 'Aluminio Antideslizante' },

  { id: 36, name: 'Platero',
    category: 'Línea Premium',
    price: 59.9,
    img: 'imgcat/platero.jpg',
    note: 'Aluminio y Vidriox' },

  { id: 37, name: 'Ollero',
    category: 'Línea Premium',
    price: 69.9,
    img: 'imgcat/ollero.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 38, name: 'Condimentero Lateral',
    category: 'Línea Premium',
    price: 79.9,
    img: 'imgcat/condl.jpg',
    note: 'Acero Inoxidable y Vidrio' },

  { id: 39, name: 'Condimentero Central',
    category: 'Línea Premium',
    price: 89.9,
    img: 'imgcat/condc.jpg',
    note: 'Acero Inoxidable y Vidrio' },

  { id: 40, name: 'Despensa Abatible',
    category: 'Línea Premium',
    price: 99.9,
    img: 'imgcat/desabat.jpg',
    note: 'Aluminio Antideslizante' },

  { id: 41, name: 'Magic Corner (derecho)',
    category: 'Línea Premium',
    price: 109.9,
    img: 'imgcat/mcd.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 42, name: 'Magic Corner (izquierdo)',
    category: 'Línea Premium',
    price: 109.9,
    img: 'imgcat/mci.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 43, name: 'Super Magic Corner (De Vidrio)',
    category: 'Línea Premium',
    price: 119.9,
    img: 'imgcat/supmc.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 44, name: 'Cesta Abtible (aluminio)',
    category: 'Línea Premium',
    price: 129.9,
    img: 'imgcat/cestaabt.jpg',
    note: 'Aluminio y Vidrio' }, 

  { id: 45, name: 'Porta Copas',
    category: 'Línea Premium',
    price: 139.9,
    img: 'imgcat/portacopas.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 46, name: 'Columna Extraible (de Vidrio)',
    category: 'Línea Premium',
    price: 149.9,
    img: 'imgcat/colexvr.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 47, name: 'Despensa Abatible (de Vidrio)',
    category: 'Línea Premium',
    price: 159.9,
    img: 'imgcat/desabatv.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 48, name: 'Cesta Abatible (de Vidrio)',
    category: 'Línea Premium',
    price: 169.9,
    img: 'imgcat/cestaabtv.jpg',
    note: 'Aluminio y Vidrio' },

  { id: 49, name: 'Riel Cajon S',
    category: 'Línea Premium',
    price: 179.9,
    img: 'imgcat/rielcajon.jpg',
    note: 'Metal y Vidrio' },

  {id: 50, name: 'Riel Cajon L',
    category: 'Línea Premium',
    price: 189.9,
    img: 'imgcat/rielcajonl.jpg',
    note: 'Metal y Vidrio' },

  {id: 51, name: 'Dream Box S Front',
    category: 'Línea Premium',
    price: 199.9,
    img: 'imgcat/dreamboxs.jpg',
    note: 'Aluminio y Vidrio' },

  {id: 52, name: 'Dream Box L Front',
    category: 'Línea Premium',
    price: 209.9,
    img: 'imgcat/dreamboxl.jpg',
    note: 'Aluminio y Vidrio' },

  {id: 53, name: 'Riel Sincronizada',
    category: 'Línea Premium',
    price: 219.9,
    img: 'imgcat/rielsincronizada.jpg',
    note: 'Push Open y Soft Close' },
    //ACCESORIOS DE DORMITORIO
  {id: 54, name: 'Soporte Abatible',
    category: 'Accesorios de Dormitorio',
    price: 229.9,
    img: 'imgcat/soporteabatible.jpg',
    note: 'Aluminio y Vidrio' },

  {id: 55, name: 'Esquinero Alfa Giratorio',
    category: 'Accesorios de Dormitorio',
    price: 239.9,
    img: 'imgcat/esquinerogiratorio.jpg',
    note: 'Aluminio' },

  {id: 56, name: 'Soporte Extraible de Armadores',
    category: 'Accesorios de Dormitorio',
    price: 249.9,
    img: 'imgcat/soporteextraible.jpg',
    note: 'Aluminio' },

  {id: 57, name: 'Colgador Doble para Pantalones',
    category: 'Accesorios de Dormitorio',
    price: 259.9,
    img: 'imgcat/colgadordoble.jpg',
    note: 'Aluminio'},

  {id: 58, name: 'Colgador Simple para Pantalones',
    category: 'Accesorios de Dormitorio',
    price: 269.9,
    img: 'imgcat/colgadorsimple.jpg',
    note: 'Aluminio'},

  {id: 59, name: 'Cesta Extraible Para Closet (Alambre)',
    category: 'Accesorios de Dormitorio',
    price: 279.9,
    img: 'imgcat/cestaextraible.jpg',
    note: 'Aluminio'},

  {id: 60, name: 'Porta Pantalones Extraible',
    category: 'Accesorios de Dormitorio',
    price: 289.9,
    img: 'imgcat/portapantalones.jpg',
    note: 'Aluminio'},

  {id: 61, name: 'Joyero Perla',
    category: 'Accesorios de Dormitorio',
    price: 299.9,
    img: 'imgcat/joyeroperla.jpg',
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

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function createCarousel({ root, track, dots, prev, next, items, label, slide, interval }) {
  let index = 0;
  let timer = null;
  let touchStartX = null;

  dots.innerHTML = items
    .map((item, position) => `<button class="carousel-dot" type="button" data-index="${position}" aria-label="Mostrar ${label(item)}"></button>`)
    .join('');

  function render() {
    track.innerHTML = slide(items[index], index, items.length);
    dots.querySelectorAll('.carousel-dot').forEach((dot, position) => {
      if (position === index) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });
  }

  function show(position) {
    index = (position + items.length) % items.length;
    render();
  }

  function stop() {
    if (timer === null) return;
    clearInterval(timer);
    timer = null;
  }

  function start() {
    if (timer !== null || reduceMotion.matches) return;
    timer = setInterval(() => show(index + 1), interval);
  }

  function restart() {
    stop();
    start();
  }

  function resume() {
    if (!root.matches(':hover') && !root.contains(document.activeElement)) start();
  }

  prev.addEventListener('click', () => {
    show(index - 1);
    restart();
  });

  next.addEventListener('click', () => {
    show(index + 1);
    restart();
  });

  dots.addEventListener('click', (event) => {
    const dot = event.target.closest('.carousel-dot');
    if (!dot) return;
    show(Number(dot.dataset.index));
    restart();
  });

  root.addEventListener('keydown', (event) => {
    const moves = { ArrowRight: 1, ArrowLeft: -1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    show(index + moves[event.key]);
    restart();
  });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', resume);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', (event) => {
    if (!root.contains(event.relatedTarget)) setTimeout(resume, 0);
  });

  root.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
  }, { passive: true });

  root.addEventListener('touchend', (event) => {
    if (touchStartX === null) return;
    const delta = event.changedTouches[0].screenX - touchStartX;
    if (Math.abs(delta) > 40) {
      show(index + (delta < 0 ? 1 : -1));
      restart();
    }
    touchStartX = null;
  }, { passive: true });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else resume();
  });

  render();
  start();

  return {
    items,
    get index() {
      return index;
    },
  };
}

const carouselProducts = [...new Map(products.map((product) => [product.category, product])).values()].slice(0, 6);
const productCarousel = createCarousel({
  root: document.getElementById('carousel'),
  track: document.getElementById('carouselTrack'),
  dots: document.getElementById('carouselDots'),
  prev: document.getElementById('carouselPrev'),
  next: document.getElementById('carouselNext'),
  items: carouselProducts,
  label: (product) => product.name,
  interval: 5000,
  slide: (product, index, total) => `
    <article class="carousel-slide">
      <div class="carousel-media">
        <img src="${product.img}" alt="${product.name}">
        <span class="carousel-counter">${index + 1} / ${total}</span>
      </div>
      <div class="carousel-info">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.note}</p>
        <div class="carousel-foot">
          <span class="price-now">${formatPrice(product.price)}</span>
          <button class="btn btn-primary" type="button" data-tab-go="catalogo">Ver en el catálogo</button>
        </div>
      </div>
    </article>
  `,
});

document.getElementById('carouselTrack').addEventListener('click', (event) => {
  const button = event.target.closest('[data-tab-go]');
  if (!button) return;
  const product = productCarousel.items[productCarousel.index];
  searchInput.value = product.name;
  categorySelect.value = 'all';
  sortSelect.value = 'relevance';
  renderCatalog();
  switchTab(button.dataset.tabGo);
});

const branches = [
  {
    name: 'Matriz',
    address: 'Av. Mariscal Sucre y Carancqui, Local 1',
    address2: '0982441399',
    image: 'ImgSucursales/Magdalena.jpg',
    map: 'https://maps.app.goo.gl/hhgFxztEF9j22GHK7',
  },
  {
    name: 'Sucursal 1',
    address: 'La Bretaña, Av. Pedro Vicente y La Cocha',
    address2: '0960758920',
    image: 'ImgSucursales/Bretaña.jpg',
    map: 'https://maps.app.goo.gl/L6wbarswuFd9Bnmw6',
  },
  {
    name: 'Sucursal 2',
    address: 'Guamani, Av Pedro Vicente M. y S64 Patricio Romero',
    address2: '0960758964',
    image: 'ImgSucursales/Guamani.jpg',
    map: 'https://maps.app.goo.gl/sokw4p3P1anDVnAH8',
  },
  {
    name: 'Sucursal 3',
    address: 'La Floresta N24b, Madrid E14-21 y Lugo',
    address2: '0959445170',
    image: 'ImgSucursales/logo.jpg',
    map: 'https://maps.app.goo.gl/BuFEehruW4F3MazTA',
  },
].map((branch) => ({
  image: 'imgcat/placeholder.jpg',
  phoneHref: `tel:+593${branch.address2.slice(1)}`,
  ...branch,
}));

createCarousel({
  root: document.getElementById('branchCarousel'),
  track: document.getElementById('branchTrack'),
  dots: document.getElementById('branchDots'),
  prev: document.getElementById('branchPrev'),
  next: document.getElementById('branchNext'),
  items: branches,
  label: (branch) => branch.name,
  interval: 6000,
  slide: (branch, index, total) => `
    <article class="carousel-slide branch-slide">
      <div class="branch-photo">
        <img src="${branch.image}" alt="Foto del establecimiento: ${branch.name}">
        <span class="branch-photo-hint">Foto del establecimiento</span>
        <span class="carousel-counter">${index + 1} / ${total}</span>
      </div>
      <div class="carousel-info">
        <span class="product-category">Dirección</span>
        <h3>${branch.name}</h3>
        <p>${branch.address}</p>
        <p class="branch-phone"><a href="${branch.phoneHref}">${branch.address2}</a></p>
        <div class="carousel-foot">
          <a class="btn btn-primary" href="${branch.map}" target="_blank" rel="noopener noreferrer">Cómo llegar</a>
        </div>
      </div>
    </article>
  `,
});

const chatLauncher = document.getElementById('chatLauncher');
const chatPanel = document.getElementById('chatPanel');
const closeChatBtn = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const chatQuick = document.getElementById('chatQuick');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

const defaultSuggestions = ['Ver catálogo', 'Horario', 'Precios'];
let chatStarted = false;

//CHATBOT RULES

const chatRules = [
  {
    keywords: ['bisagra', 'bisagras'],
    reply:
      'Tenemos bisagras de acero inoxidable desde $3,25, bisagras de libro desde $7,80 y bisagras hidráulicas desde $27,90. También vendemos kits de tornillos para instalación.',
    suggestions: ['Ver catálogo', 'Precios', 'Garantía'],
  },
  {
    keywords: ['cerradura', 'cerraduras', 'candado', 'candados', 'llave', 'seguridad'],
    reply:
      'En cerraduras tienes opciones desde $22,30 (candado de alta seguridad), la cerradura multipunto a $49,90 y la cerradura electrónica con teclado a $89,99.',
    suggestions: ['Ver catálogo', 'Garantía', 'Precios'],
  },
  {
    keywords: ['manija', 'manijas', 'picaporte', 'tirador'],
    reply:
       'Nuestras manijas van desde $13,60 (redonda de latón) y $18,75 (palanca negra mate). Todas incluyen tornillos de instalación.',
    suggestions: ['Ver catálogo', 'Precios', 'Garantía'],
  },
  {
    keywords: ['herradura', 'herraduras'],
    reply:
       'Las herraduras decorativas están desde $8,50. También tenemos herradura magnética, de pared vintage y pasadores de embutir. Son ideales para puertas y decoración.',
    suggestions: ['Ver catálogo', 'Precios', 'Horario'],
  },
  {
    keywords: ['tornillo', 'tornillos', 'tornilleria'],
    reply:
       'El kit de 50 tornillos para bisagras cuesta $6,90. También contamos con tornillería suelta; dime qué medida necesitas y te asesoramos.',
    suggestions: ['Ver catálogo', 'Precios', 'Asesor'],
  },
  {
    keywords: ['precio', 'precios', 'cuanto cuesta', 'cuanto vale', 'costo', 'costos', 'valor'],
    reply:
      'Nuestros precios van desde $3,25 hasta $89,99 según el producto. Todos incluyen IVA y tienen garantía de 6 meses. Puedes ver cada precio en la pestaña Catálogo.',
    suggestions: ['Ver catálogo', 'Garantía', 'Métodos de pago'],
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
    suggestions: ['Precios', 'Horario', 'Garantía'],
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
       '¡Hola! Soy Herra, tu asistente virtual. Puedo ayudarte con productos, precios, horarios y garantías. ¿Qué deseas saber?',
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
    suggestions: ['Ver catálogo', 'Horario'],
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
      : 'No estoy seguro de haber entendido. Puedo ayudarte con horarios, precios, productos y garantías. También puedes pedir hablar con un asesor.';
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
      '¡Hola! Soy Herra, tu asistente virtual de Herraduras. Puedo ayudarte con productos, precios, horarios y garantías. ¿Qué necesitas?',
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
