import { SortingOption, SortingOptions } from '@/const';
import { useAppDispatch } from '@/hooks';
import { fetchSortedOffers } from '@/store/actions';
import clsx from 'clsx';
import { useState } from 'react';

function Sorting(): JSX.Element {
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [activeOption, setActiveOption] = useState(SortingOption.Popular);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span onClick={() => setIsOpen(!isOpen)} className="places__sorting-type" tabIndex={0}>
        {activeOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={clsx('places__options places__options--custom', isOpen && 'places__options--opened')}>
        {SortingOptions.map((option) => (
          <li
            key={option.option}
            className={clsx('places__option', option.isActive && 'places__option places__option--active')}
            tabIndex={0}
            onClick={() => {
              setActiveOption(option.option);
              setIsOpen(false);
              dispatch(fetchSortedOffers(option.option));
            }}
          >
            {option.option}
          </li>)
        )}
      </ul>
    </form>
  );
}

export default Sorting;
