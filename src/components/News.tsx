'use client';

import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const allNews = [
  { 
    id: 1,
    title: "Cara Menenangkan Pikiran Saat Overthinking", 
    cat: "Ketenangan", 
    img: "/blog1.png",
    desc: "Panduan sederhana untuk menenangkan pikiran saat overthinking dengan napas, kesadaran tubuh, dan langkah kecil yang membumi.",
    content: (
      <>
        <p className="text-xl md:text-2xl font-serif text-brand-light leading-snug drop-shadow-sm mb-8">
          Di dunia yang terus bergerak, berhenti sejenak bukanlah tanda kelemahan, melainkan sebuah tindakan perlawanan yang membutuhkan keberanian absolut. Tulisan ini adalah lorong menuju pembersihan mental.
        </p>
        <p>
          Ada saat-saat ketika pikiran terasa terlalu ramai. Satu hal dipikirkan berulang-ulang, lalu berkembang menjadi banyak kemungkinan, banyak ketakutan, dan banyak skenario yang belum tentu terjadi. Tubuh ada di sini, tetapi pikiran seperti berlari ke mana-mana. Inilah yang sering kita sebut overthinking.
        </p>
        <p>
          Masalahnya, overthinking tidak selalu datang karena kita lemah. Kadang ia muncul karena kita terlalu lama menahan beban, terlalu sering memikirkan semuanya sendirian, atau terlalu takut membuat kesalahan. Pikiran lalu mencoba melindungi kita dengan cara yang justru melelahkan.
        </p>
        <p>
          Langkah pertama untuk menenangkan overthinking bukan memaksa pikiran diam. Justru, semakin dilawan, sering kali ia semakin keras. Yang lebih membantu adalah kembali ke tubuh.
        </p>
        <p>
          Coba tarik napas perlahan. Rasakan udara masuk dan keluar. Letakkan satu tangan di dada atau perut. Beri sinyal pada tubuh bahwa saat ini kamu aman. Bukan aman karena semua masalah sudah selesai, tetapi aman karena kamu sedang hadir untuk dirimu sendiri.
        </p>
        <p>
          Setelah itu, berhenti sejenak dari pertanyaan besar. Jangan langsung bertanya, “Bagaimana semua ini akan selesai?” Ganti dengan pertanyaan yang lebih lembut: “Apa yang sebenarnya sedang aku rasakan sekarang?” Kadang overthinking menutupi emosi yang belum diakui. Di balik pikiran yang berisik, bisa jadi ada takut, sedih, marah, kecewa, atau lelah.
        </p>
        <p>
          Tulislah apa yang kamu rasakan tanpa harus rapi. Tidak perlu indah. Tidak perlu benar. Tulis saja: “Aku takut…”, “Aku bingung…”, “Aku capek…”, “Aku kecewa…”. Saat emosi diberi ruang, pikiran biasanya mulai melunak.
        </p>
        <p>
          Lalu, batasi fokusmu. Saat overthinking datang, pikiran sering ingin menyelesaikan semuanya sekaligus. Padahal yang kita butuhkan hanyalah satu langkah berikutnya. Bukan seluruh jawaban. Hanya satu langkah kecil. Mungkin minum air. Mungkin mandi. Mungkin mengirim satu pesan penting. Mungkin istirahat dan tidur lebih cepat.
        </p>
        <p>
          Ketenangan tidak selalu datang dari jawaban besar. Kadang ia datang dari keputusan sederhana untuk berhenti menyeret diri ke mana-mana dan kembali ke momen ini.
        </p>
        <p>
          Ingat, kamu tidak harus langsung baik-baik saja. Kamu hanya perlu sedikit lebih hadir daripada sebelumnya. Dari sana, pikiran akan pelan-pelan belajar bahwa tidak semua hal harus dipikirkan sampai habis malam ini.
        </p>
        <div className="mt-12 pt-8 border-t border-brand-light/10 italic text-brand-accent">
          Saat pikiran terasa penuh, kembali dulu ke napasmu. Kadang ketenangan bukan ditemukan di luar, tapi saat kamu berhenti meninggalkan dirimu sendiri.
        </div>
      </>
    )
  },
  { 
    id: 2,
    title: "Mental Block: Kenapa Kamu Merasa Stuck?", 
    cat: "Filosofi", 
    img: "/blog2.png",
    desc: "Kenali apa itu mental block, bagaimana ia terbentuk, dan cara melepaskannya perlahan dengan kesadaran dan tindakan kecil.",
    content: (
      <>
        <p className="text-xl md:text-2xl font-serif text-brand-light leading-snug drop-shadow-sm mb-8">
          Pernah merasa seperti ingin maju, tetapi selalu ada sesuatu yang menahan? Itulah yang sering dirasakan sebagai mental block.
        </p>
        <p>
          Mental block bukan selalu soal malas. Sering kali, ia adalah bentuk perlindungan lama yang masih aktif di dalam diri. Mungkin dulu kamu pernah gagal lalu merasa sangat malu. Mungkin kamu terbiasa dikritik hingga takut salah. Mungkin kamu tumbuh dengan keyakinan bahwa kamu harus sempurna agar layak dihargai. Semua pengalaman itu bisa membentuk pola batin yang membuatmu berhenti sebelum benar-benar bergerak.
        </p>
        <p>
          Masalahnya, pola ini sering berjalan diam-diam. Dari luar terlihat seperti kurang disiplin. Padahal di dalam, ada konflik: satu bagian dirimu ingin bertumbuh, sementara bagian lain takut pada konsekuensi perubahan.
        </p>
        <p>
          Untuk melepaskan mental block, kamu tidak harus memaksa diri menjadi berani dalam semalam. Yang dibutuhkan pertama kali adalah kesadaran. Tanyakan dengan jujur: “Apa yang sebenarnya aku takutkan jika aku berhasil?” atau “Apa yang aku takutkan jika aku gagal?”
        </p>
        <p>
          Kadang jawaban itu mengejutkan. Ada orang yang takut dilihat. Ada yang takut tidak bisa mempertahankan hasil. Ada yang takut ditolak. Ada juga yang takut menjadi berbeda dari lingkungan sekitarnya.
        </p>
        <p>
          Setelah mengenali rasa takutnya, jangan buru-buru menghakimi. Ketakutan itu pernah punya alasan. Ucapkan dalam hati: “Aku mengerti kenapa aku merasa seperti ini.” Penerimaan seperti ini bukan membuatmu lemah. Justru ini langkah awal agar dirimu tidak lagi berperang dengan diri sendiri.
        </p>
        <p>
          Lalu, kecilkan langkah. Mental block sering terasa besar karena targetmu terasa terlalu besar. Jika menulis satu buku terasa menakutkan, mulai dari satu paragraf. Jika membuka usaha terasa berat, mulai dari satu ide yang ditulis jelas. Jika bicara di depan kamera terasa sulit, mulai dari merekam satu menit tanpa harus diunggah.
        </p>
        <p>
          Gerakan kecil memberi bukti baru pada sistem batinmu: aku bisa bergerak tanpa hancur. Aku bisa mulai tanpa harus sempurna.
        </p>
        <p>
          Pada akhirnya, melepaskan mental block bukan tentang menjadi orang baru. Ini tentang berhenti hidup di bawah kendali ketakutan lama. Kamu tidak harus menjadi tanpa takut. Kamu hanya perlu belajar melangkah meski takut itu masih ada.
        </p>
        <div className="mt-12 pt-8 border-t border-brand-light/10 italic text-brand-accent">
          Kadang yang menahanmu bukan kurangnya kemampuan, tapi luka lama yang belum diajak bicara. Saat kamu sadar, menerima, dan bergerak pelan-pelan, jalan itu mulai terbuka.
        </div>
      </>
    )
  },
  { 
    id: 3,
    title: "Manifestasi Bukan Sulap: Menyatukan Niat, Emosi, dan Tindakan", 
    cat: "Jurnal Praktik", 
    img: "/blog3.png",
    desc: "Manifestasi bukan sekadar berharap. Pelajari cara menyelaraskan niat, emosi, keyakinan, dan tindakan dalam kehidupan sehari-hari.",
    content: (
      <>
        <p className="text-xl md:text-2xl font-serif text-brand-light leading-snug drop-shadow-sm mb-8">
          Manifestasi bukan sekadar berharap. Ia adalah proses menyelaraskan apa yang kamu inginkan dengan apa yang kamu rasakan, apa yang kamu yakini, dan apa yang kamu lakukan setiap hari.
        </p>
        <p>
          Banyak orang tertarik pada manifestasi karena ingin hidupnya berubah. Itu wajar. Kita semua punya keinginan: hubungan yang lebih sehat, hidup yang lebih tenang, rezeki yang lebih baik, atau arah hidup yang lebih jelas. Namun manifestasi sering disalahpahami seolah-olah cukup dengan berharap kuat, lalu semuanya datang sendiri.
        </p>
        <p>
          Niat adalah awalnya. Kamu perlu tahu dengan jujur apa yang sebenarnya kamu inginkan. Bukan karena orang lain menganggap itu hebat, tapi karena itu memang selaras dengan hatimu. Niat yang jernih memberi arah. Tanpa arah, energi kita mudah tercerai-berai.
        </p>
        <p>
          Namun niat saja tidak cukup. Emosi juga berperan. Sering kali seseorang berkata ingin hidup tenang, tetapi setiap hari terus hidup dalam mode terburu-buru, membandingkan diri, dan menolak istirahat. Atau seseorang ingin relasi sehat, tetapi diam-diam masih percaya bahwa dirinya sulit dicintai. Di sinilah kita belajar bahwa apa yang kita rasakan secara konsisten memengaruhi cara kita hadir dalam hidup.
        </p>
        <p>
          Lalu ada keyakinan. Bukan keyakinan kosong, tetapi keyakinan yang lahir dari hubungan yang lebih sehat dengan diri sendiri. Keyakinan seperti, “Aku boleh bertumbuh,” “Aku layak menerima hal baik,” atau “Aku bisa menjalani proses ini pelan-pelan.” Keyakinan seperti ini membuat tindakan terasa lebih ringan karena hati tidak terus-menerus melawan langkahmu sendiri.
        </p>
        <p>
          Dan tentu saja, tindakan tetap penting. Manifestasi yang sehat tidak memisahkan batin dan realitas. Kamu boleh menulis afirmasi, berdoa, bermeditasi, atau membuat vision board. Tapi setelah itu, tetap ada langkah yang perlu dilakukan. Mengirim pesan. Membuat rencana. Menata rutinitas. Belajar hal baru. Mengambil keputusan. Menutup pola lama yang tidak lagi selaras.
        </p>
        <p>
          Manifestasi bukan soal memaksa semesta mengikuti kemauan kita. Lebih dalam dari itu, ini adalah praktik untuk menjadi versi diri yang lebih jernih, lebih sadar, dan lebih siap menerima hidup yang sedang kita bangun.
        </p>
        <p>
          Saat niatmu jernih, emosimu lebih stabil, keyakinanmu lebih sehat, dan tindakanmu konsisten, hidup mulai bergerak dengan cara yang berbeda. Bukan karena semuanya instan, tetapi karena kamu tidak lagi berjalan terpecah di dalam.
        </p>
        <div className="mt-12 pt-8 border-t border-brand-light/10 italic text-brand-accent">
          Manifestasi bukan tentang menunggu keajaiban turun dari langit. Ia dimulai saat dirimu, hatimu, and langkahmu berada di arah yang sama.
        </div>
      </>
    )
  }
];

export default function News({ dict }: { dict: any }) {
  const categories = [dict.all, ...Array.from(new Set(allNews.map(item => item.cat)))];
  const [selectedCategory, setSelectedCategory] = useState(dict.all);
  const [activeArticle, setActiveArticle] = useState<typeof allNews[0] | null>(null);

  const filteredNews = selectedCategory === dict.all 
    ? allNews 
    : allNews.filter(item => item.cat === selectedCategory);

  return (
    <section className="py-32 px-6 bg-brand-dark text-brand-light border-y border-brand-light/10 relative" id="news">
      <div className="max-w-7xl mx-auto">
        
        {/* Detail Reader View Overlay */}
        <AnimatePresence>
          {activeArticle && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[100] bg-brand-dark flex flex-col pt-32 px-6 pb-24 overflow-y-auto"
            >
              <div className="max-w-4xl mx-auto w-full relative">
                <button 
                  onClick={() => setActiveArticle(null)}
                  className="sticky top-6 z-50 mb-12 flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-light/60 hover:text-brand-accent transition-colors"
                >
                  <ArrowRight className="w-5 h-5 rotate-180" />
                  <span>{dict.backToJournal}</span>
                </button>

                <div className="flex items-center space-x-4 mb-8">
                  <span className="font-serif text-brand-accent text-xl italic drop-shadow-sm">{dict.catalog} {activeArticle.id < 10 ? `0${activeArticle.id}` : activeArticle.id}</span>
                  <span className="w-12 h-[1px] bg-brand-light/20" />
                  <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-light/70">{activeArticle.cat}</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-[80px] font-serif font-bold tracking-tighter leading-[1.05] uppercase mb-16 text-brand-light">
                  {activeArticle.title}
                </h2>

                <div className="w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-16 border border-brand-light/10 relative">
                  <img src={activeArticle.img} alt={activeArticle.title} className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.3]" />
                </div>

                <div className="prose prose-lg prose-invert max-w-2xl mx-auto font-sans text-brand-light/80 leading-relaxed mb-32">
                  {activeArticle.content}
                </div>

                {/* DEDICATED CTA: Newsletter Subscription */}
                <div className="max-w-3xl mx-auto border-t border-b border-brand-light/10 py-24 my-24 relative overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(197,168,128,1) 10px, rgba(197,168,128,1) 11px)' }} />
                  
                  <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-light">
                        {dict.newsletterTitle} <span className="text-brand-accent italic">{dict.newsletterHighlight}</span>
                      </h3>
                      <p className="text-brand-light/60 font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                        {dict.newsletterDesc}
                      </p>
                    </div>

                    <div className="w-full md:w-auto flex-1">
                      <form className="relative group flex flex-col sm:flex-row gap-4 w-full" onSubmit={(e) => { e.preventDefault(); alert(dict.alert); }}>
                        <div className="relative flex-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-light/40 absolute -top-5 left-0 transition-colors group-focus-within:text-brand-accent">
                            {dict.emailLabel}
                          </label>
                          <input 
                            type="email" 
                            placeholder={dict.emailPlaceholder} 
                            className="w-full bg-transparent border-b-2 border-brand-light/20 py-3 text-lg font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20 text-brand-light"
                            required
                          />
                        </div>
                        <button type="submit" className="flex items-center justify-center px-8 py-3 bg-brand-light text-brand-dark rounded-none font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-brand-dark transition-colors duration-300">
                          {dict.subscribe}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-32">
                  <button 
                    onClick={() => setActiveArticle(null)}
                    className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand-accent hover:text-brand-light transition-colors"
                  >
                    <ArrowRight className="w-5 h-5 rotate-180" />
                    <span>{dict.backToCatalog}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {!activeArticle && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8"
              >
                <h2 className="text-6xl md:text-[90px] font-serif font-bold tracking-tighter uppercase leading-none self-start relative z-10 w-full mb-12 border-b border-brand-light/10 pb-8">
                  <span className="text-brand-light/10 absolute -top-8 left-0 text-8xl md:text-[140px] pointer-events-none tracking-widest whitespace-nowrap">JURNAL</span>
                  {dict.journalTitle} <br/><span className="text-brand-accent">{dict.journalHighlight}</span>
                </h2>
                
                <div className="flex flex-wrap gap-4 w-full uppercase tracking-[0.2em] text-[10px] font-bold">
                  {categories.map((cat, idx) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`relative group transition-colors px-4 py-2 flex items-center border border-brand-light/10 rounded-full hover:border-brand-accent/50 ${
                        selectedCategory === cat 
                          ? "bg-brand-accent text-brand-dark" 
                          : "bg-transparent text-brand-light hover:text-brand-accent"
                      }`}
                    >
                      <span className={`mr-2 font-serif italic text-sm ${selectedCategory === cat ? "text-brand-dark/50" : "text-brand-light/30"}`}>
                        0{idx + 1}
                      </span>
                      {cat}
                    </button>
                  ))}
                </div>
              </motion.div>

              <div className="flex flex-col border-t border-brand-light/10 mt-8">
                <AnimatePresence mode="popLayout">
                  {filteredNews.map((item, index) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => setActiveArticle(item)}
                      className="group flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-24 py-16 md:py-24 border-b border-brand-light/10 cursor-pointer"
                    >
                      {/* The Content */}
                      <div className={`flex-1 flex flex-col justify-center ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="flex items-center space-x-4 mb-6">
                          <span className="font-serif text-brand-light/30 text-xl italic drop-shadow-sm">{dict.catalog} {item.id < 10 ? `0${item.id}` : item.id}</span>
                          <span className="w-12 h-[1px] bg-brand-light/20" />
                          <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-accent">{item.cat}</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.15] tracking-tighter text-brand-light group-hover:text-brand-accent transition-colors duration-500 mb-10">
                          {item.title}
                        </h3>
                        
                        <div className="flex items-center space-x-4 text-xs font-bold uppercase tracking-widest text-brand-light/50 group-hover:text-brand-light transition-colors">
                          <span className="w-12 h-12 rounded-full border border-brand-light/20 flex items-center justify-center group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark transition-all duration-700 shadow-sm">
                            <ArrowUpRight className="w-5 h-5 group-hover:animate-pulse group-hover:rotate-12 transition-transform" />
                          </span>
                          <span>{dict.readManuscript}</span>
                        </div>
                      </div>

                      {/* The Image (Arch) */}
                      <div className={`w-full md:w-[40%] xl:w-[35%] aspect-[3/4] rounded-[200px_200px_0_0] overflow-hidden bg-brand-light/5 relative ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="absolute inset-0 bg-brand-accent/20 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-1000" />
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-cover filter grayscale contrast-125 sepia-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out origin-bottom" 
                        />
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
              
              {filteredNews.length === 0 && (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="py-20 text-center border border-dashed border-brand-light/20 rounded-2xl"
                >
                  <p className="text-lg font-serif italic text-brand-light/60">{dict.empty}</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
