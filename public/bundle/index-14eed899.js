
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.head.appendChild(r) })(window.document);
const songs = [
    { id: 1, slug: 'into-the-mystic', title: 'Into the  Mystic', artist: 'Van Morrison', url: 'https://www.youtube.com/embed/_6r2P4W9Yog' },
    { id: 2, slug: 'the-weight', title: 'The Weight', artist: 'The Band', url: 'https://www.youtube.com/embed/FFqb1I-hiHE' },
    { id: 3, slug: 'midnight-rider', title: 'Midnight Rider', artist: 'The Allman Brothers Band', url: 'https://www.youtube.com/embed/TCRS4DRmf_w' },
    { id: 4, slug: 'brothers-in-arms', title: 'Brothers in Arms', artist: 'Dire Straits', url: 'https://www.youtube.com/embed/jhdFe3evXpk' },
    { id: 5, slug: 'first-we-take-manhattan', title: 'First We Take Manhattan', artist: 'Leonard Cohen', url: 'https://www.youtube.com/embed/JTTC_fD598A' },
    { id: 6, slug: 'the-passenger', title: 'The Passenger', artist: 'Iggy Pop', url: 'https://www.youtube.com/embed/hLhN__oEHaw' },
    { id: 7, slug: 'nisi-dominus-cum-dederit', title: 'Nisi Dominus - Cum Dederit', artist: 'Vivaldi', url: 'https://www.youtube.com/embed/1WdX5uBFadM' },
    { id: 8, slug: 'im-on-fire', title: 'I´m on fire', artist: 'Bruce Springsteen', url: 'https://www.youtube.com/embed/xzQvGz6_fvA' },
    { id: 9, slug: 'use-me', title: 'Use Me', artist: 'Bill Withers', url: 'https://www.youtube.com/embed/EZldnP0lhHA' },
    { id: 10, slug: 'Strange-things', title: 'Strange Things', artist: 'Randy Newman', url: 'https://www.youtube.com/embed/KfGLS_ZSkZk' },
    { id: 11, slug: 'son-of-a-preacher-man', title: 'Son of a Preacher Man', artist: 'Dusty Springfield', url: 'https://www.youtube.com/embed/DjydOI4MEIw' },
    { id: 12, slug: 'diner', title: 'Diner', artist: 'Martin Sexton', url: 'https://www.youtube.com/embed/O6_9nRT0gEU' },
    { id: 13, slug: 'bette-davis-eyes', title: 'Betty Davis Eyes', artist: 'Kim Carnes', url: 'https://www.youtube.com/embed/EPOIS5taqA8' },
    { id: 14, slug: 'the-man-in-me', title: 'The Man in Me', artist: 'Bob Dylan', url: 'https://www.youtube.com/embed/s10ldVRHRSw' },
    { id: 15, slug: 'more than this', title: 'More Than This', artist: 'Roxy Music', url: 'https://www.youtube.com/embed/kOnde5c7OG8' },
    { id: 16, slug: 'the-boss', title: 'The Boss', artist: 'James Brown', url: 'https://www.youtube.com/embed/jC2ZY2loo74' },
    { id: 17, slug: 'bright-side-of-the-road', title: 'Bright Side of the Road', artist: 'Van Morrison', url: 'https://www.youtube.com/embed/rCDZzf4ragg' },
    { id: 18, slug: 'cello-suite-no-1', title: 'Cello Suite No. 1', artist: 'Bach', url: 'https://www.youtube.com/embed/mGQLXRTl3Z0' },
    { id: 19, slug: 'on-the-road-again', title: 'On the Road Again', artist: 'Canned Heat', url: 'https://www.youtube.com/embed/qRKNw477onU' },
    { id: 20, slug: 'the-four-seasons', title: 'The Four Seasons', artist: 'Vivaldi', url: 'https://www.youtube.com/embed/o-JclG7IQvM' },
    { id: 21, slug: 'fantasie-impromptu', title: 'Fantasie Impromptu', artist: 'Chopin', url: 'https://www.youtube.com/embed/Gy5UHK4EeM8' },
];

const DELAY = 1000;

const fakeapi = async function (slug) {
    return new Promise(resolve => {
        const result = slug && songs.filter(s => s.slug === slug)[0] || songs;
        setTimeout(()=>resolve(result), DELAY);
    })
};

export { fakeapi as f };
//# sourceMappingURL=index-14eed899.js.map
