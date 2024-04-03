import { forwardRef } from "react";
import './Textarea.css';

export const Textarea = forwardRef((props, ref, rows = 2) => (
  <textarea
    {...props}
    ref={ref}
    className="textarea-estilo"
    rows={rows}
  />
));
