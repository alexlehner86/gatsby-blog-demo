import * as React from 'react';

import { inlineCode } from './inline-code.module.css';

export const InlineCode: React.FunctionComponent = (props) => (
    <span className={inlineCode} lang="en">
        {props.children}
    </span>
);
