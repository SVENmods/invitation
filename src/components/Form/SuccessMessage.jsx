const SuccessMessage = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-4 md:gap-5 pt-2 md:pt-4">
			<div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full border border-(--color-border) text-(--color-ink)">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.3}
					stroke="currentColor"
					className="w-6 md:w-7 h-6 md:h-7"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
					/>
				</svg>
			</div>
			<div className="space-y-2 md:space-y-3 mx-auto max-w-md text-center">
				<p className="font-display text-xl md:text-2xl tracking-[0.08em] uppercase text-(--color-ink)">
					Сообщение отправлено
				</p>
				<p className="font-body text-sm md:text-base text-(--color-ink-muted)">
					Спасибо за&nbsp;ваш ответ. Нам очень приятно, что вы нашли время поделиться
					своими планами и&nbsp;словами&nbsp;— мы внимательно всё прочтём.
				</p>
			</div>
		</div>
	)
}

export default SuccessMessage

