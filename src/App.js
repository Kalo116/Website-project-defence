import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/common/PrivateRoute';
import { PublicRoute } from './components/common/PublicRoute';

import { Header } from './components/heaeder-component/header.component';
import { HomePage } from './components/home-page-component/homePage.component';
import { SignInPage } from './components/sign-in-page-component/sign-in.component';
import { SignUpPage } from './components/sign-up-page-component/sign-up.component';
import { Contact } from './components/contact-page-component/contact.component';
import { Testimonial } from './components/testimonial-page-component/testimonial.component';
import { Shop } from './components/shop-page-component/shop.component';
import { Details } from './components/details-page-component/details.component';
import { EditProduct } from './components/edit-page-component/edit.component';
import { CreateProduct } from './components/create-page-component/create.component';
import { Profile } from './components/profile-page-component/profile.component';
import { NotFound } from './components/404-page-component/404.component';
import { Footer } from './components/footer-component/footer.components';

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route path='/sign-in' element={<SignInPage />} />
                        <Route path='/sign-up' element={<SignUpPage />} />
                    </Route>

                    <Route path='/' element={<HomePage />} />
                    <Route path='/contacts' element={<Contact />} />
                    <Route path='/testimonial' element={<Testimonial />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/shop/details/:shoeID' element={<Details />} />

                    <Route element={<PrivateRoute />}>
                        <Route path='/create' element={<CreateProduct />} />
                        <Route path='/shop/edit/:shoeID' element={< EditProduct />} />
                        <Route path='/profile' element={<Profile />} />
                    </Route>
                    
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
            <Footer />

        </>
    )
};

export default App;
