import { TouchableOpacity } from 'react-native';
import extractProps from './extractProps';

const setCustomTouchableOpacity = (customProps) => {
  const TouchableOpacityRender = TouchableOpacity.render;
  const defaultProps = TouchableOpacity.defaultProps;

  TouchableOpacity.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  TouchableOpacity.render = function render(props) {
    let originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return TouchableOpacityRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};

export default setCustomTouchableOpacity;
