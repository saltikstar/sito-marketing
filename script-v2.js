(() => {
  const phone = '77475550174';
  document.querySelectorAll('.wa').forEach(link => {
    const text = link.dataset.message || 'Здравствуйте! Хочу узнать больше о Sito.';
    link.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  });
})();
