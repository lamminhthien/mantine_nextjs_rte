import RichTextEditor2 from '@mantine/rte';
import {useState, useEffect} from 'react';
export default function IndexPage() {
  const initialValue = '<p>Rich text editor content</p>';

  const [value, onChange] = useState(initialValue);
  const [isDocument, setIsDocument] = useState<Boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') setIsDocument(true);
  }, []);

  if (!isDocument) return <p>Now Loading</p>;

  if (isDocument) {
    // eslint-disable-next-line import/extensions, global-require
    const {RichTextEditor} = require('@mantine/rte');
    return <RichTextEditor value={value} onChange={onChange} id='rte' />;
  }

  // Render anything as fallback on server, e.g. loader or html content without editor
  return <p>Loading</p>;
}
