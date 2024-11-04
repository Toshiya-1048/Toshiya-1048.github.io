import { useCallback } from 'react';
import { SPINE_CONFIG } from '../constants';
import { createError, logError } from '../utils/error';
export const useSpinePlayer = (containerRef, assetInfo) => {
    const createPlayerOptions = useCallback(() => ({
        jsonUrl: assetInfo.jsonUrl,
        atlasUrl: assetInfo.atlasUrl,
        backgroundColor: SPINE_CONFIG.PLAYER.BG_COLOR,
        viewport: {
            debugRender: SPINE_CONFIG.VIEWPORT.DEBUG,
            padLeft: SPINE_CONFIG.VIEWPORT.PAD,
            padRight: SPINE_CONFIG.VIEWPORT.PAD,
            width: SPINE_CONFIG.VIEWPORT.WIDTH,
            height: SPINE_CONFIG.VIEWPORT.HEIGHT
        },
        showControls: SPINE_CONFIG.PLAYER.SHOW_CONTROLS,
        scale: SPINE_CONFIG.PLAYER.SCALE,
        center: SPINE_CONFIG.PLAYER.CENTER
    }), [assetInfo]);
    const initializePlayer = useCallback(() => {
        if (!containerRef.current || !window.spine)
            return null;
        try {
            return new window.spine.SpinePlayer(containerRef.current, createPlayerOptions());
        }
        catch (err) {
            logError(createError('Error creating SpinePlayer', err), 'SpinePlayer');
            return null;
        }
    }, [containerRef, createPlayerOptions]);
    const cleanupPlayer = useCallback((player) => {
        if (player) {
            try {
                player.dispose();
            }
            catch (err) {
                console.warn('Cleanup warning:', err);
            }
        }
    }, []);
    return { initializePlayer, cleanupPlayer };
};
