import { StatusBar } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const StatusBarRender = StatusBar.render;
  const defaultProps = StatusBar.defaultProps;

  StatusBar.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  StatusBar.render = function render(props) {
    const originalProps = props;

    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return StatusBarRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
