import { useEffect, useState } from 'react';
import { SPINE_URLS } from '../constants';
import { SpineResourcesState } from '../types';

export const useSpineResources = (): SpineResourcesState => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadSpinePlayerResources = async () => {
      try {
        const existingScript = document.querySelector(`script[src="${SPINE_URLS.SCRIPT}"]`);
        if (existingScript && window.spine) {
          console.log('Spine resources already loaded');
          setIsLoaded(true);
          return;
        }

        const style = document.createElement('link');
        style.rel = 'stylesheet';
        style.href = SPINE_URLS.STYLE;
        document.head.appendChild(style);

        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = SPINE_URLS.SCRIPT;
          script.onload = () => {
            console.log('Spine script loaded successfully');
            setTimeout(() => {
              setIsLoaded(true);
              resolve();
            }, 100);
          };
          script.onerror = () => reject(new Error('Failed to load Spine script'));
          document.body.appendChild(script);
        });
      } catch (err) {
        console.error('Failed to load Spine resources:', err);
        setError(err instanceof Error ? err : new Error('Unknown error'));
      }
    };

    loadSpinePlayerResources();
  }, []);

  return { isLoaded, error };
}; 