export type Language = 'hinglish' | 'hindi' | 'urdu';

export type PrayerId = 'fajr' | 'zuhr' | 'asr' | 'maghrib' | 'isha';

export type RakahType = 'sunnah_muakkadah' | 'fard' | 'sunnah_ghair_muakkadah' | 'nafl' | 'witr';

export interface LocalizedText {
  hinglish: string;
  hindi: string;
  urdu: string;
}

export interface RecitationItem {
  id: string;
  name: LocalizedText;
  arabic: string;
  hinglish: string;
  hinglishMeaning: string;
  hindi: string;
  hindiMeaning: string;
  urdu: string;
  urduMeaning: string;
  repeatCount?: number;
  note?: LocalizedText;
}

export interface PracticalDetailSection {
  heading: LocalizedText;
  points: LocalizedText[];
  sampleWords?: {
    arabic?: string;
    hinglish: string;
    hindi: string;
    urdu: string;
  };
}

export interface NamazStep {
  id: string;
  stepNumber: number;
  title: LocalizedText;
  posture: {
    name: LocalizedText;
    desc: LocalizedText;
  };
  recitation?: RecitationItem;
  additionalRecitations?: RecitationItem[];
  instruction: LocalizedText;
  specialNote?: LocalizedText;
  practicalDetails?: PracticalDetailSection[];
}

export interface RakahBreakdownItem {
  type: RakahType;
  count: number;
  name: LocalizedText;
  status: LocalizedText; // e.g. "Sunnah Mu'akkadah", "Farz (Compulsory)"
}

export interface RakahVisualFlow {
  rakahNumber: number;
  title: LocalizedText;
  type: LocalizedText;
  steps: string[];
  summary: LocalizedText;
}

export interface PrayerData {
  id: PrayerId;
  name: LocalizedText;
  arabicName: string;
  totalRakahs: number;
  timingDesc: LocalizedText;
  rakahsBreakdown: RakahBreakdownItem[];
  intro: LocalizedText;
  rakahStructure: RakahVisualFlow[];
  steps: NamazStep[];
}
