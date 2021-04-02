import React, { useState, useEffect } from 'react';
import style from '../../css/Biathlon.module.css';
import { fakeContestants, Contestant, sortByName, sortByTime, sortByShooting } from '../../lib';
import Header from '../Header/Header';
import ContestantsListView from '../ContestantsListView/ContestantsListView';


const Biathlon: React.FC = () => {
  const [ contestants, setContestants ] = useState<Contestant[]>([]);
  const [ input, setInput ] = useState('');
  const [ active, setActive ] = useState('');

  useEffect(() => {
    setContestants(fakeContestants(60, 0).sort(sortByTime));
    setActive('time');
  }, []);

  const sort = (by: string): void => {
    const sortedContestants = [...contestants];
    switch(by) {
      case 'name': sortedContestants.sort(sortByName); setActive('name');
      break;
      case 'shooting': sortedContestants.sort(sortByShooting); setActive('shooting');
      break;
      case 'time': sortedContestants.sort(sortByTime); setActive('time');
    }
    setContestants(sortedContestants);
  }

  const contestantsFiltered = contestants.filter(c => c.lastName.toLowerCase().includes(input.toLowerCase()) || 
  c.firstName.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className={style.container}>
        <Header sort={sort} input={input} onchange={setInput} active={active}/>
        <ContestantsListView contestants={contestantsFiltered} input={input}/> 
    </div>
  );
}


export default Biathlon;