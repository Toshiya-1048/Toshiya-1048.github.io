// エラーメッセージ用のスタイル
export const messageStyles = {
  error: {
    container: {
      padding: '20px',
      backgroundColor: '#ff4d4d',
      color: '#fff',
      borderRadius: '8px',
      margin: '20px'
    },
    text: {
      color: 'red',
      padding: '20px',
      textAlign: 'center' as const
    }
  },
  loading: {
    container: {
      padding: '20px',
      textAlign: 'center' as const,
      fontSize: '16px'
    }
  }
} as const; 