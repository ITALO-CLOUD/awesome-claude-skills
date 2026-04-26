/* ============================================================
   DJOLOF CHICKEN — Interactivité
   ============================================================ */

(function () {
    'use strict';

    /* ---------- Mobile menu toggle ---------- */
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navClose = document.getElementById('nav-close');

    if (navToggle) {
        navToggle.addEventListener('click', () => navMenu.classList.add('show'));
    }
    if (navClose) {
        navClose.addEventListener('click', () => navMenu.classList.remove('show'));
    }
    document.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => navMenu.classList.remove('show'));
    });

    /* ---------- Sticky header & active section ---------- */
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav__link');
    const sections = document.querySelectorAll('section[id]');

    function onScroll() {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        const scrollY = window.scrollY + 120;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`.nav__link[href="#${id}"]`);
            if (!link) return;
            if (scrollY >= top && scrollY < top + height) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------- Reveal on scroll ---------- */
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('is-visible'));
    }

    /* ---------- Menu category filter ---------- */
    const catButtons = document.querySelectorAll('.menu__cat');
    const menuCards = document.querySelectorAll('.menu-card');

    catButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.dataset.cat;
            catButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            menuCards.forEach(card => {
                if (cat === 'all' || card.dataset.cat === cat) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* ---------- Contact form (WhatsApp redirect) ---------- */
    const form = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value.trim();
            const phone = form.phone.value.trim();
            const message = form.message.value.trim();

            if (!name || !phone || !message) return;

            const text = `Bonjour DJOLOF Chicken !%0A%0A` +
                `*Nom :* ${encodeURIComponent(name)}%0A` +
                `*Téléphone :* ${encodeURIComponent(phone)}%0A` +
                `*Message :* ${encodeURIComponent(message)}`;
            const waUrl = `https://wa.me/224627276721?text=${text}`;

            successMsg.classList.add('show');
            setTimeout(() => {
                window.open(waUrl, '_blank', 'noopener');
            }, 600);

            setTimeout(() => {
                successMsg.classList.remove('show');
                form.reset();
            }, 4000);
        });
    }

    /* ---------- Live "open now" badge ---------- */
    function updateOpenStatus() {
        const now = new Date();
        const hours = now.getHours();
        // Ouvert tous les jours de 8h à minuit (8:00 - 23:59)
        const isOpen = hours >= 8 && hours < 24;
        document.querySelectorAll('.hours__badge .pulse').forEach(p => {
            const badge = p.parentElement;
            if (isOpen) {
                badge.style.background = 'rgba(37, 211, 102, 0.15)';
                badge.style.color = '#25D366';
                badge.lastChild.textContent = ' Ouvert maintenant';
            } else {
                badge.style.background = 'rgba(230, 57, 70, 0.15)';
                badge.style.color = '#E63946';
                p.style.background = '#E63946';
                p.style.boxShadow = '0 0 0 0 rgba(230, 57, 70, 0.7)';
                badge.lastChild.textContent = ' Fermé · réouverture à 8h';
            }
        });
    }
    updateOpenStatus();
    setInterval(updateOpenStatus, 60000);

})();
