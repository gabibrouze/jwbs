import styled from 'styled-components';
import { BodyFont, neutral } from '../../utils';

export const CollectionItemImage = styled.div`
	width: 100%;
	height: 92%;
	background-image: url('${({ imageURL }) =>
		require(`../../assets/media/${imageURL}`)}');
    background-position: center;
    background-size: cover;
	margin-bottom: 5px;
	border-radius: 15px;
	box-shadow: 1px 3px 5px ${neutral[300]};
	filter: grayscale(100%);
	&:hover {
		transition: filter 0.5s ease-in-out;
		filter: grayscale(0%);
	}
`;

export const CollectionItemFooter = styled.div`
	width: 100%;
	height: 8%;
	display: flex;
	justify-content: space-between;
	font-size: 1.8rem;
	font-family: ${BodyFont};
	.name {
		width: 88%;
		margin-bottom: 16px;
	}
	.price {
		width: 12%;
	}
`;

export const CollectionItemContainer = styled.div`
	width: 26vw;
	height: 550px;
	min-height: 550px;
	margin: 1rem 1.2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;

	@media screen and (max-width: 940px) {
		width: 100%;
	}

	&:hover {
		& .custom-button {
			opacity: 0.85;
			display: flex;
		}
	}

	& .custom-button {
		width: 80%;
		opacity: 0.7;
		position: absolute;
		top: 22rem;
		display: none;
	}
`;
