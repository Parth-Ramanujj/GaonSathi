export function generateStaticParams() {
  return [
    { id: 'demo' },
    { id: 'pm-kisan' },
    { id: 'fby' },
    { id: 'ksk' },
    { id: '1' },
    { id: '2' }
  ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
