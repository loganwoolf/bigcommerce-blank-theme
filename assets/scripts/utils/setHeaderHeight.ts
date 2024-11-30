const header = document.querySelector('header#header') as HTMLElement

function setHeight() {
	if (!header) return

	document.documentElement.style.setProperty(
		'--header-height',
		`${header.offsetHeight}px`,
	)
}

export function setHeaderHeight() {
	setHeight()
	window.addEventListener('resize', setHeight)
}
