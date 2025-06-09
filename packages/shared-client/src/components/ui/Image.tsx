/** @format */

import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import type { ComponentProps } from 'react';
import { useEffect, useState } from 'react';
import { styled } from '..';

const StyledNextImage = styled(NextImage)({});

type TProps = { fallbackSrc?: NextImageProps['src'] } & NextImageProps &
    ComponentProps<typeof StyledNextImage>;

const Image = (props: TProps) => {
    const { src, fallbackSrc, ...restProps } = props;
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <StyledNextImage
            onError={() => {
                fallbackSrc && setImgSrc(fallbackSrc);
            }}
            src={imgSrc}
            {...restProps}
        />
    );
};

export default Image;
