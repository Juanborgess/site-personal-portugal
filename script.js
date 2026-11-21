// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Registar o ScrollTrigger logo no início (Boa prática)
    gsap.registerPlugin(ScrollTrigger);
    
    // ==========================================
    // SEÇÃO 1: HERO
    // ==========================================
    const tlHero = gsap.timeline();

    // Correção: Agora afeta APENAS o badge do Hero
    tlHero.from(".hero .badge", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".hero-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")
    .from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.5")
    .from(".cta-button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        clearProps: "all" 
    }, "-=0.4")
    .from(".glow-bg", {
        scale: 0.5,
        opacity: 0,
        duration: 2,
        ease: "power2.out"
    }, 0);

    // ==========================================
    // SEÇÃO 2: ENTREGÁVEIS (Checklist)
    // ==========================================
    const tlChecklist = gsap.timeline({
        scrollTrigger: {
            trigger: ".deliverables-checklist",
            start: "top 75%", 
            toggleActions: "play none none reverse" 
        }
    });

    tlChecklist.from(".section-title", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    })
    .from(".mockup-wrapper", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.4")
    // Efeito cascata nas linhas da lista (li)
    .from(".benefits-list li", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15, 
        ease: "power3.out",
        clearProps: "all" // Permite que o hover do CSS funcione depois
    }, "-=0.5")
    .from(".deliverables-checklist .cta-button", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.5)",
        clearProps: "all"
    }, "-=0.2");

    // ==========================================
    // SEÇÃO 3: AUTORIDADE (O Treinador)
    // ==========================================
    const tlAuthority = gsap.timeline({
        scrollTrigger: {
            trigger: ".authority",
            start: "top 75%", // Ativa quando o utilizador vê 75% do ecrã
            toggleActions: "play none none reverse"
        }
    });

    // A Imagem desliza da esquerda
    tlAuthority.from(".authority-image-wrapper", {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    // Os blocos de texto deslizam da direita em cascata
    .from(".authority-text > *", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
    }, "-=0.8");

    // ==========================================
    // SEÇÃO 4: RESULTADOS (Carrossel)
    // ==========================================
    const tlResults = gsap.timeline({
        scrollTrigger: {
            trigger: ".results",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    tlResults.from(".results .badge", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out"
    })
    .from(".results .section-title", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out"
    }, "-=0.4")
    .from(".results .section-subtitle", {
        y: 20, opacity: 0, duration: 0.6, ease: "power3.out"
    }, "-=0.4")
    // O carrossel entra com um pequeno Fade In
    .from(".carousel-container", {
        y: 40, opacity: 0, duration: 1, ease: "power3.out"
    }, "-=0.2");

    // ==========================================
    // SEÇÃO 5: PLANOS E SERVIÇOS
    // ==========================================
    const tlPricing = gsap.timeline({
        scrollTrigger: {
            trigger: ".pricing",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tlPricing.from(".pricing .section-header", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
    })
    .from(".pricing-card", {
        y: 60, 
        opacity: 0, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: "back.out(1.2)",
        clearProps: "all" 
    }, "-=0.4");

    // ==========================================
    // SEÇÃO 6: FAQ (Animação + Lógica de Clique)
    // ==========================================
    const tlFaq = gsap.timeline({
        scrollTrigger: {
            trigger: ".faq",
            start: "top 75%",
            toggleActions: "play none none reverse"
        }
    });

    tlFaq.from(".faq .section-header", {
        y: 40, opacity: 0, duration: 0.8, ease: "power3.out"
    })
    .from(".faq-item", {
        y: 40, opacity: 0, duration: 0.6, stagger: 0.15, ease: "power3.out", clearProps: "all"
    }, "-=0.4")
    .from(".faq .cta-button", {
        scale: 0.8, opacity: 0, duration: 0.6, ease: "back.out(1.5)", clearProps: "all"
    }, "-=0.2");

    // Lógica do Acordeão (Abrir e Fechar)
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Fecha todos os outros primeiro (opcional, dá um ar mais limpo)
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Se não estava ativo, abre este. Se estava, ele já fechou no loop acima.
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // ==========================================
    // SEÇÃO 7: RODAPÉ PREMIUM (Animações)
    // ==========================================
    const tlFooter = gsap.timeline({
        scrollTrigger: {
            trigger: ".footer",
            start: "top 85%", // Dispara quando 85% do ecrã atinge o rodapé
            toggleActions: "play none none reverse"
        }
    });

    // 1. Bloco CTA (Selo, Título, Texto e Botão) surge em cascata
    tlFooter.from(".footer-cta > *, .footer-cta .cta-wrapper", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        clearProps: "all" // Muito importante para libertar o Hover do botão!
    })
    // 2. A linha dourada expande a partir do centro
    .from(".footer-divider", {
        scaleX: 0,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    }, "-=0.4")
    // 3. A marca e a descrição entram da esquerda
    .from(".footer-brand", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.4")
    // 4. Os botões das redes sociais dão um pequeno salto
    .from(".social-link", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.5)",
        clearProps: "all" // Para o CSS do hover das redes sociais funcionar
    }, "-=0.6")
    // 5. Os direitos de autor e a sua assinatura surgem suavemente
    .from(".footer-bottom", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.2");
   
});