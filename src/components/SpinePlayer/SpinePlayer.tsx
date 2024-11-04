import { useEffect, useRef } from 'react';
import { SpinePlayerProps } from '../../types';
import { spinePlayerStyles } from '../../styles';
import { useSpinePlayer } from '../../hooks/useSpinePlayer';

export const SpinePlayer = ({ selectedAsset, assetInfo }: SpinePlayerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { initializePlayer, cleanupPlayer } = useSpinePlayer(containerRef, assetInfo);
  const playerRef = useRef<ReturnType<typeof initializePlayer>>(null);

  useEffect(() => {
    if (containerRef.current) {
      playerRef.current = initializePlayer();
      
      return () => {
        cleanupPlayer(playerRef.current);
        playerRef.current = null;
      };
    }
  }, [selectedAsset, assetInfo, initializePlayer, cleanupPlayer]);

  return (
    <div style={spinePlayerStyles.container}>
      <div 
        ref={containerRef}
        style={spinePlayerStyles.viewport}
      />
    </div>
  );
}; 