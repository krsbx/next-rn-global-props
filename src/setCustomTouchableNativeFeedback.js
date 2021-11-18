import { TouchableNativeFeedback } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const TouchableNativeFeedbackRender = TouchableNativeFeedback.render;
  const defaultProps = TouchableNativeFeedback.defaultProps;

  TouchableNativeFeedback.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  TouchableNativeFeedback.render = function render(props) {
    let originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return TouchableNativeFeedbackRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
