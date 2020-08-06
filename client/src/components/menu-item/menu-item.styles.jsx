import styled from 'styled-components';

import { neutral, typeScale, HeaderFont } from '../../utils';

export const MenuItemContent = styled.div`
	&:hover {
		transition: all 1.5s ease-out;
		backdrop-filter: grayscale(0%);
	}
`;
export const BackgroundImage = styled.img`
	width: 85%;
	height: 85%;
`;
export const MenuItemTitle = styled.h1`
	width: 100%;
	height: 100%;
`;

export const MenuItemContainer = styled.div`
	min-width: 30%;
	height: ${({ size }) => (size === 'large' ? '380px' : '285px')};
	border-radius: 15px;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem 0.5rem 1rem;
	overflow: hidden;

	&:hover ${BackgroundImage} {
		transform: scale(1.1);
		transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
	}

	& ${MenuItemContent} {
		width: 30%;
		height: ${({ size }) => (size === 'large' ? '380px' : '280px')};
		padding: 0 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
		font-family: ${HeaderFont};
		backdrop-filter: grayscale(60%);

		&:hover {
			backdrop-filter: none;
			transition: width 0.2s ease;
			width: 30%;

			@media screen and (max-width: 940px) {
				width: 100%;
			}

			${MenuItemTitle} {
				display: flex;
				justify-content: center;
				align-items: center;
				transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
				background: ${neutral[200]};
				opacity: 0.8;
				cursor: pointer;
			}
		}

		${MenuItemTitle} {
			font-size: ${typeScale.header4};
			font-weight: bold;
			margin: 0 6px 0;
			color: ${neutral[300]};
			border-radius: 15px;
			opacity: 0;
		}
	}
`;
