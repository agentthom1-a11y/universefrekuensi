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

    return { success: true, answer: text || 'The Oracle is silent...' };
  } catch (error) {
    console.error('AI Error:', error);
    return { error: 'Failed to connect to Oracle' };
  }
}
