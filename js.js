// ===== Fixora GPS Tracker - Fixed & Optimized Script =====

// Language translations
const translations = {
    en: {
        heroTitle: 'Fixora GPS Tracker 403',
        heroSubtitle: 'Professional Vehicle Tracking Solution',
        heroCta: 'Explore Now',
        stat1Label: 'Happy Customers',
        stat2Label: 'Average Rating',
        stat3Label: 'Year Warranty',
        stat4Label: 'Support',
        galleryTitle: 'Product Gallery',
        discountBadge: '40% OFF',
        productDesc: 'The Fixora GPS Tracker 403 is a professional 4G LTE vehicle tracking device designed for real-time location monitoring, fleet management, and vehicle security. Features advanced GPS positioning, geofencing, and remote control capabilities.',
        addToCart: 'Buy Now',
        completePurchase: 'Complete Purchase',
        featuresTitle: 'Key Features',
        feat1Title: 'Real-Time GPS',
        feat1Desc: 'Accurate positioning with 5m accuracy',
        feat2Title: '4G LTE Network',
        feat2Desc: 'Fast and reliable connectivity',
        feat3Title: 'Long Battery Life',
        feat3Desc: '3.7V 350mAh rechargeable battery',
        feat4Title: 'Geofencing',
        feat4Desc: 'Set virtual boundaries and get alerts',
        feat5Title: 'Overspeed Alert',
        feat5Desc: 'Automatic notifications for speed violations',
        feat6Title: 'Remote Control',
        feat6Desc: 'Engine cut-off and device management',
        specsTitle: 'Technical Specifications',
        specHeader1: 'Specification',
        specHeader2: 'Details',
        spec1Label: 'GPS Sensitivity',
        spec1Value: '-165 dBm',
        spec2Label: 'GPS Accuracy',
        spec2Value: '±5 meters',
        spec3Label: 'Time to First Fix',
        spec3Value: 'Cold: 45s, Warm: 35s, Hot: 1s',
        spec4Label: 'Power Supply',
        spec4Value: '12V-24V DC',
        spec5Label: 'Battery Capacity',
        spec5Value: '3.7V 350mAh (Rechargeable)',
        spec6Label: 'Communication',
        spec6Value: '4G LTE, GSM, GPRS',
        spec7Label: 'Memory',
        spec7Value: '8GB Storage',
        spec8Label: 'Material',
        spec8Value: 'High-Quality Plastic Shell',
        packingTitle: 'What\'s in the Box',
        reviewsTitle: 'Customer Reviews',
        review1Author: 'Ahmed K.',
        review1Date: 'January 2025',
        review1Text: 'Excellent tracking device! Very accurate and reliable. I installed it in my car and I can track it in real-time from my phone. The geofencing feature is amazing - I get instant alerts. Highly recommended for anyone who wants peace of mind!',
        review2Author: 'Sarah M.',
        review2Date: 'February 2025',
        review2Text: 'I bought this for our delivery fleet of 5 vehicles. The real-time tracking and speed alerts have helped us improve driver behavior and reduce fuel costs. Customer support was very helpful during setup. Great value for the price!',
        review3Author: 'Omar R.',
        review3Date: 'March 2025',
        review3Text: 'The best GPS tracker I\'ve used. The 4G connection is fast and stable, and the battery backup is a great feature. Installation was easy and the app is user-friendly. Two-year warranty gives me confidence in the product quality.',
        trustTitle: 'Why Choose Fixora?',
        badge1Text: '2-Year Warranty',
        badge2Text: 'Fast Delivery',
        badge3Text: '100% Authentic',
        badge4Text: 'Secure Payment',
        badge5Text: '24/7 Support',
        contactTitle: 'Get in Touch',
        contactInfoTitle: 'Contact Information',
        phoneHeading: 'Phone',
        locationHeading: 'Location',
        locationValue: 'Aleppo - Syria',
        operatingCountries: 'Serving worldwide',
        followUsTitle: 'Contact Us',
        footerAbout: 'About Us',
        footerAboutText: 'Leading provider of professional GPS tracking solutions for vehicles and fleet management worldwide.',
        footerSupport: 'Support',
        footerLink5: 'Contact Us',
        footerLink6: 'Documentation',
        footerLink7: 'FAQ',
        footerLink8: 'Warranty',
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
        langToggle: 'EN',
        contactBeforePurchaseTitle: 'Questions? Contact Us First!',
        contactBeforePurchaseText: 'Have any questions before purchasing? Our support team is ready to help via your preferred channel.',
        whatsappLabel: 'WhatsApp',
        telegramLabel: 'Telegram',
        facebookLabel: 'Facebook',
        instagramLabel: 'Instagram',
        successTitle: 'Order Placed Successfully!',
        successMessage: 'Our team will contact you as soon as possible.',
        removeBtn: 'Remove'
    },
    ar: {
        heroTitle: 'جهاز تتبع Fixora 403',
        heroSubtitle: 'حل تتبع المركبات الاحترافي',
        heroCta: 'استكشف الآن',
        stat1Label: 'عملاء سعداء',
        stat2Label: 'متوسط التقييم',
        stat3Label: 'سنة ضمان',
        stat4Label: 'الدعم',
        galleryTitle: 'معرض المنتجات',
        discountBadge: 'خصم 40%',
        productDesc: 'جهاز تتبع Fixora 403 هو جهاز تتبع مركبات احترافي بتقنية 4G LTE مصمم لمراقبة الموقع في الوقت الفعلي وإدارة الأسطول وأمان المركبة. يتميز بتحديد موقع GPS متقدم والحدود الجغرافية والتحكم عن بعد.',
        addToCart: 'اشتري الآن',
        completePurchase: 'أكمل عملية الشراء',
        featuresTitle: 'المميزات الرئيسية',
        feat1Title: 'GPS في الوقت الفعلي',
        feat1Desc: 'تحديد موقع دقيق بدقة 5 أمتار',
        feat2Title: 'شبكة 4G LTE',
        feat2Desc: 'اتصال سريع وموثوق',
        feat3Title: 'عمر بطارية طويل',
        feat3Desc: 'بطارية قابلة لإعادة الشحن 3.7V 350mAh',
        feat4Title: 'الحدود الجغرافية',
        feat4Desc: 'تعيين حدود افتراضية والحصول على تنبيهات',
        feat5Title: 'تنبيه تجاوز السرعة',
        feat5Desc: 'إخطارات تلقائية لانتهاكات السرعة',
        feat6Title: 'التحكم عن بعد',
        feat6Desc: 'قطع المحرك وإدارة الجهاز',
        specsTitle: 'المواصفات التقنية',
        specHeader1: 'المواصفة',
        specHeader2: 'التفاصيل',
        spec1Label: 'حساسية GPS',
        spec1Value: '-165 ديسيبل',
        spec2Label: 'دقة GPS',
        spec2Value: '±5 أمتار',
        spec3Label: 'وقت أول إصلاح',
        spec3Value: 'بارد: 45 ثانية، دافئ: 35 ثانية، ساخن: 1 ثانية',
        spec4Label: 'مصدر الطاقة',
        spec4Value: '12V-24V DC',
        spec5Label: 'سعة البطارية',
        spec5Value: '3.7V 350mAh (قابلة لإعادة الشحن)',
        spec6Label: 'الاتصال',
        spec6Value: '4G LTE, GSM, GPRS',
        spec7Label: 'الذاكرة',
        spec7Value: 'تخزين 8GB',
        spec8Label: 'المادة',
        spec8Value: 'غلاف بلاستيكي عالي الجودة',
        packingTitle: 'ما بداخل الصندوق',
        reviewsTitle: 'آراء العملاء',
        review1Author: 'أحمد ك.',
        review1Date: 'يناير 2025',
        review1Text: 'جهاز تتبع ممتاز! دقيق جداً وموثوق. ركّبته في سيارتي وأقدر أتتبعها بالوقت الفعلي من جوالي. ميزة الحدود الجغرافية رائعة - أحصل على تنبيهات فورية. أنصح به بشدة لأي شخص يريد راحة البال!',
        review2Author: 'سارة م.',
        review2Date: 'فبراير 2025',
        review2Text: 'اشتريت هذا الجهاز لأسطول التوصيل المكون من 5 مركبات. التتبع الفوري وتنبيهات السرعة ساعدتنا في تحسين سلوك السائقين وتقليل تكاليف الوقود. الدعم الفني كان مفيداً جداً أثناء التركيب. قيمة ممتازة مقابل السعر!',
        review3Author: 'عمر ر.',
        review3Date: 'مارس 2025',
        review3Text: 'أفضل جهاز تتبع GPS استخدمته. اتصال 4G سريع ومستقر، والبطارية الاحتياطية ميزة رائعة. التركيب كان سهلاً والتطبيق سهل الاستخدام. ضمان سنتين يعطيني ثقة بجودة المنتج.',
        trustTitle: 'لماذا تختار Fixora؟',
        badge1Text: 'ضمان سنتين',
        badge2Text: 'توصيل سريع',
        badge3Text: 'منتج أصلي 100%',
        badge4Text: 'دفع آمن',
        badge5Text: 'دعم على مدار الساعة',
        contactTitle: 'تواصل معنا',
        contactInfoTitle: 'معلومات الاتصال',
        phoneHeading: 'الهاتف',
        locationHeading: 'الموقع',
        locationValue: 'حلب - سوريا',
        operatingCountries: 'نخدم في جميع أنحاء العالم',
        followUsTitle: 'تواصل معنا',
        footerAbout: 'معلومات عنا',
        footerAboutText: 'مزود رائد لحلول تتبع GPS الاحترافية لإدارة المركبات والأسطول في جميع أنحاء العالم.',
        footerSupport: 'الدعم',
        footerLink5: 'اتصل بنا',
        footerLink6: 'التوثيق',
        footerLink7: 'الأسئلة الشائعة',
        footerLink8: 'الضمان',
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
        langToggle: 'AR',
        contactBeforePurchaseTitle: 'هل لديك أسئلة؟ تواصل معنا أولاً!',
        contactBeforePurchaseText: 'هل لديك أي أسئلة قبل الشراء؟ فريق الدعم لدينا جاهز للمساعدة عبر قناتك المفضلة.',
        whatsappLabel: 'WhatsApp',
        telegramLabel: 'Telegram',
        facebookLabel: 'Facebook',
        instagramLabel: 'Instagram',
        successTitle: 'تم ارسال طلبك بنجاح',
        successMessage: 'سيقوم فريقنا بالتواصل معك في أقرب وقت ممكن',
        removeBtn: 'حذف'
    }
};

// ===== Product Images =====
const images = [
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
];

let currentImageIndex = 0;
let currentLanguage = 'ar';
let isDarkMode = false;
let cart = [];
let particlesLoaded = false;
let sliderInterval = null;

// ===== Initialize =====
function init() {
    setupSlider();
    setupEventListeners();
    updateLanguage();
    setupScrollAnimations();
    animateStats();
    startAutoSlider();

    if (window.requestIdleCallback) {
        requestIdleCallback(() => createParticles(), { timeout: 2000 });
    } else {
        setTimeout(createParticles, 2000);
    }
}

// ===== Create Animated Particles (Deferred) =====
function createParticles() {
    if (particlesLoaded) return;
    particlesLoaded = true;
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// ===== Animate Stats Counter =====
function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
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

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// ===== Setup Image Slider =====
function setupSlider() {
    // Build slider control dots
    const sliderControls = document.getElementById('sliderControls');
    if (sliderControls) {
        sliderControls.innerHTML = '';
        images.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = `slider-btn ${index === 0 ? 'active' : ''}`;
            btn.setAttribute('aria-label', `Go to image ${index + 1}`);
            btn.addEventListener('click', () => goToImage(index));
            sliderControls.appendChild(btn);
        });
    }

    // Build thumbnails
    const thumbnailsContainer = document.getElementById('thumbnails');
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
        images.forEach((imageSrc, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = `thumbnail ${index === 0 ? 'active' : ''}`;
            thumbnail.setAttribute('role', 'button');
            thumbnail.setAttribute('tabindex', '0');
            thumbnail.setAttribute('aria-label', `View image ${index + 1}`);

            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = `Fixora GPS Tracker 403 - Image ${index + 1}`;
            img.loading = 'lazy';
            img.decoding = 'async';

            thumbnail.appendChild(img);

            thumbnail.addEventListener('click', () => goToImage(index));
            thumbnail.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    goToImage(index);
                }
            });

            thumbnailsContainer.appendChild(thumbnail);
        });
    }
}

// ===== Slider Navigation =====
function goToImage(index) {
    if (index < 0 || index >= images.length) return;
    currentImageIndex = index;

    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.style.opacity = '0';
        mainImage.style.transform = 'scale(0.95)';

        setTimeout(() => {
            mainImage.src = images[index];
            mainImage.style.opacity = '1';
            mainImage.style.transform = 'scale(1)';
        }, 150);
    }

    updateSliderControls();
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    goToImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    goToImage(currentImageIndex);
}

function updateSliderControls() {
    // Update dots
    document.querySelectorAll('.slider-btn').forEach((btn, index) => {
        btn.classList.toggle('active', index === currentImageIndex);
    });

    // Update thumbnails
    document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentImageIndex);
    });
}

// ===== Auto-play Slider =====
function startAutoSlider() {
    if (sliderInterval) clearInterval(sliderInterval);
    sliderInterval = setInterval(nextImage, 4000);
}

function resetAutoSlider() {
    startAutoSlider();
}

// ===== Setup Event Listeners =====
function setupEventListeners() {
    const safeAddEventListener = (element, event, handler) => {
        if (element && typeof handler === 'function') {
            element.addEventListener(event, handler);
        }
    };

    safeAddEventListener(document.getElementById('nextBtn'), 'click', () => {
        nextImage();
        resetAutoSlider();
    });

    safeAddEventListener(document.getElementById('prevBtn'), 'click', () => {
        prevImage();
        resetAutoSlider();
    });

    safeAddEventListener(document.getElementById('themeToggle'), 'click', toggleTheme);
    safeAddEventListener(document.getElementById('langToggle'), 'click', toggleLanguage);
    safeAddEventListener(document.getElementById('cartIcon'), 'click', openCart);
    safeAddEventListener(document.getElementById('cartCloseBtn'), 'click', closeCart);
    safeAddEventListener(document.getElementById('addToCartBtn'), 'click', buyNow);
    safeAddEventListener(document.getElementById('checkoutBtn'), 'click', openCheckout);
    safeAddEventListener(document.getElementById('checkoutCloseBtn'), 'click', closeCheckout);
    safeAddEventListener(document.getElementById('checkoutForm'), 'submit', submitOrder);

    safeAddEventListener(document.getElementById('heroCta'), 'click', () => {
        const gallery = document.querySelector('.gallery-section');
        if (gallery) {
            gallery.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Payment selection
    document.querySelectorAll('.payment-card').forEach(btn => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.payment-card').forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Close modals on overlay click
    document.getElementById('checkoutModal')?.addEventListener('click', function (e) {
        if (e.target === this) {
            closeCheckout();
        }
    });

    // Close cart on outside click
    document.addEventListener('click', function (e) {
        const cartSidebar = document.getElementById('cartSidebar');
        const cartIcon = document.getElementById('cartIcon');
        if (cartSidebar && cartSidebar.classList.contains('open') &&
            !cartSidebar.contains(e.target) && !cartIcon.contains(e.target)) {
            closeCart();
        }
    });

    // Keyboard support - Escape to close
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
    try {
        localStorage.setItem('darkMode', isDarkMode);
    } catch (e) {
        console.warn('localStorage not available:', e);
    }
}

// ===== Language Toggle =====
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    updateLanguage();
    try {
        localStorage.setItem('language', currentLanguage);
    } catch (e) {
        console.warn('localStorage not available:', e);
    }
}

// ===== Update Language =====
function updateLanguage() {
    const t = translations[currentLanguage];

    Object.keys(t).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            const safeText = t[key].toString().replace(/[<>]/g, '');
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = safeText;
            } else {
                element.textContent = safeText;
            }
        }
    });

    const devCreditElement = document.querySelector('.dev-credit-small');
    if (devCreditElement) {
        devCreditElement.textContent = currentLanguage === 'ar'
            ? 'تم التطوير عبر شركة Step plus للبرمجيات'
            : 'Developed by Step Plus Software';
    }

    document.body.classList.toggle('rtl', currentLanguage === 'ar');
    document.body.classList.toggle('arabic-text', currentLanguage === 'ar');
    document.body.classList.toggle('english-text', currentLanguage === 'en');
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.getElementById('langToggle').textContent = currentLanguage === 'en' ? 'AR' : 'EN';
}

// ===== Buy Now =====
function buyNow() {
    const btn = document.getElementById('addToCartBtn');

    // Check if already in cart
    const existingItem = cart.find(item => item.id === 1);
    if (existingItem) {
        existingItem.qty = (existingItem.qty || 1) + 1;
    } else {
        cart.push({
            id: 1,
            name: 'Fixora GPS Tracker 403',
            price: 45,
            image: images[0],
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
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    document.getElementById('cartBadge').textContent = totalQty;
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
    const cartItems = document.getElementById('cartItems');
    const t = translations[currentLanguage];

    if (cart.length === 0) {
        cartItems.innerHTML = `<div class="empty-cart">${t.emptyCart}</div>`;
        document.getElementById('totalPrice').textContent = '$0.00';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => {
        const safeName = item.name.replace(/[<>]/g, '');
        const safeImage = item.image.replace(/[<>"']/g, '');
        const qty = item.qty || 1;
        const itemTotal = (item.price * qty).toFixed(2);

        return `
        <div class="cart-item">
            <div class="cart-item-image">
                <img src="${safeImage}" alt="${safeName}" loading="lazy">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-name">${safeName}</div>
                <div class="cart-item-price">$${item.price} × ${qty} = $${itemTotal}</div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="decreaseQty(${index})">−</button>
                    <span class="qty-display">${qty}</span>
                    <button class="qty-btn" onclick="increaseQty(${index})">+</button>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index})">${t.removeBtn}</button>
            </div>
        </div>
        `;
    }).join('');

    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * (item.qty || 1)), 0);
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

// ===== Checkout Functions =====
function openCheckout() {
    if (cart.length === 0) {
        const alertMsg = currentLanguage === 'ar'
            ? 'سلة التسوق فارغة'
            : 'Your cart is empty';
        alert(alertMsg);
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

    const name = document.getElementById('fullName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('deliveryAddress').value.trim();
    const selectedBtn = document.querySelector('.payment-card.selected');
    const isArabic = currentLanguage === 'ar';

    // Validate fields
    if (!name || !phone || !address) {
        alert(isArabic ? 'الرجاء ملء جميع الحقول' : 'Please fill in all fields');
        return;
    }

    if (name.length < 3) {
        alert(isArabic ? 'الاسم يجب أن يكون 3 أحرف على الأقل' : 'Name must be at least 3 characters');
        return;
    }

    if (!/^[0-9+\-\s()]{7,20}$/.test(phone)) {
        alert(isArabic ? 'رقم الهاتف غير صحيح' : 'Invalid phone number');
        return;
    }

    if (address.length < 10) {
        alert(isArabic ? 'الرجاء إدخال عنوان تفصيلي (10 أحرف على الأقل)' : 'Please enter a detailed address (at least 10 characters)');
        return;
    }

    if (!selectedBtn) {
        alert(isArabic ? 'الرجاء اختيار وسيلة دفع' : 'Please select a payment method');
        return;
    }

    const payment = selectedBtn.dataset.method || 'cod';

    // Calculate totals
    const total = cart.reduce((sum, item) => sum + (parseFloat(item.price) * (item.qty || 1)), 0);
    const totalQty = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

    // Sanitize inputs
    const safeName = name.replace(/[<>"'&]/g, '');
    const safePhone = phone.replace(/[^0-9+\-\s()]/g, '');
    const safeAddress = address.replace(/[<>"'&]/g, '');

    // Payment method names
    const paymentNames = {
        usdt: 'USDT',
        shamcash: 'ShamCash / شام كاش',
        hawala: isArabic ? 'حوالة' : 'Hawala Transfer',
        cod: isArabic ? 'الدفع عند الاستلام' : 'Cash on Delivery'
    };

    // Build order items list
    const orderItems = cart.map(item => {
        const qty = item.qty || 1;
        return `• ${item.name} × ${qty} = $${(item.price * qty).toFixed(2)}`;
    }).join('\n');

    // Build formatted message
    const message = isArabic
        ? `🛒 *طلب جديد من موقع Fixora*\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `👤 *الاسم:* ${safeName}\n` +
          `📱 *الهاتف:* ${safePhone}\n` +
          `📍 *العنوان:* ${safeAddress}\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `📦 *المنتجات:*\n${orderItems}\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `💰 *الإجمالي:* $${total.toFixed(2)} (${totalQty} قطعة)\n` +
          `💳 *طريقة الدفع:* ${paymentNames[payment] || payment}\n` +
          `━━━━━━━━━━━━━━━━━`
        : `🛒 *New Order from Fixora Website*\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `👤 *Name:* ${safeName}\n` +
          `📱 *Phone:* ${safePhone}\n` +
          `📍 *Address:* ${safeAddress}\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `📦 *Products:*\n${orderItems}\n` +
          `━━━━━━━━━━━━━━━━━\n` +
          `💰 *Total:* $${total.toFixed(2)} (${totalQty} items)\n` +
          `💳 *Payment:* ${paymentNames[payment] || payment}\n` +
          `━━━━━━━━━━━━━━━━━`;

    // Open WhatsApp
    window.open(`https://wa.me/963982721561?text=${encodeURIComponent(message)}`, '_blank');

    // Show success
    showSuccessModal();

    // Cleanup
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
    const isArabic = currentLanguage === 'ar';
    const okText = isArabic ? 'موافق' : 'OK';

    const modal = document.createElement('div');
    modal.className = 'modal-overlay open';
    modal.style.cssText = 'z-index: 1000 !important;';
    modal.innerHTML = `
        <div class="modal" style="max-width: 400px; text-align: center; ${isArabic ? 'direction: rtl;' : 'direction: ltr;'}">
            <div class="success-message">
                <div class="success-icon" style="font-size: 4rem; animation: bounce 1s infinite;">✅</div>
                <h2>${t.successTitle}</h2>
                <p>${t.successMessage}</p>
                <button onclick="this.closest('.modal-overlay').remove()" class="submit-btn" style="margin-top: 1rem;">${okText}</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Auto-close after 8 seconds
    setTimeout(() => {
        if (modal.parentNode) {
            modal.remove();
        }
    }, 8000);
}

// ===== Scroll Animations =====
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ===== Load Saved Preferences =====
function loadPreferences() {
    try {
        const darkMode = localStorage.getItem('darkMode');
        const language = localStorage.getItem('language');

        if (darkMode === 'true') {
            isDarkMode = true;
            document.body.classList.add('dark-mode');
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) themeToggle.textContent = '☀️';
        }

        if (language === 'en') {
            currentLanguage = 'en';
        }
    } catch (e) {
        console.warn('localStorage error:', e);
    }
}

// ===== Initialize on Load =====
loadPreferences();
init();