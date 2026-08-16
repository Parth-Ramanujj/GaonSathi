export function generateStaticParams() {
  return [
    { id: 'cotton' },
    { id: 'wheat' },
    { id: 'cumin' },
    { id: 'groundnut' },
    { id: 'demo' },
    { id: '1' }
  ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
