'use client';

import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Send, Quote, RefreshCcw } from "lucide-react";
import React, { useActionState, useRef, useEffect } from "react";
import { askOracle } from "@/app/actions";

import { StoicAIDictionary } from "@/types/dictionary";

export default function StoicAI({ dict, lang }: { dict: StoicAIDictionary, lang: string }) {
  const [state, formAction, isPending] = useActionState(askOracle, null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      // Smooth scroll to answer if needed
    }
  }, [state]);

  return (
    <section id="stoic-ai" className="py-32 px-6 bg-brand-light relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-dark text-brand-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-lg shadow-brand-dark/10">
            <Sparkles className="w-3 h-3" />
            <span>{dict.badge}</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter uppercase mb-6 text-brand-dark">
            {dict.title} <span className="text-brand-accent italic underline decoration-brand-accent/20 underline-offset-8">{dict.titleHighlight}</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-dark/60 max-w-2xl mx-auto font-medium leading-relaxed">
            {dict.desc}
          </p>
        </motion.div>

        <div className="bg-white/40 backdrop-blur-xl border border-brand-dark/5 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-brand-dark/5 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <form ref={formRef} action={formAction} className="relative">
            <input type="hidden" name="lang" value={lang} />
            <div className="relative mb-8">
              <textarea 
                name="query"
                placeholder={dict.inputPlaceholder}
                className="w-full bg-brand-dark/5 border-2 border-transparent focus:border-brand-accent/30 rounded-3xl p-6 md:p-8 text-xl font-medium text-brand-dark placeholder:text-brand-dark/20 focus:outline-none transition-all min-h-[160px] resize-none shadow-inner"
                required
                disabled={isPending}
              />
              <div className="absolute bottom-6 right-6 flex items-center space-x-4">
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="bg-brand-dark text-brand-accent p-4 rounded-2xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:scale-100 shadow-xl shadow-brand-dark/20 flex items-center space-x-3 group/btn"
                >
                  <span className="font-bold uppercase tracking-widest text-[10px] pl-2">
                    {isPending ? dict.btnAsking : dict.btnAsk}
                  </span>
                  {isPending ? (
                    <RefreshCcw className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  )}
                </button>
              </div>
            </div>
          </form>

          <AnimatePresence mode="wait">
            {state?.answer && (
              <motion.div 
                key="answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="pt-8 border-t border-brand-dark/5">
                  <div className="flex items-start space-x-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-accent/20 flex items-center justify-center flex-shrink-0 text-brand-accent">
                      <Quote className="w-6 h-6 rotate-180" />
                    </div>
                    <div className="flex-1">
                      <div className="prose prose-brand max-w-none">
                        {state.answer.split('\n\n').map((para: string, i: number) => (
                          <p key={i} className="text-brand-dark/80 text-lg leading-relaxed mb-4 font-serif italic">
                            {para}
                          </p>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-dark/30">
                        <span>The Oracle has spoken.</span>
                        <div className="flex items-center space-x-2">
                          <span className="w-8 h-[1px] bg-brand-dark/10" />
                          <span>Universe Frekuensi</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {state?.error && (
              <motion.div 
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-8 text-center text-red-500 font-bold uppercase tracking-widest text-xs"
              >
                {dict.error}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <p className="mt-12 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-brand-dark/20">
          {dict.note}
        </p>
      </div>
    </section>
  );
}
