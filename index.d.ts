import {
  TextProps,
  ImageProps,
  TextInputProps,
  ModalProps,
} from 'react-native';

declare module 'next-rn-global-props' {
  function setCustomImage(customProps: ImageProps): void;
  function setCustomModal(customProps: ModalProps): void;
  function setCustomText(customProps: TextProps): void;
  function setCustomTextInput(customProps: TextInputProps): void;
}
