export default function LoginButton({ onSubmit }) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      style={{
        color: 'white',
        width: '100%',
        padding: '6px',
        marginTop: '7px',
        fontWeight: 'bolder',
        borderRadius: '3px',
        backgroundColor: '#0095f6',
        cursor: 'pointer',
      }}
    >
        로그인
    </button>
  )
}