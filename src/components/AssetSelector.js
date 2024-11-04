import { jsx as _jsx } from "react/jsx-runtime";
import { assetSelectorStyles } from '../styles';
import { capitalizeAndFormat } from '../utils/string';
export const AssetSelector = ({ selectedAsset, assetList, onAssetChange }) => {
    return (_jsx("div", { style: assetSelectorStyles.container, children: _jsx("select", { value: selectedAsset, onChange: (e) => onAssetChange(e.target.value), style: assetSelectorStyles.select, children: assetList.map(asset => (_jsx("option", { value: asset.name, style: assetSelectorStyles.option, children: capitalizeAndFormat(asset.name) }, asset.name))) }) }));
};
