import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowRight, BookHeart, PlayCircle } from "lucide-react";
import React, { useRef, useState } from "react";

function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-brand-dark/10 bg-brand-light/90 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-serif text-2xl font-bold tracking-widest text-brand-dark uppercase hover-glitch">
          Universe<span className="text-brand-accent font-light mx-1 glitch-phi">Φ</span>Frekuensi
        </div>
        <div className="hidden md:flex items-center space-x-12 text-sm font-semibold uppercase tracking-wide text-brand-dark">
          <a href="#manifesto" className="hover:text-brand-accent transition-colors">Manifesto</a>
          <a href="#services" className="hover:text-brand-accent transition-colors">Pilar Kami</a>
          <a href="#news" className="hover:text-brand-accent transition-colors">Jurnal</a>
        </div>
        <a href="#lead-magnet" className="px-6 py-3 bg-brand-dark text-brand-accent rounded-full text-sm font-bold uppercase tracking-wide hover:bg-brand-accent hover:text-brand-dark transition-all hidden md:block">
          Mulai Sekarang
        </a>
      </div>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  // Multiple parallax layers for depth
  const deepBackgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const deepBackgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative pt-48 pb-24 px-6 min-h-screen flex flex-col justify-center overflow-hidden bg-brand-light">
      
      {/* Neoclassical CSS Columns (Abstract Structural Pillars) */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/10 to-brand-dark/0 pointer-events-none" />
      <div className="absolute left-8 md:left-16 lg:left-28 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/5 to-brand-dark/0 pointer-events-none hidden md:block" />
      
      {/* Deepest Parallax Layer - Silhouette/Background Character */}
      <motion.div 
        style={{ y: deepBackgroundY, scale: deepBackgroundScale }}
        className="absolute right-[10%] md:right-[20%] bottom-0 top-[10%] w-[90%] md:w-[70%] lg:w-[60%] opacity-10 pointer-events-none origin-bottom mix-blend-multiply blur-[2px]"
      >
        <img 
          src="/hero_deep.png" 
          alt="Deep Background Ancient Character"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-110"
          style={{ maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)", WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)" }}
        />
      </motion.div>

      {/* Parallax Ancient Statue Background - Far Layer */}
      <motion.div 
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute right-0 bottom-0 top-0 w-[80%] md:w-[60%] lg:w-[50%] opacity-20 md:opacity-40 pointer-events-none origin-bottom mix-blend-multiply"
      >
        <img 
          src="/logo.jpeg" 
          alt="Ancient Greek Statue"
          className="w-full h-full object-cover object-right grayscale contrast-125 brightness-110"
          style={{ maskImage: "linear-gradient(to right, transparent, black 80%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 80%)" }}
        />
      </motion.div>

      {/* Sun/Gold Abstract Flare - Mid Layer */}
      <motion.div
        style={{ y: foregroundY }}
        className="absolute top-[20%] right-[10%] w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none mix-blend-overlay"
      />

      {/* Floating Ambient Dust Particles */}
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[20%] w-2 h-2 rounded-full bg-brand-accent/40 blur-[1px]" 
      />
      <motion.div 
        animate={{ y: [0, 30, 0], opacity: [0.2, 0.6, 0.2] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[60%] left-[10%] w-3 h-3 rounded-full bg-brand-accent/30 blur-[2px]" 
      />
      <motion.div 
        animate={{ y: [0, -40, 0], x: [0, 20, 0], opacity: [0.1, 0.5, 0.1] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] right-[30%] w-4 h-4 rounded-full bg-brand-accent/20 blur-[3px]" 
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-brand-accent font-bold uppercase tracking-widest mb-6 flex items-center space-x-3"
        >
          <span className="w-8 h-[1px] bg-brand-accent inline-block" />
          <span>Filosofi & Ruang Nyaman</span>
        </motion.p>
        <motion.div style={{ y: textY, opacity }}>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[4rem] sm:text-6xl md:text-8xl lg:text-[7rem] font-serif font-medium tracking-tighter leading-[0.9] text-brand-dark max-w-5xl uppercase"
          >
            Temukan <br /> 
            <span className="text-brand-accent italic font-light">Ruang Sepi</span> <br/>
            Di Tengah <br/>
            Bisingnya Dunia.
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <a href="#lead-magnet" className="group relative inline-flex items-center justify-center px-10 py-5 bg-brand-dark text-brand-accent rounded-full overflow-hidden transition-all duration-500 hover:bg-brand-accent hover:text-brand-dark hover:shadow-[0_0_40px_rgba(197,168,128,0.4)] border border-brand-accent/20">
              <span className="font-serif font-bold uppercase tracking-widest text-sm relative z-10">Mulai Perjalananmu</span>
              <ArrowRight className="w-5 h-5 ml-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { label: "Pembaca Aktif", value: "10k+" },
    { label: "Jurnal Publikasi", value: "100+" },
    { label: "Afirmasi Audio", value: "50+" },
    { label: "Kepuasan", value: "99%" },
  ];

  return (
    <section className="py-24 px-6 border-t border-brand-dark/10 bg-brand-dark text-brand-light relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-brand-light/10">
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="pl-6 first:pl-0 flex flex-col justify-center"
            >
              <h3 className="text-5xl md:text-6xl font-serif font-medium tracking-tighter mb-4 text-brand-accent">{stat.value}</h3>
              <p className="text-brand-light/60 font-semibold uppercase tracking-widest text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { title: "Rutinitas Pagi", desc: "Bangun niat sebelum dunia mengambil alih fokusmu." },
    { title: "Refleksi Malam", desc: "Berdamai dengan hari ini, melepaskan beban batin." },
    { title: "Fokus & Flow", desc: "Metode praktis untuk bekerja tanpa distraksi." },
  ];

  return (
    <section className="py-32 px-6 bg-brand-light relative overflow-hidden" id="services">
      {/* Background Shimmer Effect */}
      <motion.div 
        animate={{ backgroundPosition: ["100% 0%", "-100% 0%"] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }} 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-accent/5 to-transparent bg-[length:200%_100%] pointer-events-none mix-blend-overlay" 
      />
      
      {/* Ancient Greek Meander/Pillar Subtle Motifs */}
      <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/10 to-brand-dark/0 pointer-events-none" />
      <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-dark/0 via-brand-dark/10 to-brand-dark/0 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter uppercase max-w-2xl px-4 lg:px-0">
            Pilar <br/><span className="text-brand-accent italic font-light drop-shadow-sm">Ketenangan</span>
          </h2>
          <p className="text-brand-dark/80 font-medium max-w-sm text-lg leading-relaxed mix-blend-multiply px-4 lg:px-0">
            Kami mengubah konsep mindfulness menjadi kebiasaan praktis yang elegan dan menenangkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 border-t-2 border-b-2 border-brand-dark/10">
          {services.map((srv, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group py-12 flex flex-col md:flex-row justify-between items-start md:items-center cursor-pointer hover:bg-brand-dark/[0.03] transition-all duration-500 px-6 lg:px-12 rounded-xl mb-1 hover:-translate-y-2 border-b border-brand-dark/5 last:border-b-0"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold tracking-tight mb-3 group-hover:translate-x-4 group-hover:text-brand-accent transition-all duration-500">{srv.title}</h3>
                <p className="text-brand-dark/60 font-sans font-medium max-w-md group-hover:translate-x-4 transition-transform delay-75 duration-500">{srv.desc}</p>
              </div>
              <div className="mt-6 md:mt-0 w-12 h-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-dark group-hover:border-brand-dark transition-all duration-500 shadow-sm group-hover:shadow-brand-accent/30 group-hover:shadow-[0_0_15px_rgba(197,168,128,0.4)]">
                <ArrowUpRight className="w-5 h-5 text-brand-dark transition-all duration-300 group-hover:text-brand-accent group-hover:animate-pulse group-hover:rotate-12 group-hover:scale-110" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Spheres() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="py-24 px-6 bg-brand-light" id="manifesto">
      <div className="max-w-7xl mx-auto">
        <div className="w-full aspect-video rounded-3xl overflow-hidden relative group border border-brand-dark/10 shadow-2xl">
          <motion.img 
            style={{ y: yImage, scale: 1.1 }}
            src="/manifesto.png" 
            alt="Ancient Philosophy" 
            className="w-full h-full object-cover origin-center grayscale filter contrast-125 sepia-[0.3]"
          />
          <div className="absolute inset-0 bg-brand-dark/40 flex items-center justify-center mix-blend-multiply transition-colors group-hover:bg-brand-dark/20" />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.h2 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-5xl md:text-8xl font-serif tracking-tighter text-brand-light uppercase text-center backdrop-blur-md px-12 py-6 rounded-3xl bg-brand-dark/10 border border-brand-light/20 drop-shadow-2xl"
            >
              Reset Mindset.
            </motion.h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function News() {
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
            Manifestasi bukan tentang menunggu keajaiban turun dari langit. Ia dimulai saat dirimu, hatimu, dan langkahmu berada di arah yang sama.
          </div>
        </>
      )
    }
  ];

  const categories = ["Semua", ...Array.from(new Set(allNews.map(item => item.cat)))];
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [activeArticle, setActiveArticle] = useState<typeof allNews[0] | null>(null);

  const filteredNews = selectedCategory === "Semua" 
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
                  <span>Kembali ke Jurnal</span>
                </button>

                <div className="flex items-center space-x-4 mb-8">
                  <span className="font-serif text-brand-accent text-xl italic drop-shadow-sm">Katalog {activeArticle.id < 10 ? `0${activeArticle.id}` : activeArticle.id}</span>
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
                  {/* Subtle background element */}
                  <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(197,168,128,1) 10px, rgba(197,168,128,1) 11px)' }} />
                  
                  <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-3xl md:text-5xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-light">
                        Surat <span className="text-brand-accent italic">Elektronik.</span>
                      </h3>
                      <p className="text-brand-light/60 font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                        Dapatkan wawasan mendalam, tips eksklusif, dan akses lebih awal ke manuskrip filosofi terbaru kami. Jangan biarkan layar ini menjadi akhir perjalanan Anda.
                      </p>
                    </div>

                    <div className="w-full md:w-auto flex-1">
                      <form className="relative group flex flex-col sm:flex-row gap-4 w-full" onSubmit={(e) => { e.preventDefault(); alert("Subscribed/Berlangganan!"); }}>
                        <div className="relative flex-1">
                          <label className="text-[10px] font-bold uppercase tracking-widest text-brand-light/40 absolute -top-5 left-0 transition-colors group-focus-within:text-brand-accent">
                            Alamat Email Tertuju
                          </label>
                          <input 
                            type="email" 
                            placeholder="anda@email.com" 
                            className="w-full bg-transparent border-b-2 border-brand-light/20 py-3 text-lg font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20 text-brand-light"
                            required
                          />
                        </div>
                        <button type="submit" className="flex items-center justify-center px-8 py-3 bg-brand-light text-brand-dark rounded-none font-bold uppercase tracking-widest text-xs hover:bg-brand-accent hover:text-brand-dark transition-colors duration-300">
                          Berlangganan
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
                    <span>Kembali ke Katalog Jurnal</span>
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
                  Tulisan <br/><span className="text-brand-accent">Terbaru</span>
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
                          <span className="font-serif text-brand-light/30 text-xl italic drop-shadow-sm">Katalog {item.id < 10 ? `0${item.id}` : item.id}</span>
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
                          <span>Baca Manuskrip</span>
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
                  <p className="text-lg font-serif italic text-brand-light/60">Tidak ada jurnal untuk saat ini.</p>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function LeadMagnet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="lead-magnet" className="bg-brand-light border-y border-brand-dark/10">
      <div className="flex flex-col lg:flex-row min-h-[70vh]">
        
        {/* Left Side: Pitch (Dark & Confident) */}
        <div className="flex-1 bg-brand-dark text-brand-light p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Vertical rail text */}
          <div className="absolute left-6 top-12 bottom-12 hidden md:flex items-center">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-brand-light/30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Esoterik · Eksklusif
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pl-12 max-w-2xl relative z-10"
          >
            <h2 className="text-6xl md:text-[80px] lg:text-[112px] font-serif font-bold tracking-tighter leading-[0.85] uppercase mb-8">
              Panduan <br/> <span className="text-brand-accent">Jurnal.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-brand-light/70 max-w-lg mb-8 leading-relaxed">
              30+ hari prompt refleksi ala stoikisme untuk menata ulang pikiran dan mengembalikan fokusmu di tengah kebisingan.
            </p>
            
            {/* Feature Bubbles - HUPR/SaaS Polish twist */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-2.5 rounded-full border border-brand-light/20 text-sm font-bold uppercase tracking-wider text-brand-accent">
                #MindsetReset
              </span>
              <span className="px-5 py-2.5 rounded-full border border-brand-light/20 text-sm font-bold uppercase tracking-wider text-brand-light">
                + Audio Afirmasi
              </span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Action (Light & Forms) */}
        <div className="flex-1 bg-brand-light p-12 md:p-24 flex flex-col justify-center items-center lg:items-start relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto lg:mx-0"
          >
            <div className="w-20 h-20 rounded-full border border-brand-dark flex items-center justify-center mb-12 bg-brand-accent/20 text-brand-accent shadow-inner">
              <BookHeart className="w-8 h-8" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-dark">
              {isSuccess ? "Berhasil Diklaim" : "Mulai Perjalananmu"}
            </h3>
            <p className="text-brand-dark/70 font-medium mb-12">
              {isSuccess 
                ? "Jurnal panduan telah dikirimkan ke kotak masuk Anda. Silakan putuskan segala koneksi luar dan mulai membaca." 
                : "Dapatkan jurnal eksklusif ini langsung ke kotak masuk email Anda. 100% bebas biaya selamanya."}
            </p>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8 w-full" 
                  onSubmit={handleSubmit}
                >
                  <div className="relative group">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-dark/50 absolute -top-6 left-0 transition-colors group-focus-within:text-brand-accent">
                      Alamat Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="anda@email.com" 
                      className="w-full bg-transparent border-b-2 border-brand-dark/20 py-3 text-2xl font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-dark/20 text-brand-dark disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-between w-full p-6 mt-4 border border-brand-dark rounded-none bg-brand-dark text-brand-accent hover:bg-brand-accent hover:border-brand-accent hover:text-brand-dark transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-serif font-bold uppercase tracking-widest text-lg relative z-10">
                      {isSubmitting ? "Memproses..." : "Unduh Sekarang"}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-dark/50 text-center lg:text-left">
                    Tanpa Spam. Kami menjaga privasi Anda.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 border border-brand-accent/30 bg-brand-accent/5 rounded-xl text-brand-dark/80 font-medium"
                >
                  <p className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center">
                      ✓
                    </span>
                    <span>Kami telah mengirimkan akses jurnal ke email Anda. Sampai jumpa di dalam ruang meditasi Anda.</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

function AudioLeadMagnet() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="audio-magnet" className="bg-brand-dark border-b border-brand-light/10">
      <div className="flex flex-col lg:flex-row-reverse min-h-[70vh]">
        
        {/* Right Side: Pitch (Light & Ethereal) */}
        <div className="flex-1 bg-brand-light text-brand-dark p-12 md:p-24 flex flex-col justify-center relative overflow-hidden">
          {/* Vertical rail text */}
          <div className="absolute right-6 top-12 bottom-12 hidden md:flex items-center">
            <span className="font-sans font-bold text-xs uppercase tracking-[0.15em] text-brand-dark/30" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              Sonik · Ambien
            </span>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:pr-12 max-w-2xl relative z-10 lg:ml-auto"
          >
            <h2 className="text-6xl md:text-[80px] lg:text-[112px] font-serif font-bold tracking-tighter leading-[0.85] uppercase mb-8">
              Frekuensi <br/> <span className="text-brand-accent drop-shadow-sm">Eterik.</span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-brand-dark/80 max-w-lg mb-8 leading-relaxed">
              Koleksi eksklusif Audio Meditasi Terpandu & Ambien Kuno untuk meresonansi ulang batin Anda menuju keheningan mutlak.
            </p>
            
            {/* Feature Bubbles */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-5 py-2.5 rounded-full border border-brand-dark/20 text-sm font-bold uppercase tracking-wider text-brand-dark">
                #Soundscape
              </span>
              <span className="px-5 py-2.5 rounded-full border border-brand-accent/40 text-sm font-bold uppercase tracking-wider text-brand-accent bg-brand-dark shadow-sm">
                + Binaural Beats
              </span>
            </div>
          </motion.div>
        </div>

        {/* Left Side: Action (Dark & Forms) */}
        <div className="flex-1 bg-brand-dark p-12 md:p-24 flex flex-col justify-center items-center lg:items-end relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto lg:mx-0 lg:mr-12"
          >
            <div className="w-20 h-20 rounded-full border border-brand-light/20 flex items-center justify-center mb-12 bg-brand-accent/10 text-brand-accent shadow-inner relative">
              <div className="absolute inset-0 rounded-full border border-brand-accent/50 animate-ping opacity-20" />
              <PlayCircle className="w-8 h-8" />
            </div>

            <h3 className="text-3xl md:text-4xl font-serif font-bold uppercase tracking-tight mb-4 text-brand-light">
              {isSuccess ? "Akses Terbuka" : "Dengarkan Aksesnya"}
            </h3>
            <p className="text-brand-light/60 font-medium mb-12">
              {isSuccess 
                ? "Tautan menuju galeri audio telah dikirimkan ke email Anda. Selamat menikmati harmoni." 
                : "Klaim Audio Pack Anda dan jadikan setiap sudut ruangan sebagai ruang suci yang privat."}
            </p>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-8 w-full" 
                  onSubmit={handleSubmit}
                >
                  <div className="relative group">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-light/50 absolute -top-6 left-0 transition-colors group-focus-within:text-brand-accent">
                      Alamat Email
                    </label>
                    <input 
                      type="email" 
                      placeholder="anda@email.com" 
                      className="w-full bg-transparent border-b-2 border-brand-light/20 py-3 text-2xl font-bold focus:outline-none focus:border-brand-accent transition-colors placeholder:text-brand-light/20 text-brand-light disabled:opacity-50"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group relative flex items-center justify-between w-full p-6 mt-4 border border-brand-accent rounded-none bg-transparent text-brand-accent hover:bg-brand-accent hover:text-brand-dark transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-serif font-bold uppercase tracking-widest text-lg relative z-10">
                      {isSubmitting ? "Memproses..." : "Mulai Mendengarkan"}
                    </span>
                    <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-light/50 text-center lg:text-left">
                    Kualitas Audio Lossless. Unduhan Instan.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-8 border border-brand-accent/30 bg-brand-accent/10 rounded-xl text-brand-light/80 font-medium"
                >
                  <p className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-accent text-brand-dark flex items-center justify-center">
                      ✓
                    </span>
                    <span>Kami telah mengirimkan akses ke email Anda. Sampai jumpa di dalam ruang meditasi Anda.</span>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 bg-brand-dark text-brand-light relative overflow-hidden">
      {/* Neoclassical Entablature (Architrave layered borders) */}
      <div className="absolute top-0 left-0 w-full h-[8px] bg-brand-accent/40" />
      <div className="absolute top-[8px] left-0 w-full h-[2px] bg-brand-accent" />
      <div className="absolute top-[14px] left-0 w-full h-[1px] bg-brand-light/30" />
      <div className="absolute top-[20px] left-0 w-full h-[4px] bg-brand-light/10" />

      {/* Subtle Greek column backdrop watermark */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 100px, rgba(255,255,255,1) 100px, rgba(255,255,255,1) 120px)' }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative z-10">
        
        {/* Main Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-2 lg:pr-16 relative"
        >
          {/* Aesthetic Divider Pillar */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-accent/0 via-brand-accent/50 to-brand-accent/0" />
          <div className="hidden lg:block absolute right-[4px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-light/0 via-brand-light/10 to-brand-light/0" />

          <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-widest uppercase mb-6 text-brand-light">
            Universe<span className="text-brand-accent font-light mx-2 text-[1.2em] shadow-brand-accent/20 drop-shadow-lg">Φ</span><br className="hidden md:block"/>Frekuensi
          </h2>
          <p className="text-brand-light/60 font-medium max-w-sm text-lg leading-relaxed mix-blend-screen">
            Ketenangan adalah kemewahan otentik. Temukan kembali kejernihan pikiran layaknya filsuf kuno.
          </p>
        </motion.div>
        
        {/* Nav Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:pl-16 relative"
        >
          {/* Aesthetic Divider Pillar */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand-accent/0 via-brand-accent/30 to-brand-accent/0" />
          
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] mb-8 text-brand-accent text-sm drop-shadow-md">Navigasi</h4>
          <ul className="space-y-5 font-serif text-brand-light/70 text-lg">
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">Manifesto</a></li>
            <li><a href="#services" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">Pilar Kami</a></li>
            <li><a href="#news" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">Jurnal Praktik</a></li>
          </ul>
        </motion.div>
        
        {/* Connection Column */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:pl-16"
        >
          <h4 className="font-sans font-bold uppercase tracking-[0.2em] mb-8 text-brand-accent text-sm drop-shadow-md">Koneksi</h4>
          <ul className="space-y-5 font-serif text-brand-light/70 text-lg">
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">Instagram</a></li>
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">LinkedIn</a></li>
            <li><a href="#" className="hover:text-brand-accent hover:tracking-widest transition-all duration-300">Surat</a></li>
          </ul>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-12 mt-24 border-t border-brand-accent/30 text-brand-light/50 font-sans tracking-[0.3em] text-xs uppercase relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-brand-accent/80 to-transparent" />
        <p>© 2026 Universe Frekuensi</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-brand-accent transition-colors">Privasi</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Ketentuan</a>
        </div>
      </motion.div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Spheres />
      <News />
      <LeadMagnet />
      <AudioLeadMagnet />
      <Footer />
    </div>
  );
}


