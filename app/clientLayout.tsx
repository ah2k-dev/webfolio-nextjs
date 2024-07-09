'use client';

import { useState, useEffect } from 'react';
import Splash from './Components/Splash';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Splash onComplete={() => setLoading(false)} /> : children}</>;
}
