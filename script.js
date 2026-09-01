const menuButton = document.querySelector('.menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

const translations = {
  ko: {
    metaDescription: '성산일출봉을 마주한 제주 오조리의 작은 책방, 오조바닷가책방입니다.', pageTitle: '오조바닷가책방', skipLink: '본문 바로가기', announcement: '이번 주 책방은 금–월, 낮 12시부터 오후 5시까지 열립니다.', brandLabel: '오조바닷가책방 처음으로', mainNavLabel: '주요 메뉴', mobileNavLabel: '모바일 메뉴', languageLabel: '언어 선택', menuOpen: '메뉴 열기', navStory: '책방 이야기', navBooks: '책과 커피', navJournal: '책방 소식', navVisit: '오시는 길',
    heroAlt: '책방 정원 너머로 보이는 성산일출봉과 야외 테이블', heroTitle: '바다 곁에서<br>한 권의 시간을', heroDescription: '성산일출봉을 마주한 오조리, 책과 커피가 머무는 작은 공간', heroButton: '책방에 오세요', scrollLabel: '책방 이야기로 이동', storyTitle: '천천히 읽고,<br>오래 바라보는 곳', storyLead: '제주 동쪽, 오조리의 바람과 볕이 드는 자리에 책방이 있습니다.', storyBody: '고전과 그림책, 소설을 고르고 커피를 내립니다. 책을 사러 오셔도, 잠시 책장을 넘기며 쉬어가셔도 좋습니다. 바다 곁에서 각자의 속도로 머물러 주세요.', storyLink: '책방의 오늘 보기', storyAlt: '귤나무와 노란 꽃 사이로 보이는 책방 창문', storyCaption: '오조리의 계절이 가장 먼저 닿는 창가',
    galleryTitle: '책방 안과 밖의 풍경', galleryDescription: '책이 놓인 따뜻한 실내와<br>바다를 향해 열린 오조리의 풍경입니다.', galleryOpenLabel: '사진 크게 보기', galleryDialogLabel: '사진 상세 보기', galleryCloseLabel: '닫기', galleryWindowAlt: '큰 창으로 바다와 오름이 보이는 책방 내부', galleryWindowCaption: '창 너머 풍경과 함께 머무는 자리', galleryBooksAlt: '책과 조명이 어우러진 책방 내부', galleryBooksCaption: '책으로 가득한 안쪽 공간', galleryBrickAlt: '벽돌 벽과 책장이 있는 책방 내부', galleryBrickCaption: '벽돌과 나무, 책이 만드는 온기', galleryCloudyAlt: '흐린 날 오조바닷가책방 표지판과 바다 풍경', galleryCloudyCaption: '흐린 날에도 고요한 책방 앞', galleryDrawingAlt: '오조바닷가책방과 주변 풍경을 그린 선화', galleryDrawingCaption: '선으로 담아낸 오조의 풍경', visitAlt: '무궁화가 핀 오조바닷가책방 앞마당', visitTitle: '제주 동쪽에서<br>만나요', openDays: '금 · 토 · 일 · 월<br>12:00 — 17:00', closedDays: '화 · 수 · 목', address: '제주 서귀포시 성산읍 오조로<br>성산일출봉을 마주한 오조리', mapButton: '지도에서 길 찾기 ↗', visitNote: '방문 전 인스타그램에서 당일 운영 소식을 확인해 주세요.', collectionTitle: '오조에서 고른 것들', collectionDescription: '한 번 더 펼쳐보고 싶은 책과<br>책 읽는 시간을 위한 커피를 준비합니다.', classicAlt: '오조바닷가책방의 어느 봄날 풍경', classicTitle: '시간을 건너온 고전', classicDescription: '천천히 읽을수록 오래 남는 문장들', pictureAlt: '오조바닷가책방의 정원 풍경', pictureTitle: '마음을 여는 그림책', pictureDescription: '어른과 아이가 함께 펼치는 이야기', novelAlt: '계절의 꽃이 핀 책방 정원', novelTitle: '소설 그리고 커피', novelDescription: '한 세계에 잠시 머무는 가장 좋은 방법',
    journalTitle: '책방의 계절', journalDescription: '오조리의 볕과 바람, 그리고 책방의 작은 소식을 전합니다.', journalSpringAlt: '붉은 꽃이 가득 핀 책방의 봄', journalSpringTitle: '꽃이 먼저 알려준<br>오조리의 봄', journalDayAlt: '분홍 꽃이 핀 책방 입구', journalDayTitle: '문을 열고 기다리는<br>낮의 시간', journalLink: '소식 보기 ↗', closingTitle: '당신의 다음 문장을<br>바다 곁에서 만나세요', closingButton: '방문 안내 보기', footerAddress: '제주 서귀포시 성산읍 오조로', footerHours: '금–월 12:00–17:00', beanfieldLogoAlt: '빈필드하우스 로고', beanfieldLinkLabel: '빈필드하우스 블로그 열기', relatedBrandLabel: '함께하는 공간 ↗', relatedBrandNote: '빈필드하우스 블로그에서 더 알아보세요.'
  },
  en: {
    metaDescription: 'Ojo Bookshop by the Sea, a small bookshop in Ojo-ri, Jeju, overlooking Seongsan Ilchulbong.', pageTitle: 'Ojo Bookshop by the Sea', skipLink: 'Skip to main content', announcement: 'This week, the bookshop is open Friday–Monday, 12 PM–5 PM.', brandLabel: 'Ojo Bookshop by the Sea home', mainNavLabel: 'Main navigation', mobileNavLabel: 'Mobile navigation', languageLabel: 'Choose language', menuOpen: 'Open menu', navStory: 'Our Story', navBooks: 'Books & Coffee', navJournal: 'Journal', navVisit: 'Visit',
    heroAlt: 'Seongsan Ilchulbong and an outdoor table seen beyond the bookshop garden', heroTitle: 'A moment with a book,<br>beside the sea', heroDescription: 'A small place for books and coffee in Ojo-ri, overlooking Seongsan Ilchulbong', heroButton: 'Visit the Bookshop', scrollLabel: 'Go to our story', storyTitle: 'A place to read slowly<br>and linger longer', storyLead: 'Our bookshop sits in the sun and breeze of Ojo-ri, on the eastern side of Jeju.', storyBody: 'We choose classics, picture books, and novels, and brew coffee. Come to find a book or simply rest and turn a few pages. Stay awhile by the sea, at your own pace.', storyLink: 'See today at the bookshop', storyAlt: 'Bookshop window framed by a tangerine tree and yellow flowers', storyCaption: 'A window where the seasons of Ojo-ri arrive first',
    galleryTitle: 'Inside and Around the Bookshop', galleryDescription: 'A warm interior filled with books,<br>and Ojo-ri opening out toward the sea.', galleryOpenLabel: 'View larger photo', galleryDialogLabel: 'Photo details', galleryCloseLabel: 'Close', galleryWindowAlt: 'Bookshop interior with the sea and an oreum visible through wide windows', galleryWindowCaption: 'A place to linger with the view beyond the windows', galleryBooksAlt: 'Bookshop interior filled with books and warm lights', galleryBooksCaption: 'The inner room, filled with books', galleryBrickAlt: 'Bookshop interior with brick walls and bookshelves', galleryBrickCaption: 'The warmth of brick, wood, and books', galleryCloudyAlt: 'Ojo Bookshop by the Sea sign and coastal landscape on a cloudy day', galleryCloudyCaption: 'Quiet outside the bookshop, even on a cloudy day', galleryDrawingAlt: 'Line drawing of Ojo Bookshop by the Sea and its surroundings', galleryDrawingCaption: 'The landscape of Ojo captured in lines', visitAlt: 'The front garden of Ojo Bookshop by the Sea in bloom', visitTitle: 'Meet us<br>in eastern Jeju', openDays: 'Friday · Saturday · Sunday · Monday<br>12:00 — 17:00', closedDays: 'Tuesday · Wednesday · Thursday', address: 'Ojo-ro, Seongsan-eup, Seogwipo-si, Jeju<br>Ojo-ri, overlooking Seongsan Ilchulbong', mapButton: 'Get Directions ↗', visitNote: 'Please check Instagram for the day’s opening updates before visiting.', collectionTitle: 'Selected in Ojo', collectionDescription: 'Books worth opening once more,<br>and coffee made for time spent reading.', classicAlt: 'A spring day at Ojo Bookshop by the Sea', classicTitle: 'Classics Through Time', classicDescription: 'Words that stay longer when read slowly', pictureAlt: 'The garden at Ojo Bookshop by the Sea', pictureTitle: 'Picture Books That Open Hearts', pictureDescription: 'Stories for children and adults to share', novelAlt: 'The bookshop garden in seasonal bloom', novelTitle: 'Novels and Coffee', novelDescription: 'A fine way to linger in another world',
    journalTitle: 'Seasons at the Bookshop', journalDescription: 'Sunlight, wind, and small stories from our bookshop in Ojo-ri.', journalSpringAlt: 'Spring at the bookshop, filled with red flowers', journalSpringTitle: 'The flowers announced<br>spring in Ojo-ri', journalDayAlt: 'Bookshop entrance framed by pink flowers', journalDayTitle: 'Quiet daytime hours,<br>with the door open', journalLink: 'Read the story ↗', closingTitle: 'Find your next sentence<br>beside the sea', closingButton: 'Plan Your Visit', footerAddress: 'Ojo-ro, Seongsan-eup, Seogwipo-si, Jeju', footerHours: 'Friday–Monday 12:00–17:00', beanfieldLogoAlt: 'Beanfield House logo', beanfieldLinkLabel: 'Open the Beanfield House blog', relatedBrandLabel: 'A SPACE WE SHARE ↗', relatedBrandNote: 'Learn more on the Beanfield House blog.'
  }
};

const galleryLightbox = document.querySelector('.gallery-lightbox');
const lightboxImage = galleryLightbox.querySelector('img');
const lightboxCaption = galleryLightbox.querySelector('figcaption');

function updateLightbox(figure) {
  const image = figure.querySelector('img');
  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = figure.querySelector('figcaption').textContent;
}

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : 'ko';
  const dictionary = translations[selectedLanguage];
  document.documentElement.lang = selectedLanguage;
  document.querySelectorAll('[data-i18n]').forEach((element) => { element.innerHTML = dictionary[element.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => { element.alt = dictionary[element.dataset.i18nAlt]; });
  document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => { element.setAttribute('aria-label', dictionary[element.dataset.i18nAriaLabel]); });
  document.querySelectorAll('[data-i18n-content]').forEach((element) => { element.setAttribute('content', dictionary[element.dataset.i18nContent]); });
  document.querySelectorAll('[data-lang]').forEach((button) => { button.setAttribute('aria-pressed', String(button.dataset.lang === selectedLanguage)); });
  if (galleryLightbox.open) {
    updateLightbox(document.querySelectorAll('.gallery-photo')[galleryLightbox.dataset.photoIndex]);
  }
  localStorage.setItem('ojo-language', selectedLanguage);
}

document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
setLanguage(localStorage.getItem('ojo-language') || 'ko');

document.querySelectorAll('.gallery-photo').forEach((figure, index) => {
  figure.querySelector('.gallery-open').addEventListener('click', () => {
    galleryLightbox.dataset.photoIndex = index;
    updateLightbox(figure);
    galleryLightbox.showModal();
  });
});

galleryLightbox.querySelector('.gallery-close').addEventListener('click', () => galleryLightbox.close());
galleryLightbox.addEventListener('click', (event) => {
  if (event.target === galleryLightbox) galleryLightbox.close();
});

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  mobileMenu.hidden = true;
  document.body.classList.remove('menu-open');
}

menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') === 'false';
  menuButton.setAttribute('aria-expanded', String(opening));
  mobileMenu.hidden = !opening;
  document.body.classList.toggle('menu-open', opening);
});

mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileMenu.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
