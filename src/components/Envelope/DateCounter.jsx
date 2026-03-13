import { useState, useEffect } from 'react'
import cls from 'classnames'

const TARGET_DATE = new Date('2026-07-12T15:00:00')

const getDeclension = (value, [one, few, many]) => {
	const n = Math.abs(value) % 100
	const n1 = n % 10

	if (n > 10 && n < 20) return many
	if (n1 > 1 && n1 < 5) return few
	if (n1 === 1) return one

	return many
}

const formatTargetDate = (date) => {
	const months = [
		'ЯНВАРЯ',
		'ФЕВРАЛЯ',
		'МАРТА',
		'АПРЕЛЯ',
		'МАЯ',
		'ИЮНЯ',
		'ИЮЛЯ',
		'АВГУСТА',
		'СЕНТЯБРЯ',
		'ОКТЯБРЯ',
		'НОЯБРЯ',
		'ДЕКАБРЯ',
	]

	const day = String(date.getDate()).padStart(2, '0')
	const month = months[date.getMonth()]
	const year = date.getFullYear()
	const hours = String(date.getHours()).padStart(2, '0')
	const minutes = String(date.getMinutes()).padStart(2, '0')

	return `${day} ${month} ${year}, ${hours}:${minutes}`
}

const DateCounter = ({ className }) => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	})

	useEffect(() => {
		const updateTime = () => {
			const now = new Date()
			const diff = TARGET_DATE.getTime() - now.getTime()

			if (diff <= 0) {
				setTimeLeft({
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
				})
				return
			}

			const days = Math.floor(diff / (1000 * 60 * 60 * 24))
			const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
			const minutes = Math.floor((diff / (1000 * 60)) % 60)
			const seconds = Math.floor((diff / 1000) % 60)

			setTimeLeft({ days, hours, minutes, seconds })
		}

		updateTime()
		const interval = setInterval(updateTime, 1000)

		return () => clearInterval(interval)
	}, [])

	const blocks = [
		{
			id: 'days',
			value: timeLeft.days,
			valueText: String(timeLeft.days).padStart(3, '0'),
			valueWidthClass: 'w-[3ch]',
			label: getDeclension(timeLeft.days, ['День', 'Дня', 'Дней']),
		},
		{
			id: 'hours',
			value: timeLeft.hours,
			valueText: String(timeLeft.hours).padStart(2, '0'),
			valueWidthClass: 'w-[2ch]',
			label: getDeclension(timeLeft.hours, ['Час', 'Часа', 'Часов']),
		},
		{
			id: 'minutes',
			value: timeLeft.minutes,
			valueText: String(timeLeft.minutes).padStart(2, '0'),
			valueWidthClass: 'w-[2ch]',
			label: getDeclension(timeLeft.minutes, ['Минута', 'Минуты', 'Минут']),
		},
		{
			id: 'seconds',
			value: timeLeft.seconds,
			valueText: String(timeLeft.seconds).padStart(2, '0'),
			valueWidthClass: 'w-[2ch]',
			label: getDeclension(timeLeft.seconds, ['Секунда', 'Секунды', 'Секунд']),
		},
	]

	const formattedTargetDate = formatTargetDate(TARGET_DATE)

	return (
		<div className="flex flex-col items-center gap-2 md:gap-3">
			<div className="flex flex-col flex-1 items-center gap-4 w-full">
				<div className="flex justify-center w-full">
					<div className="gap-3 md:gap-4 grid grid-cols-2 sm:grid-cols-4 w-full max-w-xl">
						{blocks.map((block) => (
							<div
								key={block.id}
								className="flex flex-col items-center justify-center border border-(--color-border)/60 bg-white/75 px-4 py-3 md:px-5 md:py-4 rounded-sm shadow-(--shadow-subtle) min-h-[86px] md:min-h-[100px] min-w-[110px] md:min-w-[132px]"
							>
								<span
									className={cls(
										'font-display tabular-nums text-2xl md:text-3xl lg:text-4xl text-(--color-ink) leading-none inline-flex justify-center text-center',
										block.valueWidthClass
									)}
								>
									{block.valueText}
								</span>
								<span className="mt-2 font-ui text-xs md:text-sm tracking-[0.24em]  text-(--color-ink-muted) whitespace-nowrap">
									{block.label}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="flex justify-center md:justify-end md:items-center">
				<div className="flex items-center">
					<p className="font-ui text-base  tracking-[0.2em] uppercase text-(--color-ink-muted) origin-center whitespace-nowrap">
						{formattedTargetDate}
					</p>
				</div>
			</div>
		</div>
	)
}

export default DateCounter