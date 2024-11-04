import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
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
    return (_jsx(ErrorBoundary, { children: _jsx(AppContent, {}) }));
}
function AppContent() {
    const { isLoaded, error: spineError } = useSpineResources();
    const { selectedAsset, setSelectedAsset, assetList, isLoading, getAssetInfo } = useAssetList();
    if (spineError) {
        return _jsx(ErrorMessage, { message: `Failed to load Spine resources: ${spineError.message}` });
    }
    if (!isLoaded || isLoading) {
        return _jsx(LoadingIndicator, {});
    }
    return (_jsxs("div", { style: commonStyles.container, children: [_jsx("h1", { style: layoutStyles.pageTitle, children: "Spine Animation Viewer" }), _jsx(AssetSelector, { selectedAsset: selectedAsset, assetList: assetList, onAssetChange: setSelectedAsset }), isLoaded && selectedAsset && (_jsx(SpinePlayer, { selectedAsset: selectedAsset, assetInfo: getAssetInfo(selectedAsset) }))] }));
}
