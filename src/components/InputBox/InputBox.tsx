import * as React from 'react';

interface InputProps {
  text?: string;
  placeholder?: string;
  name?: string;
}

const InputBox: React.SFC<InputProps> = ({
  text = '',
  placeholder = '',
  name,
}) => {
  const [value, setValue] = React.useState('');
  React.useEffect(() => {
    setValue(text);
  }, []);
  return (
    <input
      name={name}
      value={value}
      onChange={e => setValue(e.target.value)}
      type="text"
      placeholder={placeholder}
    />
  );
};

export { InputBox };
