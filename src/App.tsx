import { SpinePlayer } from './components/SpinePlayer';
import { AssetSelector } from './components/AssetSelector';
import { LoadingIndicator } from './components/common/LoadingIndicator';
import { ErrorMessage } from './components/common/ErrorMessage';
import ErrorBoundary from './components/common/ErrorBoundary';
import { useSpineResources } from './hooks/useSpineResources';
import { useAssetList } from './hooks/useAssetList';
import { commonStyles, layoutStyles } from './styles';
import './App.css';

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

function AppContent() {
  const { isLoaded, error: spineError } = useSpineResources();
  const { 
    selectedAsset, 
    setSelectedAsset, 
    assetList, 
    isLoading,
    getAssetInfo 
  } = useAssetList();

  if (spineError) {
    return <ErrorMessage message={`Failed to load Spine resources: ${spineError.message}`} />;
  }

  if (!isLoaded || isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div style={commonStyles.container}>
      <h1 style={layoutStyles.pageTitle}>
        Spine Animation Viewer
      </h1>
      <AssetSelector 
        selectedAsset={selectedAsset}
        assetList={assetList}
        onAssetChange={setSelectedAsset}
      />
      {isLoaded && selectedAsset && (
        <SpinePlayer 
          selectedAsset={selectedAsset} 
          assetInfo={getAssetInfo(selectedAsset)!}
        />
      )}
    </div>
  );
}