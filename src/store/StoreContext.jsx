import { createContext, useContext, useState } from 'react';

// Create a context
const StoreContext = createContext();

// ste uo a provider with states you want to share
export const StoreProvider = ({ children }) => {
  const data = [
    {
      id: '081f1194-061c-46b1-adb2-8dd75cde5eea',
      sku: 'DO6486-100',
      brand: 'Nike',
      name: 'Nike Air Force 1 Low Multi-Swoosh White Particle Grey Photon Dust Bright Crimson (GS)',
      colorway: 'White/Particle Grey/Photon Dust/Bright Crimson',
      gender: 'child',
      silhouette: 'Air Force 1',
      releaseYear: '2022',
      releaseDate: '2022-12-15',
      retailPrice: 95,
      estimatedMarketValue: 50,
      story: '',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/074/369/508/original/876471_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/074/369/508/original/876471_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/074/369/508/original/876471_00.png.png',
      },
      links: {
        stockX:
          'https://stockx.com/nike-air-force-1-low-multi-swoosh-white-particle-grey-photon-dust-bright-crimson-gs',
        goat: 'https://goat.com/sneakers/air-force-1-low-gs-multi-swoosh-do6486-100',
        flightClub:
          'https://flightclub.com/air-force-1-low-gs-multi-swoosh-do6486-100',
        stadiumGoods: '',
      },
    },
    {
      id: '3fea0daa-45e9-4fab-be55-745b1f367f4d',
      sku: 'CK9246-067',
      brand: 'Jordan',
      name: 'Jordan 3 Retro Black Cement Gold (W)',
      colorway: 'Black/Fire Red/Metallic Gold/Cement Grey',
      gender: 'women',
      silhouette: 'Air Jordan 3',
      releaseYear: '2022',
      releaseDate: '2022-10-06',
      retailPrice: 200,
      estimatedMarketValue: 235,
      story:
        'The women’s Air Jordan 3 Retro ‘Black Gold’ delivers a subtle twist on the OG ‘Black Cement’ colorway from 1988. Like the original, the upper is crafted from black tumbled leather with signature elephant print overlays at the forefoot and heel. Neutral grey accents are replaced by hits of metallic gold on the collar, eyestay, and tongue, with the latter featuring an embroidered Jumpman logo in Gym Red. A second Jumpman decorates the molded black heel tab. Lightweight cushioning is provided by a polyurethane midsole, featuring the Jordan franchise’s first visible Air-sole unit.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/476/134/original/CK9246_067.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/476/134/original/CK9246_067.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/476/134/original/CK9246_067.png.png',
      },
      links: {
        stockX: 'https://stockx.com/air-jordan-3-retro-black-cement-gold-w',
        goat: 'https://goat.com/sneakers/wmns-air-jordan-3-retro-black-gold-ck9246-067',
        flightClub:
          'https://flightclub.com/wmns-air-jordan-3-retro-black-gold-ck9246-067',
        stadiumGoods: '',
      },
    },
    {
      id: 'd70fd0c1-7ca2-4cf9-8fe8-8047a19b271b',
      sku: 'DH6927-140',
      brand: 'Jordan',
      name: 'Jordan 4 Retro White Midnight Navy',
      colorway: 'White/Midnight Navy/Light Smoke Grey-Fire Red',
      gender: 'men',
      silhouette: 'Air Jordan 4',
      releaseYear: '2022',
      releaseDate: '2022-10-01',
      retailPrice: 210,
      estimatedMarketValue: 365,
      story:
        'The Air Jordan 4 Retro ‘Midnight Navy’ dresses the legacy silhouette in the same color blocking used on the OG ‘Fire Red’ colorway. The upper is constructed from white leather with black support wings, a matching black heel tab with embossed Jumpman branding, and navy molded eyelets. A second Jumpman icon adorns the woven tongue tag in crimson. The sneaker rides on a two-tone polyurethane midsole, featuring encapsulated Air in the forefoot and a visible unit in the heel.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/713/580/original/946189_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/713/580/original/946189_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/713/580/original/946189_00.png.png',
      },
      links: {
        stockX: 'https://stockx.com/air-jordan-4-retro-white-midnight-navy',
        goat: 'https://goat.com/sneakers/air-jordan-4-retro-midnight-navy-dh6927-140',
        flightClub:
          'https://flightclub.com/air-jordan-4-retro-midnight-navy-dh6927-140',
        stadiumGoods: '',
      },
    },
    {
      id: '1a649cde-07ef-4272-8498-67c1690ffe09',
      sku: 'CZ0858-104',
      brand: 'Jordan',
      name: "Air Jordan 1 Retro Low OG GS 'UNC'",
      colorway: 'White/Dark Powder Blue/Black',
      gender: 'youth',
      silhouette: 'Air Jordan 1',
      releaseYear: '2022',
      releaseDate: '2022-09-28',
      retailPrice: 120,
      estimatedMarketValue: 128,
      story:
        'Built for big kids, the Air Jordan 1 Retro Low OG GS ‘UNC’ showcases a familiar palette inspired by Michael Jordan’s alma mater. The leather upper features a crisp white base with forefoot overlays in a contrasting black finish, along with North Carolina’s signature powder blue coloring at the heel. Heritage branding elements include a woven Nike tongue tag and a stitched Wings logo on the back tab. Anchoring the sneaker is a traditional rubber cupsole, highlighted by encapsulated Air-sole cushioning and a grippy rubber outsole in Carolina blue.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/544/638/original/1014349_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/544/638/original/1014349_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/544/638/original/1014349_00.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/air-jordan-1-retro-low-og-gs-unc-cz0858-104',
        flightClub:
          'https://flightclub.com/air-jordan-1-retro-low-og-gs-unc-cz0858-104',
        stadiumGoods: '',
      },
    },
    {
      id: 'b1eb9353-a76a-4548-baac-7a93f7cccf2d',
      sku: 'CT8013-071',
      brand: 'Jordan',
      name: 'Jordan 12 Retro Black Taxi',
      colorway: 'Black/Taxi',
      gender: 'men',
      silhouette: 'Air Jordan 12',
      releaseYear: '2022',
      releaseDate: '2022-11-19',
      retailPrice: 200,
      estimatedMarketValue: 500,
      story:
        'The Air Jordan 12 Retro ‘Black Taxi’ delivers a stealthy colorway of Michael Jordan’s championship silhouette. The upper is crafted from black leather, accented with tonal stitched detailing and bolstered with lizard-textured mudguards in color-matched synthetic leather. The monochromatic design is disrupted by contrasting yellow accents, including molded eyelets, a small midfoot overlay, and embroidered Jumpman branding on the tongue. A matching black Phylon midsole packs full-length Zoom Air cushioning for improved responsiveness.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/076/953/189/original/CT8013_071.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/076/953/189/original/CT8013_071.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/076/953/189/original/CT8013_071.png.png',
      },
      links: {
        stockX: 'https://stockx.com/air-jordan-12-retro-black-taxi',
        goat: 'https://goat.com/sneakers/air-jordan-12-retro-black-taxi-ct8013-071',
        flightClub:
          'https://flightclub.com/air-jordan-12-retro-black-taxi-ct8013-071',
        stadiumGoods: '',
      },
    },
    {
      id: 'e1af352c-d4e2-4caa-9ad3-d808cef590f0',
      sku: 'AR0715-441',
      brand: 'Jordan',
      name: "Wmns Air Jordan 11 Retro 'Navy Velvet'",
      colorway: 'Midnight Navy/Metallic Silver/White',
      gender: 'women',
      silhouette: 'Air Jordan 11',
      releaseYear: '2022',
      releaseDate: '2022-11-11',
      retailPrice: 225,
      estimatedMarketValue: 225,
      story: '',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/819/968/original/1014117_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/819/968/original/1014117_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/819/968/original/1014117_00.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/wmns-air-jordan-11-retro-navy-velvet-ar0715-441',
        flightClub:
          'https://flightclub.com/wmns-air-jordan-11-retro-navy-velvet-ar0715-441',
        stadiumGoods: '',
      },
    },
    {
      id: '3efdef6e-8349-4ad6-b4b8-9861ee1c4e39',
      sku: 'DZ5485-612',
      brand: 'Jordan',
      name: 'Jordan 1 Retro High OG Chicago Reimagined',
      colorway: 'Varsity Red/Black-Sail-Muslin',
      gender: 'men',
      silhouette: 'Air Jordan 1',
      releaseYear: '2022',
      releaseDate: '2022-10-29',
      retailPrice: 180,
      estimatedMarketValue: 899,
      story:
        'The Air Jordan 1 Retro High OG ‘Lost &amp; Found’ brings back the iconic silhouette that started it all. Featuring the high-cut shape of the original 1985 release, the leather upper combines a white base with a black signature Swoosh and scarlet overlays at the forefoot and heel. Cracked black leather appears on the padded collar, while a vintage pre-yellowed finish is applied to the white rubber midsole. The vintage ‘80s aesthetic extends to the special packaging, highlighted by a damaged box plastered with sale stickers and topped with a mismatched replacement lid. An accompanying sales invoice is emblematic of a time when the Air Jordan 1 lingered on the shelves of mom and pop stores, eventually making their way into the hands of lucky customers at a steep discount.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/077/917/503/original/920714_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/077/917/503/original/920714_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/077/917/503/original/920714_00.png.png',
      },
      links: {
        stockX:
          'https://stockx.com/air-jordan-1-retro-high-og-chicago-reimagined',
        goat: 'https://goat.com/sneakers/air-jordan-1-retro-high-og-dz5485-612',
        flightClub:
          'https://flightclub.com/air-jordan-1-retro-high-og-dz5485-612',
        stadiumGoods: '',
      },
    },
    {
      id: '4e25246b-4c4e-4c64-98e6-87bbcd2a642e',
      sku: 'DO9369-101',
      brand: 'Jordan',
      name: "Wmns Air Jordan 1 High OG 'Starfish'",
      colorway: 'White/Starfish/Cacao Wow/Sail',
      gender: 'women',
      silhouette: 'Air Jordan 1',
      releaseYear: '2022',
      releaseDate: '2022-10-27',
      retailPrice: 170,
      estimatedMarketValue: 161,
      story:
        'The women’s Air Jordan 1 High OG ‘Starfish’ brings back the signature hue unfailingly tied to the ‘Shattered Backboard’ colorway from 2015. The all-leather upper features a white base, contrasting orange overlays, and a high-cut collar in chocolate brown. A woven Nike Air tag embellishes a lightly padded nylon tongue in a vintage off-white finish. The aged aesthetic is repeated on the rubber midsole, fitted with an encapsulated Air-sole unit in the heel and supported underfoot by an orange rubber outsole.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/076/974/579/original/939977_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/076/974/579/original/939977_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/076/974/579/original/939977_00.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/wmns-air-jordan-1-high-og-starfish-do9369-101',
        flightClub:
          'https://flightclub.com/wmns-air-jordan-1-high-og-starfish-do9369-101',
        stadiumGoods: '',
      },
    },
    {
      id: 'cb480e55-9524-47ee-a252-7969d763bba7',
      sku: 'DV0553-006',
      brand: 'Jordan',
      name: "Air Jordan 4 Retro SE GS 'Black Canvas'",
      colorway: 'Black/White/Fire Red/Light Steel Grey',
      gender: 'youth',
      silhouette: 'Air Jordan 4',
      releaseYear: '2022',
      releaseDate: '2022-10-22',
      retailPrice: 160,
      estimatedMarketValue: 159,
      story:
        'Crafted for big kids, the Air Jordan 4 Retro SE GS ‘Black Canvas’ transforms the legacy silhouette with a revamped build. In lieu of a traditional leather or nubuck build, the upper is draped in black canvas with a tonal suede forefoot overlay and ventilated netting on the quarter panel. The monochrome finish is disrupted by light grey molded eyelets and a matching Jumpman logo on the heel tab. Atop the tongue, a woven Jumpman tag is captioned with ‘Flight’ branding in crimson script. Visible Air-sole cushioning enhances a polyurethane midsole, supported by a herringbone-traction rubber outsole.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/077/966/898/original/1031852_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/077/966/898/original/1031852_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/077/966/898/original/1031852_00.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/air-jordan-4-retro-se-gs-black-canvas-dv0553-006',
        flightClub:
          'https://flightclub.com/air-jordan-4-retro-se-gs-black-canvas-dv0553-006',
        stadiumGoods: '',
      },
    },
    {
      id: '2c74a27b-656b-43eb-a1c9-839a96d469aa',
      sku: 'DZ4729-200',
      brand: 'Jordan',
      name: "Air Jordan 7 Retro SE 'Afrobeats'",
      colorway: 'Vachetta Tan/Black/Taxi/Dark Concord',
      gender: 'men',
      silhouette: 'Air Jordan 7',
      releaseYear: '2022',
      releaseDate: '2022-10-20',
      retailPrice: 210,
      estimatedMarketValue: 234,
      story:
        'The Air Jordan 7 Retro SE ‘Afrobeats’ celebrates the 30th anniversary of the championship silhouette with dynamic lines and color-popped accents. Inspired by the popular music of West Africa, the sneaker carries a Vachetta Tan leather upper with embossed detailing on the forefoot and heel. A white and black geometric print enlivens the Huarache-like inner sleeve and tongue, featuring an ‘Air Jordan’ wordmark in purple and gold lettering. While the 7 is remembered as the model that eliminated Nike branding from the Jordan line, this pair displays the familiar Nike Air logo on the back heel. Lightweight cushioning is provided by an Air-assisted polyurethane midsole, featuring a solid black finish with contrasting purple and gold accents.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/075/137/441/original/DZ4729_200.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/075/137/441/original/DZ4729_200.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/075/137/441/original/DZ4729_200.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/air-jordan-7-retro-afrobeats-dz4729-200',
        flightClub:
          'https://flightclub.com/air-jordan-7-retro-afrobeats-dz4729-200',
        stadiumGoods: '',
      },
    },
    {
      id: 'ce62a8dc-686d-448e-be47-a28f38958eb5',
      sku: 'DZ4730-200',
      brand: 'Jordan',
      name: "Air Jordan 7 Retro SE GS 'Afrobeats'",
      colorway: 'Vachetta Tan/Black/Taxi/Dark Concord',
      gender: 'youth',
      silhouette: 'Air Jordan 7',
      releaseYear: '2022',
      releaseDate: '2022-10-20',
      retailPrice: 0,
      estimatedMarketValue: 400,
      story:
        'Made for big kids, the Air Jordan 7 Retro SE GS ‘Afrobeats’ updates the championship silhouette with unique details inspired by the eclectic musical genre that hails from West Africa. The Vachetta Tan leather upper features an embossed pattern on the heel, along with an embroidered Nike Air logo in lieu of the traditional ‘23’ heel patch. An abstract print in white, black, and purple adorns the tongue, marked with standard Air Jordan branding in red and yellow lettering. The sneaker rides on a black polyurethane midsole with contrasting accents in Dark Concord and Taxi.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/076/998/702/original/DZ4730_200.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/076/998/702/original/DZ4730_200.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/076/998/702/original/DZ4730_200.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/air-jordan-7-retro-se-gs-afrobeats-dz4730-200',
        flightClub:
          'https://flightclub.com/air-jordan-7-retro-se-gs-afrobeats-dz4730-200',
        stadiumGoods: '',
      },
    },
    {
      id: '03ab5297-4f4d-47c5-9fef-98bd71c7bacf',
      sku: 'DJ5423-500',
      brand: 'Nike',
      name: "LeBron 20 'Violet Frost'",
      colorway:
        'Violet Frost/Metallic Gold/Purple Pulse/Canyon Purple/University Gold/Magic Ember',
      gender: 'men',
      silhouette: 'LeBron 20',
      releaseYear: '2022',
      releaseDate: '2022-10-15',
      retailPrice: 200,
      estimatedMarketValue: 318,
      story:
        'The Nike LeBron 20 ‘Violet Frost’ delivers a pastel colorway of LeBron James’ 20th signature shoe. A subtle lavender hue is executed on a knit textile upper with stacked Swooshes in blue and metallic gold on the lateral side. ‘XX’ branding appears on the lace dubrae and tongue, the latter further embellished with LeBron’s debossed signature. The low-top is mounted on a lightweight Cushlon midsole, equipped with a paisley-print lateral guardrail for improved stability during side-to-side movements. The cushioning setup combines a Nike Air unit in the heel and springy Zoom Air in the forefoot.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/245/384/original/1037461_00.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/245/384/original/1037461_00.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/245/384/original/1037461_00.png.png',
      },
      links: {
        stockX: '',
        goat: 'https://goat.com/sneakers/lebron-20-violet-frost-dj5423-500',
        flightClub: 'https://flightclub.com/lebron-20-violet-frost-dj5423-500',
        stadiumGoods: '',
      },
    },
    {
      id: '872ca235-6b17-4102-a8eb-6801827636bc',
      sku: 'DQ4488-001',
      brand: 'Nike',
      name: 'Nike SB Dunk Low Neckface',
      colorway: 'Black/Black- Multi-Color-White',
      gender: 'men',
      silhouette: 'Dunk SB',
      releaseYear: '2022',
      releaseDate: '2022-10-15',
      retailPrice: 0,
      estimatedMarketValue: 600,
      story:
        'The Neckface x Nike Dunk Low Pro SB ‘Black’ reunites the Swoosh with the LA-based graffiti artist. His macabre designs appear on a series of unique patches that cover the black suede upper. Mismatched tongue tags display ‘Neck SB’ and ‘Face SB’ branding, while embroidered mini-Swooshes adorn the collar and forefoot of the left and right shoe, respectively. The sneaker rests on a white rubber midsole, featuring a wraparound ‘Shockers’ graphic on the left shoe.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/744/914/original/DQ4488_001.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/744/914/original/DQ4488_001.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/744/914/original/DQ4488_001.png.png',
      },
      links: {
        stockX: 'https://stockx.com/nike-sb-dunk-low-neckface',
        goat: 'https://goat.com/sneakers/neckface-x-dunk-low-pro-sb-black-dq4488-001',
        flightClub:
          'https://flightclub.com/neckface-x-dunk-low-pro-sb-black-dq4488-001',
        stadiumGoods: '',
      },
    },
    {
      id: '35cddef6-0f1b-4b9c-a047-8bf0cf38df8d',
      sku: 'DR8869-200',
      brand: 'Jordan',
      name: 'Jodan 3 Retro Winterized Archaeo Brown',
      colorway:
        'Archaeo Brown/Dark Smoke Grey-Fossil Stone-Light Bordeaux-Cement Grey',
      gender: 'men',
      silhouette: 'Air Jordan 3',
      releaseYear: '2022',
      releaseDate: '2022-10-08',
      retailPrice: 210,
      estimatedMarketValue: 250,
      story:
        'The Air Jordan 3 Retro SE ‘Winterized’ updates Tinker Hatfield’s original 1988 design with a revamped build that offers protection from the elements. The upper is constructed from water-resistant brown nubuck with a pink suede mudguard and purple ballistic mesh around the collar. Dark grey nubuck overlays reinforce the forefoot and heel, featuring contrast stitching in lieu of traditional elephant print. Signature Jumpman branding decorates the molded heel and exposed-foam tongue. Lightweight cushioning is provided by a two-tone polyurethane midsole with a visible Air-sole unit nestled in the heel.',
      image: {
        360: [],
        original:
          'https://image.goat.com/attachments/product_template_pictures/images/078/421/158/original/DR8869_200.png.png',
        small:
          'https://image.goat.com/750/attachments/product_template_pictures/images/078/421/158/original/DR8869_200.png.png',
        thumbnail:
          'https://image.goat.com/375/attachments/product_template_pictures/images/078/421/158/original/DR8869_200.png.png',
      },
      links: {
        stockX: 'https://stockx.com/jodan-3-retro-winterized-archaeo-brown',
        goat: 'https://goat.com/sneakers/air-jordan-3-retro-se-winterized-dr8869-200',
        flightClub:
          'https://flightclub.com/air-jordan-3-retro-se-winterized-dr8869-200',
        stadiumGoods: '',
      },
    },
  ];
  const [cart, setCart] = useState([]);
  const [allStore, setAllStore] = useState(data);
  const cartTotal = cart?.reduce((a, b) => {
    return a + b?.total;
  }, 0);

  const addToCart = (payload) => {
    const customPayload = {
      ...payload,
      quantity: 1,
      total: payload?.retailPrice || 0,
    };

    const findItemIndex = cart.findIndex((i) => {
      return i.id === customPayload.id;
    }, 0);

    if (findItemIndex !== -1) {
      setCart(
        cart.map((i) =>
          i.id === payload.id
            ? { ...i, quantity: i.quantity + 1, total: i.total + i.retailPrice }
            : i
        )
      );
    } else {      setCart([...cart, customPayload]);
    }
  };

  const removeFromCart = (payload) => {
    if (payload.quantity > 1) {
      setCart(
        cart.map((i) => {
          return i.id === payload.id
            ? {
                ...i,
                quantity: payload.quantity - 1,
                total: i.total - i.retailPrice,
              }
            : i;
        })
      );
    } else {
      setCart(
        cart.filter((i) => {
          return i.id !== payload.id;
        })
      );
    }
  };
  const value = {
    cart,
    setCart,
    addToCart,
    allStore,
    setAllStore,
    removeFromCart,
    cartTotal,
  };
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

// create a hook to easily use this state
export const useCart = () => {
  return useContext(StoreContext);
};

// wrap the consumer with the app provider
