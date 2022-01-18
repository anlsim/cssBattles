import style from '../../styles/pages/_Battle2.module.css';
const battle2 = () => {
  return (
    <div className={style.main}>
      <h1>Battle #2 - Visibility</h1>
      <h2>#13 - Totally Triangle</h2>
      <div className={[style.container, style.b13].join(' ')}>
        <div className={style.sinNombre}></div>
      </div>

      <h2>#14 - Web Maker Logo</h2>
      <div className={[style.container, style.b14].join(' ')}> 
        <div className={style.catorce}></div>
        <div className={style.catorce}></div>
        <div className={style.catorce}></div>
        <div className={style.catorce}></div>
      </div>
    </div>
  )
}
export default battle2
