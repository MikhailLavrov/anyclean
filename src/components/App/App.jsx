import { Routes, Route } from 'react-router-dom';
import { LayoutComponent } from './../Layout/Layout';
import { SpecialComponent } from './../Special/Special';
import { HeroComponent } from './../Hero/Hero';

const MainPage = () => {
  return (
    <>
      <HeroComponent />
      <SpecialComponent />
    </>
  );
}

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LayoutComponent /> }>
        <Route index element={<MainPage />} />
        {/* <Route path="abc" element={<AbcPage />} /> */}
      </Route>
    </Routes>
  )
}
