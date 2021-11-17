import { Text } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const TextRender = Text.render;
  const initialDefaultProps = Text.defaultProps;

  Text.defaultProps = {
    ...initialDefaultProps,
    ...customProps,
  };

  Text.render = function render(props) {
    const originalProps = props;

    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return TextRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};