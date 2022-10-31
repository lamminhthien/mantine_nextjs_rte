import RichTextEditor from '@mantine/rte';
import React, {useState} from 'react';
const initialValue = '<p>Your initial <b>html value</b> or an empty string to init editor without value</p>';

export default function MantineRTE() {
  const [value, onChange] = useState(initialValue);
  return <RichTextEditor value={value} onChange={onChange} id='rte' />;
}
