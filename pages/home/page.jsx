import HeroBanner  from '../../components/herobanner/herobanner';
import Introduction from '../../components/introduction/introduction';
import ServiceDetail from '../../components/servicedetails/servicedetails';
import Surgeries from '../../components/surgeries/surgeries';


export default function LandingPage() {
    return(
        <div className="container">
            <div className="flex justify-center h-full w-full flex-col">
                <HeroBanner />
                <Introduction />
                <ServiceDetail />
                <Surgeries />
            </div>
        </div>
    );
}
