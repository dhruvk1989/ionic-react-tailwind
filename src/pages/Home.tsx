import { IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { checkmark } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonTitle>Physical Count Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="relative">
        <div className='w-full bg-gray-400 h-1/4 absolute rounded-lg'>
          <IonInput className='absolute top-4 left-4' placeholder='Enter Count' labelPlacement='fixed'/>
          <div className='absolute top-16 left-2 right-2 h-0.5 bg-'></div>
        </div>
        <IonButton shape='round' className='absolute bottom-4 left-4' expand="block" >
          <IonIcon slot='icon-only' icon={checkmark}></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
