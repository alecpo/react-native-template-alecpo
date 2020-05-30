import PropTypes from 'prop-types';

const mask = PropTypes.shape({
  type: PropTypes.string.isRequired,
  settings: PropTypes.shape({
    validator: PropTypes.func,
    getRawValue: PropTypes.func,
    withDDD: true,
    obfuscated: false,
    maskType: PropTypes.string,
    dddMask: PropTypes.string,
    issuer: PropTypes.string,
    mask: PropTypes.string,
    format: PropTypes.string,
    separator: PropTypes.string,
    delimiter: PropTypes.string,
    unit: PropTypes.string,
    suffixUnit: PropTypes.string,
    precision: PropTypes.number
  })
});

export default mask;
