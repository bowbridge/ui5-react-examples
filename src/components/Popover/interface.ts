import { Ui5PopoverDomRef } from '@ui5/webcomponents-react/interfaces/Ui5PopoverDomRef';
import { Ref } from 'react';

export interface PopoverPropsInterface {
  popoverRef: Ref<Ui5PopoverDomRef>;
  onClose: () => void;
}
