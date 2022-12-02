import { FC } from 'react';
import SiteNavi from '../components/Menu';

import './home.css'
import InstancePage from './instances/Instance';

const HomePage: FC = () => {

    return <div className="home-page">
        <div className='site-left'>
            <SiteNavi/>
        </div>
        <div className='site-right'>
            <div className='site-top'>
            </div>
            <div className='site-content'>
                <InstancePage/>
            </div>
        </div>
    </div>

}

export default HomePage;