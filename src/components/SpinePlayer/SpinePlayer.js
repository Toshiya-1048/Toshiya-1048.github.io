import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { spinePlayerStyles } from '../../styles';
import { useSpinePlayer } from '../../hooks/useSpinePlayer';
export const SpinePlayer = ({ selectedAsset, assetInfo }) => {
    const containerRef = useRef(null);
    const { initializePlayer, cleanupPlayer } = useSpinePlayer(containerRef, assetInfo);
    const playerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) {
            playerRef.current = initializePlayer();
            return () => {
                cleanupPlayer(playerRef.current);
                playerRef.current = null;
            };
        }
    }, [selectedAsset, assetInfo, initializePlayer, cleanupPlayer]);
    return (_jsx("div", { style: spinePlayerStyles.container, children: _jsx("div", { ref: containerRef, style: spinePlayerStyles.viewport }) }));
};
