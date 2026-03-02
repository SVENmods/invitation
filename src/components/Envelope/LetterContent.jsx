import DateCounter from './DateCounter';
import Location from './Location';

const LetterContent = () => {
	return (
		<section className="w-full bg-(--color-surface) text-(--color-ink) border border-(--color-border) shadow-(--shadow-card) rounded-md px-6 md:px-10 lg:px-16 py-10 md:py-14 letter-modal">
			<header className="mb-10 md:mb-12 text-center">
				<p className="text-xs tracking-[0.25em] uppercase text-(--color-ink-muted) mb-3 font-ui">
					приглашение на свадьбу
				</p>
				<h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] tracking-[0.08em] uppercase text-(--color-ink)">
					ИМЕНА ЖЕНИХА &amp; НЕВЕСТЫ
				</h1>
				<p className="mt-4 text-base md:text-lg text-(--color-ink-muted) font-body">
					Тепло приглашаем вас разделить с нами день свадьбы. Ниже будут размещены основные детали, таймер обратного
					отсчёта и форма для ответа.
				</p>
			</header>

			<div className="flex flex-col gap-6 md:gap-8 space-y-6 md:space-y-8">
				<div className="w-full">
					<DateCounter className="mt-3" />
				</div>

				<div className="w-full">
					<Location />
				</div>

				<section className="space-y-6 md:space-y-8">

					<div className="border border-(--color-border)/80 rounded-sm px-5 py-5 bg-(--color-surface)/90">
						<h3 className="font-ui text-xs tracking-[0.2em] uppercase text-(--color-ink-muted) mb-3">
							Ответ на приглашение
						</h3>
						<p className="font-body text-sm md:text-base text-(--color-ink-muted) leading-relaxed mb-4">
							Позже здесь будет форма RSVP с полем для полного имени, комментария и подтверждения участия.
						</p>
						<div className="h-10 rounded-sm border border-dashed border-(--color-border) flex items-center justify-center text-(--color-ink-muted) text-xs font-ui tracking-[0.18em] uppercase">
							макет формы rsvp
						</div>
					</div>
				</section>
			</div>
		</section>
	)
}

export default LetterContent

