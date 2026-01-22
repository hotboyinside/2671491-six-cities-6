import classNames from 'classnames';
import { Select } from '../../../ui/hooks/use-select';

interface SortSelectProps {
  select: Select;
}

export function SortSelect({ select }: SortSelectProps) {
  const toggleOpen = () => select.setOpen((prev) => !prev);

  const selectedOption = select.getSelectedOption();

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={toggleOpen}
      data-testid="offers-sort-select"
    >
      <span className="places__sorting-caption">Sort by</span>

      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption?.render()}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>

      <ul
        className={classNames(
          'places__options places__options--custom',
          select.open && 'places__options--opened'
        )}
        data-testid="offers-sort-select-options"
      >
        {select.getOptions().map((option) => (
          <li
            key={option.value}
            className={classNames(
              'places__option',
              option.selected && 'places__option--active'
            )}
            tabIndex={0}
            onClick={() => select.setSelectedOption(option)}
          >
            {option.render()}
          </li>
        ))}
      </ul>
    </form>
  );
}
