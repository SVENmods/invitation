import DateCounter from './DateCounter';
import Location from './Location';
import Steps from './Steps';
import DressCode from './DressCode';
import Form from './Form';
import WelcomeBlock from './WelcomeBlock';
import GuestText from './GuestText';

const LetterContent = () => {
	return (
		<section className="w-full text-(--color-ink) px-6 md:px-10 lg:px-16 py-10 md:py-14 letter-modal pb-15 md:pb-10">
			<div className="flex flex-col gap-6 md:gap-8 space-y-6 md:space-y-8">

				<div className="flex w-full xl:min-h-[600px]">
					<WelcomeBlock />
				</div>

				<div className="flex w-full xl:min-h-[600px]">
					<GuestText />
				</div>

				<div className="flex w-full xl:min-h-[600px]">
					<Location />
				</div>

				<div className="flex w-full xl:min-h-[600px]">
					<Steps />
				</div>

				<div className="flex w-full xl:min-h-[600px]">
					<DressCode />
				</div>

				<div className="flex w-full xl:min-h-[600px]">
					<Form />
				</div>

			</div>
		</section>
	)
}

export default LetterContent

