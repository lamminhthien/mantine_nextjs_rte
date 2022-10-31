import RichTextEditor from '@mantine/rte';
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
    return (
      <RichTextEditor
        id='rte'
        value={value}
        onChange={onChange}
        formats={['bold', 'italic', 'underline']}
        controls={[['italic', 'underline']]}
      />
    );
  }

  // Render anything as fallback on server, e.g. loader or html content without editor
  return <p>Loading</p>;
}
