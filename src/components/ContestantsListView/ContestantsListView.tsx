import React from 'react';
import { Contestant, timeConverter, highlighter } from '../../lib';
import style from '../../css/ContestantsListView.module.css';

interface ContestantsViewProps {
  contestants: Contestant[];
  input: string;
}

const ContestantsListView: React.FC<ContestantsViewProps> = ({ contestants, input }) => {
  return (
    <div className={style.container}>
      <table>
        <thead className={style.head}>
          <tr className={style.head_row}>
            <th className={style.headers}>Rank</th>
            <th className={style.headers}>Name</th>
            <th className={style.headers}>Nationality</th>
            <th className={style.headers}>Shooting</th>
            <th className={style.headers}>Shooting Total</th>
            <th className={style.headers}>Result</th>
          </tr>
        </thead>
        <tbody>
          {
            contestants.map((c: Contestant, i: number)=> {
              return (
              <tr key={i} className={style.row}>
                <td className={style.list_item}>{i+1}</td>
                <td className={style.list_item}>
                  <span className={style.firstname}>{input.length === 0 ? c.firstName : highlighter(c.firstName, input)}</span>
                  <span className={style.lastname}>{input.length === 0 ? c.lastName : highlighter(c.lastName, input)}</span>
                </td>
                <td className={style.list_item}>{c.nationality}</td>
                <td className={style.list_item}>{c.shooting.shBouts}</td>
                <td className={style.list_item}>{c.shooting.total}</td>
                <td className={style.list_item}>{timeConverter(c.time)}</td>
              </tr>);
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default ContestantsListView;