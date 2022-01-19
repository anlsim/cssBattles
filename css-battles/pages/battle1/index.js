import style from '../../styles/pages/_battle1.module.css';
const battle1 = () => {
  return (
      <>
      <h1>Battle 1</h1>
      <div className={style.main}>
    
      <div className={[style.container, style.buno].join(' ')}>
        <h2>#1 - Simply Square</h2>
        <div className={style.square}></div>
      </div>

      <div className={[style.container, style.btwo].join(' ')}>
        <h2>#2 - Carro</h2>
      </div>

      <div className={[style.container, style.bthree].join(' ')}>
        <h2>#3 - Push Button</h2>
        <div className={style.aTwo}>
            <div className={style.bTwo}></div>
        </div>
      </div>

      <div className={[style.container, style.bseven].join(' ')}>
        <h2>#7 - Leafy Trail</h2>
        <div className={[style.bottom, style.lemon].join(' ')}></div>
        <div className={[style.middle, style.lemon].join(' ')}></div>
        <div className={[style.top, style.lemon].join(' ') }></div>   
      </div>

      <div className={[style.container, style.beight].join(' ')}>
        <h2>#8 - Forking Crazy</h2>
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

      <div className={[style.container, style.bnine].join(' ')}>
        <h2>#9 Tesseract</h2>
        <div className={style.rectangle}></div>
        <div className={style.sqrA}></div>
        <div className={style.sqrB}></div>
        <div className={style.crcle}></div>
      </div>

      <div className={[style.container, style.bten].join(' ')}>
        <h2>#10 - Cloacked Spirits</h2>
        <div className={[style.aTen, style.TenRectangle ].join(' ')}></div>
        <div className={[style.bTen, style.TenRectangle ].join(' ')}></div>
        <div className={[style.cTen, style.TenRectangle ].join(' ')}></div>
        <div className={[style.leftTen, style.bgCircleTen ].join(' ')}></div>
        <div className={[style.middleTen, style.bgCircleTen ].join(' ')}></div>
        <div className={[style.rightTen, style.bgCircleTen ].join(' ')}></div>
        <div className={[style.AsmTen, style.smCircleTen ].join(' ')}></div>
        <div className={[style.BsmTen, style.smCircleTen ].join(' ')}></div>
        <div className={[style.CsmTen, style.smCircleTen ].join(' ')}></div>
      </div>
      
      <div className={[style.container, style.beleven].join(' ')}>
        <h2>#11 - Eye of Sauron</h2>
        <div id="xEleven"></div>
        <div id="yEleven"></div>
        <div className={style.BGcircleEleven}></div>
        <div className={style.MDcircleEleven}></div>
        <div className={style.SDcircleEleven}></div>

      </div>
    </div>
    </>
  )
}
export default battle1
