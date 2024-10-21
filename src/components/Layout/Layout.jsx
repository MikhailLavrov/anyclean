import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import c from './Layout.module.css';
import { HeaderComponent } from '../Header/Header';
// import { FooterComponent } from '../Footer/Footer';

const { Content } = Layout;

const LayoutComponent = () => {

  return (
    <Layout className={c.layout}>
      <HeaderComponent />
      <Content>
        <Suspense 
          fallback={
            <div 
              className='container' 
              style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
            >
              <Spin size="large" />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </Content>
      {/* <FooterComponent /> */} <div>Подвал</div>
    </Layout>
  );
}

export default LayoutComponent;
