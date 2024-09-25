import { IonApp, IonAvatar, IonBackButton, IonButton, IonButtons, IonCard, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonPopover, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { checkmark, menu } from 'ionicons/icons';


const Home: React.FC = () => {
  return (
    <IonApp>
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonMenuToggle>
          <IonButton>Click to close the menu</IonButton>
        </IonMenuToggle>
      </IonContent>
    </IonMenu>

    <IonPage id="main">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuToggle autoHide={false}>
              <IonButton>
                <IonIcon slot="icon-only" icon={menu} />
              </IonButton>
            </IonMenuToggle>
          </IonButtons>
          <IonTitle>Physical Count Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="relative">
        <div className='grid grid-rows-2'>
          <div className='w-full bg-gray-400 rounded-lg relative p-4'>
            <IonInput className='w-full' style={{ marginTop: '16px' }} placeholder='Enter Count' labelPlacement='fixed' />
            <div className='mt-4 h-0.5 bg-gray-600'></div>
          </div>
          <div className='w-full bg-green-200 flex items-center justify-center'>
            <IonButton id="click-trigger">Left-Click Me</IonButton>
            <IonPopover trigger="click-trigger" triggerAction="click">
              <IonContent className="ion-padding">{`ij`}</IonContent>
            </IonPopover>
          </div>
        </div>
        <IonButton shape='round' className='absolute bottom-4 left-4' expand="block">
          <IonIcon slot='icon-only' icon={checkmark}></IonIcon>
        </IonButton>
      </IonContent>
    </IonPage>
  </IonApp>

  );
};

export default Home;
