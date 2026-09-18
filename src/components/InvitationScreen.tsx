"use client";

import { EVENT_CONFIG } from "@/config/eventData";
import { motion, Variants } from "framer-motion";
import { Code2, Terminal } from "lucide-react";

export default function InvitationScreen() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const fadeVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center py-10 px-4 md:px-8 overflow-hidden">
      <div className="bg-pattern" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center z-10"
      >
        {/* HEADER SECTION */}
        <motion.div variants={itemVariants} className="flex flex-col items-center text-center mb-8">
          {/* Official SBU Logo */}
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-[var(--color-sbu-accent-1)] border-opacity-60 flex items-center justify-center mb-5 bg-white shadow-[0_0_50px_rgba(217,70,239,0.3)] relative overflow-hidden p-1 md:p-2">
            <img 
              src="/sbu-logo.png" 
              alt={`${EVENT_CONFIG.university.name} Logo`}
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="text-sm md:text-lg tracking-[0.3em] text-[var(--color-sbu-text)] uppercase opacity-90 mb-3 font-sans">
            {EVENT_CONFIG.university.name}
          </h2>
          
          <div className="flex items-center gap-4 my-2">
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-[var(--color-sbu-accent-1)] opacity-50" />
            <Terminal size={18} className="text-[var(--color-sbu-accent-1)] opacity-80" />
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-[var(--color-sbu-accent-1)] opacity-50" />
          </div>

          <h1 className="text-xl md:text-3xl tracking-[0.2em] text-white mt-3 mb-2 font-display font-medium uppercase">
            {EVENT_CONFIG.club.name}
          </h1>
          
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-[var(--color-sbu-accent-1)] uppercase opacity-80 font-mono mt-1 mb-6">
            proudly presents
          </p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold uppercase mb-8 glass-text tracking-tighter">
            {EVENT_CONFIG.event.name}
          </h1>

          <p className="text-xs md:text-sm tracking-[0.4em] text-[var(--color-sbu-accent-2)] uppercase max-w-2xl text-center leading-relaxed font-sans border-y border-[var(--color-sbu-accent-1)] border-opacity-30 py-3">
            {EVENT_CONFIG.event.invitationLine}
          </p>
        </motion.div>

        {/* DIGNITARIES SECTION */}
        <motion.div variants={fadeVariants} className="w-full flex flex-col items-center my-6 md:my-10">
          <h3 className="text-xs md:text-sm tracking-[0.4em] text-[var(--color-sbu-accent-1)] uppercase font-mono mb-8 text-center relative flex items-center justify-center w-full max-w-4xl">
            <span className="absolute left-0 w-1/4 h-[1px] bg-gradient-to-r from-transparent to-[var(--color-sbu-accent-1)] opacity-40" />
            {EVENT_CONFIG.dignitaries.heading}
            <span className="absolute right-0 w-1/4 h-[1px] bg-gradient-to-l from-transparent to-[var(--color-sbu-accent-1)] opacity-40" />
          </h3>

          {/* Primary Dignitaries (DG, VC) */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-center w-full max-w-5xl mb-6">
            {EVENT_CONFIG.dignitaries.primary.map((dignitary, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center group">
                <div className="shiny-border-card p-5 md:p-6 w-full md:w-[400px] min-h-[110px] flex flex-col justify-center shadow-lg">
                  <p className="text-[10px] md:text-xs text-[var(--color-sbu-accent-1)] uppercase tracking-[0.2em] font-mono mb-2 opacity-90">
                    {dignitary.designation}
                  </p>
                  <p className="text-lg md:text-2xl font-serif text-white tracking-wider">
                    {dignitary.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Secondary Dignitaries (Registrar) */}
          <div className="flex justify-center w-full max-w-4xl mb-6">
            {EVENT_CONFIG.dignitaries.secondary.map((dignitary, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center">
                <div className="shiny-border-card p-4 md:p-5 w-full md:w-[350px] flex flex-col justify-center items-center shadow-md">
                  <p className="text-[10px] md:text-xs text-[var(--color-sbu-accent-2)] uppercase tracking-[0.2em] font-mono mb-1 opacity-90">
                    {dignitary.designation}
                  </p>
                  <p className="text-base md:text-xl font-serif text-[var(--color-sbu-text)] tracking-wide">
                    {dignitary.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deans */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center w-full max-w-4xl mb-6">
            {EVENT_CONFIG.dignitaries.deans.map((dignitary, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center">
                <div className="shiny-border-card p-4 md:p-5 w-full md:w-[320px] flex flex-col justify-center items-center shadow-sm">
                  <p className="text-[10px] text-[var(--color-sbu-accent-2)] uppercase tracking-[0.15em] font-mono mb-1 opacity-80">
                    {dignitary.designation}
                  </p>
                  <p className="text-sm md:text-lg font-serif text-[var(--color-sbu-text)] tracking-wide">
                    {dignitary.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* HoD */}
          <div className="flex justify-center w-full max-w-4xl mb-6">
            {EVENT_CONFIG.dignitaries.hod.map((dignitary, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col items-center text-center">
                <div className="shiny-border-card p-3 md:p-4 w-full md:w-[300px] flex flex-col justify-center items-center">
                  <p className="text-[10px] text-[var(--color-sbu-accent-1)] uppercase tracking-[0.15em] font-mono mb-1 opacity-70">
                    {dignitary.designation}
                  </p>
                  <p className="text-sm md:text-base font-serif text-[var(--color-sbu-text)] tracking-wide">
                    {dignitary.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tertiary Dignitaries */}
          <motion.p variants={fadeVariants} className="text-xs font-serif italic text-white opacity-50 tracking-wider">
            {EVENT_CONFIG.dignitaries.others}
          </motion.p>
        </motion.div>

        {/* EVENT DETAILS */}
        <motion.div variants={itemVariants} className="w-full flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 py-5 border-y border-[var(--color-sbu-accent-1)] border-opacity-20 max-w-5xl my-6 bg-[rgba(20,20,20,0.4)] backdrop-blur-sm rounded-lg">
          <div className="flex flex-col items-center md:items-end text-center md:text-right flex-1">
            <p className="text-[10px] tracking-[0.3em] text-[var(--color-sbu-accent-2)] uppercase opacity-80 mb-1 font-mono">Date</p>
            <p className="text-base md:text-lg font-display font-medium tracking-widest text-white uppercase">{EVENT_CONFIG.event.date}</p>
          </div>
          
          <div className="hidden md:block w-[1px] h-10 bg-[var(--color-sbu-accent-1)] opacity-30" />
          
          <div className="flex flex-col items-center text-center flex-1">
            <p className="text-[10px] tracking-[0.3em] text-[var(--color-sbu-accent-2)] uppercase opacity-80 mb-1 font-mono">Time</p>
            <p className="text-base md:text-lg font-display font-medium tracking-widest text-white uppercase">{EVENT_CONFIG.event.time}</p>
          </div>

          <div className="hidden md:block w-[1px] h-10 bg-[var(--color-sbu-accent-1)] opacity-30" />

          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
            <p className="text-[10px] tracking-[0.3em] text-[var(--color-sbu-accent-2)] uppercase opacity-80 mb-1 font-mono">Venue</p>
            <p className="text-xs md:text-sm font-display tracking-wider text-white uppercase whitespace-pre-line leading-relaxed">
              {EVENT_CONFIG.event.venue}
            </p>
          </div>
        </motion.div>

        {/* WELCOME MESSAGE */}
        <motion.div variants={fadeVariants} className="max-w-2xl text-center mt-4 mb-10 px-6">
          <h4 className="text-[10px] tracking-[0.3em] text-[var(--color-sbu-accent-1)] mb-3 font-mono uppercase flex items-center justify-center gap-3">
            <Code2 size={12} /> Welcome Message <Code2 size={12} />
          </h4>
          <p className="text-xs md:text-sm text-white opacity-70 leading-relaxed font-sans font-light">
            {EVENT_CONFIG.event.welcomeMessage}
          </p>
        </motion.div>
        
        {/* FOOTER */}
        <motion.footer variants={fadeVariants} className="mt-auto w-full text-center pb-6 opacity-50 flex flex-col items-center gap-2">
          <div className="h-[1px] w-40 bg-gradient-to-r from-transparent via-[var(--color-sbu-accent-1)] to-transparent opacity-30 mb-3" />
          <p className="text-[9px] md:text-[10px] tracking-widest text-white uppercase font-sans">
            {EVENT_CONFIG.club.name} | {EVENT_CONFIG.university.name}
          </p>
          <p className="text-[9px] text-white font-mono opacity-60 mt-1">
            Built by SBU Coding Club
          </p>
          <p className="text-[8px] text-white font-mono opacity-40 mt-1">
            &copy; 2026 {EVENT_CONFIG.club.name}. All rights reserved.
          </p>
        </motion.footer>

      </motion.div>
    </div>
  );
}
