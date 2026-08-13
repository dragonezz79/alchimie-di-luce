(() => {
  const sendEvent = (eventName, parameters = {}) => {
    if (typeof window.gtag !== 'function') return;

    window.gtag('event', eventName, {
      ...parameters,
      page_location: window.location.href,
      page_title: document.title
    });
  };

  const normalizeText = (value = '') =>
    value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '')
      .slice(0, 80);

  const getServiceName = (link) => {
    const href = link.href || '';
    const cardText =
      link.closest('article, .card, .pricing-card, section')?.innerText ||
      link.innerText ||
      '';
    const text = cardText.toLowerCase();

    if (href.includes('/3MyCg') || text.includes('mappa di luce')) {
      return 'mappa_di_luce';
    }
    if (href.includes('/Ez8xs') || text.includes('guida alla serenita')) {
      return 'guida_serenita';
    }
    if (href.includes('/AlchimieDiLuce/20') || text.includes('risposte degli angeli')) {
      return 'risposte_angeli';
    }
    if (
      (href.includes('/AlchimieDiLuce/25') && text.includes('angel therapy')) ||
      text.includes('lettura angel therapy')
    ) {
      return 'angel_therapy';
    }
    if (
      href.includes('/AlchimieDiLuce/25') ||
      text.includes('tarocchi in pdf')
    ) {
      return 'tarocchi_pdf';
    }
    if (
      href.includes('/AlchimieDiLuce/30') ||
      href.includes('consulto-tarocchi') ||
      text.includes('tarocchi al telefono') ||
      text.includes('consulto telefonico')
    ) {
      return 'tarocchi_telefono';
    }
    if (href.includes('/AlchimieDiLuce/49') || text.includes('guarigione angelica')) {
      return 'guarigione_angelica';
    }
    if (href.includes('/AlchimieDiLuce/129') || text.includes('percorso luce')) {
      return 'percorso_luce';
    }

    return normalizeText(link.innerText || link.getAttribute('aria-label') || 'servizio');
  };

  const getPrice = (href) => {
    const match = href.match(/AlchimieDiLuce\/(\d+(?:\.\d+)?)/i);
    return match ? Number(match[1]) : undefined;
  };

  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest('a');
      if (!link) return;

      const href = link.href || '';
      const serviceName = getServiceName(link);
      const linkText = (link.innerText || link.getAttribute('aria-label') || '').trim();

      if (href.includes('paypal.me/')) {
        sendEvent('begin_checkout', {
          service_name: serviceName,
          payment_platform: 'paypal',
          currency: 'EUR',
          value: getPrice(href),
          link_text: linkText
        });
        return;
      }

      if (href.includes('payhip.com/')) {
        const isFreeGuide = href.includes('/Ez8xs');
        sendEvent(isFreeGuide ? 'download_free_guide' : 'begin_checkout', {
          service_name: serviceName,
          payment_platform: 'payhip',
          link_text: linkText
        });
        return;
      }

      if (href.includes('cal.com/')) {
        sendEvent('open_booking', {
          service_name: serviceName,
          booking_platform: 'cal',
          link_text: linkText
        });
        return;
      }

      if (
        href.includes('wa.me/') ||
        href.includes('api.whatsapp.com/') ||
        href.startsWith('whatsapp:')
      ) {
        sendEvent('contact_whatsapp', {
          service_name: serviceName,
          link_text: linkText
        });
        return;
      }

      if (link.hash && link.origin === window.location.origin) {
        sendEvent('view_section', {
          section_name: link.hash.replace('#', '') || 'home',
          link_text: linkText
        });
      }
    },
    true
  );
})();
