import React, { useState } from 'react';
import { ICharacter, ICharterForm, ICharacterNew } from '../../interfaces';
import Cards from '../../components/cards';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Name,
  Birth,
  Death,
  Race,
  Realm,
  Height,
  Hair,
  Gender,
  WikiURL,
  File,
  Spouse,
} from './formFields';

export default function FormAddCard() {
  const { handleSubmit, reset, formState } = useForm<ICharterForm>({ mode: 'onChange' });
  const [position, setPosition] = useState(0);
  const [cards, setCards] = useState<ICharacter[]>([]);
  const { isDirty, isValid } = formState;

  const onSubmit: SubmitHandler<ICharterForm> = (data) => {
    const pos = position + 1;
    setPosition(pos);
    const newCard: ICharacterNew = {
      position: pos,
      birth: data.birth || '',
      death: data.death || '',
      gender: data.gender || '',
      hair: data.hair || '',
      height: data.height || '',
      name: data.name || '',
      race: data.race || '',
      realm: data.realm || '',
      spouse: data.spouse || '',
      wikiUrl: data.wikiUrl || '',
      _id: String(pos),
      image: URL.createObjectURL(data.file[0]),
    };
    const newCardArr = [...cards];
    newCardArr.push(newCard);
    setCards(newCardArr);
  };

  const cardsArr = cards.map((card) => (
    <Cards
      key={card._id}
      birth={card.birth}
      death={card.death}
      gender={card.gender}
      hair={card.hair}
      height={card.height}
      name={card.name}
      race={card.race}
      realm={card.realm}
      spouse={card.spouse}
      wikiUrl={card.wikiUrl}
      _id={card._id}
      image={card.image}
    />
  ));
  return (
    <div className="form form-add">
      <form className="form-add__table" onSubmit={handleSubmit(onSubmit)}>
        <p className="form-add__name">Creating of card</p>
        <Name />
        <Birth />
        <Death />
        <Gender />
        <Race />
        <Realm />
        <Hair />
        <Height />
        <Spouse />
        <WikiURL />
        <File />
        <div className="about__buttons">
          <button
            type="submit"
            aria-label="submit"
            className="button button_colored"
            disabled={!isDirty || !isValid}
          >
            Add Card
          </button>
          <button className="button button_white" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
      <section className="cards">
        <div className="wrapper cards_wrapper">
          <div className="layout-2-column cards-wrapper">{cardsArr}</div>
        </div>
      </section>
    </div>
  );
}
