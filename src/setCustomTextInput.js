import { TextInput } from 'react-native';
import extractProps from './extractProps';

const setCustomTextInput = (customProps) => {
  const TextInputRender = TextInput.render;
  const defaultProps = TextInput.defaultProps;

  TextInput.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  TextInput.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style, props.style] };

    props = extractProps(props, originalProps);

    try {
      return TextInputRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};

export default setCustomTextInput;
