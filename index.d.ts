import {
  TextProps,
  ImageProps,
  TextInputProps,
  ModalProps,
  ScrollViewProps,
  KeyboardAvoidingViewProps,
  ViewProps,
  FlatListProps,
  StatusBarProps,
  TouchableHighlightProps,
  TouchableNativeFeedbackProps,
  TouchableOpacityProps,
  TouchableWithoutFeedbackProps,
} from 'react-native';

declare module 'next-rn-global-props' {
  function setCustomFlatList(customProps: FlatListProps<any>): void;
  function setCustomImage(customProps: ImageProps): void;
  function setCustomKeyboardAvoidingView(
    customProps: KeyboardAvoidingViewProps
  ): void;
  function setCustomModal(customProps: ModalProps): void;
  function setCustomScrollView(customProps: ScrollViewProps): void;
  function setCustomStatusBar(customProps: StatusBarProps): void;
  function setCustomText(customProps: TextProps): void;
  function setCustomTextInput(customProps: TextInputProps): void;
  function setCustomTouchableHighlight(
    customProps: TouchableHighlightProps
  ): void;
  function setCustomTouchableNativeFeedback(
    customProps: TouchableNativeFeedbackProps
  ): void;
  function setCustomTouchableOpacity(customProps: TouchableOpacityProps): void;
  function setCustomTouchableWithoutFeedback(
    customProps: TouchableWithoutFeedbackProps
  ): void;
  function setCustomView(customProps: ViewProps): void;
}
