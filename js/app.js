// Navigation et routing simple
document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Fermer le menu au clic sur un lien
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Mettre à jour l'année dans le footer
  const currentYear = document.getElementById('currentYear');
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Router simple basé sur l'URL
  const path = window.location.pathname;
  const filename = path.split('/').pop();
  const searchParams = new URLSearchParams(window.location.search);
  
  if (filename === 'index.html' || filename === '' || filename === 'index.html' || path === '/' || path.endsWith('/')) {
    loadHomePage();
  } else if (filename === 'categorie.html') {
    const cat = searchParams.get('cat');
    loadCategoryPage(cat);
  } else if (filename === 'produit.html') {
    const id = parseInt(searchParams.get('id'));
    loadProductPage(id);
  } else if (filename === 'about.html') {
    loadAboutPage();
  } else if (filename === 'contact.html') {
    loadContactPage();
  } else {
    // Par défaut, charger la page d'accueil
    loadHomePage();
  }
});

// Fonction pour créer un placeholder d'image
function createImagePlaceholder(text, color = '#e8e8e8', icon = 'image') {
  const placeholder = document.createElement('div');
  placeholder.className = 'image-placeholder';
  placeholder.style.backgroundColor = color;
  
  const content = document.createElement('div');
  content.className = 'placeholder-content';
  
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '64');
  svg.setAttribute('height', '64');
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '1.5');
  
  if (icon === 'shirt') {
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M6 3h12l4 6-10 12L2 9l4-6z');
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M6 3l6 6M18 3l-6 6');
    svg.appendChild(path1);
    svg.appendChild(path2);
  } else {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', '3');
    rect.setAttribute('y', '3');
    rect.setAttribute('width', '18');
    rect.setAttribute('height', '18');
    rect.setAttribute('rx', '2');
    rect.setAttribute('ry', '2');
    svg.appendChild(rect);
  }
  
  const textEl = document.createElement('span');
  textEl.className = 'placeholder-text';
  textEl.textContent = text;
  
  content.appendChild(svg);
  content.appendChild(textEl);
  placeholder.appendChild(content);
  
  return placeholder;
}

// Fonction pour charger une image avec fallback
function loadImageWithFallback(img, src, placeholderText, placeholderColor, placeholderIcon) {
  img.onerror = function() {
    const placeholder = createImagePlaceholder(placeholderText, placeholderColor, placeholderIcon);
    img.style.display = 'none';
    img.parentNode.appendChild(placeholder);
  };
  img.src = src;
}

// Page d'accueil
function loadHomePage() {
  const main = document.getElementById('main-content');
  if (!main) return;
  
  main.innerHTML = `
    <!-- Bannière -->
    <section class="banner">
      <div class="banner-image">
        <img src="images/banner.jpg" alt="Portez l'Art. Devenez l'Oeuvre. - TANY COLLECTION" />
        <div class="banner-overlay">
          <div class="banner-content">
            <div class="banner-cta">
              <a href="categorie.html?cat=tshirts-sweats" class="btn btn-primary">
                Découvrir la collection
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Catégories -->
    <section class="categories">
      <div class="container">
        <h2 class="section-title">Nos Collections</h2>
        <div class="categories-grid">
          <a href="categorie.html?cat=tshirts-sweats" class="category-card">
            <div class="category-image">
              <img src="images/category-tshirts.jpg" alt="T-shirts et Sweats" />
            </div>
            <div class="category-content">
              <h3>T-shirts & Sweats à Capuche</h3>
              <p>Découvrez notre collection de vêtements personnalisés</p>
            </div>
          </a>

          <a href="categorie.html?cat=cravates" class="category-card">
            <div class="category-image">
              <img src="images/category-cravates.jpg" alt="Cravates" />
            </div>
            <div class="category-content">
              <h3>Cravates</h3>
              <p>Pièces d'exception en soie, uniques et élégantes</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- Produits en vedette -->
    <section class="featured">
      <div class="container">
        <h2 class="section-title">Pièces Sélectionnées</h2>
        <div class="products-grid" id="featuredProducts">
        </div>
      </div>
    </section>
  `;
  
  // Charger les produits en vedette
  const featuredProducts = products.slice(0, 4);
  const productsGrid = document.getElementById('featuredProducts');
  if (productsGrid) {
    featuredProducts.forEach(product => {
      productsGrid.appendChild(createProductCard(product));
    });
  }
  
  // Gérer les placeholders d'images
  setTimeout(() => {
    const bannerImg = main.querySelector('.banner-image img');
    if (bannerImg) {
      loadImageWithFallback(bannerImg, bannerImg.src, "Portez l'Art. Devenez l'Oeuvre.", '#87CEEB', 'image');
    }
    
    const categoryImgs = main.querySelectorAll('.category-image img');
    categoryImgs.forEach((img, index) => {
      const color = index === 0 ? '#d4e6f1' : '#e8d5c4';
      const icon = index === 0 ? 'shirt' : 'image';
      const text = index === 0 ? 'T-shirts & Sweats' : 'Cravates';
      loadImageWithFallback(img, img.src, text, color, icon);
    });
  }, 100);
}

// Page catégorie
function loadCategoryPage(categorySlug) {
  const main = document.getElementById('main-content');
  if (!main) return;
  
  const category = categories.find(cat => cat.slug === categorySlug);
  const categoryProducts = products.filter(p => p.category === categorySlug);
  
  main.innerHTML = `
    <div class="product-page">
      <div class="container">
        <div class="category-header">
          <h1 class="page-title">${category ? category.name : 'Catégorie'}</h1>
          <p class="page-subtitle">${category ? category.description : ''}</p>
        </div>
        <div class="products-grid" id="categoryProducts">
        </div>
      </div>
    </div>
  `;
  
  const productsGrid = document.getElementById('categoryProducts');
  if (productsGrid) {
    if (categoryProducts.length === 0) {
      productsGrid.innerHTML = '<p style="text-align: center; padding: 4rem 2rem; color: #999;">Aucun produit disponible dans cette catégorie pour le moment.</p>';
    } else {
      categoryProducts.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
      });
    }
  }
}

// Page produit
function loadProductPage(productId) {
  const main = document.getElementById('main-content');
  if (!main) return;
  
  const product = products.find(p => p.id === productId);
  if (!product) {
    main.innerHTML = `
      <div class="product-page">
        <div class="container">
          <div style="text-align: center; padding: 4rem 2rem;">
            <h2>Produit non trouvé</h2>
            <a href="index.html" class="btn btn-primary" style="margin-top: 2rem;">Retour à l'accueil</a>
          </div>
        </div>
      </div>
    `;
    return;
  }
  
  const sizesHtml = Object.entries(product.stock).map(([size, stock]) => {
    const isUnavailable = stock === 0;
    return `
      <button 
        class="size-btn ${isUnavailable ? 'unavailable' : ''}" 
        ${isUnavailable ? 'disabled' : ''}
        data-size="${size}"
      >
        <span class="size-label">${size}</span>
        <span class="size-stock">
          ${product.unique ? (stock > 0 ? 'Disponible' : 'Épuisé') : (stock > 0 ? `${stock} disponible${stock > 1 ? 's' : ''}` : 'Épuisé')}
        </span>
      </button>
    `;
  }).join('');
  
  const thumbnailsHtml = product.images.length > 1 ? `
    <div class="thumbnail-images">
      ${product.images.map((img, index) => `
        <button class="thumbnail ${index === 0 ? 'active' : ''}" data-image="${img}">
          <img src="${img}" alt="${product.name} - Vue ${index + 1}" />
        </button>
      `).join('')}
    </div>
  ` : '';
  
  main.innerHTML = `
    <div class="product-page">
      <div class="container">
        <a href="index.html" class="back-link">← Retour</a>
        <div class="product-details">
          <div class="product-gallery">
            <div class="main-image">
              <img src="${product.images[0]}" alt="${product.name}" id="mainProductImage" />
            </div>
            ${thumbnailsHtml}
          </div>
          <div class="product-info">
            ${product.unique ? '<div class="badge unique">Pièce Unique</div>' : ''}
            <h1 class="product-title">${product.name}</h1>
            <p class="product-price">${product.price}€</p>
            <div class="product-description">
              <p>${product.description}</p>
            </div>
            <div class="size-selection">
              <h3>Tailles disponibles</h3>
              <div class="sizes-grid">
                ${sizesHtml}
              </div>
            </div>
            <div class="product-actions">
              <a href="contact.html" class="btn btn-primary btn-large" id="contactBtn">
                Contacter pour commander
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Gérer les miniatures
  const thumbnails = main.querySelectorAll('.thumbnail');
  const mainImg = document.getElementById('mainProductImage');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      const imgSrc = this.getAttribute('data-image');
      if (mainImg) {
        mainImg.src = imgSrc;
      }
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Gérer les tailles
  const sizeBtns = main.querySelectorAll('.size-btn:not(.unavailable)');
  sizeBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      sizeBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });
  
  // Gérer les placeholders
  setTimeout(() => {
    if (mainImg) {
      loadImageWithFallback(mainImg, mainImg.src, product.name, '#e8e8e8', product.category === 'cravates' ? 'image' : 'shirt');
    }
    thumbnails.forEach(thumb => {
      const thumbImg = thumb.querySelector('img');
      if (thumbImg) {
        thumbImg.onerror = function() {
          const placeholder = createImagePlaceholder('', '#e8e8e8', 'image');
          placeholder.style.width = '100%';
          placeholder.style.height = '100%';
          thumbImg.style.display = 'none';
          thumb.appendChild(placeholder);
        };
      }
    });
  }, 100);
}

// Page À propos
function loadAboutPage() {
  const main = document.getElementById('main-content');
  if (!main) return;
  
  main.innerHTML = `
    <div class="about-page">
      <div class="container">
        <div class="about-header">
          <h1 class="page-title">À Propos</h1>
          <p class="page-subtitle">Votre histoire</p>
        </div>
        <div class="about-content">
          <div class="about-text">
            <p>
              Bienvenue sur TANY COLLECTION, un espace dédié à la création unique et personnalisée.
            </p>
            <p>
              Chaque pièce que je crée est le fruit d'une passion pour l'art et le textile. 
              Mes peintures originales prennent vie sur des t-shirts, des sweats à capuche 
              et des cravates en soie, transformant chaque article en une œuvre d'art portative.
            </p>
            <p>
              Que vous recherchiez une pièce unique ou une création disponible en plusieurs 
              exemplaires, chaque article est conçu avec soin et attention aux détails, 
              alliant qualité et esthétique.
            </p>
            <p>
              Explorez ma collection et découvrez des créations qui reflètent votre personnalité 
              et votre goût pour l'exceptionnel.
            </p>
          </div>
          <div class="about-image">
            <img src="images/about.jpg" alt="À propos" />
          </div>
        </div>
      </div>
    </div>
  `;
  
  setTimeout(() => {
    const aboutImg = main.querySelector('.about-image img');
    if (aboutImg) {
      loadImageWithFallback(aboutImg, aboutImg.src, 'À propos', '#f0f0f0', 'image');
    }
  }, 100);
}

// Page Contact
function loadContactPage() {
  const main = document.getElementById('main-content');
  if (!main) return;
  
  main.innerHTML = `
    <div class="contact-page">
      <div class="container">
        <div class="contact-header">
          <h1 class="page-title">Contact</h1>
          <p class="page-subtitle">N'hésitez pas à nous contacter pour toute question</p>
        </div>
        <div class="contact-content">
          <form class="contact-form" id="contactForm">
            <div class="form-group">
              <label for="name">Nom *</label>
              <input type="text" id="name" name="name" required placeholder="Votre nom" />
            </div>
            <div class="form-group">
              <label for="email">Email *</label>
              <input type="email" id="email" name="email" required placeholder="votre.email@exemple.com" />
            </div>
            <div class="form-group">
              <label for="subject">Sujet *</label>
              <input type="text" id="subject" name="subject" required placeholder="Sujet de votre message" />
            </div>
            <div class="form-group">
              <label for="product">Produit concerné (optionnel)</label>
              <input type="text" id="product" name="product" placeholder="Référence ou nom du produit" />
            </div>
            <div class="form-group">
              <label for="message">Message *</label>
              <textarea id="message" name="message" required rows="6" placeholder="Votre message..."></textarea>
            </div>
            <button type="submit" class="btn btn-primary btn-large">Envoyer le message</button>
            <div id="submitStatus"></div>
          </form>
          <div class="contact-info">
            <div class="info-block">
              <h3>Informations de contact</h3>
              <p>
                Pour toute demande concernant nos créations, commandes personnalisées 
                ou questions générales, utilisez le formulaire ci-contre.
              </p>
              <p>
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('submitStatus');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const mailtoLink = `mailto:votre-email@exemple.com?subject=${encodeURIComponent(formData.get('subject'))}&body=${encodeURIComponent(
        `Nom: ${formData.get('name')}\nEmail: ${formData.get('email')}\nProduit: ${formData.get('product') || 'N/A'}\n\nMessage:\n${formData.get('message')}`
      )}`;
      
      window.location.href = mailtoLink;
      
      if (statusDiv) {
        statusDiv.className = 'submit-status success';
        statusDiv.textContent = 'Merci pour votre message ! Votre client email s\'est ouvert.';
        form.reset();
        
        setTimeout(() => {
          statusDiv.textContent = '';
          statusDiv.className = '';
        }, 5000);
      }
    });
  }
}

// Créer une carte produit
function createProductCard(product) {
  const card = document.createElement('a');
  card.href = `produit.html?id=${product.id}`;
  card.className = 'product-card';
  
  const imageDiv = document.createElement('div');
  imageDiv.className = 'product-image';
  
  const img = document.createElement('img');
  img.src = product.images[0];
  img.alt = product.name;
  
  imageDiv.appendChild(img);
  
  if (product.unique) {
    const badge = document.createElement('div');
    badge.className = 'badge unique';
    badge.textContent = 'Pièce Unique';
    imageDiv.appendChild(badge);
  }
  
  const infoDiv = document.createElement('div');
  infoDiv.className = 'product-info';
  
  const name = document.createElement('h3');
  name.className = 'product-name';
  name.textContent = product.name;
  
  const price = document.createElement('p');
  price.className = 'product-price';
  price.textContent = `${product.price}€`;
  
  infoDiv.appendChild(name);
  infoDiv.appendChild(price);
  
  card.appendChild(imageDiv);
  card.appendChild(infoDiv);
  
  // Gérer le placeholder
  setTimeout(() => {
    loadImageWithFallback(img, img.src, product.name, '#e8e8e8', product.category === 'cravates' ? 'image' : 'shirt');
  }, 100);
  
  return card;
}

