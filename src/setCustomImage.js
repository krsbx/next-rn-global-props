import { Image } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const ImageRender = Image.render;
  const defaultProps = Image.defaultProps;

  Image.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  Image.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return ImageRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
