const SCHOLARS = [
  /* ── Plato ──────────────────────────────────────────── */
  {
    name: 'Alice Merton',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Postdoctoral Research Fellow',
    focus: 'Plato', ancients: ['Plato'],
    tags: ['metaphysics', 'epistemology'],
    email: 'a.merton@philosophy.ox.ac.uk', web: '', links: [],
    photo: '',
  },
  {
    name: 'Ben Calloway',
    uni: 'University of Cambridge', dept: 'Faculty of Philosophy',
    city: 'Cambridge', position: 'PhD Researcher',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['metaphysics', 'ethics'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Priya Sharma',
    uni: "King's College London", dept: 'Department of Philosophy',
    city: 'London', position: 'Lecturer',
    focus: 'Plato', ancients: ['Plato'],
    tags: ['politics', 'ethics'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Tom Ellison',
    uni: 'University of Edinburgh', dept: 'School of Philosophy, Psychology and Language Sciences',
    city: 'Edinburgh', position: 'Postdoctoral Research Fellow',
    focus: 'Plato', ancients: ['Plato', 'Socrates'],
    tags: ['politics', 'metaphysics'],
    email: '', web: '', links: [],
    photo: '',
  },

  /* ── Aristotle ───────────────────────────────────────── */
  {
    name: 'Sara Lindqvist',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Postdoctoral Research Fellow',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['metaphysics', 'mind'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Clara Hughes',
    uni: 'University of Bristol', dept: 'Department of Philosophy',
    city: 'Bristol', position: 'Lecturer',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['mind', 'ethics'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Daniel Park',
    uni: 'University College London', dept: 'Department of Philosophy',
    city: 'London', position: 'Postdoctoral Research Fellow',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['ethics', 'politics'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Fatima Al-Rashid',
    uni: 'University of Manchester', dept: 'Department of Classics, Ancient History and Archaeology',
    city: 'Manchester', position: 'Lecturer',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['language', 'epistemology'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Marcus Webb',
    uni: 'University of Oxford', dept: 'Faculty of Philosophy',
    city: 'Oxford', position: 'Lecturer',
    focus: 'Aristotle', ancients: ['Aristotle'],
    tags: ['language', 'mind'],
    email: '', web: '', links: [],
    photo: '',
  },

  /* ── Hellenistic ─────────────────────────────────────── */
  {
    name: 'Cristóbal Zarzar',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Postdoctoral Research Fellow',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Academic Scepticism', 'Epicureanism'],
    tags: ['epistemology', 'mind', 'ethics'],
    email: 'cz298@cam.ac.uk',
    web: 'https://czarzar.com',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/staff/dr-cristobal-zarzar' },
      { label: 'College page', url: 'https://www.clarehall.cam.ac.uk/directory/cristobal-zarzar/' },
    ],
    photo: 'https://www.classics.cam.ac.uk/sites/default/files/styles/inline/public/images/profile/cz.jpg',
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
    uni: 'University of Leeds', dept: 'School of Philosophy, Religion and History of Science',
    city: 'Leeds', position: 'PhD Researcher',
    focus: 'Hellenistic', ancients: ['Stoicism', 'Pyrrhonian Scepticism'],
    tags: ['ethics', 'epistemology'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'James Chen',
    uni: 'University of Warwick', dept: 'Department of Philosophy',
    city: 'Coventry', position: 'Lecturer',
    focus: 'Hellenistic', ancients: ['Stoicism'],
    tags: ['ethics', 'politics'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Keisha Bright',
    uni: 'University of Edinburgh', dept: 'School of Philosophy, Psychology and Language Sciences',
    city: 'Edinburgh', position: 'PhD Researcher',
    focus: 'Hellenistic', ancients: ['Epicureanism', 'Stoicism'],
    tags: ['ethics', 'mind'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Lena Kovač',
    uni: 'University of Nottingham', dept: 'Department of Philosophy',
    city: 'Nottingham', position: 'Postdoctoral Research Fellow',
    focus: 'Hellenistic', ancients: ['Academic Scepticism', 'Pyrrhonian Scepticism'],
    tags: ['epistemology', 'language'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Yemi Adeyemi',
    uni: 'Birkbeck, University of London', dept: 'Department of Philosophy',
    city: 'London', position: 'PhD Researcher',
    focus: 'Hellenistic', ancients: ['Epicureanism'],
    tags: ['language', 'ethics'],
    email: '', web: '', links: [],
    photo: '',
  },

  /* ── Pre-Socratics ───────────────────────────────────── */
  {
    name: 'George Okafor',
    uni: 'University of Glasgow', dept: 'School of Humanities',
    city: 'Glasgow', position: 'Lecturer',
    focus: 'Pre-Socratics', ancients: ['Heraclitus', 'Parmenides'],
    tags: ['metaphysics', 'language'],
    email: '', web: '', links: [],
    photo: '',
  },
  {
    name: 'Helena Voss',
    uni: 'Durham University', dept: 'Department of Philosophy',
    city: 'Durham', position: 'Postdoctoral Research Fellow',
    focus: 'Pre-Socratics', ancients: ['Parmenides', 'Democritus'],
    tags: ['metaphysics', 'epistemology'],
    email: '', web: '', links: [],
    photo: '',
  },

  /* ── New Cambridge entries ───────────────────────────── */
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
    ],
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
    ],
    photo: 'https://res.cloudinary.com/dspfaec6d/image/upload/v1777030280/lea-cantor.jpg',
  },
  {
    name: 'Christian Keime',
    uni: 'University of Cambridge', dept: 'Faculty of Classics',
    city: 'Cambridge', position: 'Teaching Associate in Classics (Greek and Roman Philosophy)',
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
    focus: 'Hellenistic', ancients: ['Epicureanism'],
    tags: ['ethics', 'epistemology', 'mind'],
    email: 'jiw1001@cam.ac.uk',
    web: '',
    links: [
      { label: 'Faculty page', url: 'https://www.classics.cam.ac.uk/directory/james-warren' },
      { label: 'College page', url: 'https://www.corpus.cam.ac.uk/people/professor-james-warren' },
    ],
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
    city: 'Cambridge', position: 'Senior Lecturer in Classics (Ancient Philosophy)',
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
];

/* ── Philosopher / specialism cards ─────────────────────
   key         must match 'focus' values in SCHOLARS
   subsections must match values in SCHOLARS.ancients
   img         public-domain image URL                   */
const PHILOSOPHERS = [
  {
    key: 'Plato', label: 'Plato', dates: 'c. 428–348 BCE',
    blurb: 'Republic, Phaedo, Symposium',
    subsections: ['Socrates', 'Plato'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plato_Silanion_Musei_Capitolini_MC1377.jpg?width=320',
  },
  {
    key: 'Aristotle', label: 'Aristotle', dates: '384–322 BCE',
    blurb: 'Metaphysics, Nicomachean Ethics, Politics',
    subsections: ['Aristotle', 'Alexander of Aphrodisias'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Aristotle_Altemps_Inv8575.jpg?width=320',
  },
  {
    key: 'Hellenistic', label: 'Hellenistic philosophy', dates: 'c. 323–31 BCE',
    blurb: 'Stoics, Epicureans, Sceptics',
    subsections: ['Stoicism', 'Epicureanism', 'Pyrrhonian Scepticism', 'Academic Scepticism', 'Philodemus of Gadara'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/MSR-ra-1-Zeno_of_Citium.jpg?width=320',
  },
  {
    key: 'Pre-Socratics', label: 'Pre-Socratic philosophy', dates: 'c. 600–400 BCE',
    blurb: 'Heraclitus, Parmenides, Democritus',
    subsections: ['Heraclitus', 'Parmenides', 'Democritus', 'Empedocles', 'Anaxagoras'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Raffael_058.jpg?width=320',
  },
];

/* ── Map coordinates ── add new cities here as needed ── */
const UNI_COORDS = {
  Edinburgh:  { lat: 55.9445, lng: -3.1892 },
  Glasgow:    { lat: 55.8714, lng: -4.2882 },
  Durham:     { lat: 54.7740, lng: -1.5782 },
  Leeds:      { lat: 53.8067, lng: -1.5550 },
  Manchester: { lat: 53.4668, lng: -2.2339 },
  Nottingham: { lat: 52.9382, lng: -1.1974 },
  Coventry:   { lat: 52.3838, lng: -1.5603 },
  Cambridge:  { lat: 52.2043, lng:  0.1149 },
  Oxford:     { lat: 51.7548, lng: -1.2544 },
  London:     { lat: 51.5074, lng: -0.1278 },
  Bristol:    { lat: 51.4584, lng: -2.6032 },
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
