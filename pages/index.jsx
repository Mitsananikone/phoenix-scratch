import { userService } from 'services';
import { App } from './_app';
import  LandingPage  from './home/page'

 export default function Home() {
    return (
        <div className="container">
        <div className="flex items-center justify-center h-full w-full -mt-0">
            
            <LandingPage />

        </div>
     </div>
    );
}
