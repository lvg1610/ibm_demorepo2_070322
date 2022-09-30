import {Routes , Route , BrowserRouter as Router , Link} from 'react-router-dom';
import Product from './product/Product';
import ShowBookList from './book/showbooklist';
import Employee from './employee/employee';
import BookImage from './book/bookimage'; 
function App() {
  return (
           <Router>
              <div>
                <Link to="/product">Products</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/book">Books</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/employee">Employees</Link>
                <Routes> 
                   <Route  path='/product'     element={<Product />}/>
                   <Route  path='/book'        element={<ShowBookList />}>
                        <Route  path=":bookId"   element={<BookImage/>}/>
                   </Route>
                   <Route  path='/employee'    element={<Employee />}/>
                </Routes>  
              </div>  
            </Router>  
    );
}

export default App;
