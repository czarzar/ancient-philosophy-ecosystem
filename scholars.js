const SCHOLARS = [
  /* ── Cambridge ───────────────────────────────────────── */
  {
    name: 'Cristóbal Zarzar',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Postdoctoral Research Fellow',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Academic Scepticism', 'Epicureanism', 'Cynicism'],
    tags: ['epistemology', 'mind', 'ethics'],
    email: 'cz298@cam.ac.uk',
    web: 'https://czarzar.com',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/dr-cristobal-zarzar' },
      { label: 'College page', url: 'https://www.clarehall.cam.ac.uk/directory/cristobal-zarzar/' },
    , { label: 'orcid', url: 'https://orcid.org/0009-0007-2303-2434' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298049/cristobal-zarzar.jpg',
  },
  {
    name: 'David M. Douglas',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Research Fellow',
    focus: 'Hellenistic', ancients: ['Epicureanism', 'Philodemus of Gadara'],
    tags: ['ethics', 'epistemology', 'language'],
    email: 'dmd48@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/david-m-douglas' },
      { label: 'College page', url: 'https://www.emma.cam.ac.uk/people/dr-david-douglas' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030653/david-douglas.jpg',
  },

  /* ── Cambridge (additional) ───────────────────────────── */
  {
    name: 'Chiara Martini',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Early Career Research Fellow in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['metaphysics', 'mind'],
    email: 'cm2266@cam.ac.uk',
    web: 'https://chiaramartini.eu',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/dr-chiara-martini-0' },
      { label: 'College page', url: 'https://www.corpus.cam.ac.uk/people/dr-chiara-martini' },
    , { label: 'orcid', url: 'https://orcid.org/0000-0002-8785-4521' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030280/chiara-martini.jpg',
  },
  {
    name: 'Lea Cantor',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Blacker Loewe Research Fellow in Philosophy',
    focus: 'Pre-Socratics', ancients: ['Parmenides', 'Pyrrhonian Scepticism'],
    tags: ['epistemology', 'metaphysics'],
    email: 'lc840@cam.ac.uk',
    web: 'https://leacantor.com/index.html',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/dr-lea-cantor' },
      { label: 'College page', url: 'https://www.pet.cam.ac.uk/person/cantor' },
    , { label: 'orcid', url: 'https://orcid.org/0000-0003-3139-2839' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030280/lea-cantor.jpg',
  },
  {
    name: 'Christian Keime',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Research\ Associate',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['epistemology', 'ethics', 'metaphysics'],
    email: 'ck643@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/dr-christian-keime' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030281/christian-keime.png',
  },
  {
    name: 'James Warren',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Professor of Ancient Philosophy',
    focus: 'Hellenistic', ancients: ['Epicureanism', 'Plato', 'Aristotle', 'Pre-Socratics', 'Democritus', 'Pyrrho', 'Pyrrhonian Scepticism', 'Stoicism', 'Cyrenaics', 'Cynicism'],
    tags: ['ethics', 'epistemology', 'mind'],
    email: 'jiw1001@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/james-warren' },
      { label: 'College page', url: 'https://www.corpus.cam.ac.uk/people/professor-james-warren' },
    , { label: 'orcid', url: 'https://orcid.org/0000-0001-6197-9687' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030281/james-warren.jpg',
  },
  {
    name: 'Laura M. Castelli',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Associate Professor in Classics (Greek and Roman Philosophy)',
    focus: 'Aristotle', ancients: ['Aristotle', 'Alexander of Aphrodisias'],
    tags: ['metaphysics', 'language', 'epistemology'],
    email: 'lc918@cam.ac.uk',
    web: 'https://lauramcastelli.com/',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/dr-laura-m-castelli-0' },
      { label: 'College page', url: 'https://www.clarehall.cam.ac.uk/directory/castelli/' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030279/laura-castelli.jpg',
  },
  {
    name: 'Gábor Betegh',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Laurence Professor of Ancient Philosophy',
    focus: 'Pre-Socratics', ancients: ['Heraclitus', 'Parmenides', 'Democritus'],
    tags: ['metaphysics', 'epistemology'],
    email: 'gb230@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/professor-gabor-betegh' },
      { label: 'College page', url: 'https://www.christs.cam.ac.uk/college/people/fellows/professor-gabor-betegh' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030279/gabor-betegh.jpg',
  },
  {
    name: 'Myrto Hatzimichali',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Senior\ Lecturer\ in\ Classics',
    focus: 'Aristotle', ancients: ['Aristotle', 'Alexander of Aphrodisias'],
    tags: ['metaphysics', 'language', 'mind'],
    email: 'mh303@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/myrto-hatzimichali' },
      { label: 'College page', url: 'https://www.homerton.cam.ac.uk/people/myrto-hatzimichali' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030278/myrto-hatzimichali.jpg',
  },
  {
    name: 'Frisbee C.C. Sheffield',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Associate Professor of Classics',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['ethics', 'mind', 'metaphysics'],
    email: 'fccs2@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/dr-frisbee-c-c-sheffield' },
      { label: 'College page', url: 'https://www.dow.cam.ac.uk/people/dr-frisbee-sheffield' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030278/frisbee-sheffield.jpg',
  },

  /* ── UCL ──────────────────────────────────────────────── */
  {
    name: 'Fiona Leigh',
    uni: 'University College London', dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Ancient Greek Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['metaphysics', 'epistemology', 'mind'],
    email: 'fiona.leigh@ucl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://profiles.ucl.ac.uk/4084-fiona-leigh' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-0052-3763' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291680/fiona-leigh.jpg',
  },
  {
    name: 'Mark Eli Kalderon',
    uni: 'University College London', dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Empedocles'],
    tags: ['metaphysics', 'mind', 'epistemology'],
    email: 'm.kalderon@ucl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://profiles.ucl.ac.uk/6364-mark-kalderon' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-9668-6577' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291681/mark-kalderon.jpg',
  },
  {
    name: 'Andrew Gregory',
    uni: 'University College London', dept: 'Department of Science and Technology Studies',
    city: 'London', position: 'Professor of History and Philosophy of Science',
    focus: 'Pre-Socratics', ancients: ['Heraclitus', 'Parmenides', 'Anaximander'],
    tags: ['metaphysics', 'epistemology'],
    email: 'andrew.gregory@ucl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://profiles.ucl.ac.uk/4876-andrew-gregory' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-8228-7997' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291682/andrew-gregory.png',
  },
  {
    name: 'Elena Cagnoli Fiecconi',
    uni: 'University College London', dept: 'Department of Greek and Latin',
    city: 'London', position: 'Associate Professor in Ancient Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['ethics', 'mind'],
    email: 'e.fiecconi@ucl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://profiles.ucl.ac.uk/30436-elena-cagnoli-fiecconi' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-0176-8236' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291682/elena-cagnoli-fiecconi.jpg',
  },
  {
    name: 'Simona Aimar',
    uni: 'University College London', dept: 'Department of Philosophy',
    city: 'London', position: 'Lecturer in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['metaphysics', 'language'],
    email: 's.aimar@ucl.ac.uk', web: 'https://www.simonaimar.com',
    links: [{ label: 'Faculty page', url: 'https://profiles.ucl.ac.uk/44585-simona-aimar' }, { label: 'orcid', url: 'https://orcid.org/0000-0003-2907-9325' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291683/simona-aimar.png',
  },
  {
    name: 'Michael McOsker',
    uni: 'University College London', dept: 'Department of Greek and Latin',
    city: 'London', position: 'Researcher in Papyrology',
    focus: 'Hellenistic', ancients: ['Epicureanism', 'Philodemus of Gadara'],
    tags: ['language', 'epistemology'],
    email: 'm.mcosker@ucl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://profiles.ucl.ac.uk/97051-michael-mcosker/about' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-6048-7637' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291684/michael-mcosker.jpg',
  },

  /* ── KCL ──────────────────────────────────────────────── */
  {
    name: 'Peter Adamson',
    uni: "King's College London", dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Ancient and Medieval Philosophy',
    focus: 'Hellenistic', ancients: ['Neoplatonism', 'Stoicism'],
    tags: ['metaphysics', 'mind'],
    email: 'peter.adamson@kcl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.kcl.ac.uk/people/peter-adamson' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-9256-2366' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291684/peter-adamson.jpg',
  },
  {
    name: 'Joachim Aufderheide',
    uni: "King's College London", dept: 'Department of Philosophy',
    city: 'London', position: 'Reader in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['ethics', 'metaphysics'],
    email: 'joachim.aufderheide@kcl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.kcl.ac.uk/people/joachim-aufderheide' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-7080-4256' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291685/joachim-aufderheide.jpg',
  },
  {
    name: 'Shaul Tor',
    uni: "King's College London", dept: 'Departments of Classics and Philosophy',
    city: 'London', position: 'Reader in Ancient Philosophy',
    focus: 'Pre-Socratics', ancients: ['Heraclitus', 'Parmenides', 'Xenophanes'],
    tags: ['epistemology', 'metaphysics'],
    email: 'shaul.tor@kcl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.kcl.ac.uk/people/shaul-tor' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-7229-092X' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291686/shaul-tor.jpg',
  },

  /* ── Royal Holloway ───────────────────────────────────── */
  {
    name: 'Elizabeth Gloyn',
    uni: 'Royal Holloway, University of London', dept: 'Department of Classics',
    city: 'London', position: 'Reader in Latin Language and Literature',
    focus: 'Hellenistic', ancients: ['Stoicism'],
    tags: ['ethics', 'politics'],
    email: 'Liz.Gloyn@rhl.ac.uk',
    web: '',
    links: [{ label: 'Faculty page', url: 'https://pure.royalholloway.ac.uk/en/persons/elizabeth-gloyn/' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-6914-6687' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298050/elizabeth-gloyn.jpg',
  },
  {
    name: 'John Sellars',
    uni: 'Royal Holloway, University of London', dept: 'Department of Philosophy',
    city: 'London', position: 'Reader in History of Philosophy',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Epicureanism'],
    tags: ['ethics', 'metaphysics'],
    email: 'John.Sellars@rhl.ac.uk', web: 'http://www.johnsellars.org.uk',
    links: [{ label: 'Faculty page', url: 'https://pure.royalholloway.ac.uk/portal/en/persons/john-sellars(709b3ed0-efe1-45cc-923f-9d180a42fb9a).html' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-2041-8549' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291688/john-sellars.jpg',
  },
  {
    name: 'David Preston',
    uni: 'Royal Holloway, University of London', dept: 'Department of Politics, International Relations and Philosophy',
    city: 'London', position: 'Lecturer in Philosophy',
    focus: 'Pre-Socratics', ancients: ['Socrates', 'Empedocles'],
    tags: ['ethics', 'epistemology'],
    email: 'Dave.Preston@rhl.ac.uk',
    web: '',
    links: [{ label: 'Faculty page', url: 'https://pure.royalholloway.ac.uk/en/persons/david-preston/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298051/david-preston.jpg',
  },

  /* ── Oxford ───────────────────────────────────────────── */
  {
    name: 'Alexander Bown',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Associate\ Professor\ of\ Ancient\ Philosophy',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Academic Scepticism'],
    tags: ['epistemology', 'language', 'metaphysics'],
    email: 'alexander.bown@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/alexander-bown' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291688/alexander-bown.jpg',
  },
  {
    name: 'Luca Castagnoli',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Associate\ Professor\ of\ Ancient\ Greek\ Philosophy',
    focus: 'Hellenistic', ancients: ['Pyrrhonian Scepticism', 'Academic Scepticism'],
    tags: ['epistemology', 'language'],
    email: 'luca.castagnoli@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/luca-castagnoli' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291690/luca-castagnoli.jpg',
  },
  {
    name: 'Ursula Coope',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor\ of\ Ancient\ Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['metaphysics', 'mind', 'ethics'],
    email: 'ursula.coope@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/ursula-coope' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291692/ursula-coope.jpg',
  },
  {
    name: 'Paolo Fait',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Anthony Quinton Fellow; Tutor in Classical Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['metaphysics', 'language', 'epistemology'],
    email: 'paolo.fait@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/paolo-fait' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291694/paolo-fait.jpg',
  },
  {
    name: 'Marion Durand',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Associate\ Professor\ of\ Ancient\ Philosophy',
    focus: 'Hellenistic', ancients: ['Stoicism'],
    tags: ['language', 'epistemology'],
    email: 'marion.durand@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/marion-durand' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291695/marion-durand.jpg',
  },
  {
    name: 'Roger Crisp',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor of Moral Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['ethics', 'politics'],
    email: 'roger.crisp@st-annes.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/roger-crisp' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291696/roger-crisp.jpg',
  },
  {
    name: 'Karen Margrethe Nielsen',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor of Ancient Greek and Roman Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['ethics', 'mind', 'politics'],
    email: 'karen.nielsen@some.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/karen-margrethe-nielsen' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291696/karen-nielsen.jpg',
  },
  {
    name: 'Michail Peramatzis',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Hinton Clarendon Fellow in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['metaphysics', 'epistemology'],
    email: 'michail.peramatzis@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/michail-peramatzis' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291697/michail-peramatzis.jpg',
  },
  {
    name: 'Tobias Reinhardt',
    uni: 'University of Oxford', dept: 'Faculty of Classics',
    city: 'Oxford', position: 'Corpus Christi Professor of the Latin Language and Literature',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Academic Scepticism'],
    tags: ['epistemology', 'language'],
    email: 'tobias.reinhardt@classics.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/tobias-reinhardt' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291698/tobias-reinhardt.jpg',
  },
  {
    name: 'Dominic Scott',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor of Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['ethics', 'epistemology', 'politics'],
    email: 'dominic.scott@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/dominic-scott' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291699/dominic-scott.jpg',
  },
  {
    name: 'Simon Shogry',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Associate Professor of Philosophy',
    focus: 'Hellenistic', ancients: ['Stoicism'],
    tags: ['epistemology', 'ethics', 'mind'],
    email: 'simon.shogry@philosophy.ox.ac.uk', web: 'https://simonshogry.com',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/simon-shogry' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-8054-8425' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291699/simon-shogry.jpg',
  },
  {
    name: 'Stefan Sienkiewicz',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Departmental\ Lecturer\ in\ Ancient\ Philosophy',
    focus: 'Hellenistic', ancients: ['Pyrrhonian Scepticism', 'Academic Scepticism'],
    tags: ['epistemology'],
    email: 'stefan.sienkiewicz@queens.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/stefan-sienkiewicz' }, { label: 'orcid', url: 'https://orcid.org/0009-0008-8016-5927' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291700/stefan-sienkiewicz.jpg',
  },
  {
    name: 'Ugo Zilioli',
    uni: 'University of Oxford', dept: 'Faculty of Theology and Religion',
    city: 'Oxford', position: 'Associate\ Faculty\ Member',
    focus: 'Pre-Socratics', ancients: ['Protagoras', 'Pyrrhonian Scepticism', 'Cyrenaics'],
    tags: ['metaphysics', 'epistemology'],
    email: 'ugo.zilioli@theology.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.theology.ox.ac.uk/people/ugo-zilioli' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291700/ugo-zilioli.jpg',
  },

  /* ── Nottingham ───────────────────────────────────────── */
  {
    name: 'Matthew Duncombe',
    uni: 'University of Nottingham', dept: 'Department of Philosophy',
    city: 'Nottingham', position: 'Associate Professor in Philosophy',
    focus: 'Aristotle', ancients: ['Plato', 'Aristotle'],
    tags: ['epistemology', 'language', 'metaphysics'],
    email: 'matthew.duncombe@nottingham.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.nottingham.ac.uk/humanities/departments/philosophy/people/matthew.duncombe' }, { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=HA__1KQAAAAJ&hl=en' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298051/matthew-duncombe.jpg',
  },

  /* ── Edinburgh ────────────────────────────────────────── */
  {
    name: 'Benjamin Harriman',
    uni: 'University of Edinburgh', dept: 'School of History, Classics and Archaeology',
    city: 'Edinburgh', position: 'Lecturer in Greek Literature and Philosophy',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Pyrrhonian Scepticism'],
    tags: ['metaphysics', 'mind', 'epistemology'],
    email: 'Benjamin.Harriman@ed.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://edwebprofiles.ed.ac.uk/profile/benjamin-harriman' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298052/benjamin-harriman.jpg',
  },
  {
    name: 'Inna Kupreeva',
    uni: 'University of Edinburgh', dept: 'School of Philosophy, Psychology and Language Sciences',
    city: 'Edinburgh', position: 'Senior Lecturer in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Alexander of Aphrodisias', 'Stoicism'],
    tags: ['metaphysics', 'mind', 'epistemology'],
    email: 'inna.kupreeva@ed.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://edwebprofiles.ed.ac.uk/profile/inna-kupreeva' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383651/inna-kupreeva.jpg',
  },
  {
    name: 'Simon Trépanier', uni: 'University of Edinburgh', dept: 'School of History, Classics and Archaeology',
    city: 'Edinburgh', position: 'Senior Lecturer in Classics',
    focus: 'Pre-Socratics', ancients: ['Empedocles', 'Parmenides'],
    tags: ['metaphysics', 'epistemology'],
    email: 'Simon.Trepanier@ed.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://edwebprofiles.ed.ac.uk/profile/simon-trepanier' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298053/simon-trepanier.png',
  },

  /* ── Essex ────────────────────────────────────────────── */
  {
    name: 'Ellisif Wasmuth',
    uni: 'University of Essex', dept: 'School of Philosophical, Historical and Interdisciplinary Studies',
    city: 'Colchester', position: 'Lecturer in Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['epistemology', 'mind'],
    email: 'ellisif.wasmuth@essex.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.essex.ac.uk/people/WASMU56501/Ellisif-Wasmuth' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298053/ellisif-wasmuth.jpg',
  },

  /* ── Kent ─────────────────────────────────────────────── */
  {
    name: 'Kelli Rudolph',
    uni: 'University of Kent', dept: 'Department of Classical and Archaeological Studies',
    city: 'Canterbury', position: 'Senior Lecturer in Classics and Philosophy',
    focus: 'Pre-Socratics', ancients: ['Heraclitus', 'Democritus', 'Parmenides'],
    tags: ['epistemology', 'metaphysics'],
    email: 'k.c.rudolph@kent.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.kent.ac.uk/classics-archaeology/people/1741/rudolph-kelli' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291702/kelli-rudolph.jpg',
  },

  /* ── St Andrews ───────────────────────────────────────── */
  {
    name: 'Margaret Hampson',
    uni: 'University of St Andrews', dept: 'Department of Philosophy',
    city: 'St Andrews', position: 'Lecturer\ in\ Ancient\ Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['ethics', 'mind'],
    email: 'mrh8@st-andrews.ac.uk', web: 'https://www.margarethampson.com',
    links: [{ label: 'Faculty page', url: 'https://www.st-andrews.ac.uk/philosophy/people/mrh8/' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-5097-6405' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298054/margaret-hampson.jpg',
  },
  {
    name: 'Alex Long',
    uni: 'University of St Andrews', dept: 'School of Classics',
    city: 'St Andrews', position: 'Professor\ of\ Classics',
    focus: 'Plato', ancients: ['Plato', 'Stoicism'],
    tags: ['ethics', 'epistemology', 'politics'],
    email: 'agl10@st-andrews.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.st-andrews.ac.uk/classics/people/agl10/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298055/alex-long.jpg',
  },

  /* ── Durham ───────────────────────────────────────────── */
  {
    name: 'Phillip Horky',
    uni: 'Durham University', dept: 'Department of Classics and Ancient History',
    city: 'Durham', position: 'Professor of Ancient Philosophy',
    focus: 'Pre-Socratics', ancients: ['Parmenides', 'Democritus'],
    tags: ['metaphysics', 'politics', 'epistemology'],
    email: 'phillip.horky@durham.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.durham.ac.uk/staff/phillip-horky/' }, { label: 'orcid', url: 'https://orcid.org/0000-0003-3477-586X' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291703/phillip-horky.jpg',
  },
  {
    name: 'Giulia Bonasio',
    uni: 'Durham University', dept: 'Department of Classics and Ancient History',
    city: 'Durham', position: 'Associate Professor in Ancient Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['ethics', 'epistemology', 'mind'],
    email: 'giulia.bonasio@durham.ac.uk', web: 'https://giuliabonasio.wordpress.com',
    links: [{ label: 'Faculty page', url: 'https://www.durham.ac.uk/staff/giulia-bonasio/' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-9125-5436' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291703/giulia-bonasio.jpg',
  },
  {
    name: 'Nathan Gilbert',
    uni: 'Durham University', dept: 'Department of Classics and Ancient History',
    city: 'Durham', position: 'Associate Professor in Classics and Ancient History',
    focus: 'Hellenistic', ancients: ['Epicureanism', 'Stoicism', 'Cicero'],
    tags: ['ethics', 'politics'],
    email: 'nathan.b.gilbert@durham.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.durham.ac.uk/staff/nathan-b-gilbert/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291704/nathan-gilbert.jpg',
  },

  /* ── Southampton ──────────────────────────────────────── */
  {
    name: 'Bradford Jean-Hyuk Kim',
    uni: 'University of Southampton', dept: 'Department of Philosophy',
    city: 'Southampton', position: 'Lecturer in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['ethics', 'politics'],
    email: 'b.kim@soton.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.southampton.ac.uk/people/65djlr/doctor-bradford-kim' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-3506-7067' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291704/bradford-kim.jpg',
  },

  /* ── Manchester ───────────────────────────────────────── */
  {
    name: 'Jenny Bryan',
    uni: 'University of Manchester', dept: 'Department of Classics and Ancient History',
    city: 'Manchester', position: 'Senior Lecturer in Classical Philosophy',
    focus: 'Pre-Socratics', ancients: ['Parmenides', 'Empedocles'],
    tags: ['epistemology', 'metaphysics'],
    email: 'jenny.bryan@manchester.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://research.manchester.ac.uk/en/persons/jenny.bryan' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-0539-7452' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291705/jenny-bryan.jpg',
  },

  /* ── Cambridge (additional) ───────────────────────────── */
  {
    name: 'Carol Atack',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Bye-Fellow and Director of Studies in Classics',
    focus: 'Plato', ancients: ['Plato', 'Socrates', 'Cynicism', 'Xenophon'],
    tags: ['politics', 'epistemology'],
    email: 'cwa24@cam.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/dr-carol-atack' },
      { label: 'College page', url: 'https://newn.cam.ac.uk/person/carol-atack' },
    , { label: 'orcid', url: 'https://orcid.org/0000-0001-9125-5436' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291706/carol-atack.jpg',
  },
  {
    name: 'Yumi Suzuki',
    uni: 'University of Cambridge', dept: 'Needham\ Research\ Institute',
    city: 'Cambridge', position: 'Lloyd\-Dan\ David\ Research\ Fellow',
    focus: 'Pre-Socratics', ancients: ['Socrates', 'Plato'],
    tags: ['metaphysics', 'epistemology'],
    email: 'ys747@cam.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/yumi-suzuki' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-3848-6347' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291706/yumi-suzuki.jpg',
  },
  {
    name: 'Jingyi Jenny Zhao',
    uni: 'University of Cambridge', dept: 'Needham Research Institute',
    city: 'Cambridge', position: 'ISF Senior Research Fellow',
    focus: 'Pre-Socratics', ancients: ['Socrates', 'Plato'],
    tags: ['ethics', 'politics'],
    email: 'jz292@cam.ac.uk', web: 'https://www.jingyizhao.com',
    links: [{ label: 'College page', url: 'https://www.clarehall.cam.ac.uk/directory/zhao/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298055/jingyi-zhao.jpg',
  },

  /* ── Bath Spa ─────────────────────────────────────────── */
  {
    name: 'Saloni de Souza',
    uni: 'Bath Spa University', dept: 'Department of Philosophy and Ethics',
    city: 'Bath', position: 'Lecturer in Philosophy and Ethics',
    focus: 'Hellenistic', ancients: ['Plato'],
    tags: ['ethics', 'mind'],
    email: 's.desouza@bathspa.ac.uk',
    web: 'https://www.salonidesouza.com',
    links: [],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298056/saloni-de-souza.jpg',
  },

  /* ── Exeter ───────────────────────────────────────────── */
  {
    name: 'Gabriele Galluzzo',
    uni: 'University of Exeter', dept: 'Department of Classics, Ancient History, Religion and Theology',
    city: 'Exeter', position: 'Associate Professor in Greek and Roman Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['metaphysics', 'language'],
    email: 'G.Galluzzo@exeter.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://experts.exeter.ac.uk/22973-gabriele-galluzzo' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-5500-3669' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777292090/gabriele-galluzzo.jpg',
  },

  /* ── Open University ──────────────────────────────────── */
  {
    name: 'Sophie Grace Chappell',
    uni: 'The Open University', dept: 'Department of Philosophy',
    city: 'Milton Keynes', position: 'Professor of Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Aristotle', 'Socrates'],
    tags: ['ethics', 'metaphysics', 'epistemology'],
    email: 'sophie-grace.chappell@open.ac.uk',
    web: '',
    links: [{ label: 'Faculty page', url: 'https://profiles.open.ac.uk/sophie-grace-chappell' }, { label: 'orcid', url: 'https://orcid.org/0000-0002-0289-4891' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777298056/sophie-chappell.jpg',
  },

  /* ── Liverpool ────────────────────────────────────────── */
  {
    name: 'Panayiota Vassilopoulou',
    uni: 'University of Liverpool', dept: 'Department of Philosophy',
    city: 'Liverpool', position: 'Reader in Philosophy',
    focus: 'Hellenistic', ancients: ['Neoplatonism', 'Stoicism'],
    tags: ['metaphysics', 'epistemology', 'ethics'],
    email: 'P.Vassilopoulou@liverpool.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.liverpool.ac.uk/people/panayiota-vassilopoulou' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291707/panayiota-vassilopoulou.jpg',
  },

  /* ── Sheffield ────────────────────────────────────────── */

  /* ── St Andrews (additional) ─────────────────────────── */
  {
    name: 'Jason Carter',
    uni: 'University of St Andrews', dept: 'Department of Philosophy',
    city: 'St Andrews', position: 'Lecturer in Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['mind', 'metaphysics', 'ethics'],
    email: 'jwc29@st-andrews.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.st-andrews.ac.uk/philosophy/people/jwc29' }, { label: 'orcid', url: 'https://orcid.org/0000-0001-6435-9715' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383647/jason-carter.jpg',
  },

  /* ── Birkbeck (additional) ────────────────────────────── */
  {
    name: 'Catharine Edwards',
    uni: 'Birkbeck, University of London', dept: 'School of Historical Studies',
    city: 'London', position: 'Professor of Classics and Ancient History',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Cicero'],
    tags: ['ethics', 'politics'],
    email: 'c.edwards@bbk.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.bbk.ac.uk/our-staff/8003806/catharine-edwards' },
      { label: 'orcid', url: 'https://orcid.org/0000-0001-8583-7894' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383648/catharine-edwards.jpg',
  },

  /* ── Durham (additional) ──────────────────────────────── */
  {
    name: 'Edith Hall',
    uni: 'Durham University', dept: 'Department of Classics and Ancient History',
    city: 'Durham', position: 'Professor of Classics',
    focus: 'Aristotle', ancients: ['Aristotle', 'Socrates'],
    tags: ['ethics', 'politics', 'mind'],
    email: 'edith.hall@durham.ac.uk', web: 'https://edithhall.co.uk',
    links: [{ label: 'Faculty page', url: 'https://www.durham.ac.uk/staff/edith-hall/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383649/edith-hall.jpg',
  },

  /* ── Edinburgh (additional) ───────────────────────────── */
  {
    name: 'Damian Caluori',
    uni: 'University of Edinburgh', dept: 'School of Philosophy, Psychology and Language Sciences',
    city: 'Edinburgh', position: 'Senior Lecturer in Philosophy',
    focus: 'Hellenistic', ancients: ['Neoplatonism', 'Plato', 'Aristotle', 'Stoicism'],
    tags: ['metaphysics', 'mind', 'ethics'],
    email: 'dcaluori@ed.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://edwebprofiles.ed.ac.uk/profile/damian-caluori' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=lB7P1LkAAAAJ&hl=en' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777545023/damian-caluori-cropped.jpg',
  },
  {
    name: 'Douglas Cairns',
    uni: 'University of Edinburgh', dept: 'School of History, Classics and Archaeology',
    city: 'Edinburgh', position: 'Professor of Classics',
    focus: 'Aristotle', ancients: ['Aristotle', 'Socrates', 'Plato'],
    tags: ['ethics', 'mind', 'politics'],
    email: 'douglas.cairns@ed.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://edwebprofiles.ed.ac.uk/profile/douglas-cairns' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383650/douglas-cairns.jpg',
  },

  /* ── Leeds (additional) ───────────────────────────────── */
  {
    name: 'Jamie Dow',
    uni: 'University of Leeds', dept: 'School of Philosophy, Religion and History of Science',
    city: 'Leeds', position: 'Associate Professor of Philosophy',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['ethics', 'mind', 'politics'],
    email: 'J.Dow@leeds.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://ahc.leeds.ac.uk/ethics/staff/719/dr-jamie-dow' },
      { label: 'orcid', url: 'https://orcid.org/0000-0002-8241-6880' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383650/jamie-dow.jpg',
  },

  /* ── Bristol (additional) ─────────────────────────────── */
  {
    name: 'Kurt Lampe',
    uni: 'University of Bristol', dept: 'Department of Classics and Ancient History',
    city: 'Bristol', position: 'Senior Lecturer in Classics',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Epicureanism', 'Cyrenaics'],
    tags: ['ethics', 'mind'],
    email: '', web: '',
    links: [{ label: 'Faculty page', url: 'https://research-information.bris.ac.uk/en/persons/kurt-w-lampe/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777383651/kurt-lampe.jpg',
  },

  /* ── York ─────────────────────────────────────────────── */
  {
    name: 'Stephen Everson',
    uni: 'University of York', dept: 'Department of Philosophy',
    city: 'York', position: 'Lecturer in Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Aristotle', 'Academic Scepticism', 'Epicureanism'],
    tags: ['epistemology', 'mind', 'ethics'],
    email: 'stephen.everson@york.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.york.ac.uk/philosophy/people/stephen-everson/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542098/stephen-everson.jpg',
  },

  /* ── Liverpool (additional) ───────────────────────────── */
  {
    name: 'Alexei Zadorozhny',
    uni: 'University of Liverpool', dept: 'Department of Archaeology, Classics and Egyptology',
    city: 'Liverpool', position: 'Senior Lecturer',
    focus: 'MiddlePlatonism', ancients: ['Plutarch of Chaeronea'],
    tags: ['ethics', 'language'],
    email: 'Avzadoro@liverpool.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.liverpool.ac.uk/people/alexey-zadorozhnyy/' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=WKn8QUwAAAAJ&hl=en' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542098/alexei-zadorozhny.jpg',
  },

  /* ── Reading ───────────────────────────────────────────── */
  {
    name: 'Timothy Duff',
    uni: 'University of Reading', dept: 'Department of Classics',
    city: 'Reading', position: 'Professor of Greek',
    focus: 'MiddlePlatonism', ancients: ['Plutarch of Chaeronea'],
    tags: ['ethics', 'politics'],
    email: 't.e.duff@reading.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.reading.ac.uk/classics/staff/timothy-duff' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=gSMkgCoAAAAJ&hl=en' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542099/timothy-duff.jpg',
  },

  /* ── Oxford (Nuffield) ────────────────────────────────── */
  {
    name: 'Eleni Kechagia-Ovseiko',
    uni: 'University of Oxford', dept: 'Nuffield College',
    city: 'Oxford', position: 'Senior Tutor',
    focus: 'MiddlePlatonism', ancients: ['Plutarch of Chaeronea', 'Epicureanism'],
    tags: ['ethics', 'epistemology'],
    email: '', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.nuffield.ox.ac.uk/people/profiles/eleni-kechagia-ovseiko/' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=Ji6Wsw4AAAAJ&hl=en' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542099/eleni-kechagia-ovseiko.jpg',
  },

  {
    name: 'Serafina Cuomo',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'A.G. Leventis Professor of Greek Culture',
    focus: 'Pre-Socratics', ancients: ['Pythagoreans', 'Thales', 'Galen'],
    tags: ['metaphysics', 'epistemology'],
    email: 'sc134@cam.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/professor-serafina-cuomo' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542113/serafina-cuomo.jpg',
  },
  /* ── Warwick (additional) ────────────────────────────── */
  {
    name: 'Caroline Petit',
    uni: 'University of Warwick', dept: 'Department of Classics and Ancient History',
    city: 'Coventry', position: 'Professor of Classics and the History of Medicine',
    focus: 'MiddlePlatonism', ancients: ['Galen'],
    tags: ['epistemology', 'metaphysics'],
    email: 'C.C.L.Petit@warwick.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://warwick.ac.uk/fac/arts/classics/intranets/staff/petit/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777585387/caroline-petit.jpg',
  },
];

/* ── Specialism taxonomy for Browse by Specialism tab ────
   Each top-level entry is a category button.
   'keys'  = all ancients values that count as this category
   'subs'  = sub-specialism labels shown as refinement tags  */
const SPECIALISMS = [
  {
    key: 'Pre-Socratics', label: 'Pre-Socratics',
    keys: ['Pre-Socratics','Milesians','Thales','Anaximander','Anaximenes',
           'Pythagoreans','Pythagoras','Archytas','Philolaus',
           'Eleatics','Parmenides','Zeno of Elea','Melissus',
           'Atomists','Democritus','Leucippus',
           'Sophists','Protagoras','Gorgias','Thrasymachus','Antiphon','Hippias','Prodicus','Critias',
           'Xenophanes','Heraclitus','Anaxagoras','Empedocles',
           'Diogenes of Apollonia','Hippocratic Corpus','Derveni Papyrus'],
    subs: [
      { label: 'Milesians',    keys: ['Milesians','Thales','Anaximander','Anaximenes'] },
      { label: 'Pythagoreans', keys: ['Pythagoreans','Pythagoras','Archytas','Philolaus'] },
      { label: 'Eleatics',     keys: ['Eleatics','Parmenides','Zeno of Elea','Melissus'] },
      { label: 'Atomists',     keys: ['Atomists','Democritus','Leucippus'] },
      { label: 'Sophists',     keys: ['Sophists','Protagoras','Gorgias','Thrasymachus','Antiphon','Hippias','Prodicus','Critias'] },
      { label: 'Xenophanes',   keys: ['Xenophanes'] },
      { label: 'Heraclitus',   keys: ['Heraclitus'] },
      { label: 'Anaxagoras',   keys: ['Anaxagoras'] },
      { label: 'Empedocles',   keys: ['Empedocles'] },
      { label: 'Anaximander',  keys: ['Anaximander'] },
      { label: 'Parmenides',   keys: ['Parmenides'] },
      { label: 'Democritus',   keys: ['Democritus'] },
      { label: 'Derveni Papyrus', keys: ['Derveni Papyrus'] },
    ],
  },
  {
    key: 'Socratics', label: 'Socratics',
    keys: ['Socratics','Cynicism','Antisthenes','Diogenes of Sinope','Crates','Hipparchia',
           'Cyrenaics','Aristippus','Megarics','Xenophon'],
    subs: [
      { label: 'Cynics',    keys: ['Cynicism','Antisthenes','Diogenes of Sinope','Crates','Hipparchia'] },
      { label: 'Cyrenaics', keys: ['Cyrenaics','Aristippus'] },
      { label: 'Megarics',  keys: ['Megarics'] },
      { label: 'Xenophon',  keys: ['Xenophon'] },
    ],
  },
  {
    key: 'Classical', label: 'Classical Philosophy',
    keys: ['Socrates','Plato','Aristotle','Xenophon',
           'Classical Greek','Classical Greek Philosophy',
           'Old Academy','Speusippus','Xenocrates','Polemo'],
    subs: [
      { label: 'Socrates',    keys: ['Socrates'] },
      { label: 'Plato',       keys: ['Plato'] },
      { label: 'Aristotle',   keys: ['Aristotle'] },
      { label: 'Xenophon',    keys: ['Xenophon'] },
      { label: 'Old Academy', keys: ['Old Academy','Speusippus','Xenocrates','Polemo'] },
    ],
  },
  {
    key: 'Hellenistic', label: 'Hellenistic Philosophy',
    keys: ['Hellenistic','Epicureanism','Epicurus','Lucretius','Philodemus of Gadara','Philodemus',
           'Stoicism','Zeno of Citium','Cleanthes','Chrysippus','Panaetius','Posidonius',
           'Seneca','Musonius Rufus','Epictetus','Marcus Aurelius',
           'Academic Scepticism','Pyrrhonian Scepticism','Scepticism',
           'Arcesilaus','Carneades','Clitomachus','Philo of Larissa','Cicero',
           'Aenesidemus','Pyrrho','Sextus Empiricus',
           'Peripatetics','Andronicus','Alexander of Aphrodisias','Theophrastus'],
    subs: [
      { label: 'Epicureanism',       keys: ['Epicureanism','Epicurus','Lucretius','Philodemus','Philodemus of Gadara'] },
      { label: 'Stoicism',           keys: ['Stoicism','Zeno of Citium','Cleanthes','Chrysippus','Panaetius','Posidonius','Seneca','Musonius Rufus','Epictetus','Marcus Aurelius'] },
      { label: 'Academic Scepticism', keys: ['Academic Scepticism','Arcesilaus','Carneades','Clitomachus','Philo of Larissa','Cicero'] },
      { label: 'Pyrrhonian Scepticism', keys: ['Pyrrhonian Scepticism','Aenesidemus','Pyrrho','Sextus Empiricus'] },
      { label: 'Peripatetics',       keys: ['Peripatetics','Andronicus','Alexander of Aphrodisias','Theophrastus'] },
    ],
  },
  {
    key: 'MiddlePlatonism', label: 'Middle Platonism',
    keys: ['Middle Platonism','Antiochus of Ascalon','Philo of Alexandria','Plutarch of Chaeronea',
           'Numenius of Apamea','Albinus','Galen'],
    subs: [
      { label: 'Antiochus of Ascalon',  keys: ['Antiochus of Ascalon'] },
      { label: 'Philo of Alexandria',   keys: ['Philo of Alexandria'] },
      { label: 'Plutarch of Chaeronea', keys: ['Plutarch of Chaeronea'] },
      { label: 'Numenius of Apamea',    keys: ['Numenius of Apamea'] },
      { label: 'Albinus',               keys: ['Albinus'] },
      { label: 'Galen',                 keys: ['Galen'] },
    ],
  },
  {
    key: 'Neoplatonism', label: 'Neoplatonism',
    keys: ['Neoplatonism','Plotinus','Porphyry','Iamblichus','Syrianus','Hypatia',
           'Proclus','Hermias','Ammonius','John Philoponus',
           'Simplicius','Olympiodorus','Damascius','Byzantine Philosophy'],
    subs: [
      { label: 'Plotinus',          keys: ['Plotinus'] },
      { label: 'Porphyry',          keys: ['Porphyry'] },
      { label: 'Iamblichus',        keys: ['Iamblichus'] },
      { label: 'Syrianus',          keys: ['Syrianus'] },
      { label: 'Hypatia',           keys: ['Hypatia'] },
      { label: 'Proclus',           keys: ['Proclus'] },
      { label: 'Hermias',           keys: ['Hermias'] },
      { label: 'Ammonius',          keys: ['Ammonius'] },
      { label: 'John Philoponus',   keys: ['John Philoponus'] },
      { label: 'Simplicius',        keys: ['Simplicius'] },
      { label: 'Olympiodorus',      keys: ['Olympiodorus'] },
      { label: 'Damascius',         keys: ['Damascius'] },
      { label: 'Byzantine Philosophy', keys: ['Byzantine Philosophy'] },
    ],
  },
];

/* ── Map coordinates ── add new cities here as needed ── */
const UNI_COORDS = {
  Edinburgh:     { lat: 55.9445, lng: -3.1892 },
  Glasgow:       { lat: 55.8714, lng: -4.2882 },
  Durham:        { lat: 54.7740, lng: -1.5782 },
  'St Andrews':  { lat: 56.3398, lng: -2.7967 },
  Leeds:         { lat: 53.8067, lng: -1.5550 },
  Manchester:    { lat: 53.4668, lng: -2.2339 },
  Nottingham:    { lat: 52.9382, lng: -1.1974 },
  Coventry:      { lat: 52.3838, lng: -1.5603 },
  Cambridge:     { lat: 52.2043, lng:  0.1149 },
  Oxford:        { lat: 51.7548, lng: -1.2544 },
  London:        { lat: 51.5074, lng: -0.1278 },
  Bristol:       { lat: 51.4584, lng: -2.6032 },
  Southampton:   { lat: 50.9340, lng: -1.3967 },
  Canterbury:    { lat: 51.2802, lng:  1.0789 },
  Colchester:    { lat: 51.8893, lng:  0.9040 },
  Bath:          { lat: 51.3781, lng: -2.3597 },
  Exeter:        { lat: 50.7352, lng: -3.5331 },
  'Milton Keynes':{ lat: 52.0406, lng: -0.7594 },
  Liverpool:     { lat: 53.4668, lng: -2.9720 },
  Sheffield:     { lat: 53.3811, lng: -1.4701 },
  York:          { lat: 53.9521, lng: -1.0527 },
  Reading:       { lat: 51.4416, lng: -0.9402 },
  Norwich:       { lat: 52.6237, lng:  1.2378 },
};

/* ── Research theme tag styles ── */
const THEMES = {
  metaphysics:  { label: 'Metaphysics',       bg: '#eceaf6', txt: '#2a2260' },
  ethics:       { label: 'Ethics',            bg: '#e2f2ea', txt: '#0e4a2e' },
  epistemology: { label: 'Epistemology',       bg: '#fdf2e2', txt: '#6b3800' },
  mind:         { label: 'Phil. of mind',     bg: '#fce8ef', txt: '#6b0030' },
  politics:     { label: 'Political phil.',   bg: '#e2edf8', txt: '#0b3860' },
  language:     { label: 'Language & logic',  bg: '#e8f4e3', txt: '#1a4808' },
};

/* Ancient tags — warm terracotta, distinct from theme tags */
const ANCT = { bg: '#f5ede2', txt: '#6b3a10' };

/* Network colours */
const FOCUS_HEX   = { 'Plato':'#3d3480', 'Aristotle':'#1a6b52', 'Hellenistic':'#8a4218', 'Pre-Socratics':'#575350' };
const FOCUS_LIGHT = { 'Plato':'#eceaf6', 'Aristotle':'#e2f2ea', 'Hellenistic':'#f4ece3', 'Pre-Socratics':'#ececec' };


/* ══════════════════════════════════════════════════════════
   EMERITI — retired academics
   ══════════════════════════════════════════════════════════ */
const EMERITI = [
  /* ── Moved from active list ─────────────────────────── */
  {
    name: 'Lindsay Judson',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor of Ancient Philosophy, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['metaphysics', 'epistemology'],
    email: 'lindsay.judson@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://onap.web.ox.ac.uk/people/lindsay-judson' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291693/lindsay-judson.jpg',
  },
  {
    name: 'Angie Hobbs',
    uni: 'University of Sheffield', dept: 'School of History, Philosophy and Digital Humanities',
    city: 'Sheffield', position: 'Professor of the Public Understanding of Philosophy, Emerita',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['ethics', 'politics', 'mind'],
    email: 'a.hobbs@sheffield.ac.uk', web: 'https://angiehobbs.com',
    links: [
      { label: 'Faculty page', url: 'https://sheffield.ac.uk/hpdh/people/philosophy-staff/angie-hobbs' },
      { label: 'orcid', url: 'https://orcid.org/0000-0003-2942-4061' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777291708/angie-hobbs.jpg',
  },

  /* ── KCL ─────────────────────────────────────────────── */
  {
    name: 'Mary Margaret McCabe',
    uni: "King's College London", dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Ancient Philosophy, Emerita',
    focus: 'Plato', ancients: ['Plato', 'Socrates', 'Aristotle'],
    tags: ['metaphysics', 'epistemology', 'mind'],
    email: 'mm.mccabe@kcl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.kcl.ac.uk/people/mm-mccabe' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542100/mary-margaret-mccabe.jpg',
  },
  {
    name: 'Sir Richard Sorabji',
    uni: "King's College London", dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Ancient Philosophy, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Neoplatonism'],
    tags: ['metaphysics', 'mind', 'ethics'],
    email: '', web: 'http://www.richardsorabji.co.uk',
    links: [{ label: 'Faculty page', url: 'https://www.kcl.ac.uk/people/richard-sorabji' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542101/richard-sorabji.jpg',
  },
  {
    name: 'Michael Trapp',
    uni: "King's College London", dept: 'Department of Classics',
    city: 'London', position: 'Professor of Greek Literature & Thought, Emeritus',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Plato'],
    tags: ['ethics', 'language'],
    email: 'michael.trapp@kcl.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.kcl.ac.uk/people/michael-trapp' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542101/michael-trapp.webp',
  },
  {
    name: 'Raphael Woolf',
    uni: "King's College London", dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Ancient Philosophy, Emeritus',
    focus: 'Plato', ancients: ['Plato', 'Aristotle', 'Stoicism', 'Cicero', 'Epicureanism'],
    tags: ['ethics', 'epistemology'],
    email: '', web: '',
    links: [
      { label: 'Faculty page', url: 'https://kclpure.kcl.ac.uk/portal/en/persons/raphael.g.woolf' },
      { label: 'orcid', url: 'https://orcid.org/0000-0002-8128-9648' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542102/raphael-woolf.jpg',
  },

  /* ── Birkbeck ─────────────────────────────────────────── */
  {
    name: 'Anthony Price',
    uni: 'Birkbeck, University of London', dept: 'Department of Philosophy',
    city: 'London', position: 'Professor of Philosophy, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['ethics', 'mind'],
    email: 'a.price@bbk.ac.uk', web: '',
    links: [],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542103/anthony-price.jpg',
  },

  /* ── Cambridge ────────────────────────────────────────── */
  {
    name: 'David Sedley',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Laurence Professor of Ancient Philosophy, Emeritus',
    focus: 'Hellenistic', ancients: ['Epicureanism', 'Academic Scepticism', 'Plato'],
    tags: ['epistemology', 'metaphysics', 'ethics'],
    email: 'dns1@cam.ac.uk', web: 'https://davidsedley.github.io',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/david-sedley' },
      { label: 'College page', url: 'https://www.christs.cam.ac.uk/college/people/fellows/professor-david-sedley' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542104/david-sedley.jpg',
  },
  {
    name: 'Sir Geoffrey Lloyd',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Professor of Ancient Philosophy and Science, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Pre-Socratics'],
    tags: ['metaphysics', 'epistemology'],
    email: '', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/geoffrey-lloyd' },
      { label: 'Needham Research Institute', url: 'https://www.nri.cam.ac.uk/1554-2/' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777544900/geoffrey-lloyd-cropped.jpg',
  },
  {
    name: 'Nicholas Denyer',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Senior Lecturer in Classics (Ancient Philosophy), Emeritus',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['metaphysics', 'language'],
    email: '', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/nick-denyer' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542105/nicholas-denyer.jpg',
  },
  {
    name: 'Malcolm Schofield',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Professor of Ancient Philosophy, Emeritus',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Plato', 'Aristotle'],
    tags: ['politics', 'ethics', 'epistemology'],
    email: 'ms10001@cam.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/malcolm-schofield' },
      { label: 'College page', url: 'https://www.joh.cam.ac.uk/research/academics/fellows/professor-malcolm-schofield' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542105/malcolm-schofield.webp',
  },

  /* ── Oxford ───────────────────────────────────────────── */
  {
    name: 'Susanne Bobzien',
    uni: 'University of Oxford', dept: 'Department of Philosophy',
    city: 'Oxford', position: 'Professor of Philosophy, Emerita',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Academic Scepticism'],
    tags: ['language', 'epistemology', 'metaphysics'],
    email: '', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/susanne-bobzien' },
      { label: 'All Souls', url: 'https://www.asc.ox.ac.uk/person/professor-susanne-bobzien' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542106/susanne-bobzien.jpg',
  },
  {
    name: 'Lesley Brown',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Centenary Fellow in Philosophy, Emerita',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['metaphysics', 'language', 'epistemology'],
    email: '', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/lesley-brown' },
      { label: 'College page', url: 'https://www.some.ox.ac.uk/our-people/lesley-brown/' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542106/lesley-brown.jpg',
  },
  {
    name: 'Gail Fine',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Visiting Professor of Ancient Philosophy; Fellow Emerita, Merton College',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['epistemology', 'metaphysics'],
    email: 'gail.fine@philosophy.ox.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/gail-fine' },
      { label: 'College page', url: 'https://www.merton.ox.ac.uk/people/professor-gail-fine' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542107/gail-fine.webp',
  },
  {
    name: 'Terence Irwin',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor of Ancient Philosophy, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato', 'Socrates'],
    tags: ['ethics', 'epistemology'],
    email: 'terence.irwin@philosophy.ox.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/terence-irwin' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542108/terence-irwin.jpg',
  },
  {
    name: 'Sir Anthony Kenny',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: "Emeritus Fellow, St John's College",
    focus: 'Aristotle', ancients: ['Aristotle', 'Plato'],
    tags: ['metaphysics', 'mind'],
    email: '', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/sir-anthony-kenny' },
      { label: 'College page', url: 'https://www.sjc.ox.ac.uk/discover/people/sir-anthony-kenny/' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542108/anthony-kenny.jpg',
  },
  {
    name: 'Christopher C. W. Taylor',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Emeritus Fellow, Corpus Christi College',
    focus: 'Plato', ancients: ['Socrates', 'Plato', 'Democritus'],
    tags: ['ethics', 'metaphysics'],
    email: '', web: '',
    links: [{ label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/professor-c-c-w-taylor' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777545089/christopher-taylor-cropped.jpg',
  },

  /* ── Royal Holloway ───────────────────────────────────── */
  {
    name: 'Anne Sheppard',
    uni: 'Royal Holloway, University of London', dept: 'Department of Classics',
    city: 'London', position: 'Professor of Ancient Philosophy, Emerita',
    focus: 'Hellenistic', ancients: ['Neoplatonism', 'Plato'],
    tags: ['metaphysics', 'ethics'],
    email: 'A.Sheppard@rhul.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://pure.royalholloway.ac.uk/en/persons/anne-sheppard/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777544925/anne-sheppard-cropped.jpg',
  },

  /* ── Durham ───────────────────────────────────────────── */
  {
    name: 'Martin Ferguson Smith',
    uni: 'Durham University', dept: 'Department of Classics and Ancient History',
    city: 'Durham', position: 'Professor of Classics, Emeritus',
    focus: 'Hellenistic', ancients: ['Epicureanism'],
    tags: ['language'],
    email: '', web: 'https://www.martinfergusonsmith.com',
    links: [],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542110/martin-ferguson-smith.jpg',
  },

  /* ── Exeter ───────────────────────────────────────────── */
  {
    name: 'Christopher Gill',
    uni: 'University of Exeter', dept: 'Department of Classics, Ancient History, Religion & Theology',
    city: 'Exeter', position: 'Professor of Ancient Thought, Emeritus',
    focus: 'Hellenistic', ancients: ['Plato', 'Stoicism', 'Epicureanism', 'Galen'],
    tags: ['ethics', 'mind', 'metaphysics'],
    email: 'C.J.Gill@exeter.ac.uk', web: '',
    links: [{ label: 'Faculty page', url: 'https://experts.exeter.ac.uk/2118-chris-gill' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542111/christopher-gill.jpg',
  },

  /* ── Sheffield ────────────────────────────────────────── */
  {
    name: 'Stephen Makin',
    uni: 'University of Sheffield', dept: 'Department of Philosophy',
    city: 'Sheffield', position: 'Professor of Philosophy, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Democritus'],
    tags: ['metaphysics', 'epistemology'],
    email: '', web: '',
    links: [],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542112/stephen-makin.jpg',
  },

  /* ── Liverpool ────────────────────────────────────────── */
  {
    name: 'Stephen R. L. Clark',
    uni: 'University of Liverpool', dept: 'Department of Philosophy',
    city: 'Liverpool', position: 'Professor of Philosophy, Emeritus',
    focus: 'Aristotle', ancients: ['Aristotle', 'Plotinus'],
    tags: ['metaphysics', 'ethics'],
    email: 'Srlclark@liverpool.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.liverpool.ac.uk/people/stephen-clark' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=cX4WFtcAAAAJ&hl=en' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542112/stephen-clark.jpg',
  },
  /* ── Cambridge (additional) ──────────────────────────── */
  {
    name: 'Liba Taub',
    uni: 'University of Cambridge', dept: 'Department of History and Philosophy of Science',
    city: 'Cambridge', position: 'Professor of History and Philosophy of Science, Emerita',
    focus: 'Pre-Socratics', ancients: ['Pre-Socratics', 'Anaximander'],
    tags: ['metaphysics', 'epistemology'],
    email: 'liba.taub@newn.cam.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.hps.cam.ac.uk/directory/taub' },
      { label: 'College page', url: 'https://newn.cam.ac.uk/person/liba-taub' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542113/liba-taub.jpg',
  },
  /* ── East Anglia ─────────────────────────────────────── */
  {
    name: 'Catherine Rowett',
    uni: 'University of East Anglia', dept: 'Department of Philosophy',
    city: 'Norwich', position: 'Professor of Philosophy, Emerita',
    focus: 'Pre-Socratics', ancients: ['Plato', 'Empedocles', 'Pythagoreans'],
    tags: ['metaphysics', 'ethics'],
    email: 'C.Rowett@uea.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://research-portal.uea.ac.uk/en/persons/catherine-rowett/' },
      { label: 'orcid', url: 'https://orcid.org/0000-0003-4860-0323' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777542443/catherine-rowett.jpg',
  },
  /* ── UCL ─────────────────────────────────────────────── */
  {
    name: 'Vivian Nutton',
    uni: 'University College London', dept: 'Department of Neuroscience, Physiology and Pharmacology',
    city: 'London', position: 'Professor of the History of Medicine, Emeritus',
    focus: 'MiddlePlatonism', ancients: ['Galen'],
    tags: ['epistemology'],
    email: 'v.nutton@ucl.ac.uk', web: 'https://profviviannutton.blogspot.com',
    links: [],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777585388/vivian-nutton.jpg',
  },
];

/* ══════════════════════════════════════════════════════════
   PHD_STUDENTS — PhD researchers
   Same structure as SCHOLARS / EMERITI.
   Add PhD students here.
   ══════════════════════════════════════════════════════════ */
const PHD_STUDENTS = [
  /* Add PhD student profiles here following the same format as SCHOLARS */
];

/* ══════════════════════════════════════════════════════════
   VISITING_SCHOLARS — visiting researchers
   Same structure as SCHOLARS / EMERITI.
   Add visiting scholars here.
   ══════════════════════════════════════════════════════════ */
const VISITING_SCHOLARS = [
  {
    name: 'Gregory MacIsaac',
    uni: 'University of Cambridge', dept: 'Clare Hall',
    city: 'Cambridge', position: 'Visiting Fellow, Clare Hall; Associate Professor of Humanities, Carleton University',
    focus: 'Hellenistic', ancients: ['Neoplatonism', 'Plato'],
    tags: ['metaphysics', 'epistemology'],
    email: 'GregoryMacIsaac@cunet.carleton.ca', web: '',
    links: [{ label: 'Clare Hall page', url: 'https://www.clarehall.cam.ac.uk/directory/gregory-macisaac/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777563820/gregory-macisaac.png',
  },
  {
    name: 'Oliver Primavesi',
    uni: 'University of Cambridge', dept: 'Clare Hall',
    city: 'Cambridge', position: 'Visiting Fellow, Clare Hall; Professor of Greek Philology, LMU Munich',
    focus: 'Pre-Socratics', ancients: ['Empedocles', 'Aristotle'],
    tags: ['metaphysics', 'language'],
    email: 'Primavesi@lmu.de', web: '',
    links: [{ label: 'Clare Hall page', url: 'https://www.clarehall.cam.ac.uk/directory/oliver-primavesi/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777563820/oliver-primavesi.jpg',
  },
  {
    name: 'Sara Brill',
    uni: 'University of Cambridge', dept: 'Clare Hall',
    city: 'Cambridge', position: 'Visiting Fellow, Clare Hall; Professor of Philosophy, Fairfield University',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['ethics', 'politics', 'mind'],
    email: 'sbrill@fairfield.edu', web: '',
    links: [{ label: 'Clare Hall page', url: 'https://www.clarehall.cam.ac.uk/directory/sara-brill/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777563821/sara-brill.jpg',
  },
  {
    name: 'Emily Hulme',
    uni: 'University of Cambridge', dept: 'Department of Philosophy',
    city: 'Cambridge', position: 'Senior Lecturer in Ancient Greek Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Cynicism'],
    tags: ['epistemology', 'ethics', 'language'],
    email: 'emily.hulme@sydney.edu.au', web: 'https://emilyhulme.net',
    links: [
      { label: 'Faculty page', url: 'https://profiles.sydney.edu.au/emily.hulme' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=X2z4L_gAAAAJ&hl=en' },
      { label: 'orcid', url: 'https://orcid.org/0000-0003-4391-2379' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777585390/emily-hulme.jpg',
  },
  {
    name: 'Karel Thein',
    uni: 'University of Cambridge', dept: 'Department of Philosophy and Religious Studies',
    city: 'Cambridge', position: 'Professor of Philosophy',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['metaphysics', 'epistemology'],
    email: 'karel.thein@ff.cuni.cz', web: '',
    links: [{ label: 'Faculty page', url: 'https://ufar.ff.cuni.cz/en/department-2/staff/2569-2/' }],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777585391/karel-thein.jpg',
  },
  {
    name: 'Abraham Lincoln Nutsugah',
    uni: 'University of Cambridge', dept: 'Department of Philosophy and Classics',
    city: 'Cambridge', position: 'Gerda Henkel Fellow',
    focus: 'Plato', ancients: ['Socrates', 'Plato'],
    tags: ['ethics', 'epistemology'],
    email: '', web: '',
    links: [],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777585391/abraham-lincoln-nutsugah.jpg',
  },
  {
    name: 'Verity Harte',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'George Eastman Visiting Professor, Balliol College; George A. Saden Professor of Philosophy and Classics, Yale University',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['epistemology', 'metaphysics'],
    email: 'verity.harte@philosophy.ox.ac.uk', web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.philosophy.ox.ac.uk/people/verity-harte' },
      { label: 'College page', url: 'https://www.balliol.ox.ac.uk/professor-verity-harte' },
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=FTiWkoEAAAAJ&hl=en' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777587846/verity-harte.png',
  },
  {
    name: 'Mehmet M. Erginel',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Professor of Ancient Greek Philosophy, Eastern Mediterranean University',
    focus: 'Plato', ancients: ['Plato', 'Aristotle'],
    tags: ['metaphysics', 'epistemology'],
    email: 'mehmet.erginel@emu.edu.tr', web: '',
    links: [
      { label: 'google-scholar', url: 'https://scholar.google.com/citations?user=fBTl1-oAAAAJ&hl=en' },
      { label: 'orcid', url: 'https://orcid.org/0000-0003-3564-0887' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777587847/mehmet-erginel.jpg',
  },
  {
    name: 'Christopher Izgin',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Visiting Researcher',
    focus: 'Aristotle', ancients: ['Aristotle', 'Pyrrhonian Scepticism'],
    tags: ['metaphysics', 'epistemology'],
    email: 'chris.izgin@philosophy.ox.ac.uk', web: '',
    links: [
      { label: 'PhilPeople', url: 'https://philpeople.org/profiles/christopher-izgin-2' },
      { label: 'orcid', url: 'https://orcid.org/0000-0001-5654-0952' },
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777587848/christopher-izgin.jpg',
  },
];
