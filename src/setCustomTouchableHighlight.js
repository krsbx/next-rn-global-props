import { TouchableHighlight } from 'react-native';
import extractProps from './extractProps';

const setCustomTouchableHighlight = (customProps) => {
  const TouchableHighlightRender = TouchableHighlight.render;
  const defaultProps = TouchableHighlight.defaultProps;

  TouchableHighlight.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  TouchableHighlight.render = function render(props) {
    let originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return TouchableHighlightRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};

export default setCustomTouchableHighlight;
