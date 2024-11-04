import { AssetSelectorProps } from '../types';
import { assetSelectorStyles } from '../styles';
import { capitalizeAndFormat } from '../utils/string';

export const AssetSelector = ({ 
  selectedAsset, 
  assetList, 
  onAssetChange 
}: AssetSelectorProps) => {
  return (
    <div style={assetSelectorStyles.container}>
      <select 
        value={selectedAsset} 
        onChange={(e) => onAssetChange(e.target.value)}
        style={assetSelectorStyles.select}
      >
        {assetList.map(asset => (
          <option 
            key={asset.name} 
            value={asset.name}
            style={assetSelectorStyles.option}
          >
            {capitalizeAndFormat(asset.name)}
          </option>
        ))}
      </select>
    </div>
  );
}; 