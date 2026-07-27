export function generateStaticParams() {
  return [{ category: 'demo', providerId: '1' }];
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
