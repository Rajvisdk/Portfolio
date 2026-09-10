const dialog = document.querySelector('#collection');
const title = document.querySelector('#modal-title');
const slots = document.querySelector('#media-slots');

// Add media objects with type, title, and src (file path or URL)
const collections = {
  'Video Editing': [
    { type: 'video', title: 'Brand Film', src: 'videos/brand-film.mp4' },
    { type: 'video', title: 'Campaign Reel', src: 'videos/campaign-reel.mp4' },
    { type: 'video', title: 'Product Story', src: 'videos/product-story.mp4' },
    { type: 'video', title: 'Social Edit', src: 'videos/social-edit.mp4' },
    { type: 'video', title: 'Behind the Scenes', src: 'videos/bts.mp4' }
  ],
  'Image Editing': [
    { type: 'image', title: 'Hoarding', src: 'images/Hoarding.jpg' },
    { type: 'image', title: 'Sunboard Standee', src: 'images/Sunboard Standee.jpg' },
    { type: 'image', title: 'Standee', src: 'images/Standee.jpg' },
    { type: 'image', title: 'Booth & Canopy', src: 'images/Booth & Canopy.jpg' },
    { type: 'image', title: 'Newspaper Ad', src: 'images/Newspaper Ad.jpg' }
  ],
  'On Ground Creatives': [
    { type: 'image', title: 'Event Identity', src: 'images/event-identity.jpg' },
    { type: 'image', title: 'Experience Detail', src: 'images/experience-detail.jpg' },
    { type: 'image', title: 'Display Moment', src: 'images/display-moment.jpg' },
    { type: 'image', title: 'Launch Space', src: 'images/launch-space.jpg' },
    { type: 'image', title: 'Brand Activation', src: 'images/brand-activation.jpg' }
  ],
  'Digital Creatives': [
    { type: 'image', title: 'Social Launch', src: 'images/social-launch.jpg' },
    { type: 'image', title: 'Carousel Story', src: 'images/carousel-story.jpg' },
    { type: 'image', title: 'Campaign Post', src: 'images/campaign-post.jpg' },
    { type: 'image', title: 'Product Highlight', src: 'images/product-highlight.jpg' },
    { type: 'image', title: 'Brand Announcement', src: 'images/brand-announcement.jpg' },
    { type: 'image', title: 'Festival Creative', src: 'images/festival-creative.jpg' },
    { type: 'image', title: 'Content Series', src: 'images/content-series.jpg' },
    { type: 'image', title: 'Story Frame', src: 'images/story-frame.jpg' },
    { type: 'image', title: 'Digital Ad', src: 'images/digital-ad.jpg' },
    { type: 'image', title: 'Final Asset', src: 'images/final-asset.jpg' }
  ],
  'Logo Design': [
    { type: 'image', title: 'Brand Mark 01', src: 'images/logo-01.png' },
    { type: 'image', title: 'Brand Mark 02', src: 'images/logo-02.png' },
    { type: 'image', title: 'Brand Mark 03', src: 'images/logo-03.png' },
    { type: 'image', title: 'Brand Mark 04', src: 'images/logo-04.png' },
    { type: 'image', title: 'Brand Mark 05', src: 'images/logo-05.png' }
  ],
  'AI Creative': [
    { type: 'image', title: 'AI Visual 01', src: 'images/ai-visual-01.jpg' },
    { type: 'image', title: 'AI Visual 02', src: 'images/ai-visual-02.jpg' },
    { type: 'image', title: 'AI Visual 03', src: 'images/ai-visual-03.jpg' },
    { type: 'image', title: 'AI Visual 04', src: 'images/ai-visual-04.jpg' },
    { type: 'image', title: 'AI Visual 05', src: 'images/ai-visual-05.jpg' },
    { type: 'video', title: 'AI Motion 01', src: 'videos/ai-motion-01.mp4' },
    { type: 'video', title: 'AI Motion 02', src: 'videos/ai-motion-02.mp4' },
    { type: 'video', title: 'AI Motion 03', src: 'videos/ai-motion-03.mp4' }
  ]
};

document.querySelectorAll('.view-work').forEach((button) => button.addEventListener('click', () => {
  const category = button.dataset.category;
  const items = collections[category];
  
  if (!items) return;

  title.textContent = category;

  // Render actual media elements based on item type
  slots.innerHTML = items
    .map((item, index) => {
      const mediaTag = item.type === 'video'
        ? `<video src="${item.src}" controls preload="metadata"></video>`
        : `<img src="${item.src}" alt="${item.title}" loading="lazy" />`;

      return `
        <div class="media-slot ${item.type}">
          <div class="media-preview">${mediaTag}</div>
          <span>${String(index + 1).padStart(2, '0')}</span>
          <strong>${item.title}</strong>
        </div>
      `;
    })
    .join('');

  dialog.showModal();
}));

document.querySelector('.close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });
