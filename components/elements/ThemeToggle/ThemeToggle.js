import styled from '@emotion/styled'
import { useState, useEffect } from 'react'

const ToggleButton = styled.button`
	--toggle-width: 50px;
	--toggle-height: 30px;
	--toggle-padding: 4px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-around;
	font-size: 1.5rem;
	line-height: 1;
	width: var(--toggle-width);
	height: var(--toggle-height);
	padding: var(--toggle-padding);
	border: 0;
	border-radius: calc(var(--toggle-width) / 2);
	cursor: pointer;
	background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-nav-hover);
  },
`

const ToggleThumb = styled.span`
	position: absolute;
	top: var(--toggle-padding);
	left: var(--toggle-padding);
	width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
	height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
	border-radius: 50%;
	background: var(--color-bg-icon);
	transition: transform 0.25s ease-in-out;
	transform: ${(p) =>
		p.activeTheme === 'dark'
			? 'translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)'
			: 'none'};
`

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

	return (
		<ToggleButton
			aria-label={`Change to ${inactiveTheme} mode`}
			title={`Change to ${inactiveTheme} mode`}
			type='button'
			onClick={() => setActiveTheme(inactiveTheme)}>
			<ToggleThumb activeTheme={activeTheme} />
			<span aria-hidden={true}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-5'
					viewBox='0 0 20 20'
					fill='var(--primary)'>
					<path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
				</svg>
			</span>
			<span aria-hidden={true}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='h-5 w-85'
					viewBox='0 0 20 20'
					fill='var(--secondary)'>
					<path
						fillRule='evenodd'
						d='M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'
						clipRule='evenodd'
					/>
				</svg>
			</span>
		</ToggleButton>
	)
}

export default ThemeToggle
