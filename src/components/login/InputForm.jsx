export default function Inputform({ info, placeholder }) {
  const {type, id, name, ref} = info;
    
  return (
    <div
      style={{
        width: '100%',
        marginBottom: '5px',
        borderRadius: '3px',
        backgroundColor: '#fafafa',
        border: '1px solid lightgray',
      }}>
      <input
        type={type}
        id={id}
        name={name}
        ref={ref}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: 'transparent',
        }}/>
    </div>
  )
}