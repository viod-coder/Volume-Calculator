import React, { useState, useEffect } from 'react'

const Calculator = () => {
  const [dim, setDim] = useState({
    width: 0,
    height: 0,
    length: 0,
    buc: 1,
  })
  const [buc, setBuc] = useState(1)
  const [vol, setVol] = useState(0)
  const [tvol, setTvol] = useState(0)
  const [pm, setPm] = useState(0)
  const [pb, setPb] = useState(0)
  const [field, setField] = useState({ pb: null, pm: null })

  const clickChange = (e) => {
    setDim({
      ...dim,
      [e.target.id]: e.target.value,
    })
  }

  useEffect(() => {
    setField({
      ...field,
      pm: document.querySelector('input#pmetru'),
      pb: document.querySelector('input#pbuc'),
    })
  }, [])

  useEffect(() => {
    setVol(((((dim.height / 100) * dim.length) / 100) * dim.width) / 100)
    setTvol(vol * dim.buc)
    if (field.pb === document.activeElement) {
      if (vol) {
        setPm((pb / vol).toFixed(2))
      }
    }
    if (field.pm === document.activeElement) {
      setPb((vol * pm).toFixed(2))
    }
  }, [dim, tvol, pm, pb])
  return (
    <div className='container'>
      <h3 className='orange-text darken-4 center-align'>Volume Calculator</h3>
      <div className='row' style={{ marginTop: '35px' }}>
        <div className='col s12 l4 input-field'>
          <input
            id='width'
            type='text'
            className='validate'
            value={dim.width}
            onChange={clickChange}
          />
          <label htmlFor='width'>Width (cm)</label>
        </div>
        <div className='col s12 l4 input-field'>
          <input
            id='height'
            type='text'
            className='validate'
            value={dim.height}
            onChange={clickChange}
          />
          <label htmlFor='height'>Height (cm)</label>
        </div>

        <div className='col s12 l4 input-field'>
          <input
            id='length'
            type='text'
            className='validate'
            value={dim.length}
            onChange={clickChange}
          />
          <label htmlFor='length'>Length (cm)</label>
        </div>
      </div>
      <h5 className='blue-text center-align'>
        Unit Vol={` ${vol.toFixed(4)} `}
        m3
      </h5>
      <div className='divider' style={{ margin: '40px auto' }}></div>
      <div className='row'>
        <div className='col s12 l4 input-field'>
          <input
            id='buc'
            type='text'
            className='validate'
            value={dim.buc}
            onChange={clickChange}
          />
          <label htmlFor='buc'>How many pieces of...</label>
        </div>
        <div className='col s12 l4 input-field'>
          <input
            id='pbuc'
            type='text'
            className='validate '
            value={pb}
            onChange={(e) => setPb(e.target.value)}
          />
          <label htmlFor='pbuc'>Pret/bucata</label>
        </div>
        <div className='col s12 l4 input-field'>
          <input
            id='pmetru'
            type='text'
            className='validate '
            value={pm}
            onChange={(e) => setPm(e.target.value)}
          />
          <label htmlFor='pmetru'>Pret/m3</label>
        </div>
      </div>
      <h4 className='red-text center-align'>
        Total Vol={` ${tvol.toFixed(4)} `}
        m3
      </h4>
    </div>
  )
}

export default Calculator
