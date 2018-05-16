import React from 'react';
import SelectField from 'react-select';
import styles from './Select.css';

const Select = props => <SelectField className={styles.select} {...props} />;

export default Select;
