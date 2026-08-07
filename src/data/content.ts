export type Lang = 'sr' | 'en';

export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface LabeledItem {
  label: string;
}

export interface Attraction {
  n: string;
  title: string;
  desc: string;
}

export interface Review {
  text: string;
  name: string;
  origin: string;
  initial: string;
}

export interface Dictionary {
  navAbout: string;
  navRooms: string;
  navGarden: string;
  navContact: string;
  navBook: string;
  heroKicker: string;
  heroTag: string;
  heroBook: string;
  heroGarden: string;
  ratingWord: string;
  ratingLabel: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutP1: string;
  aboutP2: string;
  aboutStat: string;
  roomsLabel: string;
  roomsHeading: string;
  roomsSub: string;
  swanName: string;
  swanTag: string;
  swanDesc: string;
  roseName: string;
  roseTag: string;
  roseDesc: string;
  viewGallery: string;
  gardenLabel: string;
  gardenHeading: string;
  gardenLead: string;
  palicLabel: string;
  palicHeading: string;
  palicSub: string;
  amenLabel: string;
  amenHeading: string;
  reviewsLabel: string;
  reviewsHeading: string;
  reviewsCount: string;
  locLabel: string;
  locHeading: string;
  locText: string;
  locBtn: string;
  contactLabel: string;
  contactHeading: string;
  contactSub: string;
  contactEmail: string;
  footerRights: string;
  footerMade: string;
  features: LabeledItem[];
  swanFeat: LabeledItem[];
  roseFeat: LabeledItem[];
  moments: LabeledItem[];
  attractions: Attraction[];
  amenities: LabeledItem[];
  reviews: Review[];
}

export const translations: Record<Lang, Dictionary> = {
  sr: {
    navAbout: 'O nama', navRooms: 'Sobe', navGarden: 'Dvorište', navContact: 'Kontakt', navBook: 'Rezervišite',
    heroKicker: 'Palić · Vojvodina · Srbija',
    heroTag: 'Mirno porodično prenoćište u srcu Palića — dvorište, hlad stare trešnje i topla domaćinska dobrodošlica.',
    heroBook: 'Rezervišite boravak', heroGarden: 'Pogledajte dvorište',
    ratingWord: 'Izuzetno', ratingLabel: 'Ocena na Booking.com',
    aboutLabel: 'O nama', aboutHeading: 'Dom daleko od kuće, okružen zelenilom',
    aboutP1: 'Soba Milica je malo porodično prenoćište u mirnom delu Palića, stvoreno za parove, porodice i putnike koji traže odmor i tišinu. Kod nas se svaki gost oseća kao deo porodice.',
    aboutP2: 'Veliko zeleno dvorište sa senovitom trešnjom, roštilj i prostor za sedenje na otvorenom pozivaju vas da usporite. Besplatan parking, a Palićko jezero i sve atrakcije udaljeni su tek nekoliko minuta.',
    aboutStat: 'udobne sobe sa sopstvenim kupatilom i pogledom na dvorište',
    roomsLabel: 'Naše sobe', roomsHeading: 'Dve sobe, dva karaktera',
    roomsSub: 'Svaka soba ima sopstveno kupatilo, klima uređaj i malu kuhinju — a obe dele isto mirno dvorište.',
    swanName: 'Soba Labud', swanTag: 'Za parove i male porodice',
    swanDesc: 'Svetla i udobna soba vedrog plavog tona, sa mirnom atmosferom i sopstvenom čajnom kuhinjom. Idealna za parove ili manje porodice koje žele svetao, prijatan prostor.',
    roseName: 'Soba Ruža', roseTag: 'Topla i intimna',
    roseDesc: 'Ugodna i topla soba koja gleda na dvorište — mesto za opuštanje, jutarnju kafu na terasi i miran, dubok san. Intimna i domaća, baš kao stvorena za dvoje.',
    viewGallery: 'Pogledajte galeriju',
    gardenLabel: 'Dvorište', gardenHeading: 'Srce Sobe Milica je napolju',
    gardenLead: 'Zamislite jutro uz kafu u hladu stare trešnje, cvrkut ptica i decu koja se bezbrižno igraju na travnjaku. Uveče — roštilj sa porodicom pod senicom, miris lavande i tišina koja leči.',
    palicLabel: 'Otkrijte Palić', palicHeading: 'Jedno od najlepših mesta severne Srbije',
    palicSub: 'Palićko jezero, secesijska arhitektura i vinogradi Vojvodine — sve na dohvat ruke, a Subotica na svega nekoliko minuta.',
    amenLabel: 'Sadržaji', amenHeading: 'Sve što vam treba za miran boravak',
    reviewsLabel: 'Utisci gostiju', reviewsHeading: 'Gosti nas rado preporučuju', reviewsCount: 'Ocena zasnovana na recenzijama gostiju',
    locLabel: 'Lokacija', locHeading: 'Kako do nas',
    locText: 'Nalazimo se u mirnom delu Palića, na samo nekoliko minuta od jezera, promenade i centra Subotice. Besplatan parking u dvorištu.',
    locBtn: 'Otvorite u mapama',
    contactLabel: 'Rezervacije', contactHeading: 'Rezervišite svoj mir',
    contactSub: 'Javite nam se direktno ili rezervišite preko Booking.com-a. Rado ćemo odgovoriti na sva pitanja i pomoći da isplanirate savršen odmor.',
    contactEmail: 'Pošaljite e-mail',
    footerRights: 'Sva prava zadržana.', footerMade: 'Porodično prenoćište u Paliću',
    features: ['Mirno susedstvo', 'Porodična atmosfera', 'Prelepo dvorište', 'Sedenje napolju', 'Roštilj', 'Besplatan parking', 'Blizu jezera'].map(label => ({ label })),
    swanFeat: ['Bračni krevet', 'Čajna kuhinja', 'Sopstveno kupatilo', 'Klima uređaj'].map(label => ({ label })),
    roseFeat: ['Pogled na dvorište', 'Dodatni ležajevi', 'Sopstveno kupatilo', 'Klima uređaj'].map(label => ({ label })),
    moments: ['Kafa u hladu', 'Roštilj i senica', 'Bezbedna igra za decu', 'Voćnjak i lavanda', 'Večernji mir', 'Cvrkut ptica u zoru'].map(label => ({ label })),
    attractions: [
      { n: '01', title: 'Palićko jezero', desc: 'Kratka šetnja do jezera, promenade i plaža.' },
      { n: '02', title: 'Biciklizam i šetnje', desc: 'Drvoredi oko jezera i staze kroz park.' },
      { n: '03', title: 'Vinarije', desc: 'Porodični vinogradi i podrumi subotičke peščare.' },
      { n: '04', title: 'Zoo vrt Palić', desc: 'Jedan od najstarijih u Srbiji, omiljen kod dece.' },
      { n: '05', title: 'Restorani', desc: 'Vojvođanska kuhinja i riblje čarde uz jezero.' },
      { n: '06', title: 'Wellness i spa', desc: 'Termalni i wellness sadržaji na par minuta.' },
      { n: '07', title: 'Secesijska arhitektura', desc: 'Vodotoranj i Velika terasa na jezeru.' },
      { n: '08', title: 'Subotica na dohvat', desc: 'Elegantan centar grada udaljen je svega par minuta.' },
    ],
    amenities: ['Besplatan WiFi', 'Klima uređaj', 'Besplatan parking', 'Dvorište', 'Roštilj', 'Sedenje napolju', 'TV', 'Sopstveno kupatilo', 'Čajna kuhinja', 'Za porodice', 'Mirna zona'].map(label => ({ label })),
    reviews: [
      { text: 'Mala oaza mira. Bašta je ujutru čarobna, a domaćini izuzetno topli i ljubazni.', name: 'Ana', origin: 'Novi Sad, Srbija', initial: 'A' },
      { text: 'Čisto, mirno i sa dušom. Naša deca su obožavala ljuljašku i trambolinu.', name: 'Márk', origin: 'Segedin, Mađarska', initial: 'M' },
      { text: 'Savršena baza za obilazak Palića i Subotice. Sigurno se vraćamo.', name: 'Ivana', origin: 'Beograd, Srbija', initial: 'I' },
    ],
  },
  en: {
    navAbout: 'About', navRooms: 'Rooms', navGarden: 'Garden', navContact: 'Contact', navBook: 'Book now',
    heroKicker: 'Palić · Vojvodina · Serbia',
    heroTag: 'A peaceful family guesthouse in the heart of Palić — a garden, the shade of an old tree, and warm, homely hospitality.',
    heroBook: 'Book your stay', heroGarden: 'See the garden',
    ratingWord: 'Fabulous', ratingLabel: 'Booking.com rating',
    aboutLabel: 'About us', aboutHeading: 'A home away from home, wrapped in green',
    aboutP1: 'Soba Milica is a small family-run guesthouse in a quiet part of Palić, made for couples, families and travellers looking for rest and calm. Here, every guest feels like part of the family.',
    aboutP2: 'A large green garden with a shady tree, a barbecue and plenty of outdoor seating invite you to slow down. Parking is free, and Lake Palić and all the local sights are just minutes away.',
    aboutStat: 'comfortable rooms with private bathroom and a view of the garden',
    roomsLabel: 'Our rooms', roomsHeading: 'Two rooms, two characters',
    roomsSub: 'Each room has its own bathroom, air conditioning and a small kitchen — and both share the same peaceful garden.',
    swanName: 'Swan Room', swanTag: 'For couples & small families',
    swanDesc: 'A bright, comfortable room in a fresh blue tone, with a calm atmosphere and its own kitchenette. Ideal for couples or small families who love a light, welcoming space.',
    roseName: 'Rose Room', roseTag: 'Warm & intimate',
    roseDesc: 'A cosy, warm room overlooking the garden — a place to unwind, enjoy morning coffee on the terrace and sleep deeply. Intimate and homely, made for two.',
    viewGallery: 'View the gallery',
    gardenLabel: 'The Garden', gardenHeading: 'The heart of Soba Milica is outside',
    gardenLead: 'Picture a morning with coffee in the shade of an old tree, birdsong, and children playing freely on the lawn. In the evening — a barbecue with family under the gazebo, the scent of lavender and a healing quiet.',
    palicLabel: 'Discover Palić', palicHeading: 'One of the loveliest places in northern Serbia',
    palicSub: 'Lake Palić, Secession-era architecture and the vineyards of Vojvodina — all within reach, with Subotica just minutes away.',
    amenLabel: 'Amenities', amenHeading: 'Everything you need for a restful stay',
    reviewsLabel: 'Guest reviews', reviewsHeading: 'Guests love to recommend us', reviewsCount: 'Score based on guest reviews',
    locLabel: 'Location', locHeading: 'Find us',
    locText: 'We are in a quiet part of Palić, just minutes from the lake, the promenade and the centre of Subotica. Free parking in the yard.',
    locBtn: 'Open in maps',
    contactLabel: 'Reservations', contactHeading: 'Book your peace & quiet',
    contactSub: 'Get in touch directly or book through Booking.com. We are happy to answer any questions and help you plan the perfect break.',
    contactEmail: 'Send an e-mail',
    footerRights: 'All rights reserved.', footerMade: 'A family guesthouse in Palić',
    features: ['Quiet neighbourhood', 'Family atmosphere', 'Beautiful garden', 'Outdoor seating', 'Barbecue', 'Free parking', 'Near Lake Palić'].map(label => ({ label })),
    swanFeat: ['Double bed', 'Kitchenette', 'Private bathroom', 'Air conditioning'].map(label => ({ label })),
    roseFeat: ['Garden view', 'Extra beds', 'Private bathroom', 'Air conditioning'].map(label => ({ label })),
    moments: ['Coffee in the shade', 'Barbecue & gazebo', 'Safe play for kids', 'Orchard & lavender', 'Evening calm', 'Birdsong at dawn'].map(label => ({ label })),
    attractions: [
      { n: '01', title: 'Lake Palić', desc: 'A short stroll to the lake, its promenade and beaches.' },
      { n: '02', title: 'Cycling & walks', desc: 'Tree-lined paths around the lake and through the park.' },
      { n: '03', title: 'Wineries', desc: 'Family vineyards and cellars of the Subotica sands.' },
      { n: '04', title: 'Palić Zoo', desc: "One of Serbia's oldest zoos, loved by children." },
      { n: '05', title: 'Restaurants', desc: 'Local Vojvodina cuisine and lakeside terraces.' },
      { n: '06', title: 'Wellness & spa', desc: 'Thermal and wellness options a few minutes away.' },
      { n: '07', title: 'Secession architecture', desc: 'The Water Tower and Grand Terrace by the lake.' },
      { n: '08', title: 'Subotica nearby', desc: 'The elegant city centre is only minutes by car.' },
    ],
    amenities: ['Free WiFi', 'Air conditioning', 'Free parking', 'Garden', 'Barbecue', 'Outdoor seating', 'TV', 'Private bathroom', 'Kitchenette', 'Family friendly', 'Quiet area'].map(label => ({ label })),
    reviews: [
      { text: 'A little oasis of calm. The garden is magical in the morning and the hosts are so warm.', name: 'Ana', origin: 'Novi Sad, Serbia', initial: 'A' },
      { text: 'Spotless, quiet and full of heart. Our kids loved the swing and the trampoline.', name: 'Márk', origin: 'Szeged, Hungary', initial: 'M' },
      { text: 'The perfect base for exploring Palić and Subotica. We will absolutely return.', name: 'Ivana', origin: 'Beograd, Serbia', initial: 'I' },
    ],
  },
};

// Amenity icon keys, in display order — matches `amenities`/`amenLabel` above index-for-index.
export const amenityIconKeys = [
  'wifi', 'ac', 'parking', 'garden', 'bbq', 'seating', 'tv', 'bath', 'kitchen', 'family', 'quiet',
] as const;

export function gallery(lang: Lang): Record<'swan' | 'rose' | 'garden', GalleryPhoto[]> {
  const en = lang === 'en';
  return {
    swan: [
      { src: '/uploads/swan-4.JPG', alt: en ? 'Swan Room — bright interior' : 'Soba Labud — svetla soba' },
      { src: '/uploads/swan-3.jpg', alt: en ? 'Studio with kitchenette' : 'Studio sa kuhinjom' },
      { src: '/uploads/swan-1.jpg', alt: en ? 'Kitchen corner' : 'Kuhinjski kutak' },
      { src: '/uploads/swan-2.jpg', alt: en ? 'Cosy sleeping nook' : 'Prostor za spavanje' },
      { src: '/uploads/swan-5.JPG', alt: en ? 'Private bathroom' : 'Sopstveno kupatilo' },
    ],
    rose: [
      { src: '/uploads/rose-3.JPG', alt: en ? 'Kitchenette' : 'Čajna kuhinja' },
      { src: '/uploads/rose-5.JPG', alt: en ? 'Rose Room — bedroom' : 'Soba Ruža — spavaći deo' },
      { src: '/uploads/rose-1.JPG', alt: en ? 'Covered terrace facing the garden' : 'Natkrivena terasa ka dvorištu' },
      { src: '/uploads/rose-6.JPG', alt: en ? 'Extra beds for families' : 'Dodatni ležajevi za porodice' },
      { src: '/uploads/rose-8.JPG', alt: en ? 'Private bathroom' : 'Sopstveno kupatilo' },
    ],
    garden: [
      { src: '/uploads/yard-3.JPG', alt: en ? 'The green yard in summer' : 'Zeleno dvorište leti' },
      { src: '/uploads/yard-5.JPG', alt: en ? 'Lavender by the lawn' : 'Lavanda uz travnjak' },
      { src: '/uploads/yard-7.JPG', alt: en ? "Children's swing under the cherry tree" : 'Ljuljaška pod trešnjom' },
      { src: '/uploads/yard-1.JPG', alt: en ? 'Gazebo, barbecue & flowers' : 'Senica, roštilj i cveće' },
      { src: '/uploads/rose-1.JPG', alt: en ? 'Coffee on the terrace' : 'Kafa na terasi' },
      { src: '/uploads/yard-2.JPG', alt: en ? 'Barbecue & outdoor dining' : 'Roštilj i sto za ručavanje' },
      { src: '/uploads/yard-4.JPG', alt: en ? 'Trampoline & swing bench' : 'Trambolina i ljuljaška' },
      { src: '/uploads/swan-6.jpg', alt: en ? 'A quiet evening with a glass of wine' : 'Miran predvečernji trenutak' },
      { src: '/uploads/yard-6.JPG', alt: en ? 'Pears from the orchard' : 'Kruške iz voćnjaka' },
    ],
  };
}

// Real business data — not translated, identical across languages.
export const site = {
  brand: 'Soba Milica',
  addressLine1: 'Begejska 1/A',
  addressLine2: '24413 Palić, Srbija',
  bookingUrl: 'https://www.booking.com/hotel/rs/studio-milica.sr.html',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Begejska%201A%2C%2024413%20Pali%C4%87%2C%20Srbija',
  whatsappUrl: 'https://wa.me/381601304893',
  phoneUrl: 'tel:+381601304893',
  phoneDisplay: '060 130 4893',
  emailUrl: 'mailto:milica.gojkovic.66@gmail.com',
  // Begejska 1, Palić — the end of the street closest to the railway station (verified via Nominatim/Overpass geocoding).
  mapEmbedUrl: 'https://www.openstreetmap.org/export/embed.html?bbox=19.7309%2C46.0908%2C19.8059%2C46.1178&layer=mapnik&marker=46.1043%2C19.7684',
  ratingScore: '9.4',
  year: new Date().getFullYear(),
};
