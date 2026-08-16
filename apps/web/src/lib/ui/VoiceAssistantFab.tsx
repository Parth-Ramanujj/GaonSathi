'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  actionUrl?: string;
  actionLabel?: string;
}

const KNOWLEDGE_BASE: { keywords: string[]; reply: string; actionUrl?: string; actionLabel?: string }[] = [
  {
    keywords: ['કપાસ', 'ભાવ', 'મંડી', 'mandi', 'cotton', 'price'],
    reply: 'રાજકોટ અને ગોંડલ માર્કેટ યાર્ડમાં આજે શંકર કપાસના ભાવ ₹1,650 થી ₹1,820 પ્રતિ મણ (20 કિલો) ચાલી રહ્યા છે.',
    actionUrl: '/agri/mandi',
    actionLabel: 'માર્કેટ યાર્ડ ભાવ જુઓ ➔'
  },
  {
    keywords: ['વરસાદ', 'હવામાન', 'weather', 'rain', 'forecast'],
    reply: 'આવતીકાલે મોતીપુર અને આસપાસ 28°C તાપમાન રહેશે અને બપોર પછી હળવા વરસાદની 60% શક્યતા છે.',
    actionUrl: '/agri/weather',
    actionLabel: 'હવામાન વિગત જુઓ ➔'
  },
  {
    keywords: ['ટ્રેક્ટર', 'ઓજાર', 'tractor', 'rotavator', 'equipment', 'rent'],
    reply: 'ગામમાં રાજુભાઈનું મહિન્દ્રા 575 DI ટ્રેક્ટર (₹800/કલાક) અને શક્તિમાન રોટાવેટર (₹350/કલાક) ઉપલબ્ધ છે.',
    actionUrl: '/agri/equipment',
    actionLabel: 'ટ્રેક્ટર ભાડે બુક કરો ➔'
  },
  {
    keywords: ['પ્લમ્બર', 'ઇલેક્ટ્રિશિયન', 'કારીગર', 'સર્વિસ', 'plumber', 'electrician', 'service'],
    reply: 'ગામમાં મહેશ પ્લમ્બર (₹350) અને કિશોર ઇલેક્ટ્રિશિયન (₹400) ઉપલબ્ધ છે. તમે ઘરે બેઠા બુક કરી શકો છો.',
    actionUrl: '/services',
    actionLabel: 'કારીગર બુક કરો ➔'
  },
  {
    keywords: ['ખાતર', 'બિયારણ', 'દવા', 'fertilizer', 'urea', 'dap', 'seeds', 'shop'],
    reply: 'પટેલ કૃષિ કેન્દ્ર પર યુરિયા (₹266/45kg) અને DAP ખાતર (₹1350/50kg) નો લાઈવ સ્ટોક ઉપલબ્ધ છે.',
    actionUrl: '/agri/shop',
    actionLabel: 'દુકાનમાંથી ઓર્ડર કરો ➔'
  },
  {
    keywords: ['પશુ', 'ગાય', 'ભેંસ', 'દૂધ', 'ડૉક્ટર', 'vet', 'cow', 'buffalo', 'milk'],
    reply: 'પશુ મેળામાં ગીર ગાય અને જાફરાબાદી ભેંસ ઉપલબ્ધ છે તેમજ વેટરનરી ડોક્ટર સેવા માટે તૈયાર છે.',
    actionUrl: '/livestock',
    actionLabel: 'પશુપાલન હબ ખોલો ➔'
  }
];

export function VoiceAssistantFab() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [inputText, setInputText] = useState('');
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: 'નમસ્તે! હું ગ્રામ સાથી AI સહાયક છું. 🌾 ખેતીના ભાવ, ટ્રેક્ટર ભાડું, કારીગર કે ખાતર વિશે મને બોલીને અથવા લખીને પૂછો.',
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Speech synthesis helper
  const speakText = (text: string) => {
    if (!voiceEnabled || typeof window === 'undefined' || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'gu-IN'; // Fallback to Indian accent
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    } catch {
      setIsSpeaking(false);
    }
  };

  // Initialize Web Speech Recognition
  const startListening = () => {
    if (typeof window === 'undefined') return;

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('તમારા બ્રાઉઝરમાં વોઇસ રેકોર્ડિંગ સપોર્ટ નથી. કૃપા કરીને નીચે લખીને પૂછો.');
      return;
    }

    try {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }

      const recognition = new SpeechRecognition();
      recognition.lang = 'gu-IN';
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setIsListening(false);
        handleUserQuery(transcript);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch {
      setIsListening(false);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleUserQuery = (query: string) => {
    if (!query.trim()) return;

    const userMsg: Message = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Process matching intent
    const lower = query.toLowerCase();
    const match = KNOWLEDGE_BASE.find(kb => kb.keywords.some(k => lower.includes(k)));

    setTimeout(() => {
      let replyText = 'માફ કરશો, આ બાબતે હું વધુ માહિતી શોધી રહ્યો છું. તમે ખેતીવાડી, કારીગર સેવા, ટ્રેક્ટર ભાડે કે દુકાન વિશે પૂછી શકો છો.';
      let actionUrl: string | undefined = undefined;
      let actionLabel: string | undefined = undefined;

      if (match) {
        replyText = match.reply;
        actionUrl = match.actionUrl;
        actionLabel = match.actionLabel;
      }

      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        actionUrl,
        actionLabel
      };

      setMessages(prev => [...prev, aiMsg]);
      speakText(replyText);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open Voice Assistant"
        style={{
          position: 'fixed',
          bottom: '2.5rem',
          right: '2.5rem',
          width: '74px',
          height: '74px',
          borderRadius: '50%',
          backgroundColor: 'var(--color-indigo)',
          color: 'white',
          border: '4px solid #FCD34D',
          cursor: 'pointer',
          zIndex: 9990,
          boxShadow: '0 8px 24px rgba(31, 58, 95, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          animation: 'pulseGlow 2.5s infinite',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <span style={{ fontSize: '2rem', lineHeight: 1 }}>🎤</span>
        <span style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#FCD34D', marginTop: '2px' }}>AI મદદ</span>
      </button>

      {/* Centered AI Assistant Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.7)',
            backdropFilter: 'blur(6px)',
            zIndex: 10000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            className="card"
            style={{
              width: '100%',
              maxWidth: '560px',
              height: '90vh',
              maxHeight: '720px',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden',
              border: '2px solid var(--color-wheat-deep)',
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: 'var(--color-indigo)',
                color: 'white',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '3px solid var(--color-turmeric)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-turmeric)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}
                >
                  🌾
                </div>
                <div>
                  <h2 style={{ margin: 0, fontSize: '1.3rem', color: '#FFFFFF', fontFamily: 'var(--font-heading)' }}>
                    ગ્રામ સાથી AI સહાયક
                  </h2>
                  <span style={{ fontSize: '0.75rem', color: '#FCD34D', opacity: 0.9 }}>
                    {isListening ? '🎙️ સાંભળી રહ્યું છે...' : isSpeaking ? '🔊 બોલી રહ્યું છે...' : '🟢 ઓનલાઇન મદદનીશ'}
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  title={voiceEnabled ? 'Mute Voice' : 'Unmute Voice'}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    color: 'white',
                    padding: '6px 10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                  }}
                >
                  {voiceEnabled ? '🔊' : '🔇'}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    color: 'white',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Visualizer Soundwave Bar when active */}
            {(isListening || isSpeaking) && (
              <div
                style={{
                  backgroundColor: isListening ? '#FEF3C7' : '#DCFCE7',
                  padding: '10px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderBottom: '1px solid #E2E8F0',
                }}
              >
                <div style={{ width: '8px', height: '18px', backgroundColor: isListening ? '#D97706' : '#16A34A', borderRadius: '4px', animation: 'wave 0.8s infinite alternate' }}></div>
                <div style={{ width: '8px', height: '28px', backgroundColor: isListening ? '#D97706' : '#16A34A', borderRadius: '4px', animation: 'wave 0.5s infinite alternate' }}></div>
                <div style={{ width: '8px', height: '14px', backgroundColor: isListening ? '#D97706' : '#16A34A', borderRadius: '4px', animation: 'wave 0.7s infinite alternate' }}></div>
                <div style={{ width: '8px', height: '24px', backgroundColor: isListening ? '#D97706' : '#16A34A', borderRadius: '4px', animation: 'wave 0.6s infinite alternate' }}></div>
                <span style={{ fontSize: '0.85rem', fontWeight: 'bold', color: isListening ? '#B45309' : '#15803D', marginLeft: '6px' }}>
                  {isListening ? 'કંઈપણ પૂછો, હું સાંભળી રહ્યો છું...' : 'જવાબ સંભળાઈ રહ્યો છે...'}
                </span>
              </div>
            )}

            {/* Chat History Area */}
            <div
              style={{
                flex: 1,
                padding: '1.25rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: 'var(--color-paper)',
              }}
            >
              {messages.map((m) => {
                const isUser = m.sender === 'user';
                return (
                  <div
                    key={m.id}
                    style={{
                      display: 'flex',
                      justifyContent: isUser ? 'flex-end' : 'flex-start',
                    }}
                  >
                    <div
                      style={{
                        maxWidth: '82%',
                        backgroundColor: isUser ? 'var(--color-indigo)' : '#FFFFFF',
                        color: isUser ? '#FFFFFF' : 'var(--color-soil)',
                        padding: '12px 16px',
                        borderRadius: isUser ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                        border: isUser ? 'none' : '1px solid var(--color-wheat-deep)',
                        fontSize: '0.95rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <p style={{ margin: 0 }}>{m.text}</p>
                      
                      {m.actionUrl && (
                        <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #E2E8F0' }}>
                          <Link
                            href={m.actionUrl}
                            onClick={() => setIsOpen(false)}
                            style={{
                              display: 'inline-block',
                              backgroundColor: 'var(--color-turmeric)',
                              color: 'var(--color-indigo-deep)',
                              padding: '6px 12px',
                              borderRadius: '8px',
                              fontWeight: 'bold',
                              fontSize: '0.85rem',
                              textDecoration: 'none',
                            }}
                          >
                            {m.actionLabel || 'ખોલો ➔'}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div
              style={{
                padding: '8px 12px',
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                gap: '6px',
                overflowX: 'auto',
              }}
            >
              {[
                '🌾 કપાસના આજના ભાવ?',
                '🚜 ટ્રેક્ટર ભાડે જોઈએ છે',
                '🔧 પ્લમ્બર બોલાવવો છે',
                '🌱 યુરિયા ખાતર મળશે?',
                '🌧️ આવતીકાલનું હવામાન?',
              ].map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleUserQuery(chip.slice(2))}
                  style={{
                    backgroundColor: 'var(--color-wheat)',
                    color: 'var(--color-soil)',
                    border: '1px solid var(--color-wheat-deep)',
                    padding: '4px 10px',
                    borderRadius: '16px',
                    fontSize: '0.78rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input / Voice Bar */}
            <div
              style={{
                padding: '1rem',
                backgroundColor: '#FFFFFF',
                borderTop: '1px solid #E5E7EB',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <button
                onClick={isListening ? stopListening : startListening}
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: isListening ? '#EF4444' : 'var(--color-leaf)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isListening ? '0 0 12px #EF4444' : 'none',
                  flexShrink: 0,
                  transition: 'all 0.2s ease',
                }}
              >
                {isListening ? '⏹️' : '🎤'}
              </button>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleUserQuery(inputText);
                }}
                style={{ flex: 1, display: 'flex', gap: '8px' }}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="કંઈપણ પૂછો (દા.ત. ટ્રેક્ટર, ખાતર, ભાવ)..."
                  style={{
                    flex: 1,
                    padding: '10px 14px',
                    borderRadius: '24px',
                    border: '1px solid #CBD5E1',
                    fontSize: '0.95rem',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                  }}
                />

                <button
                  type="submit"
                  disabled={!inputText.trim()}
                  className="btn btn-indigo"
                  style={{
                    padding: '8px 18px',
                    borderRadius: '24px',
                    fontSize: '0.9rem',
                    cursor: inputText.trim() ? 'pointer' : 'not-allowed',
                    opacity: inputText.trim() ? 1 : 0.5,
                  }}
                >
                  પૂછો
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
