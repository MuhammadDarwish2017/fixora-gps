// ===== Fixora GPS - Multi-Product Script =====

// ===== Products Data =====
const products = {
    gps303: {
        id: 'gps303',
        name: 'Fixora GPS 303',
        price: 45,
        originalPrice: 74.99,
        discount: '40% OFF',
        storage: '8GB',
        connection: '2G SIM Card',
        installation: 'Magnetic Mount',
        type: 'Portable',
        warranty: '1 Year',
        weight: '0.350 kg',
        size: '17×14×12 cm',
        images: [
            'images/303/H1284b4d45ab94e7687469355d94d2f25v.jpg',
            'images/303/Haf2d868f92304d3a8d81dd6dd2d596beQ.jpg',
            'images/303/Ha4607828a60546aa9cfa9122ba9bb4f6F.jpg',
            'images/303/H2d080d7e908843caba162a3b01d162c2S.jpg',
            'images/303/inbox.jpg'
        ],
        packingImage: 'images/303/inbox.jpg',
        specs: {
            en: [
                { label: 'GPS Sensitivity', value: '-165 dBm' },
                { label: 'GPS Accuracy', value: '±5 meters' },
                { label: 'Time to First Fix', value: 'Cold: 45s, Warm: 35s, Hot: 1s' },
                { label: 'Connection', value: '2G SIM Card' },
                { label: 'Installation', value: 'Magnetic Mount (Portable)' },
                { label: 'Battery Capacity', value: '3.7V 350mAh (Rechargeable)' },
                { label: 'Memory', value: '8GB Storage' },
                { label: 'Size', value: '17×14×12 cm' },
                { label: 'Weight', value: '0.350 kg' },
                { label: 'Material', value: 'High-Quality Plastic Shell' },
                { label: 'Warranty', value: '1 Year Full Coverage' }
            ],
            ar: [
                { label: 'حساسية GPS', value: '-165 ديسيبل' },
                { label: 'دقة GPS', value: '±5 أمتار' },
                { label: 'وقت أول إصلاح', value: 'بارد: 45 ثانية، دافئ: 35 ثانية، ساخن: 1 ثانية' },
                { label: 'الاتصال', value: 'شريحة 2G' },
                { label: 'التركيب', value: 'مغناطيسي (محمول)' },
                { label: 'سعة البطارية', value: '3.7V 350mAh (قابلة لإعادة الشحن)' },
                { label: 'الذاكرة', value: 'تخزين 8GB' },
                { label: 'الحجم', value: '17×14×12 سم' },
                { label: 'الوزن', value: '0.350 كغ' },
                { label: 'المادة', value: 'غلاف بلاستيكي عالي الجودة' },
                { label: 'الضمان', value: 'سنة واحدة تغطية كاملة' }
            ]
        },
        features: {
            en: [
                { icon: '📍', title: 'Real-Time GPS', desc: 'Accurate positioning with 5m accuracy' },
                { icon: '📡', title: '2G Network', desc: 'Reliable SIM card connectivity' },
                { icon: '🔋', title: 'Long Battery Life', desc: '3.7V 350mAh rechargeable battery' },
                { icon: '🧲', title: 'Magnetic Mount', desc: 'Easy portable installation' },
                { icon: '⚡', title: 'Overspeed Alert', desc: 'Automatic speed violation notifications' },
                { icon: '🔐', title: 'Remote Control', desc: 'Engine cut-off and device management' }
            ],
            ar: [
                { icon: '📍', title: 'GPS في الوقت الفعلي', desc: 'تحديد موقع دقيق بدقة 5 أمتار' },
                { icon: '📡', title: 'شبكة 2G', desc: 'اتصال موثوق عبر شريحة SIM' },
                { icon: '🔋', title: 'عمر بطارية طويل', desc: 'بطارية قابلة لإعادة الشحن 3.7V 350mAh' },
                { icon: '🧲', title: 'تركيب مغناطيسي', desc: 'تركيب محمول وسهل' },
                { icon: '⚡', title: 'تنبيه تجاوز السرعة', desc: 'إخطارات تلقائية لانتهاكات السرعة' },
                { icon: '🔐', title: 'التحكم عن بعد', desc: 'قطع المحرك وإدارة الجهاز' }
            ]
        },
        desc: {
            en: 'The Fixora GPS 303 is a portable 2G GPS tracker with magnetic mount, designed for easy vehicle tracking. Features real-time GPS positioning, remote engine cut-off, overspeed alerts, and compact portable design. Perfect for personal vehicles and small fleet management.',
            ar: 'جهاز Fixora GPS 303 هو جهاز تتبع محمول بتقنية 2G مع تركيب مغناطيسي، مصمم لتتبع المركبات بسهولة. يتميز بتحديد موقع GPS في الوقت الفعلي، وقطع المحرك عن بعد، وتنبيهات تجاوز السرعة، وتصميم محمول مدمج. مثالي للمركبات الشخصية وإدارة الأساطيل الصغيرة.'
        }
    },
    gps403: {
        id: 'gps403',
        name: 'Fixora GPS 403',
        price: 55,
        originalPrice: 89.99,
        discount: '39% OFF',
        storage: '8GB',
        connection: '4G LTE',
        installation: 'Wired (12-24V DC)',
        type: 'Fixed',
        warranty: '2 Years',
        images: [
            'images/h0a50f5c2d10e4dbb9e0a7ad3b2e72fcec.png',
            'images/h12daccca158b4b0ebc55eefc61ed2659z.jpg',
            'images/h193f12d9116a40ad951d70f3e4744502o.jpg',
            'images/h21cb603e8fa14d9db1b6997ba927787d9.png',
            'images/h3c159b1cd1744483a8760c5458b54a2am.jpg',
            'images/h75bf8b9f7da5410e86526bef1caa4ec0a.jpg',
            'images/h7881eeb19a804ffeb68bb3f17cabe673c.jpg',
            'images/h8b7662b195c84db58f097f15ecfaf308y.jpg',
            'images/hb3c5da15f28b48d7b2a119bc63cae690n.jpg',
            'images/hbc74e4f772e2479db9477ad2510501d1b.png',
            'images/hbd5b7829057342da9adc12b8c41ae4e5z.jpg'
        ],
        packingImage: 'images/hb3c5da15f28b48d7b2a119bc63cae690n.jpg',
        specs: {
            en: [
                { label: 'GPS Sensitivity', value: '-165 dBm' },
                { label: 'GPS Accuracy', value: '±5 meters' },
                { label: 'Time to First Fix', value: 'Cold: 45s, Warm: 35s, Hot: 1s' },
                { label: 'Power Supply', value: '12V-24V DC' },
                { label: 'Connection', value: '4G LTE, GSM, GPRS' },
                { label: 'Installation', value: 'Wired (Fixed)' },
                { label: 'Battery Capacity', value: '3.7V 350mAh (Rechargeable)' },
                { label: 'Memory', value: '8GB Storage' },
                { label: 'Material', value: 'High-Quality Plastic Shell' },
                { label: 'Warranty', value: '2 Years Full Coverage' }
            ],
            ar: [
                { label: 'حساسية GPS', value: '-165 ديسيبل' },
                { label: 'دقة GPS', value: '±5 أمتار' },
                { label: 'وقت أول إصلاح', value: 'بارد: 45 ثانية، دافئ: 35 ثانية، ساخن: 1 ثانية' },
                { label: 'مصدر الطاقة', value: '12V-24V DC' },
                { label: 'الاتصال', value: '4G LTE, GSM, GPRS' },
                { label: 'التركيب', value: 'سلكي (ثابت)' },
                { label: 'سعة البطارية', value: '3.7V 350mAh (قابلة لإعادة الشحن)' },
                { label: 'الذاكرة', value: 'تخزين 8GB' },
                { label: 'المادة', value: 'غلاف بلاستيكي عالي الجودة' },
                { label: 'الضمان', value: 'سنتان تغطية كاملة' }
            ]
        },
        features: {
            en: [
                { icon: '📍', title: 'Real-Time GPS', desc: 'Accurate positioning with 5m accuracy' },
                { icon: '📡', title: '4G LTE Network', desc: 'Fast and reliable connectivity' },
                { icon: '🔋', title: 'Long Battery Life', desc: '3.7V 350mAh rechargeable battery' },
                { icon: '🛡️', title: 'Geofencing', desc: 'Set virtual boundaries and get alerts' },
                { icon: '⚡', title: 'Overspeed Alert', desc: 'Automatic speed violation notifications' },
                { icon: '🔐', title: 'Remote Control', desc: 'Engine cut-off and device management' }
            ],
            ar: [
                { icon: '📍', title: 'GPS في الوقت الفعلي', desc: 'تحديد موقع دقيق بدقة 5 أمتار' },
                { icon: '📡', title: 'شبكة 4G LTE', desc: 'اتصال سريع وموثوق' },
                { icon: '🔋', title: 'عمر بطارية طويل', desc: 'بطارية قابلة لإعادة الشحن 3.7V 350mAh' },
                { icon: '🛡️', title: 'الحدود الجغرافية', desc: 'تعيين حدود افتراضية والحصول على تنبيهات' },
                { icon: '⚡', title: 'تنبيه تجاوز السرعة', desc: 'إخطارات تلقائية لانتهاكات السرعة' },
                { icon: '🔐', title: 'التحكم عن بعد', desc: 'قطع المحرك وإدارة الجهاز' }
            ]
        },
        desc: {
            en: 'The Fixora GPS 403 is a professional 4G LTE vehicle tracking device designed for real-time location monitoring, fleet management, and vehicle security. Features advanced GPS positioning, geofencing, and remote control capabilities. Wired installation for permanent tracking.',
            ar: 'جهاز Fixora GPS 403 هو جهاز تتبع مركبات احترافي بتقنية 4G LTE مصمم لمراقبة الموقع في الوقت الفعلي وإدارة الأسطول وأمان المركبة. يتميز بتحديد موقع GPS متقدم والحدود الجغرافية والتحكم عن بعد. تركيب سلكي للتتبع الدائم.'
        }
    }
};

// ===== Language Translations =====
const translations = {
    en: {
        heroTitle: 'Fixora GPS',
        heroSubtitle: 'Professional Vehicle Tracking Solutions',
        heroCta: 'Explore Products',
        stat1Label: 'Happy Customers',
        stat2Label: 'Average Rating',
        stat3Label: 'Products',
        stat4Label: 'Support',
        productsTitle: 'Our Products',
        badge303: 'Popular Choice',
        badge403: 'Best Seller',
        tag303conn: '2G SIM',
        tag303mount: 'Magnetic',
        tag303warranty: '1 Year Warranty',
        tag403conn: '4G LTE',
        tag403mount: 'Wired',
        tag403warranty: '2 Year Warranty',
        viewBtn303: 'View Details',
        viewBtn403: 'View Details',
        detailTitle: 'Product Details',
        backToProducts: '← Back to Products',
        featuresTitle: 'Key Features',
        specsTitle: 'Technical Specifications',
        specHeader1: 'Specification',
        specHeader2: 'Details',
        packingTitle: "What's in the Box",
        reviewsTitle: 'Customer Reviews',
        review1Author: 'Ahmed K.',
        review1Date: 'January 2025',
        review1Text: 'Excellent tracking device! Very accurate and reliable. I installed it in my car and I can track it in real-time from my phone. The geofencing feature is amazing - I get instant alerts. Highly recommended!',
        review2Author: 'Sarah M.',
        review2Date: 'February 2025',
        review2Text: 'I bought this for our delivery fleet of 5 vehicles. The real-time tracking and speed alerts have helped us improve driver behavior and reduce fuel costs. Great value for the price!',
        review3Author: 'Omar R.',
        review3Date: 'March 2025',
        review3Text: 'The best GPS tracker I\'ve used. The connection is fast and stable, and the battery backup is a great feature. Installation was easy and the app is user-friendly. Highly recommended!',
        trustTitle: 'Why Choose Fixora?',
        badge1Text: 'Up to 2-Year Warranty',
        badge2Text: 'Fast Delivery',
        badge3Text: '100% Authentic',
        badge4Text: 'Secure Payment',
        badge5Text: '24/7 Support',
        contactTitle: 'Get in Touch',
        phoneHeading: 'Phone',
        locationHeading: 'Location',
        locationValue: 'Aleppo - Syria',
        operatingCountries: 'Serving worldwide',
        followUsTitle: 'Contact Us',
        footerAbout: 'About Us',
        footerAboutText: 'Leading provider of professional GPS tracking solutions for vehicles and fleet management worldwide.',
        footerSupport: 'Support',
        footerLink5: 'Contact Us',
        footerLegal: 'Legal',
        footerLink9: 'Privacy Policy',
        footerLink10: 'Terms of Service',
        footerLink11: 'Cookie Policy',
        copyrightText: '© 2026 Fixora. All rights reserved.',
        cartTitle: 'Shopping Cart',
        emptyCart: 'Your cart is empty',
        totalLabel: 'Total:',
        checkoutBtn: 'Proceed to Checkout',
        checkoutTitle: 'Checkout',
        nameLabel: 'Full Name',
        phoneLabel: 'Phone Number',
        addressLabel: 'Delivery Address',
        paymentLabel: 'Payment Method',
        submitBtn: 'Place Order',
        contactBeforePurchaseTitle: 'Questions? Contact Us First!',
        contactBeforePurchaseText: 'Have any questions before purchasing? Our support team is ready to help.',
        successTitle: 'Order Placed Successfully!',
        successMessage: 'Our team will contact you as soon as possible.',
        removeBtn: 'Remove',
        addToCart: 'Buy Now'
    },
    ar: {
        heroTitle: 'Fixora GPS',
        heroSubtitle: 'حلول تتبع المركبات الاحترافية',
        heroCta: 'استكشف المنتجات',
        stat1Label: 'عملاء سعداء',
        stat2Label: 'متوسط التقييم',
        stat3Label: 'منتجات',
        stat4Label: 'الدعم',
        productsTitle: 'منتجاتنا',
        badge303: 'الأكثر طلباً',
        badge403: 'الأكثر مبيعاً',
        tag303conn: 'شريحة 2G',
        tag303mount: 'مغناطيسي',
        tag303warranty: 'ضمان سنة',
        tag403conn: '4G LTE',
        tag403mount: 'سلكي',
        tag403warranty: 'ضمان سنتين',
        viewBtn303: 'عرض التفاصيل',
        viewBtn403: 'عرض التفاصيل',
        detailTitle: 'تفاصيل المنتج',
        backToProducts: '→ العودة للمنتجات',
        featuresTitle: 'المميزات الرئيسية',
        specsTitle: 'المواصفات التقنية',
        specHeader1: 'المواصفة',
        specHeader2: 'التفاصيل',
        packingTitle: 'ما بداخل الصندوق',
        reviewsTitle: 'آراء العملاء',
        review1Author: 'أحمد ك.',
        review1Date: 'يناير 2025',
        review1Text: 'جهاز تتبع ممتاز! دقيق جداً وموثوق. ركّبته في سيارتي وأقدر أتتبعها بالوقت الفعلي من جوالي. ميزة الحدود الجغرافية رائعة - أحصل على تنبيهات فورية. أنصح به بشدة!',
        review2Author: 'سارة م.',
        review2Date: 'فبراير 2025',
        review2Text: 'اشتريت هذا الجهاز لأسطول التوصيل المكون من 5 مركبات. التتبع الفوري وتنبيهات السرعة ساعدتنا في تحسين سلوك السائقين وتقليل تكاليف الوقود. قيمة ممتازة مقابل السعر!',
        review3Author: 'عمر ر.',
        review3Date: 'مارس 2025',
        review3Text: 'أفضل جهاز تتبع GPS استخدمته. الاتصال سريع ومستقر، والبطارية الاحتياطية ميزة رائعة. التركيب كان سهلاً والتطبيق سهل الاستخدام. أنصح به بشدة!',
        trustTitle: 'لماذا تختار Fixora؟',
        badge1Text: 'ضمان حتى سنتين',
        badge2Text: 'توصيل سريع',
        badge3Text: 'منتج أصلي 100%',
        badge4Text: 'دفع آمن',
        badge5Text: 'دعم على مدار الساعة',
        contactTitle: 'تواصل معنا',
        phoneHeading: 'الهاتف',
        locationHeading: 'الموقع',
        locationValue: 'حلب - سوريا',
        operatingCountries: 'نخدم في جميع أنحاء العالم',
        followUsTitle: 'تواصل معنا',
        footerAbout: 'معلومات عنا',
        footerAboutText: 'مزود رائد لحلول تتبع GPS الاحترافية لإدارة المركبات والأسطول في جميع أنحاء العالم.',
        footerSupport: 'الدعم',
        footerLink5: 'اتصل بنا',
        footerLegal: 'القانونية',
        footerLink9: 'سياسة الخصوصية',
        footerLink10: 'شروط الخدمة',
        footerLink11: 'سياسة ملفات تعريف الارتباط',
        copyrightText: '© 2026 Fixora. جميع الحقوق محفوظة.',
        cartTitle: 'سلة التسوق',
        emptyCart: 'سلتك فارغة',
        totalLabel: 'الإجمالي:',
        checkoutBtn: 'متابعة الدفع',
        checkoutTitle: 'الدفع',
        nameLabel: 'الاسم الكامل',
        phoneLabel: 'رقم الهاتف',
        addressLabel: 'عنوان التسليم',
        paymentLabel: 'طريقة الدفع',
        submitBtn: 'تأكيد الطلب',
        contactBeforePurchaseTitle: 'هل لديك أسئلة؟ تواصل معنا أولاً!',
        contactBeforePurchaseText: 'هل لديك أي أسئلة قبل الشراء؟ فريق الدعم لدينا جاهز للمساعدة.',
        successTitle: 'تم ارسال طلبك بنجاح',
        successMessage: 'سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن',
        removeBtn: 'حذف',
        addToCart: 'اشتري الآن'
    }
};

// ===== Global State =====
let currentImageIndex = 0;
let currentLanguage = 'ar';
let isDarkMode = false;
let cart = [];
let particlesLoaded = false;
let sliderInterval = null;
let currentProduct = null;
let currentImages = [];

// ===== Initialize =====
function init() {
    setupEventListeners();
    updateLanguage();
    setupScrollAnimations();
    animateStats();

    if (window.requestIdleCallback) {
        requestIdleCallback(() => createParticles(), { timeout: 2000 });
    } else {
        setTimeout(createParticles, 2000);
    }
}

// ===== Create Particles =====
function createParticles() {
    if (particlesLoaded) return;
    particlesLoaded = true;
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        container.appendChild(particle);
    }
}

// ===== Animate Stats =====
function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach(stat => {
                    if (stat.dataset.animated) return;
                    stat.dataset.animated = 'true';
                    const text = stat.textContent;
                    const match = text.match(/(\d+)/);
                    if (match) {
                        const target = parseInt(match[1]);
                        let current = 0;
                        const increment = Math.ceil(target / 40);
                        const interval = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                current = target;
                                clearInterval(interval);
                            }
                            stat.textContent = text.replace(/\d+/, current);
                        }, 40);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const section = document.querySelector('.stats-section');
    if (section) observer.observe(section);
}

// ===== Show Product Detail =====
function showProductDetail(productId) {
    const product = products[productId];
    if (!product) return;

    currentProduct = product;
    currentImages = product.images;
    currentImageIndex = 0;

    // Hide products grid, show detail
    document.getElementById('productsSection').style.display = 'none';
    const detailSection = document.getElementById('productDetailSection');
    detailSection.style.display = 'block';
    detailSection.classList.add('fade-in', 'visible');

    // Set title
    document.getElementById('detailTitle').textContent = product.name;

    // Set price
    document.getElementById('detailPrice').textContent = '$' + product.price;
    document.getElementById('detailOriginalPrice').textContent = '$' + product.originalPrice;
    document.getElementById('discountBadge').textContent = product.discount;

    // Set description
    document.getElementById('productDesc').textContent = product.desc[currentLanguage];

    // Set main image
    document.getElementById('mainImage').src = currentImages[0];
    document.getElementById('mainImage').alt = product.name;

    // Set packing image
    document.getElementById('packingImage').src = product.packingImage;
    document.getElementById('packingImage').alt = product.name + ' - Package Contents';

    // Build slider
    buildSlider();

    // Build features
    buildFeatures(product);

    // Build specs
    buildSpecs(product);

    // Update buy button
    const buyBtn = document.getElementById('addToCartBtn');
    buyBtn.textContent = translations[currentLanguage].addToCart;
    buyBtn.dataset.product = productId;

    // Scroll to top of detail
    detailSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Start auto slider
    startAutoSlider();
}

// ===== Back to Products =====
function backToProducts() {
    document.getElementById('productDetailSection').style.display = 'none';
    document.getElementById('productsSection').style.display = 'block';

    if (sliderInterval) {
        clearInterval(sliderInterval);
        sliderInterval = null;
    }

    currentProduct = null;
    currentImages = [];

    document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== Build Slider =====
function buildSlider() {
    // Build dots
    const controls = document.getElementById('sliderControls');
    if (controls) {
        controls.innerHTML = '';
        currentImages.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
            btn.setAttribute('aria-label', `Image ${index + 1}`);
            btn.addEventListener('click', () => {
                goToImage(index);
                resetAutoSlider();
            });
            controls.appendChild(btn);
        });
    }

    // Build thumbnails
    const thumbs = document.getElementById('thumbnails');
    if (thumbs) {
        thumbs.innerHTML = '';
        currentImages.forEach((src, index) => {
            const thumb = document.createElement('div');
            thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumb.setAttribute('role', 'button');
            thumb.setAttribute('tabindex', '0');

            const img = document.createElement('img');
            img.src = src;
            img.alt = `${currentProduct.name} - Image ${index + 1}`;
            img.loading = 'lazy';

            thumb.appendChild(img);
            thumb.addEventListener('click', () => {
                goToImage(index);
                resetAutoSlider();
            });
            thumb.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToImage(index);
                    resetAutoSlider();
                }
            });

            thumbs.appendChild(thumb);
        });
    }
}

// ===== Build Features =====
function buildFeatures(product) {
    const grid = document.getElementById('featuresGrid');
    if (!grid) return;

    const features = product.features[currentLanguage];
    grid.innerHTML = features.map((f, i) => `
        <div class="feature-card" style="animation-delay: ${i * 0.1}s">
            <div class="feature-icon">${f.icon}</div>
            <h3>${f.title}</h3>
            <p>${f.desc}</p>
        </div>
    `).join('');
}

// ===== Build Specs =====
function buildSpecs(product) {
    const tbody = document.getElementById('specsBody');
    if (!tbody) return;

    const specs = product.specs[currentLanguage];
    tbody.innerHTML = specs.map(s => `
        <tr>
            <td>${s.label}</td>
            <td>${s.value}</td>
        </tr>
    `).join('');
}

// ===== Slider Navigation =====
function goToImage(index) {
    if (index < 0 || index >= currentImages.length) return;
    currentImageIndex = index;

    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.style.opacity = '0';
        mainImage.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mainImage.src = currentImages[index];
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
    }

    updateSliderControls();
}

function nextImage() {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    goToImage(currentImageIndex);
}

function prevImage() {
    if (currentImages.length === 0) return;
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    goToImage(currentImageIndex);
}

function updateSliderControls() {
    document.querySelectorAll('.slider-btn').forEach((btn, i) => {
        btn.classList.toggle('active', i === currentImageIndex);
    });
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === currentImageIndex);
    });
}

function startAutoSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(nextImage, 4000);
}

function resetAutoSlider() {
    startAutoSlider();
}

// ===== Event Listeners =====
function setupEventListeners() {
    const safe = (el, event, handler) => {
        if (el && typeof handler === 'function') el.addEventListener(event, handler);
    };

    // Slider
    safe(document.getElementById('nextBtn'), 'click', () => { nextImage(); resetAutoSlider(); });
    safe(document.getElementById('prevBtn'), 'click', () => { prevImage(); resetAutoSlider(); });

    // Theme & Language
    safe(document.getElementById('themeToggle'), 'click', toggleTheme);
    safe(document.getElementById('langToggle'), 'click', toggleLanguage);

    // Cart
    safe(document.getElementById('cartIcon'), 'click', openCart);
    safe(document.getElementById('cartCloseBtn'), 'click', closeCart);
    safe(document.getElementById('checkoutBtn'), 'click', openCheckout);
    safe(document.getElementById('checkoutCloseBtn'), 'click', closeCheckout);
    safe(document.getElementById('checkoutForm'), 'submit', submitOrder);

    // Buy button
    safe(document.getElementById('addToCartBtn'), 'click', function () {
        if (currentProduct) {
            addToCart(currentProduct.id);
        }
    });

    // Hero CTA
    safe(document.getElementById('heroCta'), 'click', () => {
        const section = document.getElementById('productsSection');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    });

    // Logo - back to home
    safe(document.getElementById('logoBtn'), 'click', () => {
        backToProducts();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Back to products button
    safe(document.getElementById('backToProducts'), 'click', backToProducts);

    // Product cards - View Details
    document.querySelectorAll('.product-card-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const productId = this.dataset.product;
            showProductDetail(productId);
        });
    });

    // Product cards - Click anywhere on card
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', function (e) {
            if (e.target.closest('.product-card-btn')) return;
            const productId = this.dataset.product;
            showProductDetail(productId);
        });
    });

    // Payment selection
    document.querySelectorAll('.payment-card').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.payment-card').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Close modals on overlay click
    safe(document.getElementById('checkoutModal'), 'click', function (e) {
        if (e.target === this) closeCheckout();
    });

    // Close cart on outside click
    document.addEventListener('click', function (e) {
        const sidebar = document.getElementById('cartSidebar');
        const icon = document.getElementById('cartIcon');
        if (sidebar && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !icon.contains(e.target)) {
            closeCart();
        }
    });

    // Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeCart();
            closeCheckout();
        }
    });
}

// ===== Theme Toggle =====
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    document.getElementById('themeToggle').textContent = isDarkMode ? '☀️' : '🌙';
    try { localStorage.setItem('darkMode', isDarkMode); } catch (e) {}
}

// ===== Language Toggle =====
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
    try { localStorage.setItem('language', currentLanguage); } catch (e) {}
}

// ===== Update Language =====
function updateLanguage() {
    const t = translations[currentLanguage];

    Object.keys(t).forEach(key => {
        const el = document.getElementById(key);
        if (el) {
            const safeText = t[key].toString().replace(/[<>]/g, '');
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = safeText;
            } else {
                el.textContent = safeText;
            }
        }
    });

    // Dev credit
    const devCredit = document.querySelector('.dev-credit-small');
    if (devCredit) {
        devCredit.textContent = currentLanguage === 'ar'
            ? 'تم التطوير عبر شركة Step plus للبرمجيات'
            : 'Developed by Step Plus Software';
    }

    // RTL
    document.body.classList.toggle('rtl', currentLanguage === 'ar');
    document.body.classList.toggle('arabic-text', currentLanguage === 'ar');
    document.body.classList.toggle('english-text', currentLanguage === 'en');
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langToggle').textContent = currentLanguage === 'en' ? 'AR' : 'EN';

    // Update product detail if open
if (currentProduct) {
    document.getElementById('productDesc').textContent = currentProduct.desc[currentLanguage];
    document.getElementById('addToCartBtn').textContent = t.addToCart;
    buildFeatures(currentProduct);
    buildSpecs(currentProduct);
}

// Update product cards buttons
const btn303 = document.getElementById('viewBtn303');
const btn403 = document.getElementById('viewBtn403');
if (btn303) btn303.textContent = t.viewBtn303;
if (btn403) btn403.textContent = t.viewBtn403;

// Update back button
const backBtn = document.getElementById('backToProducts');
if (backBtn) backBtn.textContent = t.backToProducts;
}

// ===== Add to Cart =====
function addToCart(productId) {
    const product = products[productId];
    if (!product) return;

    const btn = document.getElementById('addToCartBtn');
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.qty = (existing.qty || 1) + 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.images[0],
            qty: 1
        });
    }

    updateCartBadge();
    btn.classList.add('added');

    setTimeout(() => {
        btn.classList.remove('added');
        openCheckout();
    }, 1500);
}

// ===== Cart Functions =====
function updateCartBadge() {
    const total = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    document.getElementById('cartBadge').textContent = total;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('open');
    document.body.style.overflow = 'hidden';
    renderCart();
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('open');
    document.body.style.overflow = '';
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const t = translations[currentLanguage];

    if (cart.length === 0) {
        container.innerHTML = `<div class="empty-cart">${t.emptyCart}</div>`;
        document.getElementById('totalPrice').textContent = '$0.00';
        return;
    }

    container.innerHTML = cart.map((item, index) => {
        const qty = item.qty || 1;
        const itemTotal = (item.price * qty).toFixed(2);
        return `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price} × ${qty} = $${itemTotal}</div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="decreaseQty(${index})">−</button>
                    <span class="qty-display">${qty}</span>
                    <button class="qty-btn" onclick="increaseQty(${index})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">${t.removeBtn}</button>
            </div>
        </div>`;
    }).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
    document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
}

function increaseQty(index) {
    if (cart[index]) {
        cart[index].qty = (cart[index].qty || 1) + 1;
        updateCartBadge();
        renderCart();
    }
}

function decreaseQty(index) {
    if (cart[index]) {
        if (cart[index].qty > 1) {
            cart[index].qty--;
        } else {
            removeFromCart(index);
            return;
        }
        updateCartBadge();
        renderCart();
    }
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadge();
    renderCart();
}

// ===== Checkout =====
function openCheckout() {
    if (cart.length === 0) {
        alert(currentLanguage === 'ar' ? 'سلة التسوق فارغة' : 'Your cart is empty');
        return;
    }
    document.getElementById('checkoutModal').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCheckout() {
    document.getElementById('checkoutModal').classList.remove('open');
    document.body.style.overflow = '';
}

// ===== Submit Order =====
function submitOrder(e) {
    e.preventDefault();
    const isAr = currentLanguage === 'ar';

    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('deliveryAddress').value.trim();
    const selectedBtn = document.querySelector('.payment-card.selected');

    if (!name || !phone || !address) {
        alert(isAr ? 'الرجاء ملء جميع الحقول' : 'Please fill in all fields');
        return;
    }
    if (name.length < 3) {
        alert(isAr ? 'الاسم يجب أن يكون 3 أحرف على الأقل' : 'Name must be at least 3 characters');
        return;
    }
    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
        alert(isAr ? 'رقم الهاتف غير صحيح' : 'Invalid phone number');
        return;
    }
    if (address.length < 10) {
        alert(isAr ? 'الرجاء إدخال عنوان تفصيلي' : 'Please enter a detailed address');
        return;
    }
    if (!selectedBtn) {
        alert(isAr ? 'الرجاء اختيار وسيلة دفع' : 'Please select a payment method');
        return;
    }

    const payment = selectedBtn.dataset.method || 'cod';
    const total = cart.reduce((sum, item) => sum + (item.price * (item.qty || 1)), 0);
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

    const safeName = name.replace(/[<>"'&]/g, '');
    const safePhone = phone.replace(/[^0-9+\-\s()]/g, '');
    const safeAddress = address.replace(/[<>"'&]/g, '');

    const paymentNames = {
        usdt: 'USDT',
        shamcash: 'ShamCash / شام كاش',
        hawala: isAr ? 'حوالة' : 'Hawala Transfer',
        cod: isAr ? 'الدفع عند الاستلام' : 'Cash on Delivery'
    };

    const orderItems = cart.map(item => {
        const qty = item.qty || 1;
        return `• ${item.name} × ${qty} = $${(item.price * qty).toFixed(2)}`;
    }).join('\n');

    const message = isAr
        ? `🛒 *طلب جديد من موقع Fixora*\n━━━━━━━━━━━━━━━━━\n👤 *الاسم:* ${safeName}\n📱 *الهاتف:* ${safePhone}\n📍 *العنوان:* ${safeAddress}\n━━━━━━━━━━━━━━━━━\n📦 *المنتجات:*\n${orderItems}\n━━━━━━━━━━━━━━━━━\n💰 *الإجمالي:* $${total.toFixed(2)} (${totalQty} قطعة)\n💳 *طريقة الدفع:* ${paymentNames[payment] || payment}\n━━━━━━━━━━━━━━━━━`
        : `🛒 *New Order from Fixora*\n━━━━━━━━━━━━━━━━━\n👤 *Name:* ${safeName}\n📱 *Phone:* ${safePhone}\n📍 *Address:* ${safeAddress}\n━━━━━━━━━━━━━━━━━\n📦 *Products:*\n${orderItems}\n━━━━━━━━━━━━━━━━━\n💰 *Total:* $${total.toFixed(2)} (${totalQty} items)\n💳 *Payment:* ${paymentNames[payment] || payment}\n━━━━━━━━━━━━━━━━━`;

    window.open(`https://wa.me/963982721561?text=${encodeURIComponent(message)}`, '_blank');

    showSuccessModal();
    closeCheckout();
    closeCart();
    cart = [];
    updateCartBadge();
    document.getElementById('checkoutForm').reset();
    document.querySelectorAll('.payment-card').forEach(b => b.classList.remove('selected'));
}

// ===== Success Modal =====
function showSuccessModal() {
    const t = translations[currentLanguage];
    const isAr = currentLanguage === 'ar';

    const modal = document.createElement('div');
    modal.className = 'modal-overlay open';
    modal.style.cssText = 'z-index: 1000 !important;';
    modal.innerHTML = `
        <div class="modal" style="max-width: 400px; text-align: center; ${isAr ? 'direction: rtl;' : 'direction: ltr;'}">
            <div class="success-message">
                <div class="success-icon" style="font-size: 4rem;">✅</div>
                <h2>${t.successTitle}</h2>
                <p>${t.successMessage}</p>
                <button onclick="this.closest('.modal-overlay').remove()" class="submit-btn" style="margin-top: 1rem;">${isAr ? 'موافق' : 'OK'}</button>
            </div>
        </div>`;

    document.body.appendChild(modal);
    setTimeout(() => { if (modal.parentNode) modal.remove(); }, 8000);
}

// ===== Scroll Animations =====
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== Load Preferences =====
function loadPreferences() {
    try {
        const darkMode = localStorage.getItem('darkMode');
        const language = localStorage.getItem('language');

        if (darkMode === 'true') {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            const toggle = document.getElementById('themeToggle');
            if (toggle) toggle.textContent = '☀️';
        }
        if (language === 'en') currentLanguage = 'en';
    } catch (e) {}
}

// ===== Start =====
loadPreferences();
init();