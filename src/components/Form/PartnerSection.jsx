import PartnerFields from './PartnerFields'

const PartnerSection = ({ register, errors, withPartner }) => {
	return (
		<div className="space-y-3 md:space-y-4 w-full">
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

			<PartnerFields register={register} errors={errors} withPartner={withPartner} />
		</div>
	)
}

export default PartnerSection

