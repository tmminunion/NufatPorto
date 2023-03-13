import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Hello() {
  const [html, setHtml] = useState("");

  useEffect(() => {
    axios.get('/html/index.html')
      .then(response => {
        setHtml(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }}></div>
  );
}
