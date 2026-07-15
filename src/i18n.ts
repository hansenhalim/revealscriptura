export interface Translations {
  locale: "en" | "id";
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    join: string;
    sundayService: string;
    sundayServiceSub: {
      notes: string;
      circle: string;
      pastors: string;
    };
    realCommunity: string;
  };
  hero: {
    title: string;
    tagline: string;
    subtitle: string;
    verse: string;
    verseRef: string;
  };
  mission: {
    heading: string;
    pillars: { tag: string; text: string }[];
  };
  vision: {
    heading: string;
    text: string;
  };
  cards: {
    sundayService: { heading: string; text: string; imageAlt: string };
    realCommunity: { heading: string; text: string; imageAlt: string };
  };
  about: {
    intro: string;
    text: string;
  };
  aboutPage: {
    meta: {
      title: string;
      description: string;
    };
    heroTitle: string;
    heroImageAlt: string;
    team: {
      heading: string;
      pastorName: string;
      pastorBio: string;
      pastorImageAlt: string;
      groups: {
        praiseWorship: { name: string; imageAlt: string };
        discipleship: { name: string; imageAlt: string };
        event: { name: string; imageAlt: string };
        production: { name: string; imageAlt: string };
        pastoral: { name: string; imageAlt: string };
      };
    };
  };
  sundayServicePage: {
    meta: {
      title: string;
      description: string;
    };
    heroTitle: string;
    heroSubtitle: string;
    heroImageAlt: string;
    join: {
      heading: string;
      text: string;
      zoomCta: string;
      whatsappCta: string;
    };
    findUs: {
      heading: string;
      mapTitle: string;
    };
    teasers: {
      notes: { text: string; cta: string };
      circle: { text: string; cta: string };
    };
    watch: {
      heading: string;
      videoTitle: string;
    };
    gallery: {
      worshipTeamAlt: string;
      praiseAlt: string;
      crossAlt: string;
      sermonAlt: string;
    };
  };
  giving: {
    heading: string;
    text: string;
    note: string;
  };
  footer: {
    heading: string;
    address: string;
    addressDetail: string;
    time: string;
    findUs: string;
    socialHeading: string;
    copyright: string;
  };
}

export const en: Translations = {
  locale: "en",
  meta: {
    title: "Reveal Scriptura — Welcome Home",
    description:
      "Reveal Scriptura is a home for God’s people in Jakarta. Join our Sunday service at Bellezza Permata Hijau or online, and grow together in faith.",
  },
  nav: {
    about: "About Us",
    join: "Join Us",
    sundayService: "Reveal Sunday Service",
    sundayServiceSub: {
      notes: "Reveal Sunday Notes",
      circle: "Reveal Circle (Discipleship)",
      pastors: "Pastor’s Messages",
    },
    realCommunity: "REAL Community",
  },
  hero: {
    title: "Reveal Scriptura",
    tagline: "Welcome Home",
    subtitle:
      "We invite you to join us on our journey of faith and grow together.",
    verse:
      "“Therefore go and make disciples of all nations, baptizing them in the name of the Father and the Son and the Holy Spirit, teaching them to obey everything I have commanded you. And remember, I am with you always, to the end of the age.”",
    verseRef: "Matthew 28:19-20",
  },
  mission: {
    heading: "Mission",
    pillars: [
      {
        tag: "#RevealingTheGospel",
        text: "Proclaim the word of God and teach Christ-centered teachings.",
      },
      {
        tag: "#RevealingTheGospelThroughDiscipleship",
        text: "Teaching, shepherding, training to live like Christ. Serve and be served in discipleship.",
      },
      {
        tag: "#RevealingTheGospelThroughLife",
        text: "Living based on the gospel and declaring the gospel through life.",
      },
    ],
  },
  vision: {
    heading: "Vision",
    text: "To be a home for God’s people, fostering their knowledge and joy in God through the scripture and fellowship, also sending them out to fulfill the great commission.",
  },
  cards: {
    sundayService: {
      heading: "Reveal Sunday Service",
      text: "We warmly invite you to join our Sunday service\nEvery Sunday at 14:00\nBellezza Permata Hijau, lt 3\nor online via Zoom",
      imageAlt:
        "The Reveal Scriptura congregation gathered on stage after a Sunday service",
    },
    realCommunity: {
      heading: "REAL Community",
      text: "REAL is a community and movement under the auspices of Reveal that aims to guide people in living a life centered on the gospel.",
      imageAlt:
        "Members of the REAL community gathered together in an online meeting",
    },
  },
  about: {
    intro:
      "REVEAL SCRIPTURA is a church that oversees REAL Community and has been serving since 2022",
    text: "We strive to be a home where God’s people grow in faith, deepen their understanding of His Word, and find joy in fellowship. Rooted in the Great Commission and Greatest Commandment, we are committed to impacting this generation through a loving, Christ-centered community.",
  },
  aboutPage: {
    meta: {
      title: "About Us — Reveal Scriptura",
      description:
        "Learn who Reveal Scriptura is: a church overseeing REAL Community, serving since 2022, and the team behind our Sunday services in Jakarta.",
    },
    heroTitle: "About Reveal Scriptura",
    heroImageAlt:
      "The Reveal Scriptura congregation gathered together in front of the church logo",
    team: {
      heading: "Meet The Team",
      pastorName: "Pdp. Samuel Evins, M.Th.",
      pastorBio:
        "Pdp. Samuel Evins has a Bachelor’s degree in Economics from UKRIDA (Universitas Kristen Krida Wacana) in Jakarta and a Master’s degree in Theology from STT Baptis Jakarta.",
      pastorImageAlt: "Portrait of Pdp. Samuel Evins",
      groups: {
        praiseWorship: {
          name: "Praise and Worship Team",
          imageAlt: "The praise and worship team standing together",
        },
        discipleship: {
          name: "Discipleship Team",
          imageAlt: "The discipleship team standing together",
        },
        event: {
          name: "Event Team",
          imageAlt: "The event team standing together",
        },
        production: {
          name: "Production Team",
          imageAlt: "The production team standing together",
        },
        pastoral: {
          name: "Pastoral Team",
          imageAlt: "The pastoral team standing together",
        },
      },
    },
  },
  sundayServicePage: {
    meta: {
      title: "Reveal Sunday Service — Reveal Scriptura",
      description:
        "Join Reveal Sunday Service every Sunday at 14:00 WIB — on-site at Bellezza Permata Hijau, Jakarta, or online via Zoom.",
    },
    heroTitle: "Reveal Sunday Service",
    heroSubtitle: "Every Sunday at 14:00 WIB\nOnline or on-site",
    heroImageAlt:
      "The pastor preaching at the pulpit beside an illuminated cross during a Sunday service",
    join: {
      heading: "Join us this Sunday",
      text: "We gather every Sunday at 14:00 WIB\nOn-site at Bellezza Permata Hijau\nor online via Zoom meeting.",
      zoomCta: "Join via Zoom",
      whatsappCta: "Chat on WhatsApp",
    },
    findUs: {
      heading: "Find us here",
      mapTitle:
        "Map showing the location of Reveal Scriptura at Bellezza Permata Hijau",
    },
    teasers: {
      notes: {
        text: "Notes containing the full content and conclusion of the Sunday sermon.",
        cta: "Read the notes",
      },
      circle: {
        text: "A close-knit community where members grow together, study God’s Word, pray, and live as true disciples of Christ. Discipleship is the calling of every believer, fulfilling Christ’s Great Commission.",
        cta: "Learn more",
      },
    },
    watch: {
      heading: "Watch our Sunday service",
      videoTitle: "Reveal Sunday Service recording on YouTube",
    },
    gallery: {
      worshipTeamAlt: "The worship team leading songs during a Sunday service",
      praiseAlt: "A member of the congregation worshipping during the service",
      crossAlt: "Hands raised in worship before the illuminated cross",
      sermonAlt: "The pastor preaching during a Sunday sermon",
    },
  },
  giving: {
    heading: "Giving and Offering",
    text: "Giving is an act of faith and gratitude. Join us in being a blessing to our church, supporting God's mission, and making a difference in the lives of others.",
    note: "*Add the number 7 at the end of the amount, e.g., Rp 10,007.",
  },
  footer: {
    heading: "Connect with us",
    address: "Bellezza Permata Hijau, lt 3",
    addressDetail:
      "Jl. Arteri Permata Hijau No.34, RT.4/RW.2, Grogol Utara\nKec. Kby. Lama, Kota Jakarta Selatan",
    time: "Online or on-site at 14:00",
    findUs: "Find us here",
    socialHeading: "Social media",
    copyright: "Reveal Scriptura",
  },
};

// Indonesian copy comes from the original site where it existed; the strings
// for the two cards, the hero subtitle, and nav labels are new translations
// that still need a native-speaker review.
export const id: Translations = {
  locale: "id",
  meta: {
    title: "Reveal Scriptura — Welcome Home",
    description:
      "Reveal Scriptura adalah rumah bagi umat Allah di Jakarta. Ikuti ibadah Minggu kami di Bellezza Permata Hijau atau online, dan bertumbuh bersama di dalam iman.",
  },
  nav: {
    about: "Tentang Kami",
    join: "Bergabung",
    sundayService: "Reveal Sunday Service",
    sundayServiceSub: {
      notes: "Reveal Sunday Notes",
      circle: "Reveal Circle (Pemuridan)",
      pastors: "Pesan Para Gembala",
    },
    realCommunity: "REAL Community",
  },
  hero: {
    title: "Reveal Scriptura",
    tagline: "Welcome Home",
    subtitle:
      "Kami mengundang Anda bergabung dalam perjalanan iman dan bertumbuh bersama.",
    verse:
      "“Pergilah, jadikanlah semua bangsa murid-Ku dan baptislah mereka dalam nama Bapa, Anak, dan Roh Kudus, dan ajarlah mereka melakukan segala sesuatu yang telah Kuperintahkan kepadamu.”",
    verseRef: "Matius 28:19-20",
  },
  mission: {
    heading: "Misi",
    pillars: [
      {
        tag: "#RevealingTheGospel",
        text: "Memberitakan Firman Tuhan dan mengajarkan pengajaran yang berpusat kepada Kristus.",
      },
      {
        tag: "#RevealingTheGospelThroughDiscipleship",
        text: "Mengajarkan, menggembalakan, melatih kehidupan seperti Kristus. Melayani dan dilayani di dalam pemuridan.",
      },
      {
        tag: "#RevealingTheGospelThroughLife",
        text: "Hidup berdasarkan Injil dan menyatakan Injil melalui kehidupan.",
      },
    ],
  },
  vision: {
    heading: "Visi",
    text: "Menjadi rumah bagi umat-umat Allah untuk mengenal dan menikmati Allah di dalam Firman dan persekutuan, untuk kemudian diutus melakukan amanat agung.",
  },
  cards: {
    sundayService: {
      heading: "Reveal Sunday Service",
      text: "Kami mengundang Anda mengikuti ibadah Minggu kami\nSetiap hari Minggu pukul 14.00\ndi Bellezza Permata Hijau, lt 3\natau online melalui Zoom",
      imageAlt:
        "Jemaat Reveal Scriptura berkumpul di panggung setelah ibadah Minggu",
    },
    realCommunity: {
      heading: "REAL Community",
      text: "REAL adalah komunitas dan gerakan di bawah naungan Reveal yang bertujuan membimbing orang untuk hidup berpusat pada Injil.",
      imageAlt:
        "Anggota komunitas REAL berkumpul bersama dalam pertemuan online",
    },
  },
  about: {
    intro:
      "REVEAL SCRIPTURA adalah gereja yang menaungi REAL Community dan telah melayani sejak tahun 2022.",
    text: "Kami berusaha menjadi rumah bagi umat Tuhan untuk bertumbuh dalam iman, memperdalam pemahaman akan Firman-Nya, dan menemukan sukacita dalam persekutuan. Berakar pada Amanat Agung dan Perintah Terutama, kami berkomitmen untuk memberi dampak bagi generasi ini melalui komunitas yang penuh kasih dan berpusat pada Kristus.",
  },
  aboutPage: {
    meta: {
      title: "Tentang Kami — Reveal Scriptura",
      description:
        "Kenali Reveal Scriptura: gereja yang menaungi REAL Community, melayani sejak 2022, dan tim di balik ibadah Minggu kami di Jakarta.",
    },
    heroTitle: "Tentang Reveal Scriptura",
    heroImageAlt:
      "Jemaat Reveal Scriptura berkumpul bersama di depan logo gereja",
    team: {
      heading: "Meet The Team",
      pastorName: "Pdp. Samuel Evins, M.Th.",
      pastorBio:
        "Pdp. Samuel Evins memiliki gelar Sarjana Ekonomi dari UKRIDA (Universitas Kristen Krida Wacana) di Jakarta dan gelar Magister Teologi dari STT Baptis Jakarta.",
      pastorImageAlt: "Foto Pdp. Samuel Evins",
      // Team names stay in English to match how the ministries brand
      // themselves on the original site.
      groups: {
        praiseWorship: {
          name: "Praise and Worship Team",
          imageAlt: "Tim praise and worship berdiri bersama",
        },
        discipleship: {
          name: "Discipleship Team",
          imageAlt: "Tim discipleship berdiri bersama",
        },
        event: {
          name: "Event Team",
          imageAlt: "Tim event berdiri bersama",
        },
        production: {
          name: "Production Team",
          imageAlt: "Tim production berdiri bersama",
        },
        pastoral: {
          name: "Pastoral Team",
          imageAlt: "Tim pastoral berdiri bersama",
        },
      },
    },
  },
  sundayServicePage: {
    meta: {
      title: "Reveal Sunday Service — Reveal Scriptura",
      description:
        "Ikuti Reveal Sunday Service setiap hari Minggu pukul 14.00 WIB — on-site di Bellezza Permata Hijau, Jakarta, atau online melalui Zoom.",
    },
    heroTitle: "Reveal Sunday Service",
    heroSubtitle: "Setiap hari Minggu pukul 14.00 WIB\nOnline atau on-site",
    heroImageAlt:
      "Gembala berkhotbah di mimbar di samping salib bercahaya dalam ibadah Minggu",
    join: {
      heading: "Bergabunglah Minggu ini",
      text: "Kami beribadah setiap hari Minggu pukul 14.00 WIB\nOn-site di Bellezza Permata Hijau\natau online melalui Zoom meeting.",
      zoomCta: "Gabung via Zoom",
      whatsappCta: "Chat via WhatsApp",
    },
    findUs: {
      heading: "Temukan kami di sini",
      mapTitle: "Peta lokasi Reveal Scriptura di Bellezza Permata Hijau",
    },
    teasers: {
      notes: {
        text: "Catatan berisi seluruh isi dan kesimpulan khotbah Minggu.",
        cta: "Baca catatan",
      },
      circle: {
        text: "Komunitas yang erat di mana anggota bertumbuh bersama, mempelajari Firman Tuhan, berdoa, dan hidup sebagai murid Kristus yang sejati. Pemuridan adalah panggilan setiap orang percaya untuk menggenapi Amanat Agung Kristus.",
        cta: "Pelajari lebih lanjut",
      },
    },
    watch: {
      heading: "Tonton ibadah Minggu kami",
      videoTitle: "Rekaman Reveal Sunday Service di YouTube",
    },
    gallery: {
      worshipTeamAlt: "Tim pujian memimpin lagu dalam ibadah Minggu",
      praiseAlt: "Jemaat menyembah dalam ibadah",
      crossAlt: "Tangan terangkat dalam penyembahan di depan salib bercahaya",
      sermonAlt: "Gembala berkhotbah dalam ibadah Minggu",
    },
  },
  giving: {
    heading: "Persembahan",
    text: "Memberi adalah wujud iman dan rasa syukur. Mari bersama menjadi berkat bagi gereja kita, mendukung misi Allah, dan membawa perubahan dalam kehidupan sesama.",
    note: "*Tambahkan angka 7 di akhir nominal, contoh: Rp 10.007.",
  },
  footer: {
    heading: "Terhubung dengan kami",
    address: "Bellezza Permata Hijau, lt 3",
    addressDetail:
      "Jl. Arteri Permata Hijau No.34, RT.4/RW.2, Grogol Utara\nKec. Kby. Lama, Kota Jakarta Selatan",
    time: "Online atau on-site pukul 14.00",
    findUs: "Temukan kami di sini",
    socialHeading: "Media sosial",
    copyright: "Reveal Scriptura",
  },
};

export const locales = { en, id };

/** Route prefix for a locale: '' for the default (en), '/id' for Indonesian. */
export function localePath(locale: Translations["locale"], path = "/"): string {
  const prefix = locale === "en" ? "" : "/id";
  const suffix = path === "/" ? (prefix ? "" : "/") : path;
  return `${prefix}${suffix}` || "/";
}

// Bank details are locale-independent, like contact info.
export const giving = {
  account: "BCA a/n Samuel Evins",
  accountNumber: "5680908101",
};

export const contact = {
  phoneDisplay: "+62 811-1779-7591",
  phoneHref: "tel:+6281117797591",
  whatsappUrl: "https://wa.me/6281117797591",
  email: "revealscriptura@gmail.com",
  mapsUrl: "https://maps.app.goo.gl/NfsTcbrEK7nB8kEL9",
  instagram: {
    label: "@reveal.scr",
    url: "https://www.instagram.com/reveal.scr/",
  },
  tiktok: {
    label: "@reveal.scriptura",
    url: "https://www.tiktok.com/@reveal.scriptura",
  },
  youtube: {
    label: "Reveal Scriptura",
    url: "https://www.youtube.com/@RevealScriptura",
  },
};

// Sunday Service links are locale-independent, like contact info.
export const sundayService = {
  // Recurring Zoom room; the URL (password included) was already public on the old site.
  zoomUrl:
    "https://us02web.zoom.us/j/6404207777?pwd=U0JwSDRaVHd6UFBrYlY2SW9MVDIrZz09",
  // Latest service recording — updated by hand: swap this ID after upload.
  youtubeVideoId: "7MwXh3VvGJs",
  // Keyless classic embed pinned at Bellezza Permata Hijau; `hl` is appended per locale.
  mapEmbedBase:
    "https://maps-api-ssl.google.com/maps?ll=-6.221863,106.783754&q=-6.221975,106.783489&z=18&output=embed",
};
