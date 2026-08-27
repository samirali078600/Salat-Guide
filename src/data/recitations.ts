import { RecitationItem } from '../types';

export const RECITATIONS: Record<string, RecitationItem> = {
  takbeer: {
    id: 'takbeer',
    name: {
      hinglish: "Takbeer-e-Tahrima",
      hindi: "तकबीर-ए-तहरीमा",
      urdu: "تکبیر تحریمہ"
    },
    arabic: "اللَّهُ أَكْبَرُ",
    hinglish: "Allahu Akbar",
    hinglishMeaning: "Allah sabse bada hai.",
    hindi: "अल्लाहु अकबर",
    hindiMeaning: "अल्लाह सबसे बड़ा है।",
    urdu: "اللہُ اَکْبَر",
    urduMeaning: "اللہ سب سے بڑا ہے۔"
  },
  sana: {
    id: 'sana',
    name: {
      hinglish: "Sana (Thana - Starting Dua)",
      hindi: "सना (नमाज़ की शुरुआत की दुआ)",
      urdu: "ثناء (نماز کا ابتدائی کلام)"
    },
    arabic: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ، وَتَبَارَكَ اسْمُكَ ، وَتَعَالَىٰ جَدُّكَ ، وَلَا إِلَٰهَ غَيْرُكَ",
    hinglish: "Subhanaka Allahumma wa bihamdika, wa tabarakasmuka, wa ta'ala jadduka, wa la ilaha ghairuk.",
    hinglishMeaning: "Ae Allah! Tu apni tareef ke sath paak hai, tera naam barkat wala hai, teri shaan buland hai, aur tere siwa koi ma'bood nahi.",
    hindi: "सुब्हानक अल्लाहुम्मा व बिहम्दिका, व तबार कस्मुका, व तआला जद्दुका, व ला इलाहा गैरुक।",
    hindiMeaning: "ऐ अल्लाह! तू अपनी तारीफ के साथ पाक है, तेरा नाम बरकत वाला है, तेरी शान बहुत बुलंद है, और तेरे सिवा कोई इबादत के लायक नहीं।",
    urdu: "سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ، وَتَبَارَكَ اسْمُكَ ، وَتَعَالَىٰ جَدُّكَ ، وَلَا إِلَٰهَ غَيْرُكَ",
    urduMeaning: "اے اللہ! تو پاک ہے اپنی تعریف کے ساتھ، اور بابرکت ہے تیرا نام، اور بلند ہے تیری شان، اور تیرے سوا کوئی معبود نہیں۔"
  },
  taawwudh: {
    id: 'taawwudh',
    name: {
      hinglish: "Ta'awwudh",
      hindi: "तअव्वुज़",
      urdu: "تعوذ"
    },
    arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    hinglish: "A'oodhu billahi minash-shaytanir-rajeem",
    hinglishMeaning: "Main Allah ki panah maangta hoon mardood shaitan se.",
    hindi: "अऊज़ु बिल्लाहि मिनश-शैतानिर-रजीम",
    hindiMeaning: "मैं अल्लाह की पनाह में आता हूँ दुत्कारे हुए शैतान से।",
    urdu: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
    urduMeaning: "میں اللہ کی پناہ مانگتا ہوں مردود شیطان سے۔"
  },
  tasmiyah: {
    id: 'tasmiyah',
    name: {
      hinglish: "Tasmiyah",
      hindi: "तस्मिया (बिस्मिल्लाह)",
      urdu: "تسمیہ"
    },
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    hinglish: "Bismillahir Rahmanir Raheem",
    hinglishMeaning: "Shuru Allah ke naam se jo bada meharban nihayat raham wala hai.",
    hindi: "बिस्मिल्लाहिर रहमानिर रहीम",
    hindiMeaning: "शुरू अल्लाह के नाम से जो बड़ा मेहरबान निहायत रहम वाला है।",
    urdu: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    urduMeaning: "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔"
  },
  fatiha: {
    id: 'fatiha',
    name: {
      hinglish: "Surah Al-Fatiha",
      hindi: "सूरह अल-फातिहा",
      urdu: "سورۃ الفاتحہ"
    },
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ۝",
    hinglish: "Bismillahir Rahmanir Raheem. Alhamdu lillahi Rabbil 'aalameen. Ar-Rahmanir Raheem. Maliki Yawmid-Deen. Iyyaka na'budu wa iyyaka nasta'een. Ihdinas-siratal mustaqeem. Siratal-lazeena an'amta 'alayhim, ghayril maghdoobi 'alayhim wa lad-daalleen. (Aameen)",
    hinglishMeaning: "Shuru Allah ke naam se jo bada meharban nihayat rahem wala hai. Tamam tareefein Allah ke liye hain jo tamaam jahanon ka Rab hai. Bada meharban nihayat raham farmane wala. Badle ke din (Qayamat) ka maalik. Hum sirf teri hi ibadat karte hain aur sirf tujh hi se madad maangte hain. Humein seedha rasta dikha. Un logon ka rasta jin par tune in'aam farmaya, na ke unka jin par ghazab kiya gaya aur na gumrahon ka. (Aameen - Ae Allah qubool farma)",
    hindi: "बिस्मिल्लाहिर रहमानिर रहीम। अल्हम्दु लिल्लाहि रब्बिल आलमीन। अर-रहमानिर रहीम। मालिकि यौमिद्दीन। इय्याक नअबुदु व इय्याक नस्तईन। इहदिनस-सिरातल मुस्तकीम। सिरातल्लज़ीना अनअम्ता अलैहिम, गैरिल मग़दू़बि अलैहिम व लद्-दाल्लीन। (आमीन)",
    hindiMeaning: "शुरू अल्लाह के नाम से जो बड़ा मेहरबान निहायत रहम वाला है। सब तारीफें अल्लाह ही के लिए हैं जो सारे जहां का पालने वाला है। बड़ा मेहरबान निहायत रहम करने वाला। इंसाफ के दिन (क़यामत) का मालिक। हम तेरी ही इबादत करते हैं और तुझ ही से मदद चाहते हैं। हमें सीधा रास्ता दिखा। उन लोगों का रास्ता जिन पर तूने इनाम फरमाया, उनका नहीं जिन पर तेरा गज़ब हुआ और न भटके हुओं का। (आमीन)",
    urdu: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
    urduMeaning: "شروع اللہ کے نام سے جو بڑا مہربان نہایت رحم والا ہے۔ سب تعریفیں اللہ کے لیے ہیں جو تمام جہانوں کا رب ہے۔ بڑا مہربان نہایت رحم کرنے والا۔ روز جزا (قیامت) کا مالک۔ ہم تیری ہی عبادت کرتے ہیں اور تجھ ہی سے مدد مانگتے ہیں۔ ہمیں سیدھے راستے پر چلا۔ ان لوگوں کا راستہ جن پر تو نے انعام فرمایا، نہ ان کا جن پر غضب کیا گیا اور نہ گمراہوں کا۔ (آمین)"
  },
  surahIkhlas: {
    id: 'surahIkhlas',
    name: {
      hinglish: "Additional Surah (e.g. Surah Al-Ikhlas)",
      hindi: "अतिरिक्त सूरह (उदा. सूरह अल-इख़्लास)",
      urdu: "سورت ملانا (مثلاً سورۃ الاخلاص)"
    },
    arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ۝",
    hinglish: "Bismillahir Rahmanir Raheem. Qul Huwallahu Ahad. Allahus-Samad. Lam yalid wa lam yoolad. Wa lam yakul-lahu kufuwan ahad.",
    hinglishMeaning: "Kaho: Wo Allah ek hai. Allah be-niyaz (sabki zarooratein poori karne wala) hai. Na uski koi aulaad hai aur na wo kisi ki aulaad hai. Aur koi bhi uske barabar nahi hai.",
    hindi: "बिस्मिल्लाहिर रहमानिर रहीम। कुल हुवल्लाहु अहद। अल्लाहुस-समद। लम यलिद वलम यूलद। वलम यकुल-लहू कुफुवन अहद।",
    hindiMeaning: "कहो: वो अल्लाह एक है। अल्लाह बेनियाज़ (सबकी ज़रूरतें पूरी करने वाला) है। न उसने किसी को जना और न वो किसी से जन्मा। और कोई उसके बराबर नहीं है।",
    urdu: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ۝ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
    urduMeaning: "کہو: وہ اللہ ایک ہے۔ اللہ بے نیاز ہے۔ نہ اس کی کوئی اولاد ہے اور نہ وہ کسی کی اولاد ہے۔ اور کوئی اس کی برابری کرنے والا نہیں۔",
    note: {
      hinglish: "Aap Quran Majeed ki koi bhi aasan Surah padh sakte hain jaise Surah Al-Kawthar ya Surah An-Nas.",
      hindi: "आप क़ुरआन मजीद की कोई भी आसान सूरह पढ़ सकते हैं जैसे सूरह अल-कौसर या सूरह अन-नास।",
      urdu: "آپ قرآن مجید کی کوئی بھی آسان سورت پڑھ سکتے ہیں جیسے سورۃ الکوثر یا سورۃ الناس۔"
    }
  },
  rukuTasbih: {
    id: 'rukuTasbih',
    name: {
      hinglish: "Ruku ki Tasbih (Recite 3, 5, or 7 times)",
      hindi: "रुकूअ की तस्बीह (3, 5 या 7 बार पढ़ें)",
      urdu: "رکوع کی تسبیح (3، 5 یا 7 بار پڑھیں)"
    },
    arabic: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    hinglish: "Subhana Rabbiyal 'Azeem",
    hinglishMeaning: "Paak hai mera Rab jo badi azmat (buzurgi) wala hai.",
    hindi: "सुब्हान रब्बियल अज़ीम",
    hindiMeaning: "पाक है मेरा परवरदिगार जो बड़ी अज़मत (बड़ाई) वाला है।",
    urdu: "سُبْحَانَ رَبِّيَ الْعَظِيمِ",
    urduMeaning: "پاک ہے میرا رب جو بڑی عظمت والا ہے۔",
    repeatCount: 3
  },
  tasmee: {
    id: 'tasmee',
    name: {
      hinglish: "Tasmee (Rising from Ruku)",
      hindi: "तस्मी (रुकूअ से सीधा खड़े होते वक्त)",
      urdu: "تسمیع (رکوع سے سیدھے کھڑے ہوتے وقت)"
    },
    arabic: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
    hinglish: "Sami' Allahu liman hamidah",
    hinglishMeaning: "Allah ne sun liya us shakhs ko jisne uski tareef ki.",
    hindi: "समिअल्लाहु लिमन हमिदह",
    hindiMeaning: "अल्लाह ने उस शख्स की बात सुन ली जिसने उसकी तारीफ की।",
    urdu: "سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ",
    urduMeaning: "اللہ نے سن لیا اس کو جس نے اس کی تعریف کی۔"
  },
  tahmeed: {
    id: 'tahmeed',
    name: {
      hinglish: "Tahmeed (Standing in Qaumah)",
      hindi: "तहमीद (क़ौमह में खड़े होकर)",
      urdu: "تحمید (قومہ میں کھڑے ہو کر)"
    },
    arabic: "رَبَّنَا لَكَ الْحَمْدُ",
    hinglish: "Rabbana lakal hamd (or Rabbana wa lakal hamd)",
    hinglishMeaning: "Ae hamare Rab! Tere hi liye tamam tareef hai.",
    hindi: "रब्बना लकल हम्द (या रब्बना व लकल हम्द)",
    hindiMeaning: "ऐ हमारे रब! तमाम तारीफें तेरे ही लिए हैं।",
    urdu: "رَبَّنَا لَكَ الْحَمْدُ",
    urduMeaning: "اے ہمارے رب! تیرے ہی لیے تمام تعریفیں ہیں۔"
  },
  sajdahTasbih: {
    id: 'sajdahTasbih',
    name: {
      hinglish: "Sajdah ki Tasbih (Recite 3, 5, or 7 times)",
      hindi: "सजदे की तस्बीह (3, 5 या 7 बार पढ़ें)",
      urdu: "سجدے کی تسبیح (3، 5 یا 7 بار پڑھیں)"
    },
    arabic: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
    hinglish: "Subhana Rabbiyal A'la",
    hinglishMeaning: "Paak hai mera Rab jo sabse buland aur aala hai.",
    hindi: "सुब्हान रब्बियल आला",
    hindiMeaning: "पाक है मेरा परवरदिगार जो सबसे आला और बुलंद है।",
    urdu: "سُبْحَانَ رَبِّيَ الْأَعْلَىٰ",
    urduMeaning: "پاک ہے میرا رب جو سب سے بلند و برتر ہے۔",
    repeatCount: 3
  },
  jalsaDua: {
    id: 'jalsaDua',
    name: {
      hinglish: "Jalsa ki Dua (Sitting between two Sajdahs)",
      hindi: "जलसा की दुआ (दोनों सजदों के बीच बैठकर)",
      urdu: "جلسہ کی دعا (دونوں سجدوں کے درمیان بیٹھ کر)"
    },
    arabic: "رَبِّ اغْفِرْ لِي ، رَبِّ اغْفِرْ لِي",
    hinglish: "Rabbighfir lee, Rabbighfir lee",
    hinglishMeaning: "Ae mere Rab mujhe bakhsh de, Ae mere Rab mujhe bakhsh de.",
    hindi: "रब्बिग़फ़िर ली, रब्बिग़फ़िर ली",
    hindiMeaning: "ऐ मेरे रब मुझे बख्श दे, ऐ मेरे रब मुझे बख्श दे।",
    urdu: "رَبِّ اغْفِرْ لِي ، رَبِّ اغْفِرْ لِي",
    urduMeaning: "اے میرے رب مجھے بخش دے، اے میرے رب مجھے بخش دے۔",
    note: {
      hinglish: "Aap yeh dua bhi padh sakte hain: Allahummaghfir li warhamni wahdini wa'afini warzuqni.",
      hindi: "आप यह दुआ भी पढ़ सकते हैं: अल्लाहुम्मग़फ़िर ली वरहम्नी वहदिनी वआफ़िनी वरज़ुक़्नी।",
      urdu: "آپ یہ دعا بھی پڑھ سکتے ہیں: اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَعَافِنِي وَارْزُقْنِي۔"
    }
  },
  tashahhud: {
    id: 'tashahhud',
    name: {
      hinglish: "Attahiyyat (Tashahhud)",
      hindi: "अत्तहिय्यात (तशह्हुद)",
      urdu: "التحیات (تشہد)"
    },
    arabic: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    hinglish: "Attahiyyatu lillahi was-salawatu wat-tayyibat, assalamu 'alayka ayyuhan-Nabiyyu wa rahmatullahi wa barakatuh, assalamu 'alayna wa 'ala 'ibadillahis-saliheen. Ash-hadu alla ilaha illallahu wa ash-hadu anna Muhammadan 'abduhu wa rasooluh.",
    hinglishMeaning: "Tamam zubani, badani aur maali ibadatein Allah hi ke liye hain. Salam ho aap par ae Nabi, aur Allah ki rehmat aur uski barkatein. Salam ho hum par aur Allah ke tamaam naik bandon par. Main gawaahi deta hoon ke Allah ke siwa koi ma'bood nahi, aur main gawaahi deta hoon ke Muhammad (ﷺ) Allah ke bande aur uske Rasool hain.",
    hindi: "अत्तहिय्यातु लिल्लाहि वस-सलवातु वत-तय्यिबातु, अस्सलामु अलैका अय्युहन-नबिय्यु व रहमतुल्लाहि व बरकातुहु, अस्सलामु अलैना व अला इबादिल्लाहिस-सालिहीन। अशहदु अल्ला इलाहा इल्लल्लाहु व अशहदु अन्ना मुहम्मदन अब्दुहू व रसूलुह।",
    hindiMeaning: "तमाम ज़ुबानी, बदनी और माली इबादतें अल्लाह ही के लिए हैं। सलाम हो आप पर ऐ नबी, और अल्लाह की रहमत और उसकी बरकतें। सलाम हो हम पर और अल्लाह के तमाम नेक बंदों पर। मैं गवाही देता हूँ कि अल्लाह के सिवा कोई इबादत के लायक नहीं, और मैं गवाही देता हूँ कि मुहम्मद (ﷺ) अल्लाह के बंदे और उसके रसूल हैं।",
    urdu: "التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَىٰ عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ",
    urduMeaning: "تمام زبانی، بدنی اور مالی عبادتیں اللہ ہی کے لیے ہیں۔ سلام ہو آپ پر اے نبی اور اللہ کی رحمت اور اس کی برکتیں۔ سلام ہو ہم پر اور اللہ کے تمام نیک بندوں پر۔ میں گواہی دیتا ہوں کہ اللہ کے سوا کوئی معبود نہیں، اور میں گواہی دیتا ہوں کہ محمد (ﷺ) اللہ کے بندے اور اس کے رسول ہیں۔",
    note: {
      hinglish: "Jab 'Ash-hadu alla ilaha' par pahuchein toh seedhe haath ki shahadat ki ungli ko uthayein, aur 'illallahu' par neeche kar lein.",
      hindi: "जब 'अशहदु अल्ला इलाहा' पर पहुंचें तो सीधे हाथ की शहादत की उंगली को उठाएं, और 'इल्लल्लाहु' पर नीचे कर लें।",
      urdu: "جب 'أَشْهَدُ أَنْ لَا إِلٰهَ' پر پہنچیں تو دائیں ہاتھ کی شہادت کی انگلی اٹھائیں، اور 'إِلَّا اللّٰهُ' پر نیچے کر لیں۔"
    }
  },
  duroodIbrahim: {
    id: 'duroodIbrahim',
    name: {
      hinglish: "Durood Ibrahim (In Final Sitting)",
      hindi: "दुरूद-ए-इब्राहिम (आखिरी क़ाअदा में)",
      urdu: "درودِ ابراہیم (آخری قعدہ میں)"
    },
    arabic: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝",
    hinglish: "Allahumma salli 'ala Muhammadin wa 'ala aali Muhammadin kama sallayta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedum Majeed. Allahumma barik 'ala Muhammadin wa 'ala aali Muhammadin kama barakta 'ala Ibraheema wa 'ala aali Ibraheema innaka Hameedum Majeed.",
    hinglishMeaning: "Ae Allah! Rehmat nazil farma Hazrat Muhammad (ﷺ) par aur unki aal par, jaise tune rehmat nazil farmayi Hazrat Ibrahim (Alayhissalam) par aur unki aal par, beshak Tu tareef ke qabil aur buzurgi wala hai. Ae Allah! Barkat nazil farma Hazrat Muhammad (ﷺ) par aur unki aal par, jaise tune barkat nazil farmayi Hazrat Ibrahim (Alayhissalam) par aur unki aal par, beshak Tu tareef ke qabil aur buzurgi wala hai.",
    hindi: "अल्लाहुम्मा सल्लि अला मुहम्मदिन व अला आलि मुहम्मदिन कमा सल्लैता अला इब्राहीमा व अला आलि इब्राहीमा इन्नका हमीदुम मजीद। अल्लाहुम्मा बारिक अला मुहम्मदिन व अला आलि मुहम्मदिन कमा बारक्ता अला इब्राहीमा व अला आलि इब्राहीमा इन्नका हमीदुम मजीद।",
    hindiMeaning: "ऐ अल्लाह! रहमत नाज़िल फरमा हज़रत मुहम्मद (ﷺ) पर और उनकी आल (संतान/अनुयायियों) पर, जैसे तूने रहमत नाज़िल फरमाई हज़रत इब्राहीम (अलैहिस्सलाम) पर और उनकी आल पर, बेशक तू तारीफ के काबिल और बुज़ुर्गी वाला है। ऐ अल्लाह! बरकत नाज़िल फरमा हज़रत मुहम्मद (ﷺ) पर और उनकी आल पर, जैसे तूने बरकत नाज़िल फरमाई हज़रत इब्राहीम (अलैहिस्सलाम) पर और उनकी आल पर, बेशक तू तारीफ के काबिल और बुज़ुर्गी वाला है।",
    urdu: "اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَعَلَىٰ آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيمَ وَعَلَىٰ آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ",
    urduMeaning: "اے اللہ! رحمت نازل فرما حضرت محمد (ﷺ) پر اور ان کی آل پر، جیسا کہ تو نے رحمت نازل فرمائی حضرت ابراہیم (علیہ السلام) پر اور ان کی آل پر، بیشک تو تعریف کے لائق اور بزرگی والا ہے۔ اے اللہ! برکت نازل فرما حضرت محمد (ﷺ) پر اور ان کی آل پر، جیسا کہ تو نے برکت نازل فرمائی حضرت ابراہیم (علیہ السلام) پر اور ان کی آل پر، بیشک تو تعریف کے لائق اور بزرگی والا ہے۔"
  },
  duaMasoora: {
    id: 'duaMasoora',
    name: {
      hinglish: "Dua-e-Masoora (Supplication before Salam)",
      hindi: "दुआ-ए-मासूरा (सलाम फेरने से पहले की दुआ)",
      urdu: "دعائے ماثورہ (سلام پھیرنے سے پہلے کی دعا)"
    },
    arabic: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا ، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي ، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    hinglish: "Allahumma inni zalamtu nafsi zulman kaseeran, wa la yaghfiruz-zunooba illa anta, faghfir li maghfiratan min 'indika warhamni, innaka antal Ghafoorur Raheem.",
    hinglishMeaning: "Ae Allah! Maine apni jaan par bohot zyada zulm kiya hai, aur tere siwa gunaahon ko koi bakhshne wala nahi, pas tu apne paas se meri maghfirat farma aur mujh par raham kar, beshak tu hi bada bakhshne wala nihayat raham karne wala hai.",
    hindi: "अल्लाहुम्मा इन्नी ज़लम्तु नफ़्सी ज़ुल्मन कसीरा, व ला यग़्फ़िरुज़-ज़ुनूबा इल्ला अन्ता, फ़ग़्फ़िर ली मग़्फ़िरतम-मिन इंदिका वरहम्नी, इन्नका अन्तल्-ग़फ़ूरुर-रहीम।",
    hindiMeaning: "ऐ अल्लाह! मैंने अपनी जान पर बहुत ज़ुल्म किया है, और तेरे सिवा गुनाहों को कोई माफ़ करने वाला नहीं, बस तू अपनी तरफ से मेरी मग़फ़िरत फरमा और मुझ पर रहम कर, बेशक तू ही बड़ा बख्शने वाला निहायत रहम करने वाला है।",
    urdu: "اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا ، وَلَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ ، فَاغْفِرْ لِي مَغْفِرَةً مِنْ عِنْدِكَ وَارْحَمْنِي ، إِنَّكَ أَنْتَ الْغَفُورُ الرَّحِيمُ",
    urduMeaning: "اے اللہ! میں نے اپنی جان پر بہت زیادہ ظلم کیا ہے، اور تیرے سوا کوئی گناہوں کو بخشنے والا نہیں، پس تو اپنی خاص بخشش سے میری مغفرت فرما اور مجھ پر رحم کر، بیشک تو ہی بڑا بخشنے والا نہایت رحم کرنے والا ہے۔",
    note: {
      hinglish: "Aap 'Rabbana Aatina fiddunya hasanatan...' wali mashhoor Quranic dua bhi padh sakte hain.",
      hindi: "आप 'रब्बना आतीना फिद-दुनिया हस-नतन...' वाली मशहूर क़ुरआनी दुआ भी पढ़ सकते हैं।",
      urdu: "آپ 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً...' والی مشہور قرآنی دعا بھی پڑھ سکتے ہیں۔"
    }
  },
  salam: {
    id: 'salam',
    name: {
      hinglish: "Salam (Ending the Prayer)",
      hindi: "सलाम (नमाज़ पूरी करना)",
      urdu: "سلام (نماز کا اختتام)"
    },
    arabic: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    hinglish: "Assalamu 'alaykum wa rahmatullah",
    hinglishMeaning: "Aap par salamati ho aur Allah ki rehmat.",
    hindi: "अस्सलामु अलैकुम व रहमतुल्लाह",
    hindiMeaning: "आप पर सलामती हो और अल्लाह की रहमत।",
    urdu: "السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ",
    urduMeaning: "تم پر سلامتی ہو اور اللہ کی رحمت۔",
    note: {
      hinglish: "Pehle daayen (right) taraf gardan mod kar Salam kahein, phir baayen (left) taraf gardan mod kar Salam kahein.",
      hindi: "पहले दाएं (right) तरफ गर्दन मोड़कर सलाम कहें, फिर बाएं (left) तरफ गर्दन मोड़कर सलाम कहें।",
      urdu: "پہلے دائیں طرف چہرہ موڑ کر سلام کہیں، پھر بائیں طرف چہرہ موڑ کر سلام کہیں۔"
    }
  },
  qunoot: {
    id: 'qunoot',
    name: {
      hinglish: "Dua-e-Qunoot (Recited in Isha Witr)",
      hindi: "दुआ-ए-क़ुनूत (इशा की वित्र नमाज़ में)",
      urdu: "دعائے قنوت (عشاء کی وتر نماز میں)"
    },
    arabic: "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ ، وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ ، وَنَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ",
    hinglish: "Allahumma inna nasta'eenuka wa nastaghfiruka wa nu'minu bika wa natawakkalu 'alayka wa nuthni 'alaykal-khayr, wa nashkuruka wa la nakfuruka, wa nakhla'u wa natruku may-yafjuruk. Allahumma iyyaka na'budu wa laka nusalli wa nasjudu, wa ilayka nas'a wa nahfidu, wa narjoo rahmataka wa nakhsha 'azabak, inna 'azabaka bil-kuffari mulhaq.",
    hinglishMeaning: "Ae Allah! Hum tujh hi se madad chahte hain, tujh hi se bakhshish maangte hain, tujh par imaan laate hain, tujh par bharosa karte hain aur teri bohot achhi tareef karte hain. Hum tera shukr ada karte hain aur teri na-shukri nahi karte, aur hum us shakhs ko chhodte hain jo teri na-farmani kare. Ae Allah! Hum teri hi ibadat karte hain, tere hi liye namaz padhte aur sajdah karte hain, teri hi taraf daudte aur hazir hote hain. Hum teri rehmat ke umeedwaar hain aur tere azaab se darte hain, beshak tera azaab kuffar ko pahunchne wala hai.",
    hindi: "अल्लाहुम्मा इन्ना नस्तईनुका व नस्तग़्फ़िरुका व नुअ्मिनु बिका व नतवक्कलू अलैका व नुस्नी अलैक्ल-खैर, व नश्कुरुका व ला नकफ़ुरुका, व नख़्लउ व नत्रुकु मंय-यफ़्जुरुक। अल्लाहुम्मा इय्याक नअबुदु व लका नुसल्ली व नस्जुद, व इलैका नसआ व नह्फ़िद, व नर्जू रहमतका व नख़्शा अज़ाबक, इन्ना अज़ाबका बिल-कुफ़्फ़ारि मुल्हक़।",
    hindiMeaning: "ऐ अल्लाह! हम तुझ ही से मदद मांगते हैं, तुझ ही से मग़फ़िरत चाहते हैं, तुझ पर ईमान लाते हैं, तुझ पर भरोसा रखते हैं और तेरी अच्छी तारीफ करते हैं। हम तेरा शुक्र करते हैं और तेरी नाशुक्री नहीं करते, और जो तेरी नाफ़रमानी करे उसे छोड़ते हैं। ऐ अल्लाह! हम तेरी ही इबादत करते हैं, तेरे ही लिए नमाज़ पढ़ते और सजदा करते हैं, तेरी ही तरफ दौड़ते हैं। हम तेरी रहमत के तलबगार हैं और तेरे अज़ाब से डरते हैं, बेशक तेरा अज़ाब काफिरों को घेरने वाला है।",
    urdu: "اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ ، وَإِلَيْكَ نَسْعَىٰ وَنَحْفِدُ ، وَنَرْجُو رَحْمَتَكَ وَنَخْشَىٰ عَذَابَكَ ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحَقٌ",
    urduMeaning: "اے اللہ! ہم تجھ ہی سے مدد چاہتے ہیں اور تجھ ہی سے بخشش مانگتے ہیں اور تجھ پر ایمان لاتے ہیں اور تجھ پر بھروسہ کرتے ہیں اور تیری بہت اچھی تعریف کرتے ہیں اور تیرا شکر کرتے ہیں اور تیری ناشکری نہیں کرتے اور الگ کرتے ہیں اور چھوڑتے ہیں اس شخص کو جو تیری نافرمانی کرے۔ اے اللہ! ہم تیری ہی عبادت کرتے ہیں اور تیرے ہی لیے نماز پڑھتے اور سجدہ کرتے ہیں اور تیری ہی طرف دوڑتے ہیں اور حاضر ہوتے ہیں اور تیری رحمت کے امیدوار ہیں اور تیرے عذاب سے ڈرتے ہیں، بیشک تیرا عذاب کافروں کو پہنچنے والا ہے۔"
  }
};
