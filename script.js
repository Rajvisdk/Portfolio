const dialog = document.querySelector('#collection');
const title = document.querySelector('#modal-title');
const slots = document.querySelector('#media-slots');
const collections = {
  'Video Editing': { videos: 5, images: 0, titles: ['Brand Film', 'Campaign Reel', 'Product Story', 'Social Edit', 'Behind the Scenes'] },
  'Image Editing': { videos: 0, images: 5, titles: ['Beauty Retouch', 'Editorial Frame', 'Product Focus', 'Campaign Visual', 'Final Composition'] },
  'On Ground Creatives': { videos: 0, images: 5, titles: ['Event Identity', 'Experience Detail', 'Display Moment', 'Launch Space', 'Brand Activation'] },
  'Digital Creatives': { videos: 0, images: 10, titles: ['Social Launch', 'Carousel Story', 'Campaign Post', 'Product Highlight', 'Brand Announcement', 'Festival Creative', 'Content Series', 'Story Frame', 'Digital Ad', 'Final Asset'] },
  'Logo Design': { videos: 0, images: 5, titles: ['Brand Mark 01', 'Brand Mark 02', 'Brand Mark 03', 'Brand Mark 04', 'Brand Mark 05'] },
  'AI Creative': { videos: 3, images: 5, titles: ['AI Visual 01', 'AI Visual 02', 'AI Visual 03', 'AI Visual 04', 'AI Visual 05', 'AI Motion 01', 'AI Motion 02', 'AI Motion 03'] },
};
document.querySelectorAll('.view-work').forEach((button) => button.addEventListener('click', () => {
  const category = button.dataset.category;
  const collection = collections[category];
  title.textContent = category;
  slots.innerHTML = [...Array(collection.images).fill('Image'), ...Array(collection.videos).fill('Video')]
    .map((type, index) => `<div class="media-slot ${type.toLowerCase()}"><span>${String(index + 1).padStart(2, '0')}</span><strong>${collection.titles[index]}</strong><span class="slot-add">+</span><span class="slot-type">${type} placeholder</span></div>`)
    .join('');
  dialog.showModal();
}));
document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
