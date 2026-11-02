(() => {
  // Main Sito marketing counter. The home page already initializes it inline.
  // Keep the existing Yandex.Metrika WhatsApp link-click goal; no custom goal is sent.
  const counterId = 113372905;
  const tagSrc = `https://mc.yandex.ru/metrika/tag.js?id=${counterId}`;
  if (!Array.from(document.scripts).some(script => script.src === tagSrc)) {
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
      m[i].l = 1 * new Date();
      for (let j = 0; j < document.scripts.length; j += 1) {
        if (document.scripts[j].src === r) return;
      }
      k = e.createElement(t);
      a = e.getElementsByTagName(t)[0];
      k.async = 1;
      k.src = r;
      a.parentNode.insertBefore(k, a);
    })(window, document, 'script', tagSrc, 'ym');

    window.ym(counterId, 'init', {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: 'dataLayer',
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });
  }

  const phone = '77475550174';
  document.querySelectorAll('.wa').forEach(link => {
    const text = link.dataset.message || 'Здравствуйте! Хочу узнать больше о Sito.';
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
})();
