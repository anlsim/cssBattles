import style from '../../styles/pages/_battle1.module.css';
const battle1 = () => {
  return (
    <div className={style.main}>
      <h1>Battle 1</h1>

      <h2>#7</h2>
      <div className={[style.container, style.bone].join(' ')}>
        <div className={[style.bottom, style.lemon].join(' ')}></div>
        <div className={[style.middle, style.lemon].join(' ')}></div>
        <div className={[style.top, style.lemon].join(' ') }></div>   
      </div>

      <h2>#8</h2>
      <div className={[style.container, style.btwo].join(' ')}>
        <div className={style.circle}></div>
        <div className={[style.line1, style.dkLine].join(' ')}></div>
        <div className={[style.line2, style.dkLine].join(' ')}></div>
        <div className={[style.line3, style.dkLine].join(' ')}></div>
        <div className={[style.line4, style.dkLine].join(' ')}></div>
        <div className={[style.a, style.lgLine].join(' ')}></div>
        <div className={[style.b, style.lgLine].join(' ')}></div>
        <div className={[style.c, style.lgLine].join(' ')}></div>
        <div class={style.handle}></div>
      </div>

      <h2>#9</h2>
      <div className={[style.container, style.bthree].join(' ')}>
        <div className={style.rectangle}></div>
        <div className={style.sqrA}></div>
        <div className={style.sqrB}></div>
        <div className={style.crcle}></div>
      </div>

      <h2>#10</h2>
      <div className={[style.container, style.bten].join(' ')}>
        <div className={style.rectangle}></div>
        <div className={style.sqrA}></div>
        <div className={style.sqrB}></div>
        <div className={style.crcle}></div>
      </div>
    </div>
  )
}
export default battle1
