export function generateStaticParams() {
  return [
    { category: 'plumbing' },
    { category: 'electrical' },
    { category: 'carpentry' },
    { category: 'masonry' },
    { category: 'demo' }
  ];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
