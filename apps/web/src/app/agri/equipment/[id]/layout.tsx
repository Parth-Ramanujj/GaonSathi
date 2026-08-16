export function generateStaticParams() {
  return [
    { id: 'EQ-01' },
    { id: 'EQ-02' },
    { id: 'EQ-03' },
    { id: 'demo' },
    { id: '1' },
    { id: '2' }
  ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
