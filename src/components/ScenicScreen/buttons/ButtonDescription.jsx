export const ButtonDescription = ({name, quantity, description, cooldown, isOn}) => {

  return (
    <div className='button-description-box'>
        <div className='flex-row-apart'>
            <h1>{name}</h1>
            <p>{quantity}</p>
        </div>
        <h2>time: {cooldown}s</h2>
        <hr />
        <p>{description}</p>

    </div>
  )
}
