import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { neutral, HeaderFont, typeScale, maroon } from '../../utils';

export const LogoContainer = styled(Link)`
	height: 100%;
	padding: 0.4rem;
`;

export const OptionsContainer = styled.div`
	width: 60%;
	height: 100%;
	margin-right: 60px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
`;

const optionCSS = css`
	padding: 0.8rem 1.6rem;
	text-align: right;
	cursor: pointer;

	&:hover {
		font-weight: bolder;
	}
`;

export const SignOutOption = styled.div`
	${optionCSS};
`;

export const Option = styled(Link)`
	${optionCSS};
`;

export const LogoImage = styled.img`
	height: 100%;
`;

export const HeaderContainer = styled.div`
	height: 6rem;
	width: 100%;
	padding-left: 80px;
	color: ${neutral[300]};
	font-family: ${HeaderFont};
	font-size: ${typeScale.header4};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	@media screen and (max-width: 1040px) {
		background: ${maroon[300]};
		height: 25rem;
		justify-content: center;
		padding: 0 0 1.2rem 0;
		border-radius: 15px;

		& ${LogoContainer} {
			height: 30%;
			margin-top: 0.8rem;
			border-radius: 15px;
			background: ${neutral[200]};
			opacity: 0.8;
			&:hover {
				opacity: 1;
			}
		}
		& ${OptionsContainer} {
			width: 100%;
			height: 70%;
			margin: 0;
			& ${Option}, & ${SignOutOption} {
				width: 100%;
				opacity: 0.8;
				text-align: center;
				padding-top: 0.6rem;
				&:hover {
					opacity: 1;
				}
			}
		}
	}
`;
