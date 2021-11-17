import { KeyboardAvoidingView } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const KeyboardAvoidingViewRender = KeyboardAvoidingView.render;
  const defaultProps = KeyboardAvoidingView.defaultProps;

  KeyboardAvoidingView.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  KeyboardAvoidingView.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return KeyboardAvoidingViewRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
