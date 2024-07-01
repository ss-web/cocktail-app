import React from 'react';
import { ImageProps } from '@/types/ImageProps';

const LazyImage: React.FC<ImageProps> = ({ image, alt }) => {
	return <img src={image} alt={alt} className="app-image" />;
};

export default LazyImage;
