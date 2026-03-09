import { useCallback } from 'react';

export const useCyberSound = () => {
  const playBootSound = useCallback(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    
    // Helper to play a short beep
    const playBeep = (freq, type, time, dur, vol) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime + time);
      
      gain.gain.setValueAtTime(0, ctx.currentTime + time);
      gain.gain.linearRampToValueAtTime(vol, ctx.currentTime + time + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(ctx.currentTime + time);
      osc.stop(ctx.currentTime + time + dur);
    };

    // Sequential cyber boot up sounds
    playBeep(880, 'square', 0, 0.1, 0.1);    // High short
    playBeep(1200, 'square', 0.1, 0.1, 0.1); // Higher short
    playBeep(1600, 'square', 0.2, 0.15, 0.1); // Even higher
    // Deep bass hum starting
    playBeep(55, 'sawtooth', 0.35, 1.5, 0.2); 
    // Data stream noise
    for(let i=0; i<10; i++) {
       playBeep(2000 + Math.random()*1000, 'sine', 0.4 + (i*0.05), 0.05, 0.05);
    }
    // Success ping
    playBeep(1046.50, 'sine', 1.0, 0.5, 0.15); // C6
    playBeep(1318.51, 'sine', 1.1, 1.0, 0.15); // E6

  }, []);

  const playClickSound = useCallback(() => {
    if (typeof window === 'undefined') return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.1, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }, []);

  return { playBootSound, playClickSound };
};
