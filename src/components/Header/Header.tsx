import style from '../../css/Header.module.css';

interface HeaderProps {
  sort (string: string): void;
  input: string;
  onchange (e: string): void;
  active: string;
}


const Header: React.FC<HeaderProps> = ({ sort, input, onchange, active })  => {
  return (
    <div className={style.header}>
      <h1 className={style.title}>Men 12.5km Pursuit Competition</h1>
      <div className={style.sort}>
        <input 
            value={input} 
            onChange={e => onchange(e.target.value)} 
            placeholder="search name" 
            className={style.search_input}
          />
        <div className={style.sort_by_container}>
          <h3 className={style.sort_by_title}>Sort by:</h3>
          <div className={style.btn_group}>
            <button onClick={() => sort('name')} className={active === 'name' ? style.btn_active : style.btn}>name</button>
            <button onClick={() => sort('shooting')} className={active === 'shooting' ? style.btn_active : style.btn}>shooting</button>
            <button onClick={() => sort('time')} className={active === 'time' ? style.btn_active : style.btn}>time</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;