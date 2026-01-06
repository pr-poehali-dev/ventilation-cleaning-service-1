import { useEffect } from 'react';

const Link = () => {
  useEffect(() => {
    // Редирект на основной сайт
    window.location.replace('https://ventilation-cleaning-service-1.poehali.dev/');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent mx-auto mb-4"></div>
        <p className="text-xl font-semibold">Перенаправление...</p>
      </div>
    </div>
  );
};

export default Link;
