import classNames from 'classnames';
import '../styles/Button.scss';
import { buttonIcons, buttonTypes, iconButtonTypes } from '../variables/button';

export const Button = ({ type, icon = '', title, hasBG = false, isSelected = false, isSmal = false }) => (
  <>
    {type === buttonTypes.icon ? (
      <div className={classNames(
        'icon-button', {
          'icon-button--settings': icon === iconButtonTypes.settings,
          'icon-button--check-mark-yellow': icon === iconButtonTypes.checkMarkYellow,
          'icon-button--cross-mark-yellow': icon === iconButtonTypes.crossMarkYellow,
          'icon-button--cross-mark-red': icon === iconButtonTypes.crossMarkRed,
          'icon-button--check-mark-green': icon === iconButtonTypes.checkMarkGreen,
          'icon-button--vip': icon === iconButtonTypes.vip,
          'icon-button--burger-menu': icon === iconButtonTypes.burgerMenu,
          'icon-button--help': icon === iconButtonTypes.help,
          'icon-button--delete-basket': icon === iconButtonTypes.deleteBasket,
          'icon-button--delete': icon === iconButtonTypes.delete,
          'icon-button--edit': icon === iconButtonTypes.edit,
          'icon-button--check-mark-green-bold': icon === iconButtonTypes.checkMarkGreenBold,
          'icon-button--small': isSmal,
        }
      )} />
    ) : (
      <div className={classNames(
        'button', {
          'button--active': isSelected && type === buttonTypes.aside,
          'button--aside': type === buttonTypes.aside,
          'button--search': type === buttonTypes.search,
          'button--small': type === buttonTypes.small,
          'button--cancel': type === buttonTypes.cancel,
          'button--gradient': type === buttonTypes.gradient,
          'button--small-has-bg': type === buttonTypes.small && hasBG,
          'button--medium': type === buttonTypes.medium,
          'button--medium-has-bg': type === buttonTypes.medium && hasBG,
          'button--medium-selected': type === buttonTypes.medium && isSelected,
          'button--medium-large': type === buttonTypes.mediumLarge,
          'button--medium-large-has-bg': type === buttonTypes.mediumLarge && hasBG,
          'button--large': type === buttonTypes.large,
          'button--extra-large': type === buttonTypes.extraLarge,
        },
      )}>
        <p className={classNames(
          'button__title', {
            'button__title--card': icon === buttonIcons.card,
            'button__title--profile': icon === buttonIcons.profile,
            'button__title--support': icon === buttonIcons.support,
            'button__title--tablet': icon === buttonIcons.tablet,
            'button__title--user': icon === buttonIcons.user,
            'button__title--users': icon === buttonIcons.users,
            'button__title--search': icon === buttonIcons.search,
            'button__title--has-icon': icon !== '',
          },
        )}>
          {title}
        </p>
      </div>
    )}
  </>
);
