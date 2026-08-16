'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BuntingDivider } from '@/lib/ui';
import '../globals.css';

interface Conversation {
  id: string;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
  messages: { sender: 'me' | 'them'; text: string; time: string }[];
}

export default function ChatInboxPage() {
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: 'conv-1',
      name: 'Mahesh Plumber',
      role: 'કારીગર (Service Provider)',
      avatar: '🔧',
      lastMessage: 'હું 10:30 વાગ્યે મોટર રીપેર કરવા આવી જઈશ.',
      time: '10:15 AM',
      unread: 1,
      online: true,
      messages: [
        { sender: 'them', text: 'નમસ્તે રમેશભાઈ! તમારું પાઈપ રીપેરિંગ બુકિંગ મળી ગયું છે.', time: '10:05 AM' },
        { sender: 'me', text: 'હા મહેશભાઈ, બોરવેલ પાસેનો કનેક્ટર લીક થાય છે.', time: '10:10 AM' },
        { sender: 'them', text: 'હું 10:30 વાગ્યે મોટર રીપેર કરવા આવી જઈશ.', time: '10:15 AM' }
      ]
    },
    {
      id: 'conv-2',
      name: 'Raju Patel (Tractor)',
      role: 'સાધન માલિક (Equipment)',
      avatar: '🚜',
      lastMessage: 'કાલે સવારે 8 વાગ્યે ટ્રેક્ટર ખેતરે પહોંચી જશે.',
      time: 'ગઈકાલે',
      unread: 0,
      online: false,
      messages: [
        { sender: 'me', text: 'રાજુભાઈ, 4 વીઘા ખેડવાની છે. ટ્રેક્ટર ક્યારે મળશે?', time: 'ગઈકાલે 4:00 PM' },
        { sender: 'them', text: 'કાલે સવારે 8 વાગ્યે ટ્રેક્ટર ખેતરે પહોંચી જશે.', time: 'ગઈકાલે 4:30 PM' }
      ]
    },
    {
      id: 'conv-3',
      name: 'Patel Krushi Kendra',
      role: 'દુકાનદાર (Agro Store)',
      avatar: '🏪',
      lastMessage: '2 બેગ યુરિયા તૈયાર છે, સાંજે લઈ જજો.',
      time: 'ગઈકાલે',
      unread: 0,
      online: true,
      messages: [
        { sender: 'me', text: 'ઓર્ડર કરેલું ખાતર પેક થઈ ગયું?', time: 'ગઈકાલે 2:00 PM' },
        { sender: 'them', text: '2 બેગ યુરિયા તૈયાર છે, સાંજે લઈ જજો.', time: 'ગઈકાલે 2:15 PM' }
      ]
    }
  ]);

  const [activeConvId, setActiveConvId] = useState<string>(conversations[0].id);
  const [inputText, setInputText] = useState('');

  const activeConv = conversations.find(c => c.id === activeConvId) || conversations[0];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMsg = {
      sender: 'me' as const,
      text: inputText,
      time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
    };

    setConversations(prev => prev.map(c => {
      if (c.id === activeConvId) {
        return {
          ...c,
          lastMessage: inputText,
          time: newMsg.time,
          messages: [...c.messages, newMsg]
        };
      }
      return c;
    }));

    setInputText('');
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-wheat)' }}>
      <BuntingDivider flags={30} />
      
      <div style={{ flex: 1, padding: '1.5rem', maxWidth: '1000px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <div>
            <Link href="/home" style={{ color: 'var(--color-terracotta)', fontWeight: 'bold', display: 'inline-block', marginBottom: '0.25rem' }}>
              ← Back to Home
            </Link>
            <h1 style={{ fontSize: '2.2rem', color: 'var(--color-indigo)', margin: 0 }}>
              💬 Village Messages (ચેટિંગ)
            </h1>
          </div>
        </div>

        {/* Chat Box Container */}
        <div style={{ display: 'flex', flex: 1, minHeight: '520px', backgroundColor: 'white', borderRadius: '16px', border: '1px solid var(--color-wheat-deep)', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
          
          {/* Left: Contact List */}
          <div style={{ width: '320px', borderRight: '1px solid #E5E7EB', display: 'flex', flexDirection: 'column', backgroundColor: '#F8FAFC' }}>
            <div style={{ padding: '1rem', borderBottom: '1px solid #E5E7EB' }}>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--color-indigo)' }}>Conversations</h3>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
              {conversations.map(c => {
                const isSelected = c.id === activeConvId;
                return (
                  <div
                    key={c.id}
                    onClick={() => setActiveConvId(c.id)}
                    style={{
                      padding: '12px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      backgroundColor: isSelected ? '#EFF6FF' : 'transparent',
                      borderLeft: isSelected ? '4px solid var(--color-indigo)' : '4px solid transparent',
                      borderBottom: '1px solid #F1F5F9',
                      transition: 'background-color 0.15s'
                    }}
                  >
                    <div style={{ width: '42px', height: '42px', borderRadius: '50%', backgroundColor: 'var(--color-wheat-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', position: 'relative' }}>
                      {c.avatar}
                      {c.online && (
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '10px', height: '10px', backgroundColor: '#10B981', borderRadius: '50%', border: '2px solid white' }}></div>
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', color: '#1E293B', fontSize: '0.95rem' }}>{c.name}</span>
                        <span style={{ fontSize: '0.75rem', color: '#64748B' }}>{c.time}</span>
                      </div>
                      <p style={{ margin: '2px 0 0 0', fontSize: '0.8rem', color: '#64748B', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {c.lastMessage}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Active Chat Area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-paper)' }}>
            
            {/* Chat Header */}
            <div style={{ padding: '12px 20px', backgroundColor: 'white', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '1.8rem' }}>{activeConv.avatar}</span>
                <div>
                  <h3 style={{ margin: 0, color: 'var(--color-indigo)', fontSize: '1.1rem' }}>{activeConv.name}</h3>
                  <span style={{ fontSize: '0.8rem', color: activeConv.online ? '#10B981' : '#64748B' }}>
                    {activeConv.online ? '🟢 Online' : '⚪ Offline'} • {activeConv.role}
                  </span>
                </div>
              </div>
              <button onClick={() => alert(`Calling ${activeConv.name}...`)} className="btn btn-turmeric" style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
                📞 Call
              </button>
            </div>

            {/* Messages Feed */}
            <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {activeConv.messages.map((msg, i) => {
                const isMe = msg.sender === 'me';
                return (
                  <div key={i} style={{ display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '75%',
                      padding: '10px 14px',
                      borderRadius: isMe ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                      backgroundColor: isMe ? 'var(--color-indigo)' : 'white',
                      color: isMe ? 'white' : 'var(--color-soil)',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                      fontSize: '0.95rem'
                    }}>
                      <p style={{ margin: 0 }}>{msg.text}</p>
                      <span style={{ fontSize: '0.7rem', opacity: 0.75, display: 'block', textAlign: 'right', marginTop: '4px' }}>
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleSendMessage} style={{ padding: '12px 16px', backgroundColor: 'white', borderTop: '1px solid #E5E7EB', display: 'flex', gap: '10px' }}>
              <input 
                type="text" 
                value={inputText} 
                onChange={(e) => setInputText(e.target.value)}
                placeholder={`Message ${activeConv.name}...`}
                style={{ flex: 1, padding: '10px 16px', borderRadius: '24px', border: '1px solid #CBD5E1', outline: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-body)' }}
              />
              <button type="submit" className="btn btn-indigo" style={{ padding: '8px 20px', borderRadius: '24px', fontSize: '0.95rem' }}>
                Send ➔
              </button>
            </form>

          </div>

        </div>

      </div>
    </main>
  );
}
