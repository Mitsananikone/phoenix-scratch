import HeroBanner  from '../../components/herobanner/herobanner';
import Introduction from '../../components/introduction/introduction';
import ServiceDetail from '../../components/servicedetails/servicedetails';
import Surgeries from '../../components/surgeries/surgeries';
import AnimatextList from '../../components/introduction/animatetextlist';

export default function LandingPage() {
    return(
        <div className="container">
            <div className="flex justify-center h-full w-full flex-col m-0 p-0 ">
                <HeroBanner />

                <AnimatextList />

                <Introduction />
                <ServiceDetail />
                <Surgeries />
            </div>
        </div>
    );
}
