const FormHeader = () => {
	return (
		<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
			<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
				Анкета
			</h2>
			<div className="flex flex-col gap-3 justify-center items-center font-body text-base md:text-lg text-(--color-ink-muted) leading-relaxed text-left">
				<p className="max-w-3xl">
					А ещё мы очень хотим, чтобы у&nbsp;вас остались самые лучшие воспоминания о&nbsp;нашей свадьбе. Поэтому просим вас заполнить анкету ниже. <br />
					Будем ждать ответ до&nbsp;<span className='font-semibold'>12.06.2026</span>.
				</p>
			</div>
		</div>
	)
}

export default FormHeader

