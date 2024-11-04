// 共通のスタイル定義
export const commonStyles = {
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
    },
    centerText: {
        textAlign: 'center'
    }
};
// AssetSelector用のスタイル
export const assetSelectorStyles = {
    container: {
        padding: '20px',
        textAlign: 'center'
    },
    select: {
        padding: '8px 16px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#fff',
        cursor: 'pointer',
        minWidth: '200px',
        color: '#000'
    },
    option: {
        padding: '4px 8px'
    }
};
// SpinePlayer用のスタイル
export const spinePlayerStyles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: '800px',
        margin: '20px auto'
    },
    viewport: {
        width: '800px',
        height: '600px',
        backgroundColor: '#000',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
};
