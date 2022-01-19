import style from '../../styles/pages/_Battle2.module.css';
const battle2 = () => {
  return (
      <>
      <h1>Battle #2 - Visibility</h1>
      <div className={style.main}>
   
      <div className={[style.container, style.b13].join(' ')}>
        <h2>#13 - Totally Triangle</h2>
        <div className={style.sinNombre}></div>
      </div>


      <div className={[style.container, style.b14].join(' ')}> 
        <h2>#14 - Web Maker Logo</h2>
        <div className={style.catorce}></div>
        <div className={style.catorce}></div>
        <div className={style.catorce}></div>
        <div className={style.catorce}></div>
      </div>
    </div>
    </>
  )
}
export default battle2
