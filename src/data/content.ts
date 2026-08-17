export type Lang = 'sr' | 'en';

export interface GalleryPhoto {
  file: string;
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
  photo?: string;
}

export interface Dictionary {
  metaTitle: string;
  metaDescription: string;
  navAbout: string;
  navRooms: string;
  navGarden: string;
  navContact: string;
  navBook: string;
  heroKicker: string;
  heroTag: string;
  heroBook: string;
  heroRooms: string;
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
    metaTitle: 'Soba Milica — Smeštaj na Paliću | Sobe za izdavanje blizu Subotice',
    metaDescription: 'Soba Milica — porodično prenoćište na Paliću, Vojvodina. Udobne sobe sa sopstvenim kupatilom, veliko zeleno dvorište i besplatan parking, na par minuta od Palićkog jezera i Subotice. Pogodno i kao prenoćište na putu ka/od Mađarske.',
    navAbout: 'O nama', navRooms: 'Sobe', navGarden: 'Dvorište', navContact: 'Kontakt', navBook: 'Rezervišite',
    heroKicker: 'Palić · Vojvodina · Srbija',
    heroTag: 'Mirno porodično prenoćište u srcu Palića — dvorište, hlad stare trešnje i topla domaćinska dobrodošlica.',
    heroBook: 'Rezervišite boravak', heroRooms: 'Pogledajte sobe',
    ratingWord: 'Izuzetno', ratingLabel: 'Ocena na Booking.com',
    aboutLabel: 'O nama', aboutHeading: 'Dom daleko od kuće, okružen zelenilom',
    aboutP1: 'Soba Milica je malo porodično prenoćište u mirnom delu Palića, stvoreno za parove, porodice i putnike koji traže odmor i tišinu. Kod nas se svaki gost oseća kao deo porodice.',
    aboutP2: 'Veliko zeleno dvorište sa senovitom trešnjom, roštilj i prostor za sedenje na otvorenom pozivaju vas da usporite. Besplatan parking, a Palićko jezero i sve atrakcije udaljeni su tek nekoliko minuta.',
    aboutStat: 'udobne sobe sa sopstvenim kupatilom i pogledom na dvorište',
    roomsLabel: 'Naše sobe', roomsHeading: 'Dve sobe, dva karaktera',
    roomsSub: 'Svaka soba ima sopstveno opremljeno kupatilo, klima uređaj i opremljenu čajnu kuhinju — a obe dele isto mirno dvorište.',
    swanName: 'Soba Labud', swanTag: 'Za parove i male porodice',
    swanDesc: 'Svetla i udobna soba vedrog plavog tona, sa mirnom atmosferom i sopstvenom, potpuno opremljenom čajnom kuhinjom. Idealna za parove ili manje porodice koje žele svetao, prijatan prostor.',
    roseName: 'Soba Ruža', roseTag: 'Topla i intimna',
    roseDesc: 'Ugodna i topla soba koja gleda na dvorište, sa sopstvenom opremljenom čajnom kuhinjom — mesto za opuštanje, jutarnju kafu na terasi i miran, dubok san. Intimna i domaća, baš kao stvorena za dvoje.',
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
    footerRights: 'Sva prava zadržana.', footerMade: 'Porodično prenoćište na Paliću',
    features: ['Mirno susedstvo', 'Porodična atmosfera', 'Prelepo dvorište', 'Sedenje napolju', 'Roštilj', 'Besplatan parking', 'Blizu jezera'].map(label => ({ label })),
    swanFeat: ['Bračni krevet', 'Pomoćni ležaj', 'Opremljena čajna kuhinja', 'Opremljeno kupatilo', 'Klima uređaj'].map(label => ({ label })),
    roseFeat: ['Bračni krevet', 'Pomoćni ležaj', 'Pogled na dvorište', 'Opremljena čajna kuhinja', 'Opremljeno kupatilo', 'Klima uređaj'].map(label => ({ label })),
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
    amenities: ['Besplatan WiFi', 'Klima uređaj', 'Besplatan parking', 'Dvorište', 'Roštilj', 'Sedenje napolju', 'TV', 'Opremljeno kupatilo', 'Opremljena čajna kuhinja', 'Za porodice', 'Mirna zona'].map(label => ({ label })),
    reviews: [
      { text: 'Čist, uredan, prijatan apartman. Opremljen posuđem, peškirima, mirišljavom posteljinom. Kućna atmosfera. Vlasnici prijatni, saradljivi, nenametljivi. Udaljen od jezera 15 minuta hoda. Prelepo uređeno dvorište. Toplo preporučujem.', name: 'Marijana', origin: 'Srbija', initial: 'M' },
      { text: 'Mirno, čisto i udobno, ljubazni i nenametljivi vlasnici.', name: 'Ivan', origin: 'Srbija', initial: 'I', photo: 'https://lh3.googleusercontent.com/-3kzSUR3WXMk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmKu104c1vtObCle_YSLD_hey0eOQ/s96-c/photo.jpg' },
      { text: 'Lepo dvorište koje se održava, kao i smeštaj. 10/10. Domaćini su jako ljubazni i prijatni. 10/10. Lokacija je mirna i pogodna za odmor sa decom, parking je dostupan. 10/10. Generalno je smeštaj idealan za odmor sa porodicom na Paliću. Sve preporuke za ove ljude. Nema zamerki.', name: 'Đuričić', origin: 'Srbija', initial: 'Đ' },
      { text: 'Izuzetan smeštaj, prijatna atmosfera i ljubaznost domaćina.', name: 'Cvetanović', origin: 'Srbija', initial: 'C', photo: 'https://lh3.googleusercontent.com/a/AItbvmnDXrtHi3pk-oiZ9pszu0dLAeC6eCW3Sj9R1NlL6g=s96-c' },
      { text: 'Malo i praktično. Domaćica je bila veoma ljubazna i fleksibilna oko dogovora! Vraćamo se ponovo!', name: 'Ivan', origin: 'Češka', initial: 'I' },
      { text: 'Lepo mesto blizu Palićkog jezera. Vlasnica Milica je bila draga i ljubazna. Hvala, Milice!!!', name: 'Konstantinos', origin: 'Grčka', initial: 'K', photo: '/reviews/konstantinos.png' },
    ],
  },
  en: {
    metaTitle: 'Soba Milica — Rooms & Accommodation in Palić, Vojvodina',
    metaDescription: 'Soba Milica is a family-run guesthouse in Palić, Serbia — comfortable rooms with private bathrooms, a large green garden and free parking, minutes from Lake Palić and Subotica. Also a convenient overnight stop near the Hungarian border.',
    navAbout: 'About', navRooms: 'Rooms', navGarden: 'Garden', navContact: 'Contact', navBook: 'Book now',
    heroKicker: 'Palić · Vojvodina · Serbia',
    heroTag: 'A peaceful family guesthouse in the heart of Palić — a garden, the shade of an old tree, and warm, homely hospitality.',
    heroBook: 'Book your stay', heroRooms: 'See the rooms',
    ratingWord: 'Fabulous', ratingLabel: 'Booking.com rating',
    aboutLabel: 'About us', aboutHeading: 'A home away from home, wrapped in green',
    aboutP1: 'Soba Milica is a small family-run guesthouse in a quiet part of Palić, made for couples, families and travellers looking for rest and calm. Here, every guest feels like part of the family.',
    aboutP2: 'A large green garden with a shady tree, a barbecue and plenty of outdoor seating invite you to slow down. Parking is free, and Lake Palić and all the local sights are just minutes away.',
    aboutStat: 'comfortable rooms with private bathroom and a view of the garden',
    roomsLabel: 'Our rooms', roomsHeading: 'Two rooms, two characters',
    roomsSub: 'Each room has its own fully equipped bathroom, air conditioning and a fully equipped kitchenette — and both share the same peaceful garden.',
    swanName: 'Swan Room', swanTag: 'For couples & small families',
    swanDesc: 'A bright, comfortable room in a fresh blue tone, with a calm atmosphere and its own, fully equipped kitchenette. Ideal for couples or small families who love a light, welcoming space.',
    roseName: 'Rose Room', roseTag: 'Warm & intimate',
    roseDesc: 'A cosy, warm room overlooking the garden, with its own fully equipped kitchenette — a place to unwind, enjoy morning coffee on the terrace and sleep deeply. Intimate and homely, made for two.',
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
    swanFeat: ['Double bed', 'Extra bed', 'Fully equipped kitchenette', 'Fully equipped bathroom', 'Air conditioning'].map(label => ({ label })),
    roseFeat: ['Double bed', 'Extra bed', 'Garden view', 'Fully equipped kitchenette', 'Fully equipped bathroom', 'Air conditioning'].map(label => ({ label })),
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
    amenities: ['Free WiFi', 'Air conditioning', 'Free parking', 'Garden', 'Barbecue', 'Outdoor seating', 'TV', 'Fully equipped bathroom', 'Fully equipped kitchenette', 'Family friendly', 'Quiet area'].map(label => ({ label })),
    reviews: [
      { text: 'Clean, tidy, pleasant apartment. Equipped with dishes, towels, fresh-smelling linens. A homely atmosphere. The hosts are pleasant, helpful and unobtrusive. A 15-minute walk from the lake. A beautifully kept garden. Warmly recommended.', name: 'Marijana', origin: 'Serbia', initial: 'M' },
      { text: 'Quiet, clean and comfortable — friendly, unobtrusive hosts.', name: 'Ivan', origin: 'Serbia', initial: 'I', photo: 'https://lh3.googleusercontent.com/-3kzSUR3WXMk/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucmKu104c1vtObCle_YSLD_hey0eOQ/s96-c/photo.jpg' },
      { text: 'The garden is nicely kept, just like the accommodation. 10/10. The hosts are very kind and friendly. 10/10. The location is quiet and great for a family break, and parking is available. 10/10. Overall this place is ideal for a family holiday in Palić. Highly recommend these people. No complaints.', name: 'Đuričić', origin: 'Serbia', initial: 'Đ' },
      { text: 'Outstanding accommodation, a pleasant atmosphere and such kind hosts.', name: 'Cvetanović', origin: 'Serbia', initial: 'C', photo: 'https://lh3.googleusercontent.com/a/AItbvmnDXrtHi3pk-oiZ9pszu0dLAeC6eCW3Sj9R1NlL6g=s96-c' },
      { text: 'Small and practical. The host was very nice and flexible with the arrangement! We will return again!', name: 'Ivan', origin: 'Czechia', initial: 'I' },
      { text: 'Nice place close to Palić lake. Milica the owner was a nice, friendly lady. Thank you Milica!!!', name: 'Konstantinos', origin: 'Greece', initial: 'K', photo: '/reviews/konstantinos.png' },
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
      { file: 'swan-4.JPG', alt: en ? 'Swan Room — bright interior' : 'Soba Labud — svetla soba' },
      { file: 'swan-3.jpg', alt: en ? 'Studio with kitchenette' : 'Studio sa kuhinjom' },
      { file: 'swan-1.jpg', alt: en ? 'Kitchen corner' : 'Kuhinjski kutak' },
      { file: 'swan-2.jpg', alt: en ? 'Cosy sleeping nook' : 'Prostor za spavanje' },
      { file: 'swan-5.JPG', alt: en ? 'Private bathroom' : 'Sopstveno kupatilo' },
    ],
    rose: [
      { file: 'rose-3.JPG', alt: en ? 'Kitchenette' : 'Čajna kuhinja' },
      { file: 'rose-5.JPG', alt: en ? 'Rose Room — bedroom' : 'Soba Ruža — spavaći deo' },
      { file: 'rose-1.JPG', alt: en ? 'Covered terrace facing the garden' : 'Natkrivena terasa ka dvorištu' },
      { file: 'rose-6.JPG', alt: en ? 'Extra beds for families' : 'Dodatni ležajevi za porodice' },
      { file: 'rose-8.JPG', alt: en ? 'Private bathroom' : 'Sopstveno kupatilo' },
    ],
    garden: [
      { file: 'yard-3.JPG', alt: en ? 'The green yard in summer' : 'Zeleno dvorište leti' },
      { file: 'yard-5.JPG', alt: en ? 'Lavender by the lawn' : 'Lavanda uz travnjak' },
      { file: 'yard-7.JPG', alt: en ? "Children's swing under the cherry tree" : 'Ljuljaška pod trešnjom' },
      { file: 'yard-1.JPG', alt: en ? 'Gazebo, barbecue & flowers' : 'Senica, roštilj i cveće' },
      { file: 'rose-1.JPG', alt: en ? 'Coffee on the terrace' : 'Kafa na terasi' },
      { file: 'yard-2.JPG', alt: en ? 'Barbecue & outdoor dining' : 'Roštilj i sto za ručavanje' },
      { file: 'yard-4.JPG', alt: en ? 'Trampoline & swing bench' : 'Trambolina i ljuljaška' },
      { file: 'swan-6.jpg', alt: en ? 'A quiet evening with a glass of wine' : 'Miran predvečernji trenutak' },
      { file: 'yard-6.JPG', alt: en ? 'Pears from the orchard' : 'Kruške iz voćnjaka' },
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
  geo: { lat: 46.1043186, lng: 19.7684106 },
  ratingScore: '9.4',
  year: new Date().getFullYear(),
};
