import { Modal } from 'react-native';
import extractProps from './extractProps';

export default (customProps) => {
  const ModalRender = Modal.render;
  const defaultProps = Modal.defaultProps;

  Modal.defaultProps = {
    ...defaultProps,
    ...customProps,
  };

  Modal.render = function render(props) {
    const originalProps = props;
    props = { ...props, style: [customProps.style] };

    props = extractProps(props, originalProps);

    try {
      return ModalRender.apply(this, arguments);
    } finally {
      props = originalProps;
    }
  };
};
