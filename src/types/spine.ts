// Spine関連の型定義
export interface SpineViewportOptions {
  debugRender: boolean;
  padLeft: string;
  padRight: string;
  width: number;
  height: number;
}

export interface SpinePlayerOptions {
  jsonUrl: string;
  atlasUrl: string;
  backgroundColor: string;
  viewport: SpineViewportOptions;
  showControls: boolean;
  scale: number;
  center: boolean;
}

export interface SpinePlayerInstance {
  dispose: () => void;
}

export interface SpineResourcesState {
  isLoaded: boolean;
  error: Error | null;
}

// グローバル型定義
declare global {
  interface Window {
    spine: {
      SpinePlayer: new (
        container: HTMLDivElement, 
        options: SpinePlayerOptions
      ) => SpinePlayerInstance;
    };
  }
} 