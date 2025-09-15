import './styles/Roulette.scss';


export default () => {
    return (
        <div className='Roulette'>
            {Array(20)
                .fill(0)
                .map((_, index) => {
                    return <div className='Roulette_block' key={`runRow-${index}`}>
                        The quant who WON <img src="/money.png" alt="" />
                    </div>
                })}
        </div>
    )
}