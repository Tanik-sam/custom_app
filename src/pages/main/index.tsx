import React, { useState, useEffect } from 'react';
import { ICharacter } from '../../interfaces';
import Cards from '../../components/cards';
import ringImg from '../../assets/images/ring.jpg';
import { apiCharacters, apiCharacter } from '../../components/api';
import { useFormContext } from '../../components/formContext';
import { Link } from 'react-router-dom';

export const Main = function Main() {
  const [formAddShow, setFormAddShow] = useState(false);
  const [chartersState, setChartersState] = useState<ICharacter[]>([]);
  const { state } = useFormContext();
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setIsLoaded(false);
    if (state.search.value) {
      (async () => {
        const data = await apiCharacter(state.search.value);
        setChartersState(data);
        setTimeout(() => {
          setIsLoaded(true);
        }, 1000);
      })();
    } else {
      (async () => {
        const data = await apiCharacters(
          Number(state.paginate.value),
          Number(state.limit.value),
          state.sort.value
        );
        setChartersState(data);
        setTimeout(() => {
          setIsLoaded(true);
        }, 1000);
      })();
    }
  }, [state.search.value, state.sort.value, state.limit.value, state.paginate.value]);
  const characters = chartersState.map((charter: ICharacter) => (
    <Cards
      key={charter._id}
      birth={charter.birth}
      death={charter.death}
      gender={charter.gender}
      hair={charter.hair}
      height={charter.height}
      name={charter.name}
      race={charter.race}
      realm={charter.realm}
      spouse={charter.spouse}
      wikiUrl={charter.wikiUrl}
      _id={charter._id}
      image={ringImg}
    />
  ));
  const addCard = () => {
    setFormAddShow(true);
  };

  return (
    <div>
      {!isLoaded ? (
        <div className="overlay">
          <div className="search__loading">
            <p>Loading...</p>
          </div>
        </div>
      ) : (
        ''
      )}
      <section>
        <div className="wrapper cards_wrapper">
          <h1 className="cards__title title">
            Lord Of <span className="title_yellow"> The Rings </span>
          </h1>
          <p className="cards__text">
            All we have to decide is what to do with the time that is given to us.
          </p>
          <div className="about__buttons">
            <Link className="header__link" to="/addForm">
              <div className="button" onClick={addCard}>
                Add card
              </div>
            </Link>
          </div>
          <div className="layout-2-column cards-wrapper">{characters && characters}</div>
        </div>
      </section>
    </div>
  );
};
