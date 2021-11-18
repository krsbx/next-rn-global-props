import { TouchableWithoutFeedback } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const TouchableWithoutFeedbackRender = TouchableWithoutFeedback.render;
  const defaultProps = TouchableWithoutFeedback.defaultProps;

  TouchableWithoutFeedback.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  TouchableWithoutFeedback.render = function render(props) {
    let originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return TouchableWithoutFeedbackRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
