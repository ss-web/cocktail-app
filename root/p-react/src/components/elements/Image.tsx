import React from 'react';
import { ImageProps } from '@/types/ImageProps';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Image: React.FC<ImageProps> = ({ image, alt }) => (
	<LazyLoadImage src={image}
		width={200} height={200}
		alt={alt}
		className="app-image"
	/>
);

export default Image;