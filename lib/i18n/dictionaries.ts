export type Locale = 'en' | 'nl' | 'es';

export const LOCALES: Locale[] = ['en', 'nl', 'es'];

export const dictionaries = {
  en: {
    nav: {
      menu: 'Menu',
      heritage: 'Heritage',
      reserve: 'Reserve',
      gallery: 'Gallery',
      contact: 'Contact',
      cta: 'Book a Table',
    },
    hero: {
      eyebrow: 'Argentine Steakhouse — Amsterdam',
      cycle: ['Asado.', 'Quebracho.', 'Malbec.'],
      title: 'A fire that has burned for generations.',
      sub: 'Bife de chorizo grilled over quebracho embers. Mendoza reds. A room that remembers the pampas. Open nightly from six.',
      primary: 'Reserve a Table',
      secondary: 'Read the Menu',
    },
    heritage: {
      eyebrow: '01 — Heritage',
      title: 'From the Pampas\nto your table.',
      lede: 'Argentina did not invent fire. It just learned to listen to it. The asado is a slow conversation between meat, salt, and the wood of the quebracho tree — older than recipes, older than recipes need to be.',
      panels: {
        origin: {
          tag: '02 — Origin',
          h: 'A craft\nbuilt slowly.',
          body: 'Our grill master Diego learned the trade in Mendoza, where the family parrilla is older than the country it sits in. Every cut here passes through a hand that has done it ten thousand times before.',
        },
        fire: {
          tag: '03 — Fire',
          h: 'Quebracho.\nNothing else.',
          body: 'Quebracho — "axe-breaker" — is the densest hardwood of the Chaco. It burns low and patient, gives meat its smoke without overwhelming it. We ship it directly from Argentina. There is no substitute.',
          stats: [
            { label: 'Hours per fire', value: '06h' },
            { label: 'Wood origin', value: 'Chaco' },
            { label: 'Cuts on the parrilla', value: '12' },
          ],
        },
        room: {
          tag: '04 — Room',
          h: 'Designed\nto stay.',
          body: 'Soft light. Heavy chairs. A bar long enough to hold a conversation that goes past midnight. We built Villa Maria to be the kind of place you leave reluctantly.',
        },
        invite: {
          tag: '05 — Invite',
          h: 'A seat\nis waiting.',
          body: 'Tuesday to Sunday, from six. Late kitchen on weekends. Bring people you love — bring strangers and leave with people you love.',
          cta: 'Reserve a Table',
        },
      },
    },
    menu: {
      eyebrow: '02 — La Carta',
      title: 'The Menu.',
      lede: 'Cuts grilled over quebracho. Sides earned, not assumed. A short list of Mendoza reds.',
      sections: {
        parrilla: {
          name: 'Parrilla',
          translation: 'From the grill',
          items: [
            {
              name: 'Bife de Chorizo',
              note: 'Sirloin, 350g · 28-day dry-aged',
              detail: 'The Argentine icon. Salted, grilled hot, rested. Served with chimichurri verde.',
              price: '€38',
            },
            {
              name: 'Ojo de Bife',
              note: 'Ribeye, 400g · grass-fed pampas',
              detail: 'The fattier cousin. We cook it slow then finish over the embers for the crust.',
              price: '€44',
            },
            {
              name: 'Lomo',
              note: 'Tenderloin, 250g',
              detail: 'The most tender cut. Wrapped in pancetta, grilled medium-rare.',
              price: '€42',
            },
            {
              name: 'Tira de Asado',
              note: 'Short ribs, cross-cut · 500g',
              detail: 'Six hours on the parrilla. Falls off the bone. Charred edges, soft centre.',
              price: '€36',
            },
            {
              name: 'Vacío',
              note: 'Flank steak, 350g',
              detail: 'A working cut with deep flavour. Marinated overnight, grilled fast.',
              price: '€34',
            },
            {
              name: 'Parrillada para Dos',
              note: 'Mixed grill for two · chef’s selection',
              detail: 'Chorizo, morcilla, sweetbreads, short rib, sirloin. The full ritual.',
              price: '€96',
            },
          ],
        },
        entradas: {
          name: 'Entradas',
          translation: 'To begin',
          items: [
            { name: 'Empanadas Mendocinas', note: 'Beef, olive, egg · 3 pieces', detail: 'Hand-folded, oven-baked, served with salsa criolla.', price: '€14' },
            { name: 'Provoleta', note: 'Grilled provolone, oregano, chili', detail: 'A whole disc of cheese, charred, eaten by the spoonful with bread.', price: '€16' },
            { name: 'Mollejas', note: 'Sweetbreads, lemon, sea salt', detail: 'Crisp outside, custardy within. A rite of passage.', price: '€19' },
          ],
        },
        sides: {
          name: 'Acompañamientos',
          translation: 'Sides',
          items: [
            { name: 'Papas Provenzal', note: 'Roast potatoes, garlic, parsley', price: '€9' },
            { name: 'Ensalada Mixta', note: 'Tomato, onion, lettuce, olive oil', price: '€8' },
            { name: 'Grilled Vegetables', note: 'Asparagus, peppers, courgette · charred', price: '€11' },
            { name: 'Chimichurri & Salsa Criolla', note: 'The two essential sauces', price: '€4' },
          ],
        },
        wines: {
          name: 'Vinos',
          translation: 'A short list',
          items: [
            { name: 'Catena Malbec', note: 'Mendoza · 2021', detail: 'The benchmark. Plum, violet, a long warm finish.', price: '€58' },
            { name: 'Achaval Ferrer Quimera', note: 'Mendoza · 2019', detail: 'Malbec-led blend with cabernet franc and merlot. Built to last the meal.', price: '€72' },
            { name: 'Zuccardi Concreto', note: 'Uco Valley · 2020', detail: 'Concrete-aged malbec. Bright, savoury, alive.', price: '€84' },
          ],
        },
        desserts: {
          name: 'Postres',
          translation: 'To close',
          items: [
            { name: 'Dulce de Leche Flan', note: 'Caramelised, set overnight', detail: 'Argentine flan, the way it should be.', price: '€10' },
            { name: 'Alfajor de Maicena', note: 'Cornstarch sandwich cookie, dulce de leche', detail: 'A nostalgia delivered on a plate.', price: '€9' },
            { name: 'Helado Artesanal', note: 'Three scoops · dulce de leche, malbec, cream', price: '€11' },
          ],
        },
      },
    },
    reserve: {
      eyebrow: '03 — Reserve',
      title: 'Reserve a table.',
      lede: 'Open Tuesday through Sunday, from 18:00. Walk-ins welcome at the bar. For groups of seven or more, write to reservations@restaurantvillamaria.nl.',
      labels: {
        date: 'Date',
        time: 'Time',
        guests: 'Guests',
        occasion: 'Occasion (optional)',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        notes: 'Anything we should know?',
        submit: 'Request reservation',
        confirm: 'We have your request.',
        confirmBody: 'Diego will confirm by email within the hour during opening times. Until then — anticipate.',
        again: 'Book another time',
      },
      occasions: ['Just dinner', 'Anniversary', 'Birthday', 'Business', 'First date'],
    },
    gallery: {
      eyebrow: '04 — La Casa',
      title: 'The room.\nThe fire.\nThe plate.',
      lede: 'Photographed across a year of services. No staging — just nights as they happened.',
    },
    reviews: {
      eyebrow: '05 — Voices',
      title: 'What guests say.',
      items: [
        {
          quote: 'The closest thing to a parrilla in Palermo without leaving the canal belt. The bife de chorizo is the real thing.',
          author: 'Het Parool',
          context: 'Restaurant review · 2024',
        },
        {
          quote: 'We came for an anniversary and stayed until they turned the lights up. Diego sent over a sweetbread course we hadn’t ordered. That kind of place.',
          author: 'Maartje & Tomás',
          context: 'Returning guests',
        },
        {
          quote: 'Best Malbec list north of Mendoza. Their Catena vertical is worth a trip on its own.',
          author: 'Wijnreview.nl',
          context: 'Cellar feature · 2023',
        },
        {
          quote: 'Quietly one of the best meat-led rooms in Amsterdam. Skip the steakhouse chains.',
          author: 'The Resident Magazine',
          context: 'Editor’s pick',
        },
      ],
    },
    events: {
      eyebrow: '06 — Privé',
      title: 'Private dining\nand events.',
      lede: 'A back room for twenty, a full buy-out for sixty. Tasting menus designed with you, paired with our cellar.',
      cta: 'Plan an event',
    },
    contact: {
      eyebrow: '07 — Contact',
      title: 'Find us.',
      address: 'Prinsengracht 432\n1016 JC Amsterdam',
      hours: [
        'Tuesday — Thursday · 18:00 — 23:00',
        'Friday — Saturday · 18:00 — 00:30',
        'Sunday · 18:00 — 22:30',
        'Monday · Closed',
      ],
      phone: '+31 20 555 8421',
      email: 'reservations@restaurantvillamaria.nl',
    },
    footer: {
      tagline: 'Quebracho · Pampas · Amsterdam',
      rights: '© Villa Maria. All rights reserved.',
    },
  },
  nl: {
    nav: {
      menu: 'Menu',
      heritage: 'Verhaal',
      reserve: 'Reserveren',
      gallery: 'Galerij',
      contact: 'Contact',
      cta: 'Reserveer',
    },
    hero: {
      eyebrow: 'Argentijns Steakhouse — Amsterdam',
      cycle: ['Asado.', 'Quebracho.', 'Malbec.'],
      title: 'Een vuur dat al generaties brandt.',
      sub: 'Bife de chorizo boven gloeiend quebracho-hout. Mendoza-rode wijnen. Een zaal die de pampa nog onthoudt. Elke avond open vanaf zes uur.',
      primary: 'Reserveer een Tafel',
      secondary: 'Lees het Menu',
    },
    heritage: {
      eyebrow: '01 — Verhaal',
      title: 'Van de Pampa\nnaar uw tafel.',
      lede: 'Argentinië heeft het vuur niet uitgevonden. Het heeft er leren naar luisteren. De asado is een traag gesprek tussen vlees, zout en quebracho-hout — ouder dan recepten, en oud genoeg om het te blijven.',
      panels: {
        origin: {
          tag: '02 — Oorsprong',
          h: 'Een vak\nlangzaam geleerd.',
          body: 'Onze grillmeester Diego leerde het vak in Mendoza, waar de familie-parrilla ouder is dan het land eromheen. Elke snede hier komt door een hand die het tienduizend keer eerder deed.',
        },
        fire: {
          tag: '03 — Vuur',
          h: 'Quebracho.\nNiets anders.',
          body: 'Quebracho — "bijlbreker" — is het dichtste hardhout van de Chaco. Het brandt laag en geduldig, geeft het vlees zijn rook zonder het te overstemmen. We laten het direct uit Argentinië komen. Er is geen vervanging.',
          stats: [
            { label: 'Uren per vuur', value: '06u' },
            { label: 'Herkomst hout', value: 'Chaco' },
            { label: 'Sneden op de grill', value: '12' },
          ],
        },
        room: {
          tag: '04 — Zaal',
          h: 'Gebouwd\nom te blijven.',
          body: 'Zacht licht. Zware stoelen. Een bar lang genoeg voor een gesprek dat na middernacht doorgaat. We bouwden Villa Maria als plek die je met tegenzin verlaat.',
        },
        invite: {
          tag: '05 — Uitnodiging',
          h: 'Er staat\neen stoel klaar.',
          body: 'Dinsdag tot zondag, vanaf zes. Late keuken in het weekend. Neem mensen mee van wie je houdt — neem vreemden mee, ga met geliefden weg.',
          cta: 'Reserveer een Tafel',
        },
      },
    },
    menu: {
      eyebrow: '02 — La Carta',
      title: 'De Kaart.',
      lede: 'Sneden gegrild boven quebracho. Bijgerechten die je verdient, niet die je aanneemt. Een korte lijst Mendoza-rode wijnen.',
      sections: {
        parrilla: {
          name: 'Parrilla',
          translation: 'Van de grill',
          items: [
            { name: 'Bife de Chorizo', note: 'Sirloin, 350g · 28 dagen dry-aged', detail: 'Het Argentijnse icoon. Gezouten, heet gegrild, gerust. Met chimichurri verde.', price: '€38' },
            { name: 'Ojo de Bife', note: 'Ribeye, 400g · grasgevoed pampas', detail: 'De vettere neef. Langzaam gegaard en daarna boven het vuur afgemaakt voor de korst.', price: '€44' },
            { name: 'Lomo', note: 'Ossenhaas, 250g', detail: 'De zachtste snede. Gewikkeld in pancetta, medium-rare gegrild.', price: '€42' },
            { name: 'Tira de Asado', note: 'Short ribs, dwars gesneden · 500g', detail: 'Zes uur op de parrilla. Valt van het bot. Verkoolde randen, zachte kern.', price: '€36' },
            { name: 'Vacío', note: 'Flank steak, 350g', detail: 'Een werksnede met diepe smaak. Nacht gemarineerd, snel gegrild.', price: '€34' },
            { name: 'Parrillada para Dos', note: 'Gemengde grill voor twee · keuze van de chef', detail: 'Chorizo, morcilla, zwezerik, short rib, sirloin. Het hele ritueel.', price: '€96' },
          ],
        },
        entradas: {
          name: 'Entradas',
          translation: 'Voorgerechten',
          items: [
            { name: 'Empanadas Mendocinas', note: 'Rundvlees, olijf, ei · 3 stuks', detail: 'Met de hand gevouwen, oven gebakken, met salsa criolla.', price: '€14' },
            { name: 'Provoleta', note: 'Gegrilde provolone, oregano, chili', detail: 'Een hele schijf kaas, verkoold, met lepels brood gegeten.', price: '€16' },
            { name: 'Mollejas', note: 'Zwezerik, citroen, zeezout', detail: 'Knapperig van buiten, romig van binnen. Een inwijding.', price: '€19' },
          ],
        },
        sides: {
          name: 'Bijgerechten',
          translation: 'Sides',
          items: [
            { name: 'Papas Provenzal', note: 'Ovenaardappels, knoflook, peterselie', price: '€9' },
            { name: 'Ensalada Mixta', note: 'Tomaat, ui, sla, olijfolie', price: '€8' },
            { name: 'Gegrilde Groenten', note: 'Asperges, paprika, courgette · gekarameliseerd', price: '€11' },
            { name: 'Chimichurri & Salsa Criolla', note: 'De twee essentiële sauzen', price: '€4' },
          ],
        },
        wines: {
          name: 'Wijnen',
          translation: 'Een korte lijst',
          items: [
            { name: 'Catena Malbec', note: 'Mendoza · 2021', detail: 'De maatstaf. Pruim, viool, een lange warme afdronk.', price: '€58' },
            { name: 'Achaval Ferrer Quimera', note: 'Mendoza · 2019', detail: 'Malbec-blend met cabernet franc en merlot. Gebouwd voor het hele diner.', price: '€72' },
            { name: 'Zuccardi Concreto', note: 'Uco Valley · 2020', detail: 'In beton gerijpte malbec. Helder, hartig, levendig.', price: '€84' },
          ],
        },
        desserts: {
          name: 'Postres',
          translation: 'Toetjes',
          items: [
            { name: 'Dulce de Leche Flan', note: 'Gekarameliseerd, een nacht gerust', detail: 'Argentijnse flan zoals het hoort.', price: '€10' },
            { name: 'Alfajor de Maicena', note: 'Maïzenakoek met dulce de leche', detail: 'Nostalgie op een bord geserveerd.', price: '€9' },
            { name: 'Helado Artesanal', note: 'Drie bollen · dulce de leche, malbec, room', price: '€11' },
          ],
        },
      },
    },
    reserve: {
      eyebrow: '03 — Reserveren',
      title: 'Reserveer een tafel.',
      lede: 'Geopend dinsdag tot en met zondag, vanaf 18:00. Walk-ins welkom aan de bar. Voor groepen vanaf zeven personen — mail reservations@restaurantvillamaria.nl.',
      labels: {
        date: 'Datum',
        time: 'Tijd',
        guests: 'Gasten',
        occasion: 'Gelegenheid (optioneel)',
        name: 'Naam',
        email: 'E-mail',
        phone: 'Telefoon',
        notes: 'Iets dat wij moeten weten?',
        submit: 'Reservering aanvragen',
        confirm: 'We hebben uw aanvraag.',
        confirmBody: 'Diego bevestigt per e-mail binnen het uur tijdens openingstijden. Tot dan — verheug u.',
        again: 'Boek een andere tijd',
      },
      occasions: ['Gewoon diner', 'Jubileum', 'Verjaardag', 'Zakelijk', 'Eerste afspraakje'],
    },
    gallery: {
      eyebrow: '04 — La Casa',
      title: 'De zaal.\nHet vuur.\nHet bord.',
      lede: 'Een jaar lang gefotografeerd tijdens de service. Geen styling — alleen avonden zoals ze waren.',
    },
    reviews: {
      eyebrow: '05 — Stemmen',
      title: 'Wat gasten zeggen.',
      items: [
        { quote: 'Het dichtst bij een parrilla in Palermo zonder de grachtengordel te verlaten. De bife de chorizo is het echte werk.', author: 'Het Parool', context: 'Recensie · 2024' },
        { quote: 'We kwamen voor een jubileum en bleven tot ze het licht aandeden. Diego stuurde een zwezerikgang die we niet besteld hadden. Zo’n plek.', author: 'Maartje & Tomás', context: 'Vaste gasten' },
        { quote: 'De beste Malbec-kaart ten noorden van Mendoza. De Catena-verticale is alleen al een reis waard.', author: 'Wijnreview.nl', context: 'Kelderfeature · 2023' },
        { quote: 'In stilte een van de beste vleesgerichte zalen van Amsterdam. Sla de ketens over.', author: 'The Resident Magazine', context: 'Keuze van de redactie' },
      ],
    },
    events: {
      eyebrow: '06 — Privé',
      title: 'Privé dineren\nen evenementen.',
      lede: 'Een achterzaal voor twintig, een hele buy-out voor zestig. Proefmenu’s op maat, gekoppeld aan onze kelder.',
      cta: 'Plan een evenement',
    },
    contact: {
      eyebrow: '07 — Contact',
      title: 'Vind ons.',
      address: 'Prinsengracht 432\n1016 JC Amsterdam',
      hours: [
        'Dinsdag — Donderdag · 18:00 — 23:00',
        'Vrijdag — Zaterdag · 18:00 — 00:30',
        'Zondag · 18:00 — 22:30',
        'Maandag · Gesloten',
      ],
      phone: '+31 20 555 8421',
      email: 'reservations@restaurantvillamaria.nl',
    },
    footer: {
      tagline: 'Quebracho · Pampa · Amsterdam',
      rights: '© Villa Maria. Alle rechten voorbehouden.',
    },
  },
  es: {
    nav: {
      menu: 'Carta',
      heritage: 'Historia',
      reserve: 'Reservar',
      gallery: 'Galería',
      contact: 'Contacto',
      cta: 'Reservar Mesa',
    },
    hero: {
      eyebrow: 'Parrilla Argentina — Ámsterdam',
      cycle: ['Asado.', 'Quebracho.', 'Malbec.'],
      title: 'Un fuego que arde\ndesde hace generaciones.',
      sub: 'Bife de chorizo a las brasas de quebracho. Tintos de Mendoza. Un salón que recuerda la pampa. Abierto cada noche desde las seis.',
      primary: 'Reservar Mesa',
      secondary: 'Ver la Carta',
    },
    heritage: {
      eyebrow: '01 — Historia',
      title: 'De la Pampa\na tu mesa.',
      lede: 'Argentina no inventó el fuego. Sólo aprendió a escucharlo. El asado es una conversación lenta entre la carne, la sal y la leña de quebracho — más antigua que las recetas, y antigua porque necesita serlo.',
      panels: {
        origin: {
          tag: '02 — Origen',
          h: 'Un oficio\naprendido despacio.',
          body: 'Nuestro parrillero Diego aprendió el oficio en Mendoza, donde la parrilla familiar es más vieja que el país que la rodea. Cada corte aquí pasa por una mano que ya lo hizo diez mil veces.',
        },
        fire: {
          tag: '03 — Fuego',
          h: 'Quebracho.\nNada más.',
          body: 'El quebracho — "rompe-hachas" — es la madera más densa del Chaco. Arde bajo y paciente, le da humo a la carne sin taparla. La traemos directo de Argentina. No hay reemplazo.',
          stats: [
            { label: 'Horas por fuego', value: '06h' },
            { label: 'Origen de la leña', value: 'Chaco' },
            { label: 'Cortes a la parrilla', value: '12' },
          ],
        },
        room: {
          tag: '04 — Salón',
          h: 'Hecho\npara quedarse.',
          body: 'Luz tenue. Sillas pesadas. Una barra lo bastante larga para una charla que llegue después de medianoche. Pensamos Villa Maria como un lugar del que cuesta irse.',
        },
        invite: {
          tag: '05 — Invitación',
          h: 'Hay un asiento\nesperando.',
          body: 'De martes a domingo, desde las seis. Cocina tardía los fines de semana. Trae a la gente que querés — trae extraños y andate con gente querida.',
          cta: 'Reservar Mesa',
        },
      },
    },
    menu: {
      eyebrow: '02 — La Carta',
      title: 'La Carta.',
      lede: 'Cortes a las brasas de quebracho. Guarniciones ganadas, no supuestas. Una lista corta de tintos de Mendoza.',
      sections: {
        parrilla: {
          name: 'Parrilla',
          translation: 'De la parrilla',
          items: [
            { name: 'Bife de Chorizo', note: 'Sirloin, 350g · maduración 28 días', detail: 'El ícono argentino. Salado, parrilla fuerte, reposo. Con chimichurri verde.', price: '€38' },
            { name: 'Ojo de Bife', note: 'Ribeye, 400g · pampa libre', detail: 'El primo más graso. Cocción lenta y golpe de brasa para la costra.', price: '€44' },
            { name: 'Lomo', note: 'Solomillo, 250g', detail: 'El corte más tierno. Envuelto en panceta, jugoso.', price: '€42' },
            { name: 'Tira de Asado', note: 'Tira ancha · 500g', detail: 'Seis horas de parrilla. Se desprende del hueso. Bordes carbonizados, centro tierno.', price: '€36' },
            { name: 'Vacío', note: 'Vacío, 350g', detail: 'Un corte de trabajo, de sabor profundo. Adobado de un día, parrilla rápida.', price: '€34' },
            { name: 'Parrillada para Dos', note: 'Parrillada completa · selección del chef', detail: 'Chorizo, morcilla, mollejas, asado, bife. El ritual entero.', price: '€96' },
          ],
        },
        entradas: {
          name: 'Entradas',
          translation: 'Para empezar',
          items: [
            { name: 'Empanadas Mendocinas', note: 'Carne, aceituna, huevo · 3 unidades', detail: 'A mano, al horno, con salsa criolla.', price: '€14' },
            { name: 'Provoleta', note: 'Provolone a la parrilla, orégano, ají', detail: 'Un disco entero de queso, dorado, comido con pan.', price: '€16' },
            { name: 'Mollejas', note: 'Mollejas, limón, sal marina', detail: 'Crocantes afuera, cremosas adentro. Un rito.', price: '€19' },
          ],
        },
        sides: {
          name: 'Acompañamientos',
          translation: 'Para acompañar',
          items: [
            { name: 'Papas Provenzal', note: 'Papas al horno, ajo, perejil', price: '€9' },
            { name: 'Ensalada Mixta', note: 'Tomate, cebolla, lechuga, aceite de oliva', price: '€8' },
            { name: 'Verduras a la Parrilla', note: 'Espárragos, morrones, calabacín · ahumados', price: '€11' },
            { name: 'Chimichurri & Salsa Criolla', note: 'Las dos salsas esenciales', price: '€4' },
          ],
        },
        wines: {
          name: 'Vinos',
          translation: 'Una lista corta',
          items: [
            { name: 'Catena Malbec', note: 'Mendoza · 2021', detail: 'La referencia. Ciruela, violetas, final largo y cálido.', price: '€58' },
            { name: 'Achaval Ferrer Quimera', note: 'Mendoza · 2019', detail: 'Corte con cabernet franc y merlot. Para acompañar todo el menú.', price: '€72' },
            { name: 'Zuccardi Concreto', note: 'Valle de Uco · 2020', detail: 'Malbec criado en hormigón. Brillante, sabroso, vivo.', price: '€84' },
          ],
        },
        desserts: {
          name: 'Postres',
          translation: 'Para cerrar',
          items: [
            { name: 'Flan con Dulce de Leche', note: 'Caramelizado, reposado toda la noche', detail: 'El flan argentino como debe ser.', price: '€10' },
            { name: 'Alfajor de Maicena', note: 'Tapitas de maicena, dulce de leche', detail: 'Nostalgia servida en un plato.', price: '€9' },
            { name: 'Helado Artesanal', note: 'Tres bochas · dulce de leche, malbec, crema', price: '€11' },
          ],
        },
      },
    },
    reserve: {
      eyebrow: '03 — Reservas',
      title: 'Reservá tu mesa.',
      lede: 'Abierto de martes a domingo, desde las 18:00. Sin reserva, bienvenidos en la barra. Para grupos de siete o más, escribí a reservations@restaurantvillamaria.nl.',
      labels: {
        date: 'Fecha',
        time: 'Hora',
        guests: 'Comensales',
        occasion: 'Ocasión (opcional)',
        name: 'Nombre',
        email: 'Email',
        phone: 'Teléfono',
        notes: '¿Algo que debamos saber?',
        submit: 'Solicitar reserva',
        confirm: 'Tenemos tu solicitud.',
        confirmBody: 'Diego confirma por email dentro de la hora durante el horario de apertura. Mientras tanto — preparate.',
        again: 'Reservar otra hora',
      },
      occasions: ['Sólo cena', 'Aniversario', 'Cumpleaños', 'Negocios', 'Primera cita'],
    },
    gallery: {
      eyebrow: '04 — La Casa',
      title: 'El salón.\nEl fuego.\nEl plato.',
      lede: 'Fotografiado durante un año de servicios. Sin puesta en escena — sólo noches como sucedieron.',
    },
    reviews: {
      eyebrow: '05 — Voces',
      title: 'Lo que dicen los huéspedes.',
      items: [
        { quote: 'Lo más cercano a una parrilla de Palermo sin salir del cinturón de canales. El bife de chorizo es el de verdad.', author: 'Het Parool', context: 'Crítica · 2024' },
        { quote: 'Vinimos por un aniversario y nos quedamos hasta que prendieron las luces. Diego mandó unas mollejas que no pedimos. Ese tipo de lugar.', author: 'Maartje & Tomás', context: 'Habitués' },
        { quote: 'La mejor carta de malbec al norte de Mendoza. La vertical de Catena justifica el viaje.', author: 'Wijnreview.nl', context: 'Reseña de bodega · 2023' },
        { quote: 'En silencio, uno de los mejores salones cárnicos de Ámsterdam. Saltate las cadenas.', author: 'The Resident Magazine', context: 'Elección del editor' },
      ],
    },
    events: {
      eyebrow: '06 — Privado',
      title: 'Cenas privadas\ny eventos.',
      lede: 'Un salón privado para veinte, alquiler completo para sesenta. Menús degustación pensados con vos, maridados con nuestra bodega.',
      cta: 'Planificar evento',
    },
    contact: {
      eyebrow: '07 — Contacto',
      title: 'Encontranos.',
      address: 'Prinsengracht 432\n1016 JC Ámsterdam',
      hours: [
        'Martes — Jueves · 18:00 — 23:00',
        'Viernes — Sábado · 18:00 — 00:30',
        'Domingo · 18:00 — 22:30',
        'Lunes · Cerrado',
      ],
      phone: '+31 20 555 8421',
      email: 'reservations@restaurantvillamaria.nl',
    },
    footer: {
      tagline: 'Quebracho · Pampa · Ámsterdam',
      rights: '© Villa Maria. Todos los derechos reservados.',
    },
  },
} as const;

export type Dictionary = typeof dictionaries.en;
