'use server';

import { revalidatePath } from 'next/cache';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY || '',
});


export async function subscribeToNewsletter(_prevState: unknown, formData: FormData) {
  const email = formData.get('email');
  
  if (!email || typeof email !== 'string') {
    return { error: 'Invalid email' };
  }

  // Simulate database or API call
  console.log(`Subscribing ${email} to newsletter...`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
}

export async function claimLeadMagnet(_prevState: unknown, formData: FormData) {
  const email = formData.get('email');
  const type = formData.get('type') || 'journal'; // 'journal' or 'audio'

  if (!email || typeof email !== 'string') {
    return { error: 'Invalid email' };
  }

  // Simulate database or API call
  console.log(`Sending ${type} lead magnet to ${email}...`);
  await new Promise((resolve) => setTimeout(resolve, 1000));

  revalidatePath('/');
  return { success: true };
}

export async function askOracle(_prevState: unknown, formData: FormData) {
  const query = formData.get('query');
  const lang = formData.get('lang') || 'id';

  if (!query || typeof query !== 'string') {
    return { error: 'Query is required' };
  }

  const normalizedQuery = query.toLowerCase();
  let fallbackAnswer = '';

  if (lang === 'en') {
    if (normalizedQuery.match(/(stress|pressure|anxious|overwhelm|tired|exhausted|burnout|sad)/)) {
      fallbackAnswer = "In times of great stress, remember that you are but a single node in the vast web of nature. What disturbs you is not the external event itself, but your internal judgment about it. You have the power to wipe away this judgment at any moment.\n\nTurn your gaze inward. Draw a deep breath, and let the storm rage outside while your center remains completely still. Control what is within; release what is without.\n\nToday, choose to do less but do it with absolute clarity. That is where your true power lies.";
    } else if (normalizedQuery.match(/(fear|scared|afraid|worry|future|doubt|uncertain)/)) {
      fallbackAnswer = "We suffer more often in imagination than in reality. The future you dread so deeply may never arrive; and even if it does, you will face it with the same reason and strength that has brought you safely to this day.\n\nDo not let your mind run ahead of your body. Reclaim the present moment—it is the only territory you truly own and have power over.\n\nAsk yourself: 'Is this problem something I can change right now?' If yes, act with calm courage. If no, accept it as the natural course of the universe.";
    } else if (normalizedQuery.match(/(sad|grief|pain|heart|love|broken|hurt|regret|past)/)) {
      fallbackAnswer = "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart. Life is too short to spend it wishing for a different past.\n\nEvery obstacle is an opportunity to practice virtue: patience in pain, grace in sorrow, and strength in weakness. What feels like a wound today is the chisel shaping your character.\n\nBreathe out the regret. You are here now, and this moment is completely clean. Let the past remain in the past.";
    } else {
      fallbackAnswer = "Look within. Within is the fountain of good, and it will ever bubble up, if you will ever dig. External things cannot touch your soul; they have no access to it, nor can they force any opinion upon you.\n\nYour quiet mind is your greatest sanctuary. When the world feels too loud, retreat into this private space. You do not need to explain yourself to anyone.\n\nBe content with who you are, and walk your path with quiet dignity.";
    }
  } else {
    if (normalizedQuery.match(/(stres|tegang|cemas|lelah|capek|penat|beban|berat|pusing|strees)/)) {
      fallbackAnswer = "Di saat stres melanda, ingatlah bahwa dirimu hanyalah satu simpul kecil di jaring alam semesta yang luas. Yang mengganggumu bukanlah peristiwanya, melainkan penilaianmu tentang peristiwa itu. Dan kamu memiliki kuasa untuk menghapus penilaian itu kapan saja.\n\nTarik napas dalam-dalam, dan biarkan badai mengamuk di luar sementara pusat batinmu tetap diam tak tergoyahkan. Kendalikan apa yang ada di dalam; lepaskan apa yang di luar.\n\nHari ini, pilihlah untuk melakukan lebih sedikit hal, tetapi lakukanlah dengan kejernihan penuh. Di sanalah kekuatan sejatimu berada.";
    } else if (normalizedQuery.match(/(takut|khawatir|cemas|ragu|depan|nanti|gagal)/)) {
      fallbackAnswer = "Kita lebih sering menderita dalam imajinasi kita daripada dalam kenyataan. Masa depan yang kamu takuti mungkin tidak pernah datang; dan jika datang, kamu akan menghadapinya dengan akal budi dan kekuatan yang sama yang membawamu sampai ke titik ini.\n\nJangan biarkan pikiranmu berlari mendahului tubuhmu. Rebut kembali momen ini—ini adalah satu-satunya wilayah yang benar-benar kamu kuasai dan miliki kuasanya.\n\nTanyakan pada diri sendiri: 'Apakah masalah ini bisa kuubah saat ini juga?' Jika ya, bertindaklah dengan keberanian yang tenang. Jika tidak, terimalah ia sebagai bagian dari jalannya semesta.";
    } else if (normalizedQuery.match(/(sedih|kecewa|sakit|luka|patah|dulu|menyesal|sesal)/)) {
      fallbackAnswer = "Terimalah hal-hal yang ditakdirkan untukmu, dan cintailah orang-orang yang dipertemukan takdir denganmu, lakukanlah dengan sepenuh himu. Hidup ini terlalu singkat untuk dihabiskan dengan mengharapkan masa lalu yang berbeda.\n\nSetiap rintangan adalah kesempatan untuk melatih kebajikan: kesabaran dalam rasa sakit, keanggunan dalam kesedihan, dan kekuatan dalam kelemahan. Apa yang terasa sebagai luka hari ini adalah pahatan yang membentuk karaktermu.\n\nHembuskan napas penyesalanmu. Kamu ada di sini sekarang, dan momen ini sepenuhnya bersih. Biarkan yang lalu tetap berlalu.";
    } else {
      fallbackAnswer = "Melihatlah ke dalam diri. Di dalam terdapat mata air kebaikan, dan ia akan terus memancar jika kamu terus menggali. Hal-hal eksternal tidak dapat menyentuh jiwamu; mereka tidak memiliki akses ke sana, juga tidak dapat memaksakan opini padamu.\n\nPikiran yang tenang adalah tempat perlindungan terbesarmu. Ketika dunia terasa terlalu bising, mundur lah ke dalam ruang pribadi ini. Kamu tidak perlu menjelaskan dirimu kepada siapa pun.\n\nCukuplah puas dengan dirimu apa adanya, dan jalani jalanmu dengan martabat yang tenang.";
    }
  }

  // If API key is not configured, return fallback immediately to avoid latency and console error
  if (!process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    // Simulate natural thinking delay for premium feel
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, answer: fallbackAnswer };
  }

  try {
    const systemPrompt = lang === 'en' 
      ? "You are a Stoic Oracle at Universe Frekuensi. Provide wise, calm, and practical stoic advice (Marcus Aurelius, Seneca, Epictetus style) to the user's problem. Keep it poetic but grounded. Maximum 3 paragraphs. Respond in English."
      : "Anda adalah Oracle Stoik di Universe Frekuensi. Berikan nasihat stoikisme yang bijak, tenang, dan praktis (gaya Marcus Aurelius, Seneca, Epictetus) untuk masalah pengguna. Buatlah puitis namun tetap membumi. Maksimal 3 paragraf. Jawab dalam Bahasa Indonesia.";

    const result = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: query,
      config: {
        systemInstruction: systemPrompt,
      },
    });
    
    const text = result.text;

    return { success: true, answer: text || fallbackAnswer };
  } catch (error) {
    console.error('AI Error, falling back to local stoic wisdom:', error);
    return { success: true, answer: fallbackAnswer };
  }
}
