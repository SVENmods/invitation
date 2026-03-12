import { useState } from 'react'
import { useForm } from 'react-hook-form'

const namePattern = /^[A-Za-zА-Яа-яЁё\s'-]+$/
const textPattern = /^[0-9A-Za-zА-Яа-яЁё\s.,!?'"():;-]*$/

const Form = () => {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			attendance: '',
			withPartner: false,
			partner: {
				firstName: '',
				lastName: '',
			},
			drinks: [],
			partnerDrinks: [],
			transferTo: '',
			transferBack: '',
			message: '',
		},
		shouldUnregister: true,
		mode: 'onChange',
		reValidateMode: 'onChange',
	})

	const attendance = watch('attendance')
	const withPartner = watch('withPartner') || false

	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitError, setSubmitError] = useState('')
	const [showSuccessModal, setShowSuccessModal] = useState(false)

	const buildPayload = (values) => {
		const base = {
			firstName: values.firstName,
			lastName: values.lastName,
			attendance: values.attendance,
			message: values.message || '',
		}

		if (values.attendance !== 'yes') return base

		const isWithPartner = Boolean(values.withPartner)

		return {
			...base,
			withPartner: isWithPartner,
			...(isWithPartner ? { partner: values.partner } : {}),
			drinks: Array.isArray(values.drinks) ? values.drinks : [],
			partnerDrinks:
				isWithPartner && Array.isArray(values.partnerDrinks)
					? values.partnerDrinks
					: [],
			transferTo: values.transferTo || '',
			transferBack: values.transferBack || '',
		}
	}

	const onSubmit = async (values) => {
		setSubmitError('')
		setIsSubmitting(true)

		const payload = buildPayload(values)

		try {
			const base = import.meta.env.VITE_API_URL
			const endpoint = base
				? `${base.replace(/\/$/, '')}/node`
				: '/node'

			const response = await fetch(endpoint, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			})

			const data = await response.json().catch(() => ({}))

			if (!response.ok || !data.success) {
				throw new Error(
					data?.message ||
					'Не удалось отправить ответ. Пожалуйста, попробуйте ещё раз позже.'
				)
			}

			setShowSuccessModal(true)
			reset()
		} catch (error) {
			setSubmitError(
				error?.message ||
				'Произошла техническая ошибка при отправке. Пожалуйста, попробуйте позже.'
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	const renderPartnerFields = () => {
		if (!withPartner) return null

		return (
			<div className="space-y-3 md:space-y-4 mt-4">
				<p className="font-body text-xs md:text-sm text-(--color-ink-muted)">
					Пожалуйста, укажите имя и фамилию партнера.
				</p>
				<div className="gap-4 grid grid-cols-1 md:grid-cols-2">
					<div className="space-y-1">
						<label className="font-body text-xs md:text-sm text-(--color-ink)">
							Имя партнера
						</label>
						<input
							type="text"
							className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
							{...register('partner.firstName', {
								required: 'Введите имя партнера',
								maxLength: {
									value: 100,
									message: 'Имя партнера не должно превышать 100 символов',
								},
								pattern: {
									value: namePattern,
									message: 'Допустимы только буквы, пробел, дефис и апостроф',
								},
							})}
							placeholder="Мария"
						/>
						{errors.partner?.firstName && (
							<p className="mt-1 text-red-500 text-xs">
								{errors.partner.firstName.message}
							</p>
						)}
					</div>

					<div className="space-y-1">
						<label className="font-body text-xs md:text-sm text-(--color-ink)">
							Фамилия партнера
						</label>
						<input
							type="text"
							className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
							{...register('partner.lastName', {
								required: 'Введите фамилию партнера',
								maxLength: {
									value: 100,
									message: 'Фамилия партнера не должна превышать 100 символов',
								},
								pattern: {
									value: namePattern,
									message: 'Допустимы только буквы, пробел, дефис и апостроф',
								},
							})}
							placeholder="Фамилия"
						/>
						{errors.partner?.lastName && (
							<p className="mt-1 text-red-500 text-xs">
								{errors.partner.lastName.message}
							</p>
						)}
					</div>
				</div>
			</div>
		)
	}

	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10">
			<div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-center">
				<h2 className="font-display text-3xl md:text-4xl lg:text-[3.25rem] tracking-[0.08em]  text-(--color-ink)">
					Ответ на приглашение
				</h2>
				<div className="flex justify-center">
					<p className="font-body text-sm md:text-base text-(--color-ink-muted) leading-relaxed max-w-3xl text-left">
						А еще мы очень хотим, чтобы у вас остались самые лучшие воспоминания о нашей свадьбе. Поэтому, просим вас заполнить анкету ниже
						Будем ждать ответ до 12.06.2026.
					</p>
				</div>
			</div>

			{showSuccessModal ? (
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
							Спасибо за ваш ответ. Нам очень приятно, что вы нашли время поделиться
							своими планами и словами — мы внимательно всё прочтём.
						</p>
					</div>
				</div>
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className="space-y-8 md:space-y-10">
					{/* Имя и фамилия */}
					<div className="space-y-3 md:space-y-4">
						<div className="gap-4 md:gap-6 grid grid-cols-1 md:grid-cols-2">
							<div className="space-y-1">
								<label className="font-body text-xs md:text-sm text-(--color-ink-muted)">
									Имя
								</label>
								<input
									type="text"
									className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
									{...register('firstName', {
										required: 'Введите имя',
										maxLength: {
											value: 100,
											message: 'Имя не должно превышать 100 символов',
										},
										pattern: {
											value: namePattern,
											message: 'Допустимы только буквы, пробел, дефис и апостроф',
										},
									})}
									placeholder="Введите имя"
								/>
								{errors.firstName && (
									<p className="mt-1 text-red-500 text-xs">{errors.firstName.message}</p>
								)}
							</div>

							<div className="space-y-1">
								<label className="font-body text-xs md:text-sm text-(--color-ink-muted)">
									Фамилия
								</label>
								<input
									type="text"
									className="w-full border-b border-(--color-border) bg-transparent px-1 py-1 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
									{...register('lastName', {
										required: 'Введите фамилию',
										maxLength: {
											value: 100,
											message: 'Фамилия не должна превышать 100 символов',
										},
										pattern: {
											value: namePattern,
											message: 'Допустимы только буквы, пробел, дефис и апостроф',
										},
									})}
									placeholder="Введите фамилию"
								/>
								{errors.lastName && (
									<p className="mt-1 text-red-500 text-xs">{errors.lastName.message}</p>
								)}
							</div>
						</div>
					</div>

					{/* Придёте ли вы */}
					<div className="space-y-3 md:space-y-4">
						<p className="font-body text-sm md:text-base text-(--color-ink)">
							Вы придёте на праздник?
						</p>
						<div className="flex md:flex-row flex-col gap-3 md:gap-6">
							<label className="inline-flex items-center gap-2 font-body text-sm md:text-base text-(--color-ink)">
								<input
									type="radio"
									value="yes"
									className="radio radio-sm"
									{...register('attendance', { required: 'Пожалуйста, выберите ответ' })}
								/>
								<span>Да, с радостью буду</span>
							</label>
							<label className="inline-flex items-center gap-2 font-body text-sm md:text-base text-(--color-ink)">
								<input
									type="radio"
									value="no"
									className="radio radio-sm"
									{...register('attendance', { required: 'Пожалуйста, выберите ответ' })}
								/>
								<span>К сожалению, не смогу</span>
							</label>
						</div>
						{errors.attendance && (
							<p className="mt-1 text-red-500 text-xs">{errors.attendance.message}</p>
						)}
					</div>

					{/* Поля, которые показываем только если гость придёт */}
					{attendance === 'yes' && (
						<>
							{/* Партнер */}
							<div className="space-y-3 md:space-y-4">
								<div className="flex flex-col gap-4">
									<p className="font-body text-sm md:text-base text-(--color-ink)">
										Приду с партнером
									</p>
									<label className="text-(--color-ink) toggle">
										<input type="checkbox" {...register('withPartner')} />
										<svg
											aria-label="disabled"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="4"
											strokeLinecap="round"
											strokeLinejoin="round"
											className=''
										>
											<path d="M18 6 6 18" />
											<path d="m6 6 12 12" />
										</svg>
										<svg
											aria-label="enabled"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
										>
											<g
												strokeLinejoin="round"
												strokeLinecap="round"
												strokeWidth="4"
												fill="none"
												stroke="currentColor"
												className=''
											>
												<path d="M20 6 9 17l-5-5"></path>
											</g>
										</svg>

									</label>
								</div>

								{renderPartnerFields()}
							</div>

							{/* Предпочтения по напиткам */}
							<div className="space-y-3 md:space-y-4">
								<p className="font-body text-sm md:text-base text-(--color-ink)">
									Предпочтения по напиткам
								</p>
								<div className="flex flex-wrap gap-3 md:gap-4">
									{['Вино игристое', 'Шампанское', 'Виски', 'Водка', 'Безалкогольное'].map(
										(label) => (
											<label
												key={label}
												className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)"
											>
												<input
													type="checkbox"
													value={label}
													className="rounded-[3px] checkbox checkbox-sm"
													{...register('drinks', {
														validate: (value) =>
															value && value.length > 0
																? true
																: 'Выберите хотя бы один вариант',
													})}
												/>
												<span>{label}</span>
											</label>
										)
									)}
								</div>
								{errors.drinks && (
									<p className="mt-1 text-red-500 text-xs">{errors.drinks.message}</p>
								)}
							</div>

							{/* Предпочтения по напиткам партнера */}
							{withPartner && (
								<div className="space-y-3 md:space-y-4">
									<p className="font-body text-sm md:text-base text-(--color-ink)">
										Предпочтения по напиткам партнера
									</p>
									<div className="flex flex-wrap gap-3 md:gap-4">
										{['Вино игристое', 'Шампанское', 'Виски', 'Водка', 'Безалкогольное'].map(
											(label) => (
												<label
													key={label}
													className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)"
												>
													<input
														type="checkbox"
														value={label}
														className="rounded-[3px] checkbox checkbox-sm"
														{...register('partnerDrinks', {
															validate: (value) =>
																value && value.length > 0
																	? true
																	: 'Выберите хотя бы один вариант',
														})}
													/>
													<span>{label}</span>
												</label>
											)
										)}
									</div>
									{errors.partnerDrinks && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.partnerDrinks.message}
										</p>
									)}
								</div>
							)}

							{/* Трансфер */}
							<div className="gap-6 md:gap-8 grid grid-cols-1 md:grid-cols-2">
								<div className="space-y-3 md:space-y-4">
									<div className="">
										<p className="font-body text-sm md:text-base text-(--color-ink)">
											Трансфер к площадке
										</p>
										<p className="font-body text-xs text-(--color-ink-muted) leading-relaxed max-w-xl">
											(Самостоятельно- имеется небольшая парковка на территории площадки)
										</p>
									</div>
									<div className="flex md:flex-row flex-col gap-4">
										<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
											<input
												type="radio"
												value="transfer"
												className="radio radio-sm"
												{...register('transferTo', {
													required: 'Выберите вариант трансфера',
												})}
											/>
											<span>На трансфере</span>
										</label>
										<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
											<input
												type="radio"
												value="self"
												className="radio radio-sm"
												{...register('transferTo', {
													required: 'Выберите вариант трансфера',
												})}
											/>
											<span>Самостоятельно</span>
										</label>
									</div>
									{errors.transferTo && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.transferTo.message}
										</p>
									)}
								</div>

								<div className="space-y-3 md:space-y-4">
									<div className="">
										<p className="font-body text-sm md:text-base text-(--color-ink)">
											Трансфер обратно
										</p>
										<p className="font-body text-xs text-(--color-ink-muted) leading-relaxed max-w-xl">
											(Самостоятельно- до станции метро, подробности сможем уточнить позже)
										</p>
									</div>
									<div className="flex md:flex-row flex-col gap-4">
										<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
											<input
												type="radio"
												value="transfer"
												className="radio radio-sm"
												{...register('transferBack', {
													required: 'Выберите вариант трансфера',
												})}
											/>
											<span>На трансфере</span>
										</label>
										<label className="inline-flex items-center gap-2 font-body text-xs md:text-sm text-(--color-ink)">
											<input
												type="radio"
												value="self"
												className="radio radio-sm"
												{...register('transferBack', {
													required: 'Выберите вариант трансфера',
												})}
											/>
											<span>Самостоятельно</span>
										</label>
									</div>
									{errors.transferBack && (
										<p className="mt-1 text-red-500 text-xs">
											{errors.transferBack.message}
										</p>
									)}
								</div>
							</div>
						</>
					)}

					{/* Сообщение для пары */}
					<div className="space-y-3 md:space-y-4">
						<p className="font-body text-sm md:text-base text-(--color-ink)">
							Сообщение для пары (по желанию)
						</p>
						<textarea
							rows={4}
							maxLength={1000}
							className="w-full max-h-[500px] border border-(--color-border) bg-transparent rounded-sm px-3 py-2 font-body text-sm md:text-base focus:outline-none focus:border-(--color-ink)"
							placeholder="Введите сообщение для пары, если хотите что-то добавить"
							{...register('message', {
								maxLength: {
									value: 1000,
									message: 'Сообщение не должно превышать 1000 символов',
								},
								pattern: {
									value: textPattern,
									message:
										'Пожалуйста, не используйте специальные символы вроде < или > в сообщении',
								},
							})}
						/>
						{errors.message && (
							<p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>
						)}
					</div>

					<div className="flex justify-center pt-2">
						<button
							type="submit"
							className="inline-flex items-center justify-center px-8 md:px-10 py-3 md:py-3.5 rounded-sm border border-(--color-border)/70 bg-(--color-surface) text-(--color-ink) font-ui text-[0.6rem] md:text-xs tracking-[0.28em] uppercase shadow-soft hover:bg-(--color-surface)/95 hover:shadow-soft/20 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-border) focus-visible:ring-offset-2 focus-visible:ring-offset-[--color-bg] transition-all duration-300 ease-out cursor-pointer"
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Отправляем...' : 'Отправить ответ'}
						</button>
					</div>

					{submitError && (
						<p className="mt-4 font-ui text-red-500 text-xs md:text-sm text-center">
							{submitError}
						</p>
					)}
				</form>
			)}
		</section>
	)
}

export default Form