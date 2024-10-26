import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from './../Layout/Layout';
import { SpecialComponent } from './../Special/Special';
import { HeroComponent } from './../Hero/Hero';
import { IntroComponent } from '../Intro/Intro';
import { PriceComponent } from '../Price/Price';
import { QuestionsComponent } from '../Questions/Questions';
import { StepsComponent } from '../Steps/Steps';
import { ContactsComponent } from '../Contacts/Contacts';
import { FloatButtonComponent } from './../FloatButton/FloatButton';

const MainPage = () => {
  return (
    <>
      <HeroComponent />
      <SpecialComponent />
      <IntroComponent />
      <PriceComponent />
      <StepsComponent />
      <QuestionsComponent />
      <ContactsComponent />
      <FloatButtonComponent />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  )
}
