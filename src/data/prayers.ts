import { PrayerData, NamazStep } from '../types';
import { RECITATIONS } from './recitations';

const COMMON_STEPS_BASE: Omit<NamazStep, 'id' | 'stepNumber'>[] = [
  {
    title: {
      hinglish: "1. Niyyah (Intention / Niyat)",
      hindi: "1. निय्यत (दिल का पक्का इरादा)",
      urdu: "۱. نیت (دل کا ارادہ اور الفاظ)"
    },
    posture: {
      name: {
        hinglish: "Standing Facing Qiblah",
        hindi: "क़िबला की तरफ रुख करके अदब से खड़े होना",
        urdu: "قبلہ رخ باادب کھڑے ہونا"
      },
      desc: {
        hinglish: "Paak-saaf halat (Wudu) mein Qiblah (Ka'bah) ki taraf rukh karke seedhe khade ho jayein. Donon paon ke darmiyan lagbhag 4 ungliyon ka munasib fasla rakhein aur nigahein sajdah ki jagah par rakhein.",
        hindi: "पाक-साफ़ हालत (वुज़ू) में क़िबला (काबा) की तरफ रुख करके सीधे खड़े हो जाएं। दोनों पैरों के बीच लगभग 4 उंगलियों का फ़ासला रखें और नज़रें सजदे की जगह पर रखें।",
        urdu: "پاک و صاف حالت (باوضو) میں قبلہ (خانہ کعبہ) کی طرف رخ کر کے باادب کھڑے ہوں۔ دونوں پاؤں کے درمیان تقریباً چار انگلیوں کا مناسب فاصلہ رکھیں اور نظریں سجدے کی جگہ پر رکھیں۔"
      }
    },
    instruction: {
      hinglish: "Niyyah asal mein dil ke pakke irade ka naam hai. Dil mein yeh tay hona zaroori hai ke aap Allah Ta'ala ke liye kis waqt ki kitni rakat (Farz ya Sunnah) namaz ada kar rahe hain. Zuban se bhi keh lena mustahab (behtar) hai taake dil aur dhyan dono ek taraf ho jayein.",
      hindi: "निय्यत असल में दिल के पक्के इरादे का नाम है। दिल में यह तय होना ज़रूरी है कि आप अल्लाह के लिए किस वक़्त की कितनी रकअत (फ़र्ज़ या सुन्नत) नमाज़ पढ़ रहे हैं। ज़ुबान से भी कह लेना बेहतर है ताकि दिल और ज़ुबान दोनों का ध्यान नमाज़ में लग जाए।",
      urdu: "نیت اصل میں دل کے پکے ارادے کا نام ہے۔ دل میں یہ واضح ہونا ضروری ہے کہ آپ اللہ کی رضا کے لیے آج کس وقت کی کتنی رکعت (فرض یا سنت) نماز ادا کر رہے ہیں۔ زبان سے بھی ادا کر لینا مستحب و بہتر ہے تاکہ دل اور زبان یکسو ہو جائیں۔"
    },
    practicalDetails: [
      {
        heading: {
          hinglish: "Dil Ka Irada (Core Intention)",
          hindi: "दिल का इरादा (ज़रूरी शर्त)",
          urdu: "دل کا ارادہ (لازمی شرط)"
        },
        points: [
          {
            hinglish: "Dil mein bilkul wazeh hona chahiye: maslan 'Main Allah ke liye aaj ki Fajr ke 2 Farz ada kar raha/rahi hoon'.",
            hindi: "दिल में स्पष्ट होना चाहिए: जैसे 'मैं अल्लाह की रज़ा के लिए आज की फज्र के 2 फर्ज़ अदा कर रहा/रही हूँ'।",
            urdu: "دل میں مکمل طور پر واضح ہو: مثلاً 'میں اللہ تعالیٰ کے لیے آج کی فجر کے ۲ رکعت فرض ادا کر رہا/رہی ہوں'۔"
          },
          {
            hinglish: "Agar kisi ko arabi ya khas alfaaz yaad na hon, toh dil ke irade se bhi namaz durust ho jaati hai.",
            hindi: "अगर किसी को अरबी या ख़ास शब्द याद न हों, तो दिल के पक्के इरादे से भी नमाज़ बिल्कुल सही हो जाती है।",
            urdu: "اگر کسی کو مخصوص الفاظ یاد نہ ہوں تو صرف دل کے پکے ارادے سے بھی نیت درست ہو جاتی ہے۔"
          }
        ]
      },
      {
        heading: {
          hinglish: "Zuban Se Bolne Ka Real-Life Tareeqa (Spoken Words Format)",
          hindi: "ज़ुबान से बोलने का असली तरीक़ा (शब्द रूप)",
          urdu: "زبان سے نیت کے مروج و مسنون الفاظ"
        },
        points: [
          {
            hinglish: "Akele Namaz Padhne Par: 'Niyat ki maine [Rakat ki ginti] Rakat Namaz [Farz / Sunnah / Witr / Nafl] [Waqt ka naam, maslan Fajr] ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf.'",
            hindi: "अकेले नमाज़ पढ़ने पर: 'नीयत की मैंने [रकअत संख्या] रकअत नमाज़ [फर्ज़ / सुन्नत / वित्र / नफ़्ल] [वक़्त, जैसे फज्र] की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ।' ",
            urdu: "تنہا نماز پڑھتے وقت: 'نیت کی میں نے [رکعت کی تعداد] رکعت نماز [فرض / سنت / وتر / نفل] [وقت کا نام، مثلاً فجر] کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف۔'"
          },
          {
            hinglish: "Jamat Mein (Imam ke peeche hone par): Aakhir mein yeh jodein: '...peeche is Imam ke'.",
            hindi: "जमाअत में (इमाम के पीछे होने पर): वाक्य के अंत में जोड़ें: '...पीछे इस इमाम के'।",
            urdu: "باجماعت نماز میں (امام کے پیچھے): آخر میں یہ بھی کہیں: '...پیچھے اس امام کے'۔"
          }
        ],
        sampleWords: {
          arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى رَكْعَتَيْنِ صَلَاةَ الْفَجْرِ فَرْضًا مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
          hinglish: "Niyat ki maine 2 Rakat Namaz Farz Fajr ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf (Peeche is Imam ke).",
          hindi: "नीयत की मैंने 2 रकअत नमाज़ फर्ज़ फज्र की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ (पीछे इस इमाम के)।",
          urdu: "نیت کی میں نے ۲ رکعت نماز فرض فجر کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف (پیچھے اس امام کے)۔"
        }
      }
    ]
  },
  {
    title: {
      hinglish: "2. Takbeer-e-Tahrima",
      hindi: "2. तकबीर-ए-तहरीमा",
      urdu: "۲. تکبیر تحریمہ"
    },
    posture: {
      name: {
        hinglish: "Raising hands to ears / shoulders",
        hindi: "हाथ कानों / कन्धों तक उठाना",
        urdu: "ہاتھ کانوں یا کندھوں تک اٹھانا"
      },
      desc: {
        hinglish: "Niyyah ke baad donon haath uthate hue 'Allahu Akbar' kahein. Takbeer-e-Tahrima ke sath hi namaz shuru hoti hai aur duniya ki baatein/kaam haraam (rok) ho jaate hain.",
        hindi: "निय्यत के बाद दोनों हाथ उठाते हुए 'अल्लाहु अकबर' कहें। तकबीर-ए-तहरीमा के साथ ही नमाज़ शुरू होती है।",
        urdu: "نیت کے بعد دونوں ہاتھ اٹھاتے ہوئے 'اللہ اکبر' کہیں۔ تکبیر تحریمہ سے نماز باقاعدہ شروع ہوتی ہے۔"
      }
    },
    recitation: RECITATIONS.takbeer,
    instruction: {
      hinglish: "Takbeer kehte waqt haath upar uthayein aur 'Akbar' khatam hote hote haath baandh lein.",
      hindi: "तकबीर कहते वक्त हाथ ऊपर उठाएं और 'अकबर' पूरा होते-होते हाथ बांध लें।",
      urdu: "تکبیر کہتے ہوئے ہاتھ اوپر اٹھائیں اور تکبیر مکمل ہوتے ہی ہاتھ ناف یا سینے پر باندھ لیں۔"
    },
    practicalDetails: [
      {
        heading: {
          hinglish: "Mard (Men) ke Haath Uthane Ka Tareeqa",
          hindi: "पुरुषों के हाथ उठाने का तरीक़ा",
          urdu: "مردوں کے ہاتھ اٹھانے کا طریقہ"
        },
        points: [
          {
            hinglish: "Donon haath kaano ki lau (nichle hisse) tak uthayein.",
            hindi: "दोनों हाथ कानों की लौ (निचले हिस्से) तक उठाएं।",
            urdu: "دونوں ہاتھ کانوں کی لو (نچلے حصے) تک اٹھائیں۔"
          },
          {
            hinglish: "Angoothe kaan ki lau ko halke se chhooein ya barabar layein, aur hatheliyan Qiblah ki taraf rukh rakhein.",
            hindi: "अंगूठे कानों की लौ को हल्का सा छूएं या बराबर लाएं, और हथेलियां क़िबला की तरफ खुली रहें।",
            urdu: "انگوٹھے کان کی لو کے برابر لائیں یا ہلکا چھوئیں، اور دونوں ہتھیلیاں قبلہ رخ رکھیں۔"
          },
          {
            hinglish: "Ungliyan na zyada judi hon aur na zyada phaili hon, normal qudrati halat mein hon.",
            hindi: "उंगलियां न ज्यादा चिपकी हों और न ज्यादा फैली हों, सामान्य प्राकृतिक स्थिति में रहें।",
            urdu: "انگلیاں نہ زیادہ ملی ہوئی ہوں اور نہ غیر معمولی کھلی ہوں، بلکہ فطری حالت میں ہوں۔"
          }
        ]
      },
      {
        heading: {
          hinglish: "Khawateen (Women) ke Haath Uthane Ka Tareeqa",
          hindi: "महिलाओं के हाथ उठाने का तरीक़ा",
          urdu: "خواتین کے ہاتھ اٹھانے کا طریقہ"
        },
        points: [
          {
            hinglish: "Donon haath kandhon (shoulders) ya seene ki unchai tak uthayein.",
            hindi: "दोनों हाथ कन्धों (Shoulders) या सीने की ऊंचाई तक उठाएं।",
            urdu: "دونوں ہاتھ کندھوں یا سینے کی اونچائی تک اٹھائیں۔"
          },
          {
            hinglish: "Haath chaadar ya dupatte ke andar hi rakhein, bahar na nikalein.",
            hindi: "हाथ चादर या दुपट्टे के अंदर ही रखें, बाहर न निकालें।",
            urdu: "ہاتھ چادر یا دوپٹے کے اندر ہی رکھیں، باہر نہ نکالیں۔"
          }
        ]
      }
    ]
  },
  {
    title: {
      hinglish: "3. Qiyam & Sana (Folding Hands & Starting Dua)",
      hindi: "3. क़ियाम और हाथ बांधना (सना)",
      urdu: "۳. قیام اور ہاتھ باندھنا (ثناء)"
    },
    posture: {
      name: {
        hinglish: "Standing with Folded Hands (Haath Baandhna)",
        hindi: "हाथ बांधकर सीधे खड़े रहना (क़ियाम)",
        urdu: "ہاتھ باندھ کر باادب کھڑے ہونا (قیام)"
      },
      desc: {
        hinglish: "Haath baandh kar nihayat adab, ajizi aur itminan ke sath khade rahein. Nigahein sajdah ki jagah par jamaye rakhein.",
        hindi: "हाथ बांधकर अत्यंत अदब, विनम्रता और इत्मीनान से खड़े रहें। नज़रें सजदे की जगह पर जमाए रखें।",
        urdu: "ہاتھ باندھ کر نہایت ادب، عاجزی اور اطمینان سے کھڑے ہوں۔ نظریں سجدے کی جگہ پر جمائے رکھیں۔"
      }
    },
    recitation: RECITATIONS.sana,
    additionalRecitations: [RECITATIONS.taawwudh, RECITATIONS.tasmiyah],
    instruction: {
      hinglish: "Haath baandhne ke baad pehle Sana (Subhanaka Allahumma...) padhein, phir Ta'awwudh (A'oodhu billahi...) aur Tasmiyah (Bismillahir Rahmanir Raheem) padhein.",
      hindi: "हाथ बांधने के बाद पहले सना (सुब्हानक अल्लाहुम्मा...) पढ़ें, फिर तअव्वुज़ (अऊज़ु बिल्लाहि...) और तस्मिया (बिस्मिल्लाह...) पढ़ें।",
      urdu: "ہاتھ باندھنے کے بعد سب سے پہلے ثناء (سُبْحَانَكَ اللَّهُمَّ...) پڑھیں، پھر تعوذ اور تسمیہ (بسم اللہ) پڑھیں۔"
    },
    practicalDetails: [
      {
        heading: {
          hinglish: "Mard (Men) - Haath Baandhne Ka Asal Tareeqa (Exact Grip Mechanics)",
          hindi: "पुरुषों के लिए हाथ बांधने का असली तरीक़ा (पकड़ और स्थिति)",
          urdu: "مردوں کے لیے ہاتھ باندھنے کا مسنون طریقہ (گرفت اور کیفیت)"
        },
        points: [
          {
            hinglish: "1. Daayan (Right) haath baayein (Left) haath ke upar rakhein.",
            hindi: "1. दायां (Right) हाथ बाएं (Left) हाथ के ऊपर रखें।",
            urdu: "۱. دایاں ہاتھ بائیں ہاتھ کے اوپر رکھیں۔"
          },
          {
            hinglish: "2. Daayein haath ke angoothe (Thumb) aur choti ungli (Pinky) se baayein haath ki kalai (Wrist) ke ird-gird ek halqah (Grip/Circle) banakar kalai ko pakad lein.",
            hindi: "2. दाएं हाथ के अंगूठे और सबसे छोटी उंगली से बाएं हाथ की कलाई के चारों तरफ एक छल्ला (Grip) बनाकर कलाई को पकड़ लें।",
            urdu: "۲. دائیں ہاتھ کے انگوٹھے اور چھوٹی انگلی سے بائیں ہاتھ کی کلائی کے گرد ایک حلقہ بنا کر کلائی کو مضبوطی سے پکڑ لیں۔"
          },
          {
            hinglish: "3. Beech ki teenon ungliyan (Index, Middle, Ring) baayein haath ki kalai aur kohni ki simt seedhi bichi rahein.",
            hindi: "3. बीच की तीनों उंगलियां बाएं हाथ की कलाई और कोहनी की तरफ सीधी फैली रहें।",
            urdu: "۳. درمیان کی تینوں انگلیاں بائیں بازو پر کہنی کی سمت سیدھی رکھی رہیں۔"
          },
          {
            hinglish: "4. Donon haathon ko naaf ke theek neeche baandhein (kuch maslak mein seene par baandhte hain, dono jayaz hain).",
            hindi: "4. दोनों हाथों को नाफ़ (Navel) के ठीक नीचे बांधें (अन्य मसलक में सीने पर भी बांधा जाता है, दोनों जायज़ हैं)।",
            urdu: "۴. دونوں ہاتھوں کو ناف کے نیچے باندھیں (بعض ائمہ کے نزدیک سینے پر بھی باندھا جاتا ہے، دونوں درست ہیں)۔"
          }
        ]
      },
      {
        heading: {
          hinglish: "Khawateen (Women) - Haath Baandhne Ka Tareeqa",
          hindi: "महिलाओं के लिए हाथ बांधने का तरीक़ा",
          urdu: "خواتین کے لیے ہاتھ باندھنے کا طریقہ"
        },
        points: [
          {
            hinglish: "1. Daayan (Right) haath baayein (Left) haath ki pusht par seene (Chest) par rakhein.",
            hindi: "1. दायां हाथ बाएं हाथ की ऊपरी सतह पर सीने (Chest) पर रखें।",
            urdu: "۱. دایاں ہاتھ بائیں ہاتھ کی پشت پر سینے پر رکھیں۔"
          },
          {
            hinglish: "2. Kalai ko angoothe aur choti ungli se pakadna nahi hai, balki aaram se hatheli par hatheli rakh kar seene par baandhna hai.",
            hindi: "2. कलाई को पकड़ना या छल्ला नहीं बनाना है, बल्कि आराम से हथेली पर हथेلی रखकर सीने पर रखना है।",
            urdu: "۲. کلائی کو پکڑنا یا حلقہ نہیں بنانا ہے، بلکہ آسانی سے ہاتھ کے اوپر ہاتھ رکھ کر سینے پر رکھیں۔"
          }
        ]
      }
    ]
  },
  {
    title: {
      hinglish: "4. Surah Al-Fatiha",
      hindi: "4. सूरह अल-फातिहा",
      urdu: "۴. سورۃ الفاتحہ"
    },
    posture: {
      name: {
        hinglish: "Standing (Qiyam)",
        hindi: "क़ियाम में खड़े रहकर",
        urdu: "قیام کی حالت میں"
      },
      desc: {
        hinglish: "Har Rak'ah mein Surah Al-Fatiha padhna namaz ka ahem rukun hai.",
        hindi: "हर रकअत में सूरह अल-फातिहा पढ़ना नमाज़ का अहम हिस्सा है।",
        urdu: "ہر رکعت میں سورۃ الفاتحہ کا پڑھنا نماز کا لازمی رکن ہے۔"
      }
    },
    recitation: RECITATIONS.fatiha,
    instruction: {
      hinglish: "Surah Al-Fatiha ko thehar thehar kar saaf aawaz mein (ya aahista agar aahista wali namaz ho) padhein aur aakhir mein aahista se 'Aameen' kahein.",
      hindi: "सूरह अल-फातिहा को ठहर-ठहर कर साफ़ आवाज़ में पढ़ें और आखिर में धीरे से 'आमीन' कहें।",
      urdu: "سورۃ الفاتحہ کو ٹھہر ٹھہر کر صحیح تلفظ سے پڑھیں اور آخر میں آہستہ سے 'آمین' کہیں۔"
    }
  },
  {
    title: {
      hinglish: "5. Additional Surah (Qira'at)",
      hindi: "5. अतिरिक्त सूरह मिलाना (क़िरअत)",
      urdu: "۵. کوئی سورت ملانا (قرأت)"
    },
    posture: {
      name: {
        hinglish: "Standing (Qiyam)",
        hindi: "क़ियाम में खड़े रहकर",
        urdu: "قیام کی حالت میں"
      },
      desc: {
        hinglish: "Surah Fatiha ke baad Quran Majeed ki koi ek Surah ya kam az kam 3 aayatein padhein.",
        hindi: "सूरह फातिहा के बाद क़ुरआन मजीद की कोई एक सूरह या कम से कम 3 आयतें पढ़ें।",
        urdu: "سورۃ الفاتحہ کے بعد قرآن مجید کی کوئی سورت یا کم از کم ۳ چھوٹی آیتیں تلاوت کریں۔"
      }
    },
    recitation: RECITATIONS.surahIkhlas,
    instruction: {
      hinglish: "Pehle Bismillah padhein phir koi aasan surah jaise Surah Al-Ikhlas (Qul Huwallahu Ahad) padhein.",
      hindi: "पहले बिस्मिल्लाह पढ़ें फिर कोई आसान सूरह जैसे सूरह अल-इख़्लास पढ़ें।",
      urdu: "تسمیہ (بسم اللہ) پڑھ کر کوئی آسان سورت مثلاً سورۃ الاخلاص تلاوت کریں۔"
    },
    specialNote: {
      hinglish: "Farz Namaz ki pehli 2 Rak'ahs mein Surah milayi jaati hai. 3rd aur 4th Farz Rak'ah mein sirf Surah Fatiha padhi jaati hai.",
      hindi: "फर्ज़ नमाज़ की पहली 2 रकअतों में सूरह मिलाई जाती है। 3री और 4थी फर्ज़ रकअत में सिर्फ सूरह फातिहा पढ़ी जाती है।",
      urdu: "فرض نماز کی پہلی ۲ رکعتوں میں سورت ملائی جاتی ہے۔ تیسری اور چوتھی فرض رکعت میں صرف سورۃ الفاتحہ پڑھی جاتی ہے۔"
    }
  },
  {
    title: {
      hinglish: "6. Ruku (Bowing)",
      hindi: "6. रुकूअ (झुकना)",
      urdu: "۶. رکوع (جھکنا)"
    },
    posture: {
      name: {
        hinglish: "Bowing down with hands on knees",
        hindi: "घुटनों पर हाथ रखकर झुकना (रुकूअ)",
        urdu: "گھٹنوں پر ہاتھ رکھ کر باادب جھکنا (رکوع)"
      },
      desc: {
        hinglish: "'Allahu Akbar' kehte hue jhukein. Peeth seedhi rakhein aur ghutno ko haathon se mazbooti se pakad lein.",
        hindi: "'अल्लाहु अकबर' कहते हुए झुकें। पीठ को सीधा रखें और दोनों हाथों से घुटनों को पकड़ लें।",
        urdu: "'اللہ اکبر' کہتے ہوئے جھکیں۔ کمر بالکل سیدھی رکھیں اور گھٹنوں کو ہاتھوں سے پکڑ لیں۔"
      }
    },
    recitation: RECITATIONS.rukuTasbih,
    instruction: {
      hinglish: "Ruku mein kam az kam 3 martaba (ya 5 ya 7 martaba taaq taadad mein) 'Subhana Rabbiyal Azeem' padhein.",
      hindi: "रुकूअ में कम से कम 3 बार (या 5 या 7 बार) 'सुब्हान रब्बियल अज़ीम' पढ़ें।",
      urdu: "رکوع میں اطمینان سے کم از کم ۳ مرتبہ 'سُبْحَانَ رَبِّيَ الْعَظِيمِ' پڑھیں۔"
    }
  },
  {
    title: {
      hinglish: "7. Qaumah (Standing Up from Ruku)",
      hindi: "7. क़ौमह (रुकूअ से सीधा खड़ा होना)",
      urdu: "۷. قومہ (رکوع سے سیدھا کھڑا ہونا)"
    },
    posture: {
      name: {
        hinglish: "Standing upright with hands by sides",
        hindi: "हाथ खुले रखकर बिल्कुल सीधा खड़ा होना",
        urdu: "ہاتھ چھوڑ کر بالکل سیدھا کھڑا ہونا"
      },
      desc: {
        hinglish: "Ruku se seedhe khade ho jayein aur poora itminan hasil karein.",
        hindi: "रुकूअ से बिल्कुल सीधे खड़े हो जाएं और पूरा इत्मीनान हासिल करें।",
        urdu: "رکوع سے اٹھ کر بالکل سیدھے کھڑے ہو جائیں۔"
      }
    },
    recitation: RECITATIONS.tasmee,
    additionalRecitations: [RECITATIONS.tahmeed],
    instruction: {
      hinglish: "Uthte waqt 'Sami' Allahu liman hamidah' kahein, aur seedhe khade hokar 'Rabbana lakal hamd' kahein.",
      hindi: "उठते वक्त 'समिअल्लाहु लिमन हमिदह' कहें, और सीधे खड़े होकर 'रब्बना लकल हम्द' कहें।",
      urdu: "اٹھتے ہوئے 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ' کہیں اور سیدھے کھڑے ہو کر 'رَبَّنَا لَكَ الْحَمْدُ' کہیں۔"
    }
  },
  {
    title: {
      hinglish: "8. First Sajdah (Prostration)",
      hindi: "8. पहला सजदा",
      urdu: "۸. پہلا سجدہ"
    },
    posture: {
      name: {
        hinglish: "Prostrating on seven limbs",
        hindi: "ज़मीन पर पेशानी और नाक रखकर सजदा",
        urdu: "زمین پر پیشانی اور ناک رکھ کر سجدہ کرنا"
      },
      desc: {
        hinglish: "'Allahu Akbar' kehte hue zameen par jayein: pehle ghutne, phir haath, phir naak aur peshani zameen par rakhein.",
        hindi: "'अल्लाहु अकबर' कहते हुए सजदे में जाएं: पहले घुटने, फिर हाथ, फिर नाक और पेशानी ज़मीन पर रखें।",
        urdu: "'اللہ اکبر' کہتے ہوئے سجدے میں جائیں: پہلے گھٹنے، پھر ہاتھ، پھر ناک اور پیشانی زمین پر رکھیں۔"
      }
    },
    recitation: RECITATIONS.sajdahTasbih,
    instruction: {
      hinglish: "Sajdah mein kam az kam 3 martaba 'Subhana Rabbiyal A'la' padhein.",
      hindi: "सजदे में कम से कम 3 बार 'सुब्हान रब्बियल आला' पढ़ें।",
      urdu: "سجدے میں اطمینان سے کم از کم ۳ مرتبہ 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ' پڑھیں۔"
    }
  },
  {
    title: {
      hinglish: "9. Jalsa (Sitting Between Two Sajdahs)",
      hindi: "9. जलसा (दोनों सजदों के बीच बैठना)",
      urdu: "۹. جلسہ (دونوں سجدوں کے درمیان بیٹھنا)"
    },
    posture: {
      name: {
        hinglish: "Sitting calmly on left foot",
        hindi: "बाएं पैर पर बैठकर इत्मीनान करना",
        urdu: "بائیں پاؤں پر اطمینان سے بیٹھنا"
      },
      desc: {
        hinglish: "'Allahu Akbar' kehte hue pehle sajdah se uthein aur dono haath jaanghon par rakh kar seedhe baithein.",
        hindi: "'अल्लाहु अकबर' कहते हुए पहले सजदे से उठें और दोनों हाथ जांघों पर रखकर सीधे बैठें।",
        urdu: "'اللہ اکبر' کہتے ہوئے سجدے سے اٹھ کر دونوں رانوں پر ہاتھ رکھ کر سیدھے بیٹھیں۔"
      }
    },
    recitation: RECITATIONS.jalsaDua,
    instruction: {
      hinglish: "Dono sajdon ke darmiyan baith kar dua 'Rabbighfir lee' padhein.",
      hindi: "दोनों सजदों के बीच बैठकर दुआ 'रब्बिग़फ़िर ली' पढ़ें।",
      urdu: "دونوں سجدوں کے درمیان بیٹھ کر 'رَبِّ اغْفِرْ لِي' کی دعا پڑھیں۔"
    }
  },
  {
    title: {
      hinglish: "10. Second Sajdah",
      hindi: "10. दूसरा सजदा",
      urdu: "۱۰. دوسرا سجدہ"
    },
    posture: {
      name: {
        hinglish: "Second Prostration",
        hindi: "दूसरा सजदा",
        urdu: "دوسرا سجدہ"
      },
      desc: {
        hinglish: "'Allahu Akbar' kehte hue dobara dusre sajdah mein jayein.",
        hindi: "'अल्लाहु अकबर' कहते हुए दोबारा दूसरे सजदे में जाएं।",
        urdu: "'اللہ اکبر' کہتے ہوئے دوبارہ دوسرے سجدے میں جائیں۔"
      }
    },
    recitation: RECITATIONS.sajdahTasbih,
    instruction: {
      hinglish: "Pehle sajdah ki tarah yahan bhi 3 martaba 'Subhana Rabbiyal A'la' padhein. Iske sath 1 Rak'ah poori ho jaati hai.",
      hindi: "पहले सजदे की तरह यहाँ भी 3 बार 'सुब्हान रब्बियल आला' पढ़ें। इसके साथ 1 रकअत पूरी हो जाती है।",
      urdu: "پہلے سجدے کی طرح اس میں بھی ۳ مرتبہ 'سُبْحَانَ رَبِّيَ الْأَعْلَىٰ' پڑھیں۔ اس کے ساتھ ۱ رکعت مکمل ہوتی ہے۔"
    }
  },
  {
    title: {
      hinglish: "11. Next Rak'ah (Rising up)",
      hindi: "11. अगली रकअत (खड़े होना)",
      urdu: "۱۱. اگلی رکعت کے لیے اٹھنا"
    },
    posture: {
      name: {
        hinglish: "Rising back to Qiyam",
        hindi: "क़ियाम के लिए वापस खड़े होना",
        urdu: "قیام کے لیے دوبارہ سیدھے کھڑے ہونا"
      },
      desc: {
        hinglish: "Dusre sajdah ke baad 'Allahu Akbar' kehte hue agli Rak'ah ke liye seedhe khade ho jayein.",
        hindi: "दूसरे सजदे के बाद 'अल्लाहु अकबर' कहते हुए अगली रकअत के लिए खड़े हो जाएं।",
        urdu: "دوسرے سجدے سے 'اللہ اکبر' کہتے ہوئے اگلی رکعت کے لیے سیدھے کھڑے ہو جائیں۔"
      }
    },
    instruction: {
      hinglish: "Dusri Rak'ah mein Sana nahi padhi jaati; seedha Bismillah aur Surah Al-Fatiha se shuru kiya jaata hai.",
      hindi: "दूसरी रकअत में सना नहीं पढ़ी जाती; सीधा बिस्मिल्लाह और सूरह अल-फातिहा से शुरू किया जाता है।",
      urdu: "دوسری رکعت میں ثناء نہیں پڑھی جاتی، بلکہ براہِ راست تسمیہ (بسم اللہ) اور سورۃ الفاتحہ سے شروعات کی جاتی ہے۔"
    }
  },
  {
    title: {
      hinglish: "12. Qa'dah (Sitting for Tashahhud)",
      hindi: "12. क़ाअदा (अत्तहिय्यात के लिए बैठना)",
      urdu: "۱۲. قعدہ (تشہد کے لیے بیٹھنا)"
    },
    posture: {
      name: {
        hinglish: "Sitting in Qa'dah",
        hindi: "क़ाअदा की मुद्रा में बैठना",
        urdu: "قعدہ میں بیٹھنے کی حالت"
      },
      desc: {
        hinglish: "2 Rak'ahs ke baad (Qa'dah Oola) ya namaz ke aakhir mein (Qa'dah Akhira) baithna.",
        hindi: "2 रकअत के बाद (क़ाअदा ऊला) या नमाज़ के आखिर में (क़ाअदा आख़ीरा) बैठना।",
        urdu: "۲ رکعتوں کے بعد (قعدہ اولیٰ) یا نماز کے بالکل آخر میں (قعدہ اخیرہ) بیٹھنا۔"
      }
    },
    instruction: {
      hinglish: "Dono haath jaanghon par rakhein aur Attahiyyat (Tashahhud) padhein.",
      hindi: "दोनों हाथ जांघों पर रखें और अत्तहिय्यात (तशह्हुद) पढ़ें।",
      urdu: "دونوں ہاتھ رانوں پر رکھیں اور تشہد (التحیات) پڑھیں۔"
    }
  },
  {
    title: {
      hinglish: "13. Attahiyyat (Tashahhud)",
      hindi: "13. अत्तहिय्यात (तशह्हुद)",
      urdu: "۱۳. التحیات (تشہد)"
    },
    posture: {
      name: {
        hinglish: "Sitting in Qa'dah",
        hindi: "क़ाअदा में बैठकर",
        urdu: "قعدہ میں بیٹھ کر"
      },
      desc: {
        hinglish: "Seedhe baith kar tashahhud padhein.",
        hindi: "सीधे बैठकर तशह्हुद पढ़ें।",
        urdu: "قعدہ میں باادب بیٹھ کر تشہد پڑھیں۔"
      }
    },
    recitation: RECITATIONS.tashahhud,
    instruction: {
      hinglish: "Pura Attahiyyat padhein. Shahadat ki ungli se ishara karein.",
      hindi: "पूरा अत्तहिय्यात पढ़ें। शहादत की उंगली से तौहीद की गवाही का इशारा करें।",
      urdu: "مکمل التحیات پڑھیں۔ شہادت کی انگلی اٹھا کر توحید کی گواہی دیں۔"
    }
  },
  {
    title: {
      hinglish: "14. Durood Ibrahim",
      hindi: "14. दुरूद-ए-इब्राहिम",
      urdu: "۱۴. درودِ ابراہیم"
    },
    posture: {
      name: {
        hinglish: "Sitting in Final Qa'dah",
        hindi: "आख़िरी क़ाअदा में बैठकर",
        urdu: "آخری قعدہ میں بیٹھ کر"
      },
      desc: {
        hinglish: "Namaz ki aakhiri baithak (Final Sitting) mein Tashahhud ke baad Durood Ibrahim padha jaata hai.",
        hindi: "नमाज़ की आखिरी बैठक में तशह्हुद के बाद दुरूद-ए-इब्राहिम पढ़ा जाता है।",
        urdu: "نماز کی آخری رکعت کے قعدہ میں تشہد کے بعد درودِ ابراہیم پڑھا جاتا ہے۔"
      }
    },
    recitation: RECITATIONS.duroodIbrahim,
    instruction: {
      hinglish: "Attahiyyat ke fauran baad Durood Ibrahim ko adab aur mohabbat ke sath padhein.",
      hindi: "अत्तहिय्यात के तुरंत बाद दुरूद-ए-इब्राहिम को अदब और मोहब्बत के साथ पढ़ें।",
      urdu: "التحیات کے فوراً بعد درودِ ابراہیم کو محبت و عقیدت سے پڑھیں۔"
    }
  },
  {
    title: {
      hinglish: "15. Dua-e-Masoora (Supplication)",
      hindi: "15. दुआ-ए-मासूरा (सलाम से पहले)",
      urdu: "۱۵. دعائے ماثورہ (سلام سے پہلے)"
    },
    posture: {
      name: {
        hinglish: "Sitting in Final Qa'dah",
        hindi: "आख़िरी क़ाअदा में बैठकर",
        urdu: "آخری قعدہ میں بیٹھ کر"
      },
      desc: {
        hinglish: "Durood ke baad salam pherne se pehle maghfirat aur hidayat ki dua maangte hain.",
        hindi: "दुरूद के बाद सलाम फेरने से पहले मग़फ़िरत और भलाई की दुआ मांगते हैं।",
        urdu: "درود شریف کے بعد سلام پھیرنے سے پہلے اللہ سے مغفرت کی دعا مانگی جاتی ہے۔"
      }
    },
    recitation: RECITATIONS.duaMasoora,
    instruction: {
      hinglish: "Durood ke baad Dua-e-Masoora (Allahumma inni zalamtu...) ya Rabbana Aatina padhein.",
      hindi: "दुरूद के बाद दुआ-ए-मासूरा (अल्लाहुम्मा इन्नी ज़लम्तु...) या रब्बना आतीना पढ़ें।",
      urdu: "درود کے بعد دعائے ماثورہ یا 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً' پڑھیں۔"
    }
  },
  {
    title: {
      hinglish: "16. Salam (Ending the Prayer)",
      hindi: "16. सलाम (नमाज़ का समापन)",
      urdu: "۱۶. سلام (نماز کا اختتام)"
    },
    posture: {
      name: {
        hinglish: "Turning head to Right and Left",
        hindi: "दाएं और बाएं कंधे की तरफ देखना",
        urdu: "دائیں اور بائیں جانب چہرہ پھیرنا"
      },
      desc: {
        hinglish: "Dua ke baad pehle daayen taraf phir baayen taraf gardan modte hue Salam kahein.",
        hindi: "दुआ के बाद पहले दाईं तरफ फिर बाईं तरफ चेहरा मोड़ते हुए सलाम कहें।",
        urdu: "دعا کے بعد پہلے دائیں طرف چہرہ پھیر کر پھر بائیں طرف چہرہ پھیر کر سلام کہیں۔"
      }
    },
    recitation: RECITATIONS.salam,
    instruction: {
      hinglish: "Daayen (Right) kandhe ki taraf dekh kar kahein: 'Assalamu alaykum wa rahmatullah', phir baayen (Left) kandhe ki taraf dekh kar kahein.",
      hindi: "दाएं कंधे की तरफ देखकर कहें: 'अस्सलामु अलैकुम व रहमतुल्लाह', फिर बाएं कंधे की तरफ देखकर यही कहें।",
      urdu: "دائیں کندھے کی طرف رخ کر کے کہیں: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللّٰهِ' پھر بائیں کندھے کی طرف یہی کہیں۔"
    }
  }
];

const PRAYER_NIYYAH_EXAMPLES: Record<
  string,
  { arabic: string; hinglish: string; hindi: string; urdu: string }
> = {
  fajr: {
    arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى رَكْعَتَيْنِ صَلَاةَ الْفَجْرِ فَرْضًا مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
    hinglish: "Niyat ki maine 2 Rakat Namaz Farz Fajr ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf (Peeche is Imam ke — agar jamat ho).",
    hindi: "नीयत की मैंने 2 रकअत नमाज़ फर्ज़ फज्र की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ (पीछे इस इमाम के — अगर जमाअत में हों)।",
    urdu: "نیت کی میں نے ۲ رکعت نماز فرض فجر کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف (پیچھے اس امام کے — اگر باجماعت ہوں)۔"
  },
  zuhr: {
    arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى أَرْبَعَ رَكَعَاتٍ صَلَاةَ الظُّهْرِ فَرْضًا مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
    hinglish: "Niyat ki maine 4 Rakat Namaz Farz Zuhr ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf (Peeche is Imam ke — agar jamat ho).",
    hindi: "नीयत की मैंने 4 रकअत नमाज़ फर्ज़ ज़ुहर की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ (पीछे इस इमाम के — अगर जमाअत में हों)।",
    urdu: "نیت کی میں نے ۴ رکعت نماز فرض ظہر کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف (پیچھے اس امام کے — اگر باجماعت ہوں)۔"
  },
  asr: {
    arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى أَرْبَعَ رَكَعَاتٍ صَلَاةَ الْعَصْرِ فَرْضًا مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
    hinglish: "Niyat ki maine 4 Rakat Namaz Farz Asr ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf (Peeche is Imam ke — agar jamat ho).",
    hindi: "नीयत की मैंने 4 रकअत नमाज़ फर्ज़ अस्र की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ (पीछे इस इमाम के — अगर जमाअत में हों)।",
    urdu: "نیت کی میں نے ۴ رکعت نماز فرض عصر کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف (پیچھے اس امام کے — اگر باجماعت ہوں)۔"
  },
  maghrib: {
    arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى ثَلَاثَ رَكَعَاتٍ صَلَاةَ الْمَغْرِبِ فَرْضًا مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
    hinglish: "Niyat ki maine 3 Rakat Namaz Farz Maghrib ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf (Peeche is Imam ke — agar jamat ho).",
    hindi: "नीयत की मैंने 3 रकअत नमाज़ फर्ज़ मग़रिब की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ (पीछे इस इमाम के — अगर जमाअत में हों)।",
    urdu: "نیت کی میں نے ۳ رکعت نماز فرض مغرب کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف (پیچھے اس امام کے — اگر باجماعت ہوں)۔"
  },
  isha: {
    arabic: "نَوَيْتُ أَنْ أُصَلِّيَ لِلَّهِ تَعَالَى أَرْبَعَ رَكَعَاتٍ صَلَاةَ الْعِشَاءِ فَرْضًا مُتَوَجِّهًا إِلَى جِهَةِ الْكَعْبَةِ الشَّرِيفَةِ",
    hinglish: "Niyat ki maine 4 Rakat Namaz Farz Isha (ya 3 Rakat Witr Wajib) ki, wastey Allah Ta'ala ke, mu'nh mera Ka'bah Shareef ki taraf (Peeche is Imam ke — agar jamat ho).",
    hindi: "नीयत की मैंने 4 रकअत नमाज़ फर्ज़ इशा (या 3 रकअत वित्र वाजिब) की, वास्ते अल्लाह तआला के, मुंह मेरा काबा शरीफ़ की तरफ (पीछे इस इमाम के — अगर जमाअत में हों)।",
    urdu: "نیت کی میں نے ۴ رکعت نماز فرض عشاء (یا ۳ رکعت وتر واجب) کی، واسطے اللہ تعالیٰ کے، منہ میرا کعبہ شریف کی طرف (پیچھے اس امام کے — اگر باجماعت ہوں)۔"
  }
};

function generatePrayerSteps(
  prayerId: string,
  extraSteps?: { index: number; step: NamazStep }[]
): NamazStep[] {
  const steps: NamazStep[] = COMMON_STEPS_BASE.map((base, idx) => {
    // Customize Niyyah step's sample words for this prayer
    if (idx === 0 && PRAYER_NIYYAH_EXAMPLES[prayerId]) {
      const customWords = PRAYER_NIYYAH_EXAMPLES[prayerId];
      const updatedDetails = base.practicalDetails?.map((detail) => {
        if (detail.sampleWords) {
          return {
            ...detail,
            sampleWords: customWords
          };
        }
        return detail;
      });
      return {
        ...base,
        id: `step-${idx + 1}`,
        stepNumber: idx + 1,
        practicalDetails: updatedDetails
      };
    }

    return {
      ...base,
      id: `step-${idx + 1}`,
      stepNumber: idx + 1
    };
  });

  if (extraSteps) {
    extraSteps.forEach(({ index, step }) => {
      steps.splice(index, 0, step);
    });
    // Re-index step numbers
    return steps.map((s, i) => ({
      ...s,
      stepNumber: i + 1
    }));
  }

  return steps;
}

export const PRAYERS_DATA: PrayerData[] = [
  {
    id: 'fajr',
    name: {
      hinglish: "Fajr",
      hindi: "फज्र",
      urdu: "فجر"
    },
    arabicName: "صَلَاةُ الفَجْرِ",
    totalRakahs: 4,
    timingDesc: {
      hinglish: "Subah saadiq (Dawn) se sooraj nikalne se pehle tak",
      hindi: "सुबह सादिक़ (उषाकाल) से सूरज निकलने से पहले तक",
      urdu: "صبح صادق سے لے کر طلوع آفتاب سے پہلے تک"
    },
    rakahsBreakdown: [
      {
        type: 'sunnah_muakkadah',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Sunnah (Mu'akkadah)",
          hindi: "2 रकअत सुन्नत (मुअक्कदा)",
          urdu: "۲ رکعت سنت مؤکدہ"
        },
        status: {
          hinglish: "Pehle padhi jaati hai (Bohot taaqeed wali Sunnah)",
          hindi: "पहले पढ़ी जाती है (बहुत ताकीदी सुन्नत)",
          urdu: "پہلے پڑھی جاتی ہے (انتہائی تاکیدی سنت)"
        }
      },
      {
        type: 'fard',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Farz",
          hindi: "2 रकअत फर्ज़",
          urdu: "۲ رکعت فرض"
        },
        status: {
          hinglish: "Farz (Compulsory / Farz-e-Ain)",
          hindi: "फर्ज़ (ज़रूरी)",
          urdu: "فرضِ عین"
        }
      }
    ],
    intro: {
      hinglish: "Fajr din ki pehli namaz hai. Isme kul 4 Rak'ahs hoti hain: pehle 2 Rak'ah Sunnah Mu'akkadah aur phir 2 Rak'ah Farz.",
      hindi: "फज्र दिन की पहली नमाज़ है। इसमें कुल 4 रकअत होती हैं: पहले 2 रकअत सुन्नत मुअक्कदा और फिर 2 रकअत फर्ज़।",
      urdu: "فجر دن کی پہلی نماز ہے۔ اس میں کل ۴ رکعات ہیں: پہلے ۲ رکعت سنت مؤکدہ اور پھر ۲ رکعت فرض۔"
    },
    rakahStructure: [
      {
        rakahNumber: 1,
        title: {
          hinglish: "Rak'ah 1",
          hindi: "रकअत 1",
          urdu: "پہلی رکعت"
        },
        type: {
          hinglish: "Starting Rak'ah",
          hindi: "शुरुआती रकअत",
          urdu: "ابتدائی رکعت"
        },
        steps: [
          "Niyyah",
          "Takbeer-e-Tahrima (Allahu Akbar)",
          "Qiyam (Sana + Ta'awwudh + Tasmiyah)",
          "Surah Al-Fatiha",
          "Additional Surah (e.g. Surah Al-Ikhlas)",
          "Ruku (Subhana Rabbiyal Azeem ×3)",
          "Qaumah (Sami Allahu... / Rabbana lakal hamd)",
          "Sajdah 1 (Subhana Rabbiyal A'la ×3)",
          "Jalsa (Sitting)",
          "Sajdah 2 (Subhana Rabbiyal A'la ×3)"
        ],
        summary: {
          hinglish: "Pehli Rak'ah mein Niyyah, Takbeer, Sana, Fatiha, Surah, Ruku aur 2 Sajdah ada kiye jaate hain.",
          hindi: "पहली रकअत में निय्यत, तकबीर, सना, फातिहा, सूरह, रुकूअ और 2 सजदे किए जाते हैं।",
          urdu: "پہلی رکعت میں نیت، تکبیر، ثناء، فاتحہ، سورت، رکوع اور ۲ سجدے کیے جاتے ہیں۔"
        }
      },
      {
        rakahNumber: 2,
        title: {
          hinglish: "Rak'ah 2 & Final Sitting (Qa'dah Akhira)",
          hindi: "रकअत 2 और आख़िरी बैठक (क़ाअदा)",
          urdu: "دوسری رکعت اور آخری قعدہ"
        },
        type: {
          hinglish: "Completion Rak'ah",
          hindi: "समापन रकअत",
          urdu: "تکمیلی رکعت"
        },
        steps: [
          "Stand up (Allahu Akbar)",
          "Qiyam (Bismillah)",
          "Surah Al-Fatiha",
          "Additional Surah",
          "Ruku (Subhana Rabbiyal Azeem ×3)",
          "Qaumah",
          "Sajdah 1",
          "Jalsa",
          "Sajdah 2",
          "Qa'dah Akhira (Attahiyyat + Durood Ibrahim + Dua Masoora)",
          "Salam (Right & Left)"
        ],
        summary: {
          hinglish: "Dusri Rak'ah ke dono sajdon ke baad seedha baith kar Tashahhud, Durood Ibrahim, Dua Masoora padhein aur Salam pherein.",
          hindi: "दूसरी रकअत के दोनों सजदों के बाद सीधे बैठकर तशह्हुद, दुरूद-ए-इब्राहिम, दुआ-ए-मासूरा पढ़ें और सलाम फेरें।",
          urdu: "دوسری رکعت کے دونوں سجدوں کے بعد بیٹھ کر تشہد، درودِ ابراہیم اور دعائے ماثورہ پڑھ کر دونوں طرف سلام پھیریں۔"
        }
      }
    ],
    steps: generatePrayerSteps('fajr')
  },
  {
    id: 'zuhr',
    name: {
      hinglish: "Zuhr",
      hindi: "ज़ुहर",
      urdu: "ظہر"
    },
    arabicName: "صَلَاةُ الظُّهْرِ",
    totalRakahs: 12,
    timingDesc: {
      hinglish: "Dopahar zawaal (sooraj dhalne) ke baad se Asr ke waqt tak",
      hindi: "दोपहर सूरज ढलने के बाद से अस्र के वक़्त तक",
      urdu: "دوپہر سورج ڈھلنے کے بعد سے عصر کے وقت تک"
    },
    rakahsBreakdown: [
      {
        type: 'sunnah_muakkadah',
        count: 4,
        name: {
          hinglish: "4 Rak'ah Sunnah (Mu'akkadah)",
          hindi: "4 रकअत सुन्नत (मुअक्कदा)",
          urdu: "۴ رکعت سنت مؤکدہ"
        },
        status: {
          hinglish: "Farz se pehle",
          hindi: "फर्ज़ से पहले",
          urdu: "فرض سے پہلے"
        }
      },
      {
        type: 'fard',
        count: 4,
        name: {
          hinglish: "4 Rak'ah Farz",
          hindi: "4 रकअत फर्ज़",
          urdu: "۴ رکعت فرض"
        },
        status: {
          hinglish: "Farz-e-Ain (Compulsory)",
          hindi: "फर्ज़ (ज़रूरी)",
          urdu: "فرضِ عین"
        }
      },
      {
        type: 'sunnah_muakkadah',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Sunnah (Mu'akkadah)",
          hindi: "2 रकअत सुन्नत (मुअक्कदा)",
          urdu: "۲ رکعت سنت مؤکدہ"
        },
        status: {
          hinglish: "Farz ke baad",
          hindi: "फर्ज़ के बाद",
          urdu: "فرض کے بعد"
        }
      },
      {
        type: 'nafl',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Nafl (Optional/Mustahab)",
          hindi: "2 रकअत नफ़्ल",
          urdu: "۲ رکعت نفل"
        },
        status: {
          hinglish: "Aakhir mein mustahab",
          hindi: "आखिर में मुस्तहब",
          urdu: "آخر میں مستحب"
        }
      }
    ],
    intro: {
      hinglish: "Zuhr dopahar ki namaz hai jisme kul 12 Rak'ahs hoti hain: 4 Sunnah, 4 Farz, 2 Sunnah, aur 2 Nafl.",
      hindi: "ज़ुहर दोपहर की नमाज़ है जिसमें कुल 12 रकअत होती हैं: 4 सुन्नत, 4 फर्ज़, 2 सुन्नत और 2 नफ़्ल।",
      urdu: "ظہر دوپہر کی نماز ہے جس میں کل ۱۲ رکعات ہیں: ۴ سنت، ۴ فرض، ۲ سنت، اور ۲ نفل۔"
    },
    rakahStructure: [
      {
        rakahNumber: 1,
        title: {
          hinglish: "Rak'ah 1",
          hindi: "रकअत 1",
          urdu: "پہلی رکعت"
        },
        type: {
          hinglish: "Opening Rak'ah",
          hindi: "शुरुआती रकअत",
          urdu: "ابتدائی رکعت"
        },
        steps: [
          "Niyyah",
          "Takbeer-e-Tahrima",
          "Qiyam (Sana + Ta'awwudh + Tasmiyah)",
          "Surah Al-Fatiha",
          "Additional Surah",
          "Ruku",
          "Qaumah",
          "2 Sajdahs"
        ],
        summary: {
          hinglish: "Pehli Rak'ah standard tareeqe se poori ki jaati hai.",
          hindi: "पहली रकअत सामान्य तरीके से पूरी की जाती है।",
          urdu: "پہلی رکعت معمول کے مطابق ادا کی جاتی ہے۔"
        }
      },
      {
        rakahNumber: 2,
        title: {
          hinglish: "Rak'ah 2 & First Sitting (Qa'dah Oola)",
          hindi: "रकअत 2 और पहला क़ाअदा",
          urdu: "دوسری رکعت اور پہلا قعدہ"
        },
        type: {
          hinglish: "Midway Sitting",
          hindi: "मध्य बैठक",
          urdu: "درمیانی قعدہ"
        },
        steps: [
          "Bismillah + Surah Al-Fatiha",
          "Additional Surah",
          "Ruku + Qaumah + 2 Sajdahs",
          "Qa'dah Oola (Sit & recite ONLY Attahiyyat/Tashahhud)",
          "Stand up saying Allahu Akbar for 3rd Rak'ah"
        ],
        summary: {
          hinglish: "Dusri Rak'ah ke baad baith kar sirf Attahiyyat padhein aur foran teesri Rak'ah ke liye khade ho jayein.",
          hindi: "दूसरी रकअत के बाद बैठकर सिर्फ अत्तहिय्यात पढ़ें और तुरंत 3री रकअत के लिए खड़े हो जाएं।",
          urdu: "دوسری رکعت کے بعد بیٹھ کر صرف التحیات پڑھیں اور تیسری رکعت کے لیے کھڑے ہو جائیں۔"
        }
      },
      {
        rakahNumber: 3,
        title: {
          hinglish: "Rak'ah 3",
          hindi: "रकअत 3",
          urdu: "تیسری رکعت"
        },
        type: {
          hinglish: "Third Rak'ah",
          hindi: "तीसरी रकअत",
          urdu: "تیسری رکعت"
        },
        steps: [
          "Bismillah + Surah Al-Fatiha (Farz mein Surah nahi milayi jaati; Sunnah mein milayi jaati hai)",
          "Ruku",
          "Qaumah",
          "2 Sajdahs",
          "Stand up for Rak'ah 4"
        ],
        summary: {
          hinglish: "Farz namaz mein 3rd Rak'ah mein sirf Surah Fatiha padhte hain. 2 Sajdah karke 4th ke liye uthein.",
          hindi: "फर्ज़ नमाज़ में 3री रकअत में सिर्फ सूरह फातिहा पढ़ते हैं। 2 सजदा करके 4थी के लिए उठें।",
          urdu: "فرض نماز کی تیسری رکعت میں صرف سورۃ الفاتحہ پڑھی جاتی ہے۔ ۲ سجدوں کے بعد چوتھی رکعت کے لیے اٹھیں۔"
        }
      },
      {
        rakahNumber: 4,
        title: {
          hinglish: "Rak'ah 4 & Final Sitting (Qa'dah Akhira)",
          hindi: "रकअत 4 और आख़िरी बैठक (क़ाअदा)",
          urdu: "چوتھی رکعت اور آخری قعدہ"
        },
        type: {
          hinglish: "Final Rak'ah & Completion",
          hindi: "अंतिम रकअत और समापन",
          urdu: "آخری رکعت اور سلام"
        },
        steps: [
          "Bismillah + Surah Al-Fatiha",
          "Ruku + Qaumah + 2 Sajdahs",
          "Qa'dah Akhira (Attahiyyat + Durood Ibrahim + Dua Masoora)",
          "Salam (Right & Left)"
        ],
        summary: {
          hinglish: "Chauthi Rak'ah ke sajdon ke baad aakhiri Qa'dah mein Attahiyyat, Durood Ibrahim, Dua Masoora padh kar dono taraf Salam pherte hain.",
          hindi: "चौथी रकअत के सजदों के बाद आखिरी क़ाअदा में अत्तहिय्यात, दुरूद-ए-इब्राहिम, दुआ-ए-मासूरा पढ़कर दोनों तरफ सलाम फेरते हैं।",
          urdu: "چوتھی رکعت کے سجدوں کے بعد آخری قعدہ میں تشہد، درودِ ابراہیم اور دعائے ماثورہ پڑھ کر سلام پھیریں۔"
        }
      }
    ],
    steps: generatePrayerSteps('zuhr')
  },
  {
    id: 'asr',
    name: {
      hinglish: "Asr",
      hindi: "अस्र",
      urdu: "عصر"
    },
    arabicName: "صَلَاةُ العَصْرِ",
    totalRakahs: 8,
    timingDesc: {
      hinglish: "Dopahar ke baad se sooraj doobne ke pehle tak (Zard hone se pehle)",
      hindi: "दोपहर के बाद से सूरज डूबने से पहले तक",
      urdu: "دوپہر کے بعد سے غروبِ آفتاب سے پہلے تک"
    },
    rakahsBreakdown: [
      {
        type: 'sunnah_ghair_muakkadah',
        count: 4,
        name: {
          hinglish: "4 Rak'ah Sunnah (Ghair Mu'akkadah)",
          hindi: "4 रकअत सुन्नत (गैर मुअक्कदा)",
          urdu: "۴ رکعت سنت غیر مؤکدہ"
        },
        status: {
          hinglish: "Farz se pehle (Sawab o Fazilat)",
          hindi: "फर्ज़ से पहले (सवाब और फज़ीलत)",
          urdu: "فرض سے پہلے (ثواب و فضیلت)"
        }
      },
      {
        type: 'fard',
        count: 4,
        name: {
          hinglish: "4 Rak'ah Farz",
          hindi: "4 रकअत फर्ज़",
          urdu: "۴ رکعت فرض"
        },
        status: {
          hinglish: "Farz-e-Ain (Compulsory)",
          hindi: "फर्ज़ (ज़रूरी)",
          urdu: "فرضِ عین"
        }
      }
    ],
    intro: {
      hinglish: "Asr teesri namaz hai jisme kul 8 Rak'ahs hoti hain: 4 Sunnah Ghair Mu'akkadah aur 4 Farz.",
      hindi: "अस्र तीसरी नमाज़ है जिसमें कुल 8 रकअत होती हैं: 4 सुन्नत गैर मुअक्कदा और 4 फर्ज़।",
      urdu: "عصر تیسری نماز ہے جس میں کل ۸ رکعات ہیں: ۴ سنت غیر مؤکدہ اور ۴ فرض۔"
    },
    rakahStructure: [
      {
        rakahNumber: 1,
        title: {
          hinglish: "Rak'ah 1 & 2",
          hindi: "रकअत 1 और 2",
          urdu: "پہلی اور دوسری رکعت"
        },
        type: {
          hinglish: "First Two Rak'ahs",
          hindi: "पहली दो रकअतें",
          urdu: "پہلی دو رکعتیں"
        },
        steps: [
          "Niyyah + Takbeer",
          "Sana + Ta'awwudh + Tasmiyah",
          "Surah Al-Fatiha + Surah",
          "Ruku + Qaumah + 2 Sajdahs",
          "Stand for Rak'ah 2 → Fatiha + Surah + Ruku + 2 Sajdahs",
          "Qa'dah Oola (Sit for Attahiyyat only)"
        ],
        summary: {
          hinglish: "Pehle 2 Rak'ahs mein Surah Fatiha ke sath surah milayi jaati hai aur 2nd ke baad Qa'dah Oola mein Tashahhud padha jata hai.",
          hindi: "पहली 2 रकअतों में सूरह फातिहा के साथ सूरह मिलाई जाती है और दूसरी के बाद क़ाअदा में तशह्हुद पढ़ा जाता है।",
          urdu: "پہلی دو رکعتوں میں سورۃ الفاتحہ کے ساتھ سورت ملائی جاتی ہے اور پھر پہلے قعدہ میں تشہد پڑھا جاتا ہے۔"
        }
      },
      {
        rakahNumber: 3,
        title: {
          hinglish: "Rak'ah 3 & 4 (Final Sitting)",
          hindi: "रकअत 3 और 4 (आख़िरी बैठक)",
          urdu: "تیسری اور چوتھی رکعت (آخری قعدہ)"
        },
        type: {
          hinglish: "Last Two Rak'ahs & Salam",
          hindi: "अंतिम दो रकअतें और सलाम",
          urdu: "آخری دو رکعتیں اور سلام"
        },
        steps: [
          "Rak'ah 3: Bismillah + Surah Al-Fatiha (Farz mein aage Surah nahi) + Ruku + 2 Sajdahs",
          "Rak'ah 4: Bismillah + Surah Al-Fatiha + Ruku + 2 Sajdahs",
          "Qa'dah Akhira: Attahiyyat + Durood Ibrahim + Dua Masoora",
          "Salam (Right & Left)"
        ],
        summary: {
          hinglish: "Farz ki 3rd aur 4th Rak'ah mein sirf Surah Fatiha padhte hain. Aakhir mein Durood o Dua ke sath Salam pherte hain.",
          hindi: "फर्ज़ की 3री और 4थी रकअत में सिर्फ सूरह फातिहा पढ़ते हैं। आखिर में दुरूद और दुआ के साथ सलाम फेरते हैं।",
          urdu: "فرض کی تیسری اور چوتھی رکعت میں صرف سورۃ الفاتحہ پڑھی جاتی ہے۔ آخر میں درود اور دعا کے بعد سلام پھیرا جاتا ہے۔"
        }
      }
    ],
    steps: generatePrayerSteps('asr')
  },
  {
    id: 'maghrib',
    name: {
      hinglish: "Maghrib",
      hindi: "मग़रिब",
      urdu: "مغرب"
    },
    arabicName: "صَلَاةُ المَغْرِبِ",
    totalRakahs: 7,
    timingDesc: {
      hinglish: "Sooraj doobte hi (Sunset) se shafaq (laali) khatam hone tak",
      hindi: "सूरज डूबते ही (सूर्यास्त) से लालिमा खत्म होने तक",
      urdu: "غروبِ آفتاب کے فوراً بعد سے شفق غائب ہونے تک"
    },
    rakahsBreakdown: [
      {
        type: 'fard',
        count: 3,
        name: {
          hinglish: "3 Rak'ah Farz",
          hindi: "3 रकअत फर्ज़",
          urdu: "۳ رکعت فرض"
        },
        status: {
          hinglish: "Pehle Farz padhe jaate hain (Compulsory)",
          hindi: "पहले फर्ज़ पढ़े जाते हैं",
          urdu: "پہلے فرض پڑھے جاتے ہیں"
        }
      },
      {
        type: 'sunnah_muakkadah',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Sunnah (Mu'akkadah)",
          hindi: "2 रकअत सुन्नत (मुअक्कदा)",
          urdu: "۲ رکعت سنت مؤکدہ"
        },
        status: {
          hinglish: "Farz ke baad",
          hindi: "फर्ज़ के बाद",
          urdu: "فرض کے بعد"
        }
      },
      {
        type: 'nafl',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Nafl",
          hindi: "2 रकअत नफ़्ल",
          urdu: "۲ رکعت نفل"
        },
        status: {
          hinglish: "Mustahab (Awwabeen)",
          hindi: "मुस्तहब (अव्वाबीन)",
          urdu: "مستحب (اوابین)"
        }
      }
    ],
    intro: {
      hinglish: "Maghrib sooraj guroob hone ke baad ki namaz hai. Isme kul 7 Rak'ahs hoti hain: pehle 3 Farz, phir 2 Sunnah Mu'akkadah, aur 2 Nafl.",
      hindi: "मग़रिब सूरज डूबने के बाद की नमाज़ है। इसमें कुल 7 रकअत होती हैं: पहले 3 फर्ज़, फिर 2 सुन्नत मुअक्कदा, और 2 नफ़्ल।",
      urdu: "مغرب غروبِ آفتاب کے بعد کی نماز ہے۔ اس میں کل ۷ رکعات ہیں: پہلے ۳ فرض، پھر ۲ سنت مؤکدہ، اور ۲ نفل۔"
    },
    rakahStructure: [
      {
        rakahNumber: 1,
        title: {
          hinglish: "Rak'ah 1 & 2",
          hindi: "रकअत 1 और 2",
          urdu: "پہلی اور دوسری رکعت"
        },
        type: {
          hinglish: "First Two Rak'ahs",
          hindi: "पहली दो रकअतें",
          urdu: "پہلی دو رکعتیں"
        },
        steps: [
          "Rak'ah 1: Niyyah + Takbeer + Sana + Fatiha + Surah + Ruku + 2 Sajdahs",
          "Rak'ah 2: Bismillah + Fatiha + Surah + Ruku + 2 Sajdahs",
          "Qa'dah Oola (Sit after 2nd Rak'ah and recite ONLY Attahiyyat)",
          "Stand up saying Allahu Akbar for Rak'ah 3"
        ],
        summary: {
          hinglish: "2nd Rak'ah ke baad Qa'dah Oola mein Tashahhud padh kar teesri Rak'ah ke liye khade hote hain.",
          hindi: "दूसरी रकअत के बाद पहले क़ाअदा में तशह्हुद पढ़कर तीसरी रकअत के लिए खड़े होते हैं।",
          urdu: "دوسری رکعت کے بعد پہلے قعدہ میں تشہد پڑھ کر تیسری رکعت کے لیے کھڑے ہوتے ہیں۔"
        }
      },
      {
        rakahNumber: 3,
        title: {
          hinglish: "Rak'ah 3 & Final Sitting (Qa'dah Akhira)",
          hindi: "रकअत 3 और आख़िरी बैठक (क़ाअदा)",
          urdu: "تیسری رکعت اور آخری قعدہ"
        },
        type: {
          hinglish: "Third Rak'ah & Completion",
          hindi: "तीसरी रकअत और समापन",
          urdu: "تیسری رکعت اور سلام"
        },
        steps: [
          "Bismillah + Surah Al-Fatiha (Farz ki teesri Rak'ah mein Surah nahi milayi jaati)",
          "Ruku (Subhana Rabbiyal Azeem ×3)",
          "Qaumah (Sami Allahu... / Rabbana lakal hamd)",
          "Sajdah 1 (Subhana Rabbiyal A'la ×3)",
          "Jalsa",
          "Sajdah 2",
          "Qa'dah Akhira (Attahiyyat + Durood Ibrahim + Dua Masoora)",
          "Salam (Right & Left)"
        ],
        summary: {
          hinglish: "Maghrib ke 3 Farz mein 3rd Rak'ah ke baad aakhiri Qa'dah hota hai jisme Durood o Dua ke sath Salam pherte hain.",
          hindi: "मग़रिब के 3 फर्ज़ में तीसरी रकअत के बाद ही आखिरी क़ाअदा होता है जिसमें दुरूद और दुआ के साथ सलाम फेरते हैं।",
          urdu: "مغرب کے ۳ فرض میں تیسری رکعت کے بعد ہی آخری قعدہ ہوتا ہے جس میں درود اور دعا کے بعد سلام پھیرا جاتا ہے۔"
        }
      }
    ],
    steps: generatePrayerSteps('maghrib')
  },
  {
    id: 'isha',
    name: {
      hinglish: "Isha",
      hindi: "इशा",
      urdu: "عشاء"
    },
    arabicName: "صَلَاةُ العِشَاءِ",
    totalRakahs: 17,
    timingDesc: {
      hinglish: "Shafaq (aasmaan ki surkhi/safedi) gayab hone ke baad se aadhi raat / Subah saadiq se pehle tak",
      hindi: "शफ़क़ (आसमान की लाली) गायब होने के बाद से आधी रात तक",
      urdu: "شفق غائب ہونے کے بعد سے آدھی رات تک"
    },
    rakahsBreakdown: [
      {
        type: 'sunnah_ghair_muakkadah',
        count: 4,
        name: {
          hinglish: "4 Rak'ah Sunnah (Ghair Mu'akkadah)",
          hindi: "4 रकअत सुन्नत (गैर मुअक्कदा)",
          urdu: "۴ رکعت سنت غیر مؤکدہ"
        },
        status: {
          hinglish: "Farz se pehle (Mustahab)",
          hindi: "फर्ज़ से पहले (मुस्तहब)",
          urdu: "فرض سے پہلے (مستحب)"
        }
      },
      {
        type: 'fard',
        count: 4,
        name: {
          hinglish: "4 Rak'ah Farz",
          hindi: "4 रकअत फर्ज़",
          urdu: "۴ رکعت فرض"
        },
        status: {
          hinglish: "Farz-e-Ain (Compulsory)",
          hindi: "फर्ज़ (ज़रूरी)",
          urdu: "فرضِ عین"
        }
      },
      {
        type: 'sunnah_muakkadah',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Sunnah (Mu'akkadah)",
          hindi: "2 रकअत सुन्नत (मुअक्कदा)",
          urdu: "۲ رکعت سنت مؤکدہ"
        },
        status: {
          hinglish: "Farz ke baad",
          hindi: "फर्ज़ के बाद",
          urdu: "فرض کے بعد"
        }
      },
      {
        type: 'nafl',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Nafl",
          hindi: "2 रकअत नफ़्ल",
          urdu: "۲ رکعت نفل"
        },
        status: {
          hinglish: "Witr se pehle ya baad",
          hindi: "वित्र से पहले",
          urdu: "وتر سے پہلے"
        }
      },
      {
        type: 'witr',
        count: 3,
        name: {
          hinglish: "3 Rak'ah Witr (Wajib)",
          hindi: "3 रकअत वित्र (वाजिब)",
          urdu: "۳ رکعت وتر (واجب)"
        },
        status: {
          hinglish: "Wajib (Dua-e-Qunoot padhi jaati hai)",
          hindi: "वाजिब (दुआ-ए-क़ुनूत पढ़ी जाती है)",
          urdu: "واجب (دعائے قنوت پڑھی جاتی ہے)"
        }
      },
      {
        type: 'nafl',
        count: 2,
        name: {
          hinglish: "2 Rak'ah Nafl",
          hindi: "2 रकअत नफ़्ल",
          urdu: "۲ رکعت نفل"
        },
        status: {
          hinglish: "Witr ke baad (Optional)",
          hindi: "वित्र के बाद (ऐच्छिक)",
          urdu: "وتر کے بعد (اختیاری)"
        }
      }
    ],
    intro: {
      hinglish: "Isha raat ki aakhiri namaz hai jisme kul 17 Rak'ahs hoti hain (4 Sunnah, 4 Farz, 2 Sunnah, 2 Nafl, 3 Witr Wajib, aur 2 Nafl). Witr mein khas taur par Dua-e-Qunoot padhi jaati hai.",
      hindi: "इशा रात की आखिरी नमाज़ है जिसमें कुल 17 रकअत होती हैं (4 सुन्नत, 4 फर्ज़, 2 सुन्नत, 2 नफ़्ल, 3 वित्र वाजिब और 2 नफ़्ल)। वित्र में खास तौर पर दुआ-ए-क़ुनूत पढ़ी जाती है।",
      urdu: "عشاء رات کی آخری نماز ہے جس میں کل ۱۷ رکعات ہیں (۴ سنت، ۴ فرض، ۲ سنت، ۲ نفل، ۳ وتر واجب، اور ۲ نفل)۔ وتر میں خاص طور پر دعائے قنوت پڑھی جاتی ہے۔"
    },
    rakahStructure: [
      {
        rakahNumber: 1,
        title: {
          hinglish: "4 Rak'ah Farz Flow",
          hindi: "4 रकअत फर्ज़ का तरीका",
          urdu: "۴ رکعت فرض کا طریقہ"
        },
        type: {
          hinglish: "Farz Structure",
          hindi: "फर्ज़ का ढांचा",
          urdu: "فرض کی ساخت"
        },
        steps: [
          "Rak'ah 1: Niyyah + Takbeer + Sana + Fatiha + Surah + Ruku + 2 Sajdahs",
          "Rak'ah 2: Fatiha + Surah + Ruku + 2 Sajdahs → Qa'dah Oola (Attahiyyat only)",
          "Rak'ah 3: Fatiha only + Ruku + 2 Sajdahs",
          "Rak'ah 4: Fatiha only + Ruku + 2 Sajdahs → Qa'dah Akhira (Attahiyyat + Durood + Dua Masoora) → Salam"
        ],
        summary: {
          hinglish: "Isha ke 4 Farz Zuhr aur Asr ke Farz ki tarah 4 Rak'ahs mein ada kiye jaate hain.",
          hindi: "इशा के 4 फर्ज़ ज़ुहर और अस्र के फर्ज़ की तरह 4 रकअतों में पढ़े जाते हैं।",
          urdu: "عشاء کے ۴ فرض ظہر اور عصر کی طرح ۴ رکعات میں ادا کیے جاتے ہیں۔"
        }
      },
      {
        rakahNumber: 2,
        title: {
          hinglish: "3 Rak'ah Witr Flow (Special Guide)",
          hindi: "3 रकअत वित्र का विशेष तरीका",
          urdu: "۳ رکعت وتر کا خاص طریقہ"
        },
        type: {
          hinglish: "Witr with Dua-e-Qunoot",
          hindi: "दुआ-ए-क़ुनूत के साथ वित्र",
          urdu: "دعائے قنوت کے ساتھ وتر"
        },
        steps: [
          "Rak'ah 1: Sana + Fatiha + Surah + Ruku + 2 Sajdahs",
          "Rak'ah 2: Fatiha + Surah + Ruku + 2 Sajdahs → Qa'dah Oola (Attahiyyat only) → Stand up",
          "Rak'ah 3: Fatiha + Surah padhein",
          "Takbeer-e-Qunoot: Haath kaano tak utha kar 'Allahu Akbar' kahein aur dobara haath baandhein",
          "Recite Dua-e-Qunoot",
          "Ruku + Qaumah + 2 Sajdahs",
          "Qa'dah Akhira (Attahiyyat + Durood + Dua) → Salam"
        ],
        summary: {
          hinglish: "Witr ki 3rd Rak'ah mein Surah ke baad 'Allahu Akbar' keh kar haath utha kar dobara baandhte hain aur Dua-e-Qunoot padhte hain.",
          hindi: "वित्र की तीसरी रकअत में सूरह के बाद 'अल्लाहु अकबर' कहकर हाथ उठाकर दोबारा बांधते हैं और दुआ-ए-क़ुनूत पढ़ते हैं।",
          urdu: "وتر کی تیسری رکعت میں سورت کے بعد 'اللہ اکبر' کہہ کر ہاتھ کانوں تک اٹھا کر باندھتے ہیں اور دعائے قنوت پڑھتے ہیں۔"
        }
      }
    ],
    steps: generatePrayerSteps('isha', [
      {
        index: 10,
        step: {
          id: 'witr-qunoot-step',
          stepNumber: 11,
          title: {
            hinglish: "Witr Special: Takbeer & Dua-e-Qunoot (3rd Rak'ah)",
            hindi: "वित्र विशेष: तकबीर और दुआ-ए-क़ुनूत (तीसरी रकअत)",
            urdu: "وتر کا خاص طریقہ: تکبیر اور دعائے قنوت (تیسری رکعت)"
          },
          posture: {
            name: {
              hinglish: "Raising hands then refolding for Qunoot",
              hindi: "हाथ उठाकर दोबारा बांधना",
              urdu: "ہاتھ کانوں تک اٹھا کر دوبارہ باندھنا"
            },
            desc: {
              hinglish: "Witr ki teesri Rak'ah mein Surah Fatiha aur Surah padhne ke baad, ruku mein jaane se pehle 'Allahu Akbar' keh kar haath kaano tak uthayein, phir dobara baandh lein.",
              hindi: "वित्र की तीसरी रकअत में सूरह फातिहा और सूरह पढ़ने के बाद, रुकूअ में जाने से पहले 'अल्लाहु अकबर' कहकर हाथ कानों तक उठाएं, फिर दोबारा बांध लें।",
              urdu: "وتر کی تیسری رکعت میں سورۃ الفاتحہ اور سورت تلاوت کرنے کے بعد، رکوع میں جانے سے پہلے 'اللہ اکبر' کہہ کر ہاتھ کانوں تک اٹھائیں اور دوبارہ باندھ لیں۔"
            }
          },
          recitation: RECITATIONS.qunoot,
          instruction: {
            hinglish: "Haath baandh kar Dua-e-Qunoot padhein, phir 'Allahu Akbar' keh kar Ruku mein jayein.",
            hindi: "हाथ बांधकर दुआ-ए-क़ुनूत पढ़ें, फिर 'अल्लाहु अकबर' कहकर रुकूअ में जाएं।",
            urdu: "ہاتھ باندھ کر دعائے قنوت پڑھیں، پھر 'اللہ اکبر' کہہ کر رکوع میں جائیں۔"
          },
          specialNote: {
            hinglish: "Agar kisi ko Dua-e-Qunoot yaad na ho toh wo 'Rabbana aatina fiddunya hasanatan...' ya 3 martaba 'Allahummaghfir li' padh sakta hai jab tak Dua-e-Qunoot yaad na ho jaye.",
            hindi: "अगर किसी को दुआ-ए-क़ुनूत याद न हो तो वो 'रब्बना आतीना फिद-दुनिया...' या 3 बार 'अल्लाहुम्मग़फ़िर ली' पढ़ सकता है जब तक दुआ-ए-क़ुनूत याद न हो।",
            urdu: "اگر کسی کو دعائے قنوت یاد نہ ہو تو وہ 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً' یا ۳ مرتبہ 'اللَّهُمَّ اغْفِرْ لِي' پڑھ سکتا ہے جب تک دعائے قنوت یاد نہ ہو جائے۔"
          }
        }
      }
    ])
  }
];

export const DISCLAIMER_TEXT = {
  hinglish: "Namaz ke tareeqe mein madhhab aur scholarly tradition ke mutabiq kuch differences ho sakte hain. Yeh website basic learning ke liye hai. Detailed guidance ke liye qualified local scholar se consult karein.",
  hindi: "नमाज़ के तरीके में मज़हब और विद्वानों की परंपरा के अनुसार कुछ अंतर हो सकते हैं। यह वेबसाइट बुनियादी सीखने के लिए है। विस्तृत मार्गदर्शन के लिए योग्य स्थानीय विद्वान (आलिम) से संपर्क करें।",
  urdu: "نماز کے طریقے میں فقہی مذاہب اور علمی روایات کے مطابق کچھ جزوی اختلافات ہو سکتے ہیں۔ یہ ویب سائٹ بنیادی تعلیم کے لیے ہے۔ تفصیلی رہنمائی کے لیے اپنے مستند مقامی علماء سے رجوع کریں۔"
};
