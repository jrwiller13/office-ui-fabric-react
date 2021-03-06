import { IChoiceGroupStyleProps, IChoiceGroupStyles } from './ChoiceGroup.types';
import { getGlobalClassNames } from '../../Styling';

const GlobalClassNames = {
  root: 'ms-ChoiceFieldGroup',
  flexContainer: 'ms-ChoiceFieldGroup-flexContainer'
};

export const getStyles = (props: IChoiceGroupStyleProps): IChoiceGroupStyles => {
  const { className, optionsContainIconOrImage, theme } = props;

  const classNames = getGlobalClassNames(GlobalClassNames, theme);

  return {
    applicationRole: className,
    root: [
      classNames.root,
      theme.fonts.medium,
      {
        display: 'block'
      }
    ],
    label: className,
    flexContainer: [
      classNames.flexContainer,
      optionsContainIconOrImage && {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
    ]
  };
};
