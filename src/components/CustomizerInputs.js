import React from 'react'

const radioCss = 'form-radio rounded border-gray-100 text-orange shadow-sm focus:border-orange focus:ring focus:ring-offset-0 focus:ring-orange focus:ring-opacity-50';

const CustomizerInputs = ({ handleOrder }) => {
    return (
        <div>
            <h3 className='text-2xl text-dark-orange font-semibold'>Dough:</h3>
            <div onChange={handleOrder}>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name='dough' id="dough-1" value="thin" />
                        <span className='ml-2'>thin</span>
                    </label>
                </div>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name="dough" id="dough-2" value="medium" />
                        <span className='ml-2'>medium</span>
                    </label>
                </div>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name="dough" id="dough-3" value="thin" />
                        <span className='ml-2'>thick</span>
                    </label>
                </div>
            </div>
            <h3 className='text-2xl text-dark-orange mt-4 font-semibold'>Dough size:</h3>
            <div onChange={handleOrder}>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name='doughSize' id="sz-1" value="30" />
                        <span className='ml-2'>30 cm</span>
                    </label>
                </div>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name="doughSize" id="sz-2" value="38" />
                        <span className='ml-2'>38</span>
                    </label>
                </div>
            </div>
            <h3 className='text-2xl text-dark-orange mt-4 font-semibold'>Double cheese:</h3>
            <div onChange={handleOrder}>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name='doubleCheese' id="ch-1" value="no" />
                        <span className='ml-2'>no</span>
                    </label>
                </div>
                <div className='block my-2 text-orange text-2xl'>
                    <label>
                        <input className={radioCss} type="radio" name="doubleCheese" id="ch-2" value="yes" />
                        <span className='ml-2'>yes</span>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default CustomizerInputs;