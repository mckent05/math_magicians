import React from 'react'
import './App.css'

Calculator = () => {
    return (
        <div className='btn-cont'>
            <div className='result d-flex a-center'>
                <p>0</p>
            </div>
            <div className='btn-container'>
                <div className='first-row'>
                    <button className='button' data-id='AC'>AC</button>
                    <button className='button' data-id='oper'>+/-</button>
                    <button className='button' data-id='oper'>%</button>
                    <button className='button' data-id='oper'> / </button>
                </div>
                <div className='second-row'>
                    <button className='button' data-id='number'>7</button>
                    <button className='button' data-id='number'>8</button>
                    <button className='button' data-id='number'>9</button>
                    <button className='button' data-id='oper'>  x </button>
                </div>
                <div className='third-row'>
                    <button className='button' data-id='number'>4</button>
                    <button className='button' data-id='number'>5</button>
                    <button className='button' data-id='number'>6</button>
                    <button className='button' data-id='oper'> - </button>
                </div>
                <div className='fourth-row'>
                    <button className='button' data-id='number'>1</button>
                    <button className='button' data-id='number'>2</button>
                    <button className='button' data-id='number'>3</button>
                    <button className='button' data-id='oper'> + </button>
                </div>
                <div className='fifth-row'>
                    <button className='button zero' data-id='number'>0</button>
                    <button className='button' data-id='number'> . </button>
                    <button className='button' data-id='number'> = </button>
                </div>
            </div>
        </div>
    )
}

export default Calculator

