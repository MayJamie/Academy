/** @format */

import Head from 'next/head';

interface IProps {
    title: string;
    description: string;
}

const DefaultHead = ({ description, title }: IProps) => {
    return (
        <Head>
            <meta charSet='UTF-8' />
            <meta content='initial-scale=1, width=device-width' name='viewport' />
            <meta content={description} name='description' />
            <link href='/favicon.ico' rel='icon' />
            <title>{title}</title>
        </Head>
    );
};

export default DefaultHead;
