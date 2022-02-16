import { LocaleContext } from 'gatsby-theme-i18n';
import * as React from 'react';

import { dateBottom, dateTop, topLine } from './posted-on-date.module.css';

interface PostedOnDateProps {
    dateLabel: string;
    datetimeValue: string;
    isBottom?: boolean;
}

export const PostedOnDate: React.FunctionComponent<PostedOnDateProps> = (props) => {
    const locale = React.useContext(LocaleContext);
    let postedOnText = locale === 'en' ? 'Posted on ' : 'Erstellt am ';

    return (
        <>
            { props.isBottom ? <div className={topLine} /> : null}
            <p className={props.isBottom ? dateBottom : dateTop}>
                {postedOnText}
                <time
                    dateTime={props.datetimeValue}
                >
                    {props.dateLabel}
                </time>
            </p>
        </>
    );
};
