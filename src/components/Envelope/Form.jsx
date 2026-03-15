import { useState } from 'react'
import { useForm } from 'react-hook-form'
import FormHeader from '../Form/FormHeader'
import SuccessMessage from '../Form/SuccessMessage'
import NameFields from '../Form/NameFields'
import AttendanceField from '../Form/AttendanceField'
import PartnerSection from '../Form/PartnerSection'
import DrinksPreferences from '../Form/DrinksPreferences'
import PartnerDrinksPreferences from '../Form/PartnerDrinksPreferences'
import TransferSection from '../Form/TransferSection'
import MessageField from '../Form/MessageField'
import SubmitSection from '../Form/SubmitSection'

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
					'Не&nbsp;удалось отправить ответ. Пожалуйста, попробуйте ещё раз позже.'
				)
			}

			setShowSuccessModal(true)
			reset()
		} catch (error) {
			setSubmitError(
				error?.message ||
				'Произошла техническая ошибка при&nbsp;отправке. Пожалуйста, попробуйте позже.'
			)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className="w-full bg-white/75 border border-(--color-border)/80 shadow-(--shadow-card) rounded-[24px] md:rounded-[28px] px-4 md:px-10 lg:px-14 py-8 md:py-10">
			<FormHeader />

			{showSuccessModal ? (
				<SuccessMessage />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center space-y-8 md:space-y-10 mx-auto w-full max-w-3xl">
					<NameFields register={register} errors={errors} />

					<AttendanceField register={register} errors={errors} />

					{attendance === 'yes' && (
						<>
							<PartnerSection
								register={register}
								errors={errors}
								withPartner={withPartner}
							/>

							<DrinksPreferences register={register} errors={errors} />

							{withPartner && (
								<PartnerDrinksPreferences register={register} errors={errors} />
							)}

							<TransferSection register={register} errors={errors} />
						</>
					)}

					<MessageField register={register} errors={errors} />

					<SubmitSection isSubmitting={isSubmitting} submitError={submitError} />
				</form>
			)}
		</section>
	)
}

export default Form