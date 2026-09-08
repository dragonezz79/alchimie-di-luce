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

  const catalog = [
    { name: 'punto_zero', value: 149, href: ['paypal.me/alchimiediluce/149'], text: ['punto zero'] },
    { name: 'tarocchi_pdf', value: 49, href: ['paypal.me/alchimiediluce/49'], text: ['tarocchi in pdf', 'lettura pdf'] },
    { name: 'tarocchi_telefono', value: 59, href: ['paypal.me/alchimiediluce/59', 'consulto-tarocchi'], text: ['tarocchi in diretta', 'consulto telefonico'] },
    { name: 'sette_rituali', value: 14.9, href: ['payhip.com/b/dbhjv'], text: ['7 rituali', 'sette rituali'] },
    { name: 'mappa_di_luce', value: 59, href: ['payhip.com/b/3mycg'], text: ['mappa di luce'] },
    { name: 'guida_serenita', value: 0, href: ['payhip.com/buy?link=ez8xs'], text: ['5 minuti', 'guida serenita', 'guida alla serenita'] }
  ];

  const getLinkContext = (link) => {
    const href = (link.href || '').toLowerCase();
    const cardText =
      link.closest('article, .card, .pricing-card, section')?.innerText ||
      link.innerText ||
      '';
    return { href, text: cardText.toLowerCase() };
  };

  const getService = (link) => {
    const context = getLinkContext(link);
    const match = catalog.find((item) =>
      item.href.some((term) => context.href.includes(term)) ||
      item.text.some((term) => context.text.includes(term))
    );

    if (match) return match;

    return {
      name: normalizeText(link.innerText || link.getAttribute('aria-label') || 'servizio'),
      value: undefined
    };
  };

  document.addEventListener(
    'click',
    (event) => {
      const link = event.target.closest('a');
      if (!link) return;

      const href = (link.href || '').toLowerCase();
      const service = getService(link);
      const linkText = (link.innerText || link.getAttribute('aria-label') || '').trim();

      if (href.includes('paypal.me/')) {
        sendEvent('begin_checkout', {
          service_name: service.name,
          payment_platform: 'paypal',
          currency: 'EUR',
          value: service.value,
          link_text: linkText
        });
        return;
      }

      if (href.includes('payhip.com/')) {
        const isFreeGuide = service.name === 'guida_serenita';
        sendEvent(isFreeGuide ? 'download_free_guide' : 'begin_checkout', {
          service_name: service.name,
          payment_platform: 'payhip',
          currency: 'EUR',
          value: service.value,
          link_text: linkText
        });
        return;
      }

      if (href.includes('cal.com/')) {
        sendEvent('open_booking', {
          service_name: service.name,
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
          service_name: service.name,
          link_text: linkText
        });
        return;
      }

      if (link.origin === window.location.origin && link.pathname !== window.location.pathname) {
        sendEvent('navigate_internal', {
          destination_path: link.pathname,
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
